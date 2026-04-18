# ⚙️ Setup Guide — ARK CMS

## Estado Actual

El CMS ha sido completamente creado y configurado. Solo faltan los últimos pasos de setup.

## Checklist de Setup

### ✅ Completado
- [x] Estructura modular creada (posts, authors, tags, media, auth, settings)
- [x] Base de datos Prisma schema
- [x] Autenticación NextAuth v5
- [x] Todos los API routes
- [x] Dashboard UI
- [x] Server Actions para CRUD
- [x] Caché y validación
- [x] Estilos con tema ARK

### ⏳ Pendiente
- [ ] `npm install` final (en proceso)
- [ ] Crear base de datos PostgreSQL
- [ ] Iniciar Redis
- [ ] `npx prisma migrate dev`
- [ ] `npx prisma db seed`
- [ ] Probar `npm run dev`

## Pasos finales

### 1. Esperar a que npm install termine

```bash
# Debería completarse en 2-3 minutos
# Una vez lista, verás: "added XXX packages"
```

### 2. Configurar PostgreSQL

```bash
# Opción A: Instalar PostgreSQL (si no lo tienes)
# macOS: brew install postgresql
# Linux: sudo apt-get install postgresql
# Windows: Descargar desde postgresql.org

# Opción B: Usar Docker
docker run --name ark-postgres -e POSTGRES_PASSWORD=postgres -p 5432:5432 -d postgres:15

# Crear base de datos
psql -U postgres -c "CREATE DATABASE ark_cms;"
```

### 3. Configurar Redis (opcional para dev, recomendado para prod)

```bash
# macOS: brew install redis
# Linux: sudo apt-get install redis-server
# Docker: docker run --name ark-redis -p 6379:6379 -d redis:latest
```

### 4. Actualizar .env.local

```bash
# Estos valores ya están con los defaults, pero verifica:
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/ark_cms"
REDIS_URL="redis://localhost:6379"
AUTH_SECRET="change-me-with-openssl-rand-base64-32"
REVALIDATE_SECRET="change-me-with-random-string"
```

### 5. Migrar base de datos

```bash
npx prisma migrate dev --name init
```

### 6. Seed con datos de ejemplo

```bash
npx prisma db seed
# O manualmente:
# npx ts-node --compiler-options '{"module":"CommonJS"}' prisma/seed.ts
```

### 7. Iniciar CMS

```bash
npm run dev
```

Acceder a: `http://localhost:3000`

**Login:**
- Email: `admin@ark.local`
- Contraseña: `changeme123`

## Troubleshooting

### Error: "Module not found: @prisma/client"
**Solución:** Espera a que `npm install` termine completamente

### Error: "Cannot connect to PostgreSQL"
```bash
# Verificar que PostgreSQL está corriendo
psql -U postgres -c "SELECT 1"

# Si no responde, iniciar:
# macOS: brew services start postgresql
# Linux: sudo systemctl start postgresql
# Docker: docker start ark-postgres
```

### Error: "EADDRINUSE: address already in use :::3000"
```bash
# Otro proceso está usando puerto 3000
# Opción 1: Matar el proceso
lsof -ti:3000 | xargs kill -9

# Opción 2: Usar puerto diferente
npm run dev -- -p 3001
```

### Error: "Unauthorized" al crear posts
- Verifica que estés logueado como `admin@ark.local`
- Verifica que la sesión esté activa

## Estructura Final

```
cms/
├── app/
│   ├── (auth)/                 # Páginas de login
│   ├── dashboard/              # Panel principal protegido
│   │   ├── posts/              # CRUD de posts
│   │   ├── authors/            # CRUD de autores
│   │   ├── tags/               # Gestión de tags
│   │   ├── media/              # Galería de medios
│   │   └── settings/           # Configuración
│   ├── api/
│   │   ├── auth/               # NextAuth
│   │   ├── media/upload/       # Subida de archivos
│   │   └── revalidate/         # Revalidación de caché
│   └── page.tsx                # Redirige a dashboard o login
│
├── modules/
│   ├── posts/                  # Actions, queries, schemas
│   ├── authors/
│   ├── tags/
│   ├── media/
│   ├── auth/
│   └── settings/
│
├── lib/
│   ├── db.ts                   # Prisma client
│   ├── redis.ts                # Redis client
│   └── utils.ts                # Helpers
│
├── prisma/
│   ├── schema.prisma           # Modelos de base de datos
│   └── seed.ts                 # Datos iniciales
│
├── auth.ts                      # NextAuth configuración
├── middleware.ts                # Protección de rutas
├── next.config.ts              # Configuración Next.js
└── package.json                # Dependencias
```

## Próximos pasos después de setup

1. **Cambiar contraseña admin:**
   - Ir a Settings
   - (Función no implementada aún - debe hacerse en BD directamente)

2. **Crear primeros autores:**
   - Dashboard → Autores → Nuevo autor

3. **Crear etiquetas:**
   - Dashboard → Etiquetas

4. **Publicar primer post:**
   - Dashboard → Posts → Nuevo post

5. **Conectar con sitio padre:**
   - Ver `README.md` sección "Conectar con sitio principal"

## Comandos útiles

```bash
# Desarrollo
npm run dev

# Build para producción
npm run build
npm start

# Migraciones
npm run db:migrate
npm run db:seed
npm run db:reset      # ⚠️ Borra todos los datos

# Prisma Studio (UI para base de datos)
npx prisma studio

# Linting
npm run lint
```

## Notas importantes

- El CMS usa **Next.js 16 con Server Actions** (patrón moderno)
- Cada módulo es **independiente y reutilizable**
- Los datos se **cachean automáticamente** con revalidación
- La autenticación usa **NextAuth v5** (beta)
- El caché de imágenes es **automático con Sharp**

## Preguntas frecuentes

**¿Puedo usar SQLite en lugar de PostgreSQL?**
Sí, cambia `DATABASE_URL` en `.env.local`:
```
DATABASE_URL="file:./dev.db"
```

**¿Es necesario Redis?**
No es estrictamente necesario en desarrollo, pero se recomienda para:
- Rate limiting en login
- Sesiones persistentes en producción

**¿Cómo integro con el sitio padre?**
Ver sección "Conectar con sitio principal" en `README.md`

**¿Dónde están los componentes Shadcn/ui?**
El CMS usa componentes personalizados con Tailwind en lugar de Shadcn para mantenerlo modular. Puedes agregar Shadcn si lo necesitas.

---

Once npm install finishes, you're ready to go! 🚀
