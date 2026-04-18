use serde::{Deserialize, Serialize};
use sqlx::FromRow;
use uuid::Uuid;
use chrono::{DateTime, Utc};

#[derive(Debug, Clone, Serialize, Deserialize, FromRow)]
pub struct Company {
    pub id: Uuid,
    pub name: String,
    pub owner_email: String,
    pub plan: String,
    pub status: String,
    pub created_at: DateTime<Utc>,
    pub updated_at: DateTime<Utc>,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct CreateCompanyRequest {
    pub name: String,
    pub owner_email: String,
    pub plan: Option<String>,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct UpdateCompanyRequest {
    pub name: Option<String>,
    pub plan: Option<String>,
    pub status: Option<String>,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct CompanyResponse {
    pub id: Uuid,
    pub name: String,
    pub owner_email: String,
    pub plan: String,
    pub status: String,
    pub created_at: DateTime<Utc>,
}

impl From<Company> for CompanyResponse {
    fn from(company: Company) -> Self {
        Self {
            id: company.id,
            name: company.name,
            owner_email: company.owner_email,
            plan: company.plan,
            status: company.status,
            created_at: company.created_at,
        }
    }
}
