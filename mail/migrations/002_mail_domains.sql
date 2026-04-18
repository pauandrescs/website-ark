CREATE TABLE IF NOT EXISTS mail_domains (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    company_id UUID NOT NULL REFERENCES companies(id) ON DELETE CASCADE,
    domain VARCHAR(255) NOT NULL UNIQUE,
    verified BOOLEAN NOT NULL DEFAULT FALSE,
    dkim_status VARCHAR(50) DEFAULT 'pending',
    spf_status VARCHAR(50) DEFAULT 'pending',
    dmarc_status VARCHAR(50) DEFAULT 'pending',
    mailcow_domain_id VARCHAR(255),
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_mail_domains_company_id ON mail_domains(company_id);
CREATE INDEX idx_mail_domains_domain ON mail_domains(domain);
