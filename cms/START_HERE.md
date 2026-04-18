# 🎯 START HERE — ARK CMS

El CMS está **completamente construido y listo para usar**.

## ⚡ Quick Start con Docker (RECOMENDADO)

```bash
./docker-init.sh
```

**Eso es todo.** El script automáticamente:
1. Instala PostgreSQL en Docker
2. Instala Redis en Docker  
3. Construye el CMS
4. Corre migraciones
5. Seed con datos de ejemplo
6. Inicia el servidor

Luego abre: **http://localhost:3000**

---

## ✅ Status Actual

```
✅ Código del CMS: 100% completado
✅ npm install: Completado  
✅ Estructura modular: Lista
✅ Autenticación: Configurada
✅ Base de datos schema: Lista
⏳ PostgreSQL: Requiere setup
⏳ Migraciones: Pendientes
```

## 🚀 Primeros Pasos (3 pasos principales)

### Paso 1: Configurar Base de Datos (5 min)

Elige una opción:

**Opción A: PostgreSQL local (macOS)**
```bash
# Instalar PostgreSQL
brew install postgresql

# Iniciar servicio
brew services start postgresql

# Crear base de datos
createdb ark_cms
```

**Opción B: PostgreSQL con Docker (cualquier SO)**
```bash
docker run --name ark-postgres \
  -e POSTGRES_PASSWORD=postgres \
  -p 5432:5432 \
  -d postgres:15

# Crear base de datos
docker exec -it ark-postgres psql -U postgres -c "CREATE DATABASE ark_cms;"
```

**Opción C: Cloud (Heroku, AWS, Railway, Render)**
- Crear instancia PostgreSQL
- Copiar connection string

### Paso 2: Configurar Variables (1 min)

```bash
# Editar cms/.env.local
nano .env.local
```

Actualizar:
```env
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/ark_cms"
REDIS_URL="redis://localhost:6379"  # Opcional en desarrollo
AUTH_SECRET="tu-secret-aqui"
REVALIDATE_SECRET="otro-secret"
```

### Paso 3: Inicializar CMS (3 min)

```bash
# Migrar base de datos
npx prisma migrate dev --name init

# Seed con datos de ejemplo
npx prisma db seed

# Iniciar servidor
npm run dev
```

**Acceder a:** http://localhost:3000

**Login:**
- Email: `admin@ark.local`
- Contraseña: `changeme123`

## 📋 Checklist de Setup Completo

```bash
# 1. Verificar que estamos en la carpeta cms
pwd  # debería terminar en /cms

# 2. Instalar dependencias (ya listo)
npm install --check-only  # verifica que todo está

# 3. PostgreSQL
# → Sigue Paso 1 arriba

# 4. Variables de entorno  
# → Sigue Paso 2 arriba

# 5. Inicializar base de datos
npx prisma migrate dev --name init

# 6. Seed con datos de ejemplo (admin user, authors, posts)
npx prisma db seed

# 7. Iniciar CMS
npm run dev

# 8. Abrir en navegador
# http://localhost:3000
```

## 🎨 Una vez logueado, puedes:

- **📝 Posts**: Crear, editar, publicar artículos
- **👤 Autores**: Agregar autores
- **🏷️ Tags**: Crear etiquetas
- **🖼️ Media**: Subir imágenes
- **📊 Dashboard**: Ver estadísticas

## 🆘 Si algo no funciona

### "Module not found: @prisma/client"
```bash
# Reinstalar dependencias
rm -rf node_modules package-lock.json
npm install
```

### "Cannot connect to PostgreSQL"
```bash
# Verificar que PostgreSQL está corriendo
psql -U postgres -c "SELECT 1"

# Si no responde, iniciar:
# macOS: brew services start postgresql
# Docker: docker start ark-postgres
```

### "Port 3000 already in use"
```bash
# Matar el proceso
lsof -ti:3000 | xargs kill -9

# O usar otro puerto
npm run dev -- -p 3001
```

### "Unauthorized" al crear posts
- Verificar que estés logueado como `admin@ark.local`
- Presionar F5 para refrescar la sesión

## 📚 Documentación

Lee estos en orden:

1. **[SETUP.md](./SETUP.md)** — Setup en detalle
2. **[QUICKSTART.md](./QUICKSTART.md)** — Guía rápida de 5 min
3. **[README.md](./README.md)** — Documentación técnica completa
4. **[IMPLEMENTATION_SUMMARY.md](./IMPLEMENTATION_SUMMARY.md)** — Overview de lo que se construyó

## 🎯 Próximos pasos después de setup

### Inmediatos (hoy)
- [ ] Crear primeros autores
- [ ] Crear primeras etiquetas
- [ ] Escribir primer post

### Corto plazo
- [ ] Cambiar contraseña admin
- [ ] Crear más usuarios (si necesitas)
- [ ] Conectar con sitio padre

### Largo plazo
- [ ] Agregar más funcionalidades (búsqueda, filtros)
- [ ] Integración con servicios externos
- [ ] Analytics

## 🔧 Comandos Útiles

```bash
# Desarrollo
npm run dev                 # Iniciar servidor (http://localhost:3000)
npm run build             # Build para producción
npm start                 # Iniciar producción

# Base de datos
npm run db:migrate        # Crear nueva migración
npm run db:seed          # Cargar datos de ejemplo
npm run db:reset         # ⚠️ Reiniciar base de datos (borra todo)

# Prisma
npx prisma studio       # UI visual para base de datos
npx prisma generate     # Regenerar Prisma client

# Linting
npm run lint            # Verificar errores
```

## 📞 Preguntas Frecuentes

**¿Necesito Redis en desarrollo?**  
No, es opcional. Se usa para rate limiting y sesiones persistentes.

**¿Puedo usar SQLite?**  
Sí, cambia `DATABASE_URL="file:./dev.db"` en .env.local

**¿Cómo conecto con el sitio padre?**  
Ver "Conectar con sitio principal" en README.md

**¿Cómo agrego más funcionalidades?**  
Seguir el patrón de módulos en `modules/`. Ver README.md sección "Guía de Desarrollo"

## 🚀 Deploy a Producción

**Vercel (recomendado):**
```bash
git push origin main
# Vercel deployará automáticamente
```

**Heroku:**
```bash
heroku create
git push heroku main
```

**Self-hosted con Docker:**
```bash
docker build -t ark-cms .
docker run -p 3000:3000 ark-cms
```

---

## TL;DR — Los 3 comandos esenciales

```bash
# 1. Migrar base de datos
npx prisma migrate dev --name init

# 2. Cargar datos de ejemplo
npx prisma db seed

# 3. Iniciar servidor
npm run dev
```

Luego abre http://localhost:3000 y login con `admin@ark.local` / `changeme123`.

---

¡Listo! 🎉 Adelante con el CMS.
