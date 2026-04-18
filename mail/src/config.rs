use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct Config {
    pub database_url: String,
    pub jwt_secret: String,
    pub jwt_expiration_hours: i64,
    pub mailcow_api_url: String,
    pub mailcow_api_key: String,
}

impl Config {
    pub fn from_env() -> Result<Self, Box<dyn std::error::Error>> {
        Ok(Self {
            database_url: std::env::var("DATABASE_URL")?,
            jwt_secret: std::env::var("JWT_SECRET")?,
            jwt_expiration_hours: std::env::var("JWT_EXPIRATION_HOURS")
                .unwrap_or("24".to_string())
                .parse()?,
            mailcow_api_url: std::env::var("MAILCOW_API_URL")?,
            mailcow_api_key: std::env::var("MAILCOW_API_KEY")?,
        })
    }
}
