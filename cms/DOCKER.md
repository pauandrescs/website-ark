# 🐳 Docker Setup Guide — ARK CMS

Guía completa para correr ARK CMS con Docker (PostgreSQL + Redis + CMS).

## Requisitos

- Docker instalado
- Docker Compose instalado
- 2GB RAM disponible

## ⚡ Quick Start (1 comando)

```bash
./docker-init.sh
```

Eso es todo. El script automáticamente:
1. ✅ Crea .env.local
2. ✅ Inicia PostgreSQL y Redis
3. ✅ Construye la imagen CMS
4. ✅ Corre migraciones
5. ✅ Seed con datos de ejemplo
6. ✅ Inicia el servidor

**Luego abre:** http://localhost:3000

**Login:** `admin@ark.local` / `changeme123`

---

## 🔧 Setup Manual (si prefieres)

### 1. Crear .env.local

```bash
cp .env.example .env.local
```

Editar si es necesario, pero los defaults funcionan con Docker.

### 2. Iniciar servicios

```bash
# Opción A: Solo servicios de BD (PostgreSQL + Redis)
docker-compose up -d postgres redis

# Opción B: Con CMS en desarrollo (hot reload)
docker-compose --profile dev up -d

# Opción C: Con CMS en producción
docker-compose --profile cms up -d
```

### 3. Migrar base de datos

```bash
docker-compose exec cms-dev npx prisma migrate dev --name init
```

### 4. Seed datos de ejemplo

```bash
docker-compose exec cms-dev npx prisma db seed
```

### 5. Acceder

- **CMS:** http://localhost:3000
- **PostgreSQL:** localhost:5432
- **Redis:** localhost:6379

---

## 📋 Comandos Docker Útiles

### Ver logs
```bash
# Todos los servicios
docker-compose logs -f

# Solo CMS
docker-compose logs -f cms-dev

# Solo PostgreSQL
docker-compose logs -f postgres

# Solo Redis
docker-compose logs -f redis
```

### Detener servicios
```bash
# Todos
docker-compose down

# Con volúmenes (borra base de datos)
docker-compose down -v
```

### Ejecutar comandos en el contenedor

```bash
# Prisma studio (UI visual para BD)
docker-compose exec cms-dev npx prisma studio

# Reiniciar base de datos (⚠️ borra todo)
docker-compose exec cms-dev npx prisma db reset --force

# Ver versión de Node
docker-compose exec cms-dev node --version

# Shell interactivo
docker-compose exec cms-dev sh
```

### PostgreSQL

```bash
# Conectar a la BD con psql
docker-compose exec postgres psql -U postgres -d ark_cms

# Ver tablas
\dt

# Ver usuarios
\du

# Salir
\q
```

### Redis

```bash
# Conectar a Redis
docker-compose exec redis redis-cli

# Ping Redis
PING

# Ver todos los keys
KEYS *

# Ver un valor
GET key_name

# Salir
EXIT
```

---

## 🚀 Desarrollo vs Producción

### Desarrollo (recomendado para trabajar)

```bash
docker-compose --profile dev up -d
```

**Características:**
- ✅ Hot reload (cambios en el código se reflejan automáticamente)
- ✅ Volúmenes montados (edita archivos localmente)
- ✅ Logs en tiempo real
- ✅ Más lento (por transpilación)

### Producción

```bash
docker-compose --profile cms up -d
```

**Características:**
- ✅ Imagen optimizada
- ✅ Código precompilado
- ✅ Más rápido
- ✅ Listo para deploy

---

## 🔐 Variables de Entorno

En `.env.local`:

```env
# Base de datos (Docker)
DB_USER=postgres           # Usuario de PostgreSQL
DB_PASSWORD=postgres       # Contraseña de PostgreSQL
DB_NAME=ark_cms           # Nombre de la base de datos

# URL de conexión (autogenerada por docker-compose)
DATABASE_URL="postgresql://postgres:postgres@postgres:5432/ark_cms"

# Redis
REDIS_URL="redis://redis:6379"

# Auth
AUTH_SECRET="openssl rand -base64 32"  # Genera con: openssl rand -base64 32
REVALIDATE_SECRET="random-string"

# Node
NODE_ENV=development
```

**Para generar AUTH_SECRET:**
```bash
openssl rand -base64 32
```

---

## 🛑 Problemas Comunes

### "Port 3000 already in use"

```bash
# Ver qué proceso está usando el puerto
lsof -i :3000

# Matarlo
kill -9 <PID>

# O usar otro puerto editando docker-compose.yml:
# ports:
#   - "3001:3000"  # Cambia 3000 a 3001
```

### "Cannot connect to PostgreSQL"

```bash
# Verificar que el contenedor está corriendo
docker-compose ps

# Ver logs
docker-compose logs postgres

# Reiniciar
docker-compose restart postgres

# Esperar 10 segundos
sleep 10

# Intentar migración nuevamente
docker-compose exec cms-dev npx prisma migrate dev --name init
```

### "Docker daemon is not running"

```bash
# macOS
open /Applications/Docker.app

# Linux
sudo systemctl start docker

# Windows
# Abre Docker Desktop desde el menú de inicio
```

### Base de datos corrupta

```bash
# Reiniciar completamente (borra toda la BD)
docker-compose down -v
docker-compose --profile dev up -d

# Luego ejecutar migraciones y seed nuevamente
docker-compose exec cms-dev npx prisma migrate dev --name init
docker-compose exec cms-dev npx prisma db seed
```

---

## 📊 Monitoreo

### Ver estadísticas de contenedores

```bash
docker stats
```

### Ver uso de disco

```bash
docker system df
```

### Limpiar recursos no usados

```bash
# Borrar contenedores parados
docker container prune

# Borrar imágenes no usadas
docker image prune

# Borrar volúmenes no usados
docker volume prune

# Todo de arriba
docker system prune -a
```

---

## 🔄 Actualizar Imagen

Si cambias dependencias (package.json):

```bash
docker-compose build --no-cache
docker-compose --profile dev up -d
```

---

## 📦 Exportar/Importar Base de Datos

### Exportar (backup)
```bash
docker-compose exec postgres pg_dump -U postgres ark_cms > backup.sql
```

### Importar
```bash
docker-compose exec -T postgres psql -U postgres ark_cms < backup.sql
```

---

## 🚀 Deploy a Producción

### Con Docker Swarm

```bash
docker swarm init
docker stack deploy -c docker-compose.yml ark-cms
```

### Con Kubernetes

```bash
# Convertir docker-compose a K8s
kompose convert -f docker-compose.yml -o k8s/

# Desplegar
kubectl apply -f k8s/
```

### Con Docker en servidor remoto

```bash
# En el servidor remoto
docker-compose --profile cms up -d

# Exponiendo con nginx/traefik
# Ver guía de deploy separada
```

---

## 📚 Referencias

- [Docker Docs](https://docs.docker.com/)
- [Docker Compose Docs](https://docs.docker.com/compose/)
- [PostgreSQL Docker](https://hub.docker.com/_/postgres)
- [Redis Docker](https://hub.docker.com/_/redis)
- [Node Docker](https://hub.docker.com/_/node)

---

## ⚡ Atajos útiles

```bash
# Iniciar todo
docker-compose --profile dev up -d

# Ver logs en tiempo real
docker-compose logs -f

# Parar todo
docker-compose down

# Ejecutar comando en CMS
docker-compose exec cms-dev <comando>

# Conectar a PostgreSQL
docker-compose exec postgres psql -U postgres ark_cms

# Reiniciar un servicio
docker-compose restart <servicio>
```

---

¡Listo para usar Docker! 🐳
