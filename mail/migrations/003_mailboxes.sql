CREATE TABLE IF NOT EXISTS mailboxes (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    domain_id UUID NOT NULL REFERENCES mail_domains(id) ON DELETE CASCADE,
    email VARCHAR(255) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    quota_mb INTEGER NOT NULL DEFAULT 1024,
    active BOOLEAN NOT NULL DEFAULT TRUE,
    mailcow_mailbox_id VARCHAR(255),
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_mailboxes_domain_id ON mailboxes(domain_id);
CREATE INDEX idx_mailboxes_email ON mailboxes(email);
