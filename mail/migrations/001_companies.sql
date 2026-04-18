CREATE TABLE IF NOT EXISTS companies (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    owner_email VARCHAR(255) NOT NULL,
    plan VARCHAR(50) NOT NULL DEFAULT 'Free',
    status VARCHAR(50) NOT NULL DEFAULT 'Active',
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_companies_owner_email ON companies(owner_email);
