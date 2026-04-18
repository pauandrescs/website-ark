use serde::{Deserialize, Serialize};
use sqlx::FromRow;
use uuid::Uuid;
use chrono::{DateTime, Utc};

#[derive(Debug, Clone, Serialize, Deserialize, FromRow)]
pub struct MailDomain {
    pub id: Uuid,
    pub company_id: Uuid,
    pub domain: String,
    pub verified: bool,
    pub dkim_status: Option<String>,
    pub spf_status: Option<String>,
    pub dmarc_status: Option<String>,
    pub mailcow_domain_id: Option<String>,
    pub created_at: DateTime<Utc>,
    pub updated_at: DateTime<Utc>,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct CreateMailDomainRequest {
    pub domain: String,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct MailDomainResponse {
    pub id: Uuid,
    pub company_id: Uuid,
    pub domain: String,
    pub verified: bool,
    pub dkim_status: Option<String>,
    pub spf_status: Option<String>,
    pub dmarc_status: Option<String>,
    pub created_at: DateTime<Utc>,
}

impl From<MailDomain> for MailDomainResponse {
    fn from(domain: MailDomain) -> Self {
        Self {
            id: domain.id,
            company_id: domain.company_id,
            domain: domain.domain,
            verified: domain.verified,
            dkim_status: domain.dkim_status,
            spf_status: domain.spf_status,
            dmarc_status: domain.dmarc_status,
            created_at: domain.created_at,
        }
    }
}

#[derive(Debug, Serialize)]
pub struct DnsInstructions {
    pub domain: String,
    pub mx_records: Vec<String>,
    pub spf_record: String,
    pub dkim_record: String,
    pub dmarc_record: String,
    pub autodiscover: String,
}
