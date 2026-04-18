# Ark Mail Platform

Private business email infrastructure as a service (MPaaS).

## Architecture

- **Backend**: Rust + Axum + PostgreSQL
- **Mail Engine**: Mailcow (containerized)
- **Auth**: JWT tokens
- **API**: REST v1

## Quick Start

### Prerequisites
- Docker & Docker Compose
- Rust 1.75+
- PostgreSQL 16

### Setup

1. Clone & setup env:
```bash
cp .env.example .env
```

2. Build & run:
```bash
docker-compose up --build
```

3. Apply migrations:
```bash
sqlx migrate run
```

4. Test API:
```bash
curl -X POST http://localhost:3000/api/v1/companies \
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

- The platform uses Mailcow's REST API for email operations
- DNS records are generated but NOT verified automatically
- All endpoints except `/health` and `/auth/login` require JWT auth
- Passwords are hashed with bcrypt before storage
