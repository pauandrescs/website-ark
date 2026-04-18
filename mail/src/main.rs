mod config;
mod db;
mod errors;
mod auth;
mod models;
mod routes;
mod services;

use axum::{
    extract::DefaultBodyLimit,
    routing::get,
    Router,
};
use std::sync::Arc;
use tower_http::cors::CorsLayer;
use tower_http::trace::TraceLayer;
use tracing_subscriber;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    dotenvy::dotenv().ok();
    tracing_subscriber::fmt::init();

    let config = config::Config::from_env()?;
    let db_pool = db::create_pool(&config.database_url).await?;

    let state = Arc::new(AppState {
        db: db_pool.clone(),
        config
    });

    let app = Router::new()
        .route("/health", get(health))
        .nest("/api/v1/auth", routes::auth::router())
        .nest("/api/v1/companies", routes::companies::router())
        .nest("/api/v1/domains", routes::domains::router())
        .nest("/api/v1/mailboxes", routes::mailboxes::router())
        .layer(CorsLayer::permissive())
        .layer(TraceLayer::new_for_http())
        .layer(DefaultBodyLimit::max(10 * 1024 * 1024))
        .with_state(state);

    let listener = tokio::net::TcpListener::bind("0.0.0.0:3000").await?;
    tracing::info!("Server running on http://0.0.0.0:3000");

    axum::serve(listener, app).await?;

    Ok(())
}

pub struct AppState {
    pub db: sqlx::PgPool,
    pub config: config::Config,
}

async fn health() -> &'static str {
    "OK"
}
