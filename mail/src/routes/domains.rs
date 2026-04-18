use axum::{
    extract::{Path, State},
    http::StatusCode,
    routing::{delete, get},
    Json, Router,
};
use std::sync::Arc;
use uuid::Uuid;

use crate::{
    errors::{AppError, Result},
    models::{MailDomain, MailDomainResponse, DnsInstructions},
    services::generate_dns_instructions,
    AppState,
};

pub fn router() -> Router<Arc<AppState>> {
    Router::new()
        .route("/:id", get(get_domain).delete(delete_domain))
        .route("/:id/dns", get(get_dns_instructions))
}

async fn get_domain(
    State(state): State<Arc<AppState>>,
    Path(id): Path<Uuid>,
) -> Result<Json<MailDomainResponse>> {
    let domain = sqlx::query_as::<_, MailDomain>("SELECT * FROM mail_domains WHERE id = $1")
        .bind(id)
        .fetch_optional(&state.db)
        .await?
        .ok_or(AppError::NotFound)?;

    Ok(Json(domain.into()))
}

async fn delete_domain(
    State(state): State<Arc<AppState>>,
    Path(id): Path<Uuid>,
) -> Result<StatusCode> {
    let result = sqlx::query("DELETE FROM mail_domains WHERE id = $1")
        .bind(id)
        .execute(&state.db)
        .await?;

    if result.rows_affected() == 0 {
        return Err(AppError::NotFound);
    }

    Ok(StatusCode::NO_CONTENT)
}

async fn get_dns_instructions(
    State(state): State<Arc<AppState>>,
    Path(id): Path<Uuid>,
) -> Result<Json<DnsInstructions>> {
    let domain = sqlx::query_as::<_, MailDomain>("SELECT * FROM mail_domains WHERE id = $1")
        .bind(id)
        .fetch_optional(&state.db)
        .await?
        .ok_or(AppError::NotFound)?;

    let dns = generate_dns_instructions(&domain.domain);
    Ok(Json(dns))
}
