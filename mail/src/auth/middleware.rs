use axum::{
    extract::{Request, State},
    middleware::Next,
    response::Response,
};
use std::sync::Arc;

use crate::{errors::AppError, auth::verify_token, AppState};

pub async fn auth_middleware(
    State(state): State<Arc<AppState>>,
    mut request: Request,
    next: Next,
) -> Result<Response, AppError> {
    if request.uri().path().starts_with("/health") || request.uri().path().starts_with("/api/v1/auth") {
        return Ok(next.run(request).await);
    }

    let auth_header = request
        .headers()
        .get("Authorization")
        .and_then(|h| h.to_str().ok())
        .ok_or(AppError::Unauthorized)?;

    let token = auth_header
        .strip_prefix("Bearer ")
        .ok_or(AppError::Unauthorized)?;

    let claims = verify_token(token, &state.config.jwt_secret)?;
    request.extensions_mut().insert(claims);

    Ok(next.run(request).await)
}
