#!/bin/bash

set -e

echo "🚀 ARK CMS Docker Setup"
echo "======================="
echo ""

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    echo "❌ Docker is not installed. Please install Docker first."
    exit 1
fi

# Check if docker-compose is installed
if ! command -v docker-compose &> /dev/null; then
    echo "❌ Docker Compose is not installed. Please install Docker Compose first."
    exit 1
fi

# Create .env.local if it doesn't exist
if [ ! -f .env.local ]; then
    echo -e "${BLUE}📝 Creating .env.local...${NC}"
    cp .env.example .env.local
    echo -e "${GREEN}✅ .env.local created${NC}"
else
    echo -e "${YELLOW}⏭️  .env.local already exists${NC}"
fi

echo ""
echo -e "${BLUE}🐳 Starting Docker containers...${NC}"
echo ""

# Start services (PostgreSQL and Redis only first)
docker-compose up -d postgres redis

echo -e "${GREEN}✅ PostgreSQL and Redis started${NC}"
echo ""

# Wait for PostgreSQL to be ready
echo -e "${BLUE}⏳ Waiting for PostgreSQL to be ready...${NC}"
sleep 5

# Build and start CMS Dev server
echo -e "${BLUE}🔨 Building CMS Docker image...${NC}"
docker-compose -p ark-cms -f docker-compose.yml up -d --build --profile dev cms-dev

echo ""
echo -e "${GREEN}✅ All services started!${NC}"
echo ""

# Show status
echo -e "${BLUE}📊 Container Status:${NC}"
docker-compose ps

echo ""
echo -e "${BLUE}🗄️  Running database migrations...${NC}"
docker-compose exec -T cms-dev npx prisma migrate dev --name init

echo ""
echo -e "${BLUE}🌱 Seeding database with example data...${NC}"
docker-compose exec -T cms-dev npx prisma db seed

echo ""
echo -e "${GREEN}════════════════════════════════════════${NC}"
echo -e "${GREEN}✅ Setup Complete!${NC}"
echo -e "${GREEN}════════════════════════════════════════${NC}"
echo ""
echo -e "${BLUE}🌐 Access CMS at: http://localhost:3000${NC}"
echo ""
echo -e "${BLUE}Login credentials:${NC}"
echo "  Email: admin@ark.local"
echo "  Password: changeme123"
echo ""
echo -e "${BLUE}Services:${NC}"
echo "  CMS:        http://localhost:3000"
echo "  PostgreSQL: localhost:5432"
echo "  Redis:      localhost:6379"
echo ""
echo -e "${BLUE}Useful commands:${NC}"
echo "  View logs:        docker-compose logs -f cms-dev"
echo "  Stop services:    docker-compose down"
echo "  Reset database:   docker-compose exec -T cms-dev npx prisma db reset --force"
echo "  Database studio:  docker-compose exec -T cms-dev npx prisma studio"
echo ""
