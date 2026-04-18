# 🐳 Docker Quick Start

**Un comando para todo:**

```bash
./docker-init.sh
```

Espera 2-3 minutos y abre **http://localhost:3000**

Login: `admin@ark.local` / `changeme123`

---

## ¿Qué hace docker-init.sh?

```bash
✅ Crea .env.local
✅ Inicia PostgreSQL en Docker
✅ Inicia Redis en Docker
✅ Construye imagen CMS
✅ Corre migraciones de BD
✅ Seed con datos de ejemplo
✅ Inicia CMS en hot-reload mode
```

---

## Servicios activos después

| Servicio | URL | Puerto |
|----------|-----|--------|
| CMS | http://localhost:3000 | 3000 |
| PostgreSQL | localhost | 5432 |
| Redis | localhost | 6379 |
| Prisma Studio | http://localhost:5555 | 5555 |

---

## Comandos útiles después

```bash
# Ver logs
docker-compose logs -f

# Detener todo
docker-compose down

# Reiniciar BD
docker-compose exec cms-dev npx prisma db reset --force

# Conectar a PostgreSQL
docker-compose exec postgres psql -U postgres ark_cms

# UI para base de datos
docker-compose exec cms-dev npx prisma studio
```

---

## Si algo sale mal

```bash
# Reset completo
docker-compose down -v
./docker-init.sh
```

---

Ver [DOCKER.md](./DOCKER.md) para documentación completa.
