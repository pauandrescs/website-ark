# 🚀 Quick Start — ARK CMS

Guía rápida para empezar a usar el CMS en 5 minutos.

## Requisitos previos

- Node.js 18+
- PostgreSQL corriendo localmente
- Redis (opcional, para producción)

## Pasos

### 1. Configurar variables de entorno

```bash
# En cms/.env.local
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/ark_cms"
REDIS_URL="redis://localhost:6379"
AUTH_SECRET="tu-secret-aqui-openssl-rand-base64-32"
REVALIDATE_SECRET="otro-secret-aqui"
```

### 2. Instalar dependencias (ya hecho)

```bash
npm install
```

### 3. Crear la base de datos

```bash
# Crear el schema
npx prisma migrate dev --name init

# Seed con datos de ejemplo
npx prisma db seed
```

### 4. Iniciar servidor

```bash
npm run dev
```

Abrirá automáticamente `http://localhost:3000`

### 5. Login

**Usuario:** `admin@ark.local`  
**Contraseña:** `changeme123`

## Dashboard disponible

Una vez logueado, tendrás acceso a:

- 📊 **Dashboard** — Resumen general
- 📝 **Posts** — Crear, editar, publicar posts
- 👤 **Autores** — Gestionar autores
- 🏷️ **Tags** — Crear etiquetas
- 🖼️ **Media** — Subir y gestionar imágenes
- ⚙️ **Settings** — Configuración del sitio

## Flujo típico

### Crear un post

1. Ir a **Posts** → **Nuevo post**
2. Llenar título, resumen, contenido
3. Seleccionar autor
4. Agregar etiquetas
5. Guardar como borrador o publicar
6. Ver en el sitio público

### Agregar autor

1. Ir a **Autores** → **Nuevo autor**
2. Llenar nombre, rol, bio
3. (Opcional) Agregar email y avatar
4. Guardar

### Subir medios

1. Ir a **Media**
2. Hacer clic en el área de carga
3. Seleccionar una imagen
4. Se optimizará automáticamente a WebP

## Errores comunes

| Error | Solución |
|-------|----------|
| "Cannot connect to PostgreSQL" | Verifica que PostgreSQL esté corriendo |
| "Invalid DATABASE_URL" | Revisa la URL en .env.local |
| "Unauthorized" al crear posts | Verifica que hayas hecho login y que el usuario sea EDITOR o ADMIN |

## Estructura de contenido (JSON)

Los posts usan **TipTap JSON format**:

```json
{
  "type": "doc",
  "content": [
    {
      "type": "heading",
      "attrs": { "level": 2 },
      "content": [{ "type": "text", "text": "Título" }]
    },
    {
      "type": "paragraph",
      "content": [{ "type": "text", "text": "Texto del párrafo" }]
    }
  ]
}
```

## Próximos pasos

- [ ] Cambiar contraseña admin
- [ ] Crear primeros autores
- [ ] Crear primeras etiquetas
- [ ] Publicar primer post
- [ ] Conectar con sitio principal (padre)

## Conectar con sitio principal

El CMS puede servir contenido al sitio en `/Volumes/DATA/SOFTWARE/GoldenInn/ark-website/`:

**Opción 1: API**
```ts
// En el sitio padre
const response = await fetch('http://localhost:3000/api/posts')
const posts = await response.json()
```

**Opción 2: Base de datos compartida**
```ts
// El sitio padre lee directamente de PostgreSQL
import { prisma } from '@prisma/client'
const posts = await prisma.post.findMany({ where: { status: 'PUBLISHED' } })
```

## Documentación completa

Ver [README.md](./README.md) para documentación completa.

## Soporte

Si tienes problemas:
1. Revisa los logs en la consola
2. Verifica las variables de entorno
3. Intenta `npm run db:reset` para reiniciar la BD (⚠️ elimina datos)
