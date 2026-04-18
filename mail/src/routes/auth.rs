use axum::{
    extract::State,
    http::StatusCode,
    routing::post,
    Json, Router,
};
use serde::{Deserialize, Serialize};
use std::sync::Arc;
use uuid::Uuid;

use crate::{errors::Result, AppState, auth::generate_token};

#[derive(Debug, Deserialize)]
pub struct LoginRequest {
    pub company_id: String,
}

#[derive(Debug, Serialize)]
pub struct LoginResponse {
    pub token: String,
    pub expires_in: i64,
}

pub fn router() -> Router<Arc<AppState>> {
    Router::new().route("/login", post(login))
}

async fn login(
    State(state): State<Arc<AppState>>,
    Json(payload): Json<LoginRequest>,
) -> Result<(StatusCode, Json<LoginResponse>)> {
    let company_id = Uuid::parse_str(&payload.company_id)
        .map_err(|_| crate::errors::AppError::BadRequest("Invalid company ID".to_string()))?;

    let _exists = sqlx::query("SELECT id FROM companies WHERE id = $1")
        .bind(company_id)
        .fetch_optional(&state.db)
        .await?
        .ok_or(crate::errors::AppError::NotFound)?;

    let token = generate_token(
        company_id,
        &state.config.jwt_secret,
        state.config.jwt_expiration_hours,
    )?;

    Ok((
        StatusCode::OK,
        Json(LoginResponse {
            token,
            expires_in: state.config.jwt_expiration_hours * 3600,
        }),
    ))
}
