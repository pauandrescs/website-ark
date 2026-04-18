use crate::errors::{AppError, Result};
use serde::{Deserialize, Serialize};
use reqwest::Client;

#[derive(Debug, Clone)]
pub struct MailcowClient {
    api_url: String,
    api_key: String,
    client: Client,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct CreateDomainRequest {
    pub domain: String,
    pub aliases: Option<i32>,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct CreateMailboxRequest {
    pub local_part: String,
    pub domain: String,
    pub password: String,
    pub quota: i32,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct MailcowResponse<T> {
    pub status: Option<bool>,
    pub msg: Option<Vec<String>>,
    #[serde(flatten)]
    pub data: T,
}

impl MailcowClient {
    pub fn new(api_url: String, api_key: String) -> Self {
        Self {
            api_url,
            api_key,
            client: Client::new(),
        }
    }

    pub async fn create_domain(&self, domain: &str) -> Result<String> {
        let url = format!("{}/add/domain", self.api_url);

        let body = serde_json::json!({
            "domain": domain,
            "aliases": 100,
            "mailboxes": 50,
            "quota": 52428800,
        });

        let response = self
            .client
            .post(&url)
            .header("X-API-Key", &self.api_key)
            .json(&body)
            .send()
            .await
            .map_err(|e| AppError::MailcowError(e.to_string()))?;

        if !response.status().is_success() {
            return Err(AppError::MailcowError(format!(
                "Failed to create domain: {}",
                response.status()
            )));
        }

        Ok(domain.to_string())
    }

    pub async fn create_mailbox(
        &self,
        local_part: &str,
        domain: &str,
        password: &str,
        quota: i32,
    ) -> Result<String> {
        let url = format!("{}/add/mailbox", self.api_url);

        let body = serde_json::json!({
            "local_part": local_part,
            "domain": domain,
            "password": password,
            "password2": password,
            "quota": quota * 1024 * 1024,
        });

        let response = self
            .client
            .post(&url)
            .header("X-API-Key", &self.api_key)
            .json(&body)
            .send()
            .await
            .map_err(|e| AppError::MailcowError(e.to_string()))?;

        if !response.status().is_success() {
            return Err(AppError::MailcowError(format!(
                "Failed to create mailbox: {}",
                response.status()
            )));
        }

        Ok(format!("{}@{}", local_part, domain))
    }

    pub async fn delete_mailbox(&self, email: &str) -> Result<()> {
        let url = format!("{}/delete/mailbox", self.api_url);

        let body = serde_json::json!({
            "mailbox": email,
        });

        let response = self
            .client
            .post(&url)
            .header("X-API-Key", &self.api_key)
            .json(&body)
            .send()
            .await
            .map_err(|e| AppError::MailcowError(e.to_string()))?;

        if !response.status().is_success() {
            return Err(AppError::MailcowError(format!(
                "Failed to delete mailbox: {}",
                response.status()
            )));
        }

        Ok(())
    }

    pub async fn edit_mailbox(&self, email: &str, quota_mb: i32, active: bool) -> Result<()> {
        let url = format!("{}/edit/mailbox", self.api_url);

        let body = serde_json::json!({
            "mailbox": email,
            "quota": quota_mb * 1024 * 1024,
            "active": if active { 1 } else { 0 },
        });

        let response = self
            .client
            .post(&url)
            .header("X-API-Key", &self.api_key)
            .json(&body)
            .send()
            .await
            .map_err(|e| AppError::MailcowError(e.to_string()))?;

        if !response.status().is_success() {
            return Err(AppError::MailcowError(format!(
                "Failed to edit mailbox: {}",
                response.status()
            )));
        }

        Ok(())
    }
}
