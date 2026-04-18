use axum::{
    extract::{Path, State},
    http::StatusCode,
    routing::{delete, get, patch, post},
    Json, Router,
};
use bcrypt::{hash, DEFAULT_COST};
use rand::Rng;
use std::sync::Arc;
use uuid::Uuid;

use crate::{
    errors::{AppError, Result},
    models::{
        Mailbox, MailboxResponse,
        UpdateMailboxRequest,
    },
    services::MailcowClient,
    AppState,
};

pub fn router() -> Router<Arc<AppState>> {
    Router::new()
        .route("/:id", get(get_mailbox).patch(update_mailbox).delete(delete_mailbox))
        .route("/:id/reset-password", post(reset_password))
        .route("/:id/suspend", post(suspend_mailbox))
}

async fn get_mailbox(
    State(state): State<Arc<AppState>>,
    Path(id): Path<Uuid>,
) -> Result<Json<MailboxResponse>> {
    let mailbox = sqlx::query_as::<_, Mailbox>("SELECT * FROM mailboxes WHERE id = $1")
        .bind(id)
        .fetch_optional(&state.db)
        .await?
        .ok_or(AppError::NotFound)?;

    Ok(Json(mailbox.into()))
}

async fn update_mailbox(
    State(state): State<Arc<AppState>>,
    Path(id): Path<Uuid>,
    Json(payload): Json<UpdateMailboxRequest>,
) -> Result<Json<MailboxResponse>> {
    let mailbox = sqlx::query_as::<_, Mailbox>("SELECT * FROM mailboxes WHERE id = $1")
        .bind(id)
        .fetch_optional(&state.db)
        .await?
        .ok_or(AppError::NotFound)?;

    if let Some(quota_mb) = payload.quota_mb {
        let mailcow = MailcowClient::new(
            state.config.mailcow_api_url.clone(),
            state.config.mailcow_api_key.clone(),
        );
        mailcow
            .edit_mailbox(&mailbox.email, quota_mb, mailbox.active)
            .await?;
    }

    let updated = sqlx::query_as::<_, Mailbox>(
        "UPDATE mailboxes SET
         quota_mb = COALESCE($1, quota_mb),
         active = COALESCE($2, active),
         updated_at = NOW()
         WHERE id = $3
         RETURNING *"
    )
    .bind(payload.quota_mb)
    .bind(payload.active)
    .bind(id)
    .fetch_one(&state.db)
    .await?;

    Ok(Json(updated.into()))
}

async fn delete_mailbox(
    State(state): State<Arc<AppState>>,
    Path(id): Path<Uuid>,
) -> Result<StatusCode> {
    let mailbox = sqlx::query_as::<_, Mailbox>("SELECT * FROM mailboxes WHERE id = $1")
        .bind(id)
        .fetch_optional(&state.db)
        .await?
        .ok_or(AppError::NotFound)?;

    let mailcow = MailcowClient::new(
        state.config.mailcow_api_url.clone(),
        state.config.mailcow_api_key.clone(),
    );
    mailcow.delete_mailbox(&mailbox.email).await?;

    sqlx::query("DELETE FROM mailboxes WHERE id = $1")
        .bind(id)
        .execute(&state.db)
        .await?;

    Ok(StatusCode::NO_CONTENT)
}

async fn reset_password(
    State(state): State<Arc<AppState>>,
    Path(id): Path<Uuid>,
) -> Result<Json<serde_json::Value>> {
    let mailbox = sqlx::query_as::<_, Mailbox>("SELECT * FROM mailboxes WHERE id = $1")
        .bind(id)
        .fetch_optional(&state.db)
        .await?
        .ok_or(AppError::NotFound)?;

    let new_password = generate_password();
    let password_hash = hash(&new_password, DEFAULT_COST)
        .map_err(|_| AppError::InternalError)?;

    sqlx::query("UPDATE mailboxes SET password_hash = $1, updated_at = NOW() WHERE id = $2")
        .bind(&password_hash)
        .bind(id)
        .execute(&state.db)
        .await?;

    let mailcow = MailcowClient::new(
        state.config.mailcow_api_url.clone(),
        state.config.mailcow_api_key.clone(),
    );
    mailcow
        .edit_mailbox(&mailbox.email, mailbox.quota_mb, mailbox.active)
        .await?;

    Ok(Json(serde_json::json!({
        "email": mailbox.email,
        "new_password": new_password
    })))
}

async fn suspend_mailbox(
    State(state): State<Arc<AppState>>,
    Path(id): Path<Uuid>,
) -> Result<StatusCode> {
    let mailbox = sqlx::query_as::<_, Mailbox>("SELECT * FROM mailboxes WHERE id = $1")
        .bind(id)
        .fetch_optional(&state.db)
        .await?
        .ok_or(AppError::NotFound)?;

    let mailcow = MailcowClient::new(
        state.config.mailcow_api_url.clone(),
        state.config.mailcow_api_key.clone(),
    );
    mailcow.edit_mailbox(&mailbox.email, mailbox.quota_mb, false).await?;

    sqlx::query("UPDATE mailboxes SET active = FALSE, updated_at = NOW() WHERE id = $1")
        .bind(id)
        .execute(&state.db)
        .await?;

    Ok(StatusCode::NO_CONTENT)
}

fn generate_password() -> String {
    let mut rng = rand::thread_rng();
    (0..16)
        .map(|_| {
            let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%";
            chars.chars().nth(rng.gen_range(0..chars.len())).unwrap()
        })
        .collect()
}
