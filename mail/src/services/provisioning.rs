use crate::errors::Result;
use crate::models::{Company, MailDomain, Mailbox};
use crate::services::mailcow::MailcowClient;
use sqlx::PgPool;
use uuid::Uuid;

pub struct ProvisioningService {
    db: PgPool,
    mailcow: MailcowClient,
}

impl ProvisioningService {
    pub fn new(db: PgPool, mailcow: MailcowClient) -> Self {
        Self { db, mailcow }
    }

    pub async fn provision_company(
        &self,
        name: String,
        owner_email: String,
        domain: String,
    ) -> Result<(Company, MailDomain)> {
        let company_id = Uuid::new_v4();
        let domain_id = Uuid::new_v4();

        let company = sqlx::query_as::<_, Company>(
            "INSERT INTO companies (id, name, owner_email, plan, status)
             VALUES ($1, $2, $3, $4, $5)
             RETURNING *"
        )
        .bind(company_id)
        .bind(&name)
        .bind(&owner_email)
        .bind("Free")
        .bind("Active")
        .fetch_one(&self.db)
        .await?;

        self.mailcow.create_domain(&domain).await?;

        let mail_domain = sqlx::query_as::<_, MailDomain>(
            "INSERT INTO mail_domains (id, company_id, domain, verified)
             VALUES ($1, $2, $3, $4)
             RETURNING *"
        )
        .bind(domain_id)
        .bind(company_id)
        .bind(&domain)
        .bind(false)
        .fetch_one(&self.db)
        .await?;

        Ok((company, mail_domain))
    }
}
