use axum::{
    extract::{Path, State},
    http::StatusCode,
    routing::{delete, get, patch, post},
    Json, Router,
};
use std::sync::Arc;
use uuid::Uuid;

use crate::{
    errors::{AppError, Result},
    models::{Company, CompanyResponse, CreateCompanyRequest, UpdateCompanyRequest},
    AppState,
};

pub fn router() -> Router<Arc<AppState>> {
    Router::new()
        .route("/", post(create_company).get(list_companies))
        .route("/:id", get(get_company).patch(update_company).delete(delete_company))
}

async fn create_company(
    State(state): State<Arc<AppState>>,
    Json(payload): Json<CreateCompanyRequest>,
) -> Result<(StatusCode, Json<CompanyResponse>)> {
    let company_id = Uuid::new_v4();

    let company = sqlx::query_as::<_, Company>(
        "INSERT INTO companies (id, name, owner_email, plan, status)
         VALUES ($1, $2, $3, $4, $5)
         RETURNING *"
    )
    .bind(company_id)
    .bind(&payload.name)
    .bind(&payload.owner_email)
    .bind(payload.plan.unwrap_or_else(|| "Free".to_string()))
    .bind("Active")
    .fetch_one(&state.db)
    .await?;

    Ok((StatusCode::CREATED, Json(company.into())))
}

async fn list_companies(
    State(state): State<Arc<AppState>>,
) -> Result<Json<Vec<CompanyResponse>>> {
    let companies = sqlx::query_as::<_, Company>("SELECT * FROM companies ORDER BY created_at DESC")
        .fetch_all(&state.db)
        .await?;

    Ok(Json(companies.into_iter().map(|c| c.into()).collect()))
}

async fn get_company(
    State(state): State<Arc<AppState>>,
    Path(id): Path<Uuid>,
) -> Result<Json<CompanyResponse>> {
    let company = sqlx::query_as::<_, Company>("SELECT * FROM companies WHERE id = $1")
        .bind(id)
        .fetch_optional(&state.db)
        .await?
        .ok_or(AppError::NotFound)?;

    Ok(Json(company.into()))
}

async fn update_company(
    State(state): State<Arc<AppState>>,
    Path(id): Path<Uuid>,
    Json(payload): Json<UpdateCompanyRequest>,
) -> Result<Json<CompanyResponse>> {
    let _company = sqlx::query_as::<_, Company>("SELECT * FROM companies WHERE id = $1")
        .bind(id)
        .fetch_optional(&state.db)
        .await?
        .ok_or(AppError::NotFound)?;

    let updated = sqlx::query_as::<_, Company>(
        "UPDATE companies SET
         name = COALESCE($1, name),
         plan = COALESCE($2, plan),
         status = COALESCE($3, status),
         updated_at = NOW()
         WHERE id = $4
         RETURNING *"
    )
    .bind(payload.name)
    .bind(payload.plan)
    .bind(payload.status)
    .bind(id)
    .fetch_one(&state.db)
    .await?;

    Ok(Json(updated.into()))
}

async fn delete_company(
    State(state): State<Arc<AppState>>,
    Path(id): Path<Uuid>,
) -> Result<StatusCode> {
    let result = sqlx::query("DELETE FROM companies WHERE id = $1")
        .bind(id)
        .execute(&state.db)
        .await?;

    if result.rows_affected() == 0 {
        return Err(AppError::NotFound);
    }

    Ok(StatusCode::NO_CONTENT)
}
