# Ark Mail Platform

Private business email infrastructure as a service (MPaaS).

## Architecture

- **Backend**: Rust + Axum + PostgreSQL
- **Mail Engine**: Mailcow (external service, NOT containerized)
- **Auth**: JWT tokens
- **API**: REST v1

## Quick Start

### Prerequisites
- Docker & Docker Compose
- Rust 1.75+ (for local dev)
- PostgreSQL 16 (via Docker or local)
- Mailcow instance (external, separate setup)

### Setup

1. Setup env:
```bash
cp .env.example .env
# Update .env with your Mailcow API URL and key
```

2. Build & run backend + database:
```bash
docker-compose up --build
```

3. Run migrations:
```bash
sqlx migrate run
```

4. Test API:
```bash
# Get JWT token
TOKEN=$(curl -s -X POST http://localhost:3000/api/v1/auth/login \
  -H "Content-Type: application/json" \
  -d '{"company_id":"550e8400-e29b-41d4-a716-446655440000"}' \
  | jq -r '.token')

# Create company
curl -X POST http://localhost:3000/api/v1/companies \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"name":"Test Co","owner_email":"owner@test.com"}'
```

## API Endpoints

### Auth
- `POST /api/v1/auth/login` — Get JWT token

### Companies
- `GET /api/v1/companies` — List all
- `POST /api/v1/companies` — Create
- `GET /api/v1/companies/:id` — Get one
- `PATCH /api/v1/companies/:id` — Update
- `DELETE /api/v1/companies/:id` — Delete

### Mail Domains
- `GET /api/v1/domains/:id` — Get domain
- `DELETE /api/v1/domains/:id` — Delete domain
- `GET /api/v1/domains/:id/dns` — Get DNS instructions

### Mailboxes
- `GET /api/v1/mailboxes/:id` — Get mailbox
- `PATCH /api/v1/mailboxes/:id` — Update quota/status
- `DELETE /api/v1/mailboxes/:id` — Delete
- `POST /api/v1/mailboxes/:id/reset-password` — Reset password
- `POST /api/v1/mailboxes/:id/suspend` — Suspend mailbox

## Database

Schema:
- `companies` — Customer organizations
- `mail_domains` — Domains per company
- `mailboxes` — Email accounts

Migrations in `./migrations/`

## Configuration

See `.env.example` for all config options:
- `DATABASE_URL` — PostgreSQL connection
- `JWT_SECRET` — Secret for token signing
- `MAILCOW_API_URL` — Mailcow API endpoint
- `MAILCOW_API_KEY` — Mailcow API key

## Development

```bash
cargo build
cargo test
cargo run
```

Watch logs:
```bash
docker-compose logs -f backend
```

## Notes

- **Mailcow is external**: This backend orchestrates a separate Mailcow instance
- Configure `MAILCOW_API_URL` and `MAILCOW_API_KEY` in `.env`
- DNS records are generated but NOT verified automatically
- All endpoints except `/health` and `/auth/login` require JWT auth
- Passwords are hashed with bcrypt before storage
- Database migrations run on startup (requires sqlx-cli)
