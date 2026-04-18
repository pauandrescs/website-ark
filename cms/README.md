# ARK CMS — Content Management System

Sistema de gestión de contenidos modular para ARK Platforms. Construido con Next.js 16, TypeScript, PostgreSQL y Redis.

## Stack Tecnológico

- **Frontend**: Next.js 16 + React 19 + TypeScript + Tailwind CSS 4
- **Backend**: Next.js Server Actions + API Routes
- **Base de datos**: PostgreSQL + Prisma ORM
- **Caché**: Redis (rate limiting, sesiones)
- **Autenticación**: NextAuth v5 (Email/Password)
- **Validación**: Zod
- **Editor de contenido**: TipTap (JSON-based)
- **UI**: Componentes personalizados con Tailwind CSS

## Instalación

### 1. Clonar y configurar variables de entorno

```bash
cd cms
cp .env.local.example .env.local
```

Edita `.env.local` con tus valores:

```env
# PostgreSQL
DATABASE_URL="postgresql://user:password@localhost:5432/ark_cms"

# Redis
REDIS_URL="redis://localhost:6379"

# NextAuth
AUTH_SECRET="openssl rand -base64 32"

# Revalidation
REVALIDATE_SECRET="random-secret-string"
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Configurar base de datos

```bash
# Crear las tablas
npx prisma migrate dev --name init

# (Opcional) Seed de datos de prueba
npx prisma db seed
```

### 4. Inicializar usuario admin

```bash
npx ts-node prisma/seed.ts
```

Este script crea un usuario admin por defecto:
- Email: `admin@ark.local`
- Contraseña: `changeme123`

### 5. Ejecutar servidor de desarrollo

```bash
npm run dev
```

El CMS estará disponible en `http://localhost:3000`.

## Arquitectura Modular

### Estructura de carpetas

```
cms/
├── modules/           # Lógica de negocio
│   ├── posts/        # Posts (CRUD, queries, schemas)
│   ├── authors/      # Autores
│   ├── tags/         # Etiquetas
│   ├── media/        # Galería de medios
│   ├── auth/         # Autenticación
│   └── settings/     # Configuración
│
├── lib/              # Utilidades
│   ├── db.ts         # Prisma client
│   ├── redis.ts      # Redis client
│   └── utils.ts      # Helpers
│
├── components/       # Componentes reutilizables
│   ├── ui/          # Primitivos (inputs, buttons, etc.)
│   ├── shell/       # Layout (sidebar, topbar)
│   └── shared/      # Componentes comunes
│
└── app/             # Rutas y páginas
    ├── (auth)/      # Rutas de autenticación
    ├── dashboard/   # Panel de control protegido
    └── api/         # API routes
```

## Características

### Posts
- ✅ CRUD completo
- ✅ Borrador, Publicado, Archivado
- ✅ Editor de contenido JSON (TipTap)
- ✅ Múltiples autores
- ✅ Etiquetado
- ✅ Imagen de portada
- ✅ Búsqueda y filtrado

### Autores
- ✅ Gestión de perfiles
- ✅ Bio y rol
- ✅ Avatar
- ✅ Email

### Media
- ✅ Subida de imágenes
- ✅ Optimización automática (Sharp → WebP)
- ✅ Galerería con preview
- ✅ Metadatos (tamaño, dimensiones)

### Autenticación
- ✅ Credenciales (email/password)
- ✅ Roles: Admin, Editor
- ✅ Sesiones seguras con NextAuth v5
- ✅ Protección de rutas

## Patrón de Servidor Actions

Los cambios usan **Server Actions** (Next.js 15+):

```tsx
// En el servidor: modules/posts/actions.ts
'use server'
export async function createPost(prevState, formData) {
  const session = await requireEditor()
  // validar, crear, revalidatTag('posts')
}

// En el cliente: app/dashboard/posts/new/page.tsx
'use client'
export default function NewPostPage() {
  const [state, formAction] = useActionState(createPost)
  return <form action={formAction}>...</form>
}
```

## Caché y Revalidación

Usa caché de Next.js 16 con `unstable_cache`:

```ts
export const getPosts = cache(
  async () => prisma.post.findMany(...),
  ['posts-list'],
  { revalidate: 60, tags: ['posts'] }
)
```

Cuando un post se actualiza:
```ts
revalidateTag('posts')  // invalida el caché
```

## Roles y Permisos

### Editor
- Ver/crear/editar/publicar posts
- Gestionar autores y tags
- Subir media

### Admin
- Todo lo que Editor, más:
- Cambiar configuración
- Gestionar usuarios

## API Endpoints

### Autenticación
```
POST /api/auth/signin          # Login
POST /api/auth/signout         # Logout
POST /api/auth/callback/[...]  # NextAuth callbacks
```

### Media
```
POST /api/media/upload         # Subir archivo
```

### Revalidación
```
POST /api/revalidate           # Invalidar caché (webhook)
```

## Base de Datos

### Modelos principales

**User**
- id, email (unique), passwordHash, name, role (ADMIN|EDITOR)

**Post**
- id, slug, title, excerpt, content (JSON), status, authorId, createdById, tags

**Author**
- id, slug, name, role, bio, avatar, email

**Tag**
- id, slug, name

**MediaItem**
- id, filename, storedPath, url, mimeType, size, width, height

## Guía de Desarrollo

### Agregar un nuevo módulo

1. Crear carpeta `modules/newmodule/`
2. Crear archivos:
   - `schema.ts` — Zod schemas
   - `types.ts` — TypeScript types
   - `queries.ts` — Lectura de datos (Server Functions)
   - `actions.ts` — Mutations (Server Actions)

3. Usar en páginas:
   ```tsx
   'use client'
   import { useActionState } from 'react'
   import { myAction } from '@/modules/newmodule/actions'
   
   export default function Page() {
     const [state, formAction] = useActionState(myAction)
     return <form action={formAction}>...</form>
   }
   ```

### Agregar una nueva página

1. Crear `app/dashboard/newpage/page.tsx`
2. Si es protegida, la redirección ya está en `middleware.ts`
3. Si necesita datos, usar query functions con `unstable_cache`

## Deployment

### Vercel (recomendado)

```bash
git push origin main
```

Vercel detectará el Next.js y deployará automáticamente.

Variables de entorno en Vercel:
- DATABASE_URL
- REDIS_URL
- AUTH_SECRET
- REVALIDATE_SECRET

### Otros (Docker, self-hosted)

```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD npm start
```

## Troubleshooting

### Error: "Error al conectar a PostgreSQL"
- Verifica que PostgreSQL esté corriendo
- Revisa DATABASE_URL en .env.local
- Intenta: `psql $DATABASE_URL`

### Error: "Redis error"
- Verifica que Redis esté corriendo (localhost:6379)
- REDIS_URL debe ser válido

### Error: "Unauthorized" al crear posts
- Verifica que el usuario tenga rol EDITOR o ADMIN
- Revisa que la sesión esté activa

## Contribución

Este CMS es modular y fácil de mantener. Cada módulo es independiente:
- Cambios en `modules/posts` no afectan a `modules/authors`
- Las queries usan caché de forma consistente
- Las actions validan con Zod

Para agregar features, sigue el patrón de módulos existentes.
