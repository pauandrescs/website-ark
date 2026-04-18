use serde::{Deserialize, Serialize};
use sqlx::FromRow;
use uuid::Uuid;
use chrono::{DateTime, Utc};

#[derive(Debug, Clone, Serialize, Deserialize, FromRow)]
pub struct Mailbox {
    pub id: Uuid,
    pub domain_id: Uuid,
    pub email: String,
    pub password_hash: String,
    pub quota_mb: i32,
    pub active: bool,
    pub mailcow_mailbox_id: Option<String>,
    pub created_at: DateTime<Utc>,
    pub updated_at: DateTime<Utc>,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct CreateMailboxRequest {
    pub email: String,
    pub password: String,
    pub quota_mb: Option<i32>,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct UpdateMailboxRequest {
    pub quota_mb: Option<i32>,
    pub active: Option<bool>,
}

#[derive(Debug, Serialize)]
pub struct MailboxResponse {
    pub id: Uuid,
    pub domain_id: Uuid,
    pub email: String,
    pub quota_mb: i32,
    pub active: bool,
    pub created_at: DateTime<Utc>,
}

impl From<Mailbox> for MailboxResponse {
    fn from(mailbox: Mailbox) -> Self {
        Self {
            id: mailbox.id,
            domain_id: mailbox.domain_id,
            email: mailbox.email,
            quota_mb: mailbox.quota_mb,
            active: mailbox.active,
            created_at: mailbox.created_at,
        }
    }
}

#[derive(Debug, Serialize)]
pub struct CreateMailboxResponse {
    pub id: Uuid,
    pub email: String,
    pub password: String,
    pub quota_mb: i32,
}
