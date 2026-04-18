import { auth } from '@/auth'
import { writeFile, mkdir } from 'fs/promises'
import { prisma } from '@/lib/db'
import sharp from 'sharp'
import path from 'path'
import { randomUUID } from 'crypto'

export async function POST(request: Request) {
  try {
    const session = await auth()
    if (!session?.user) {
      return new Response('Unauthorized', { status: 401 })
    }

    const formData = await request.formData()
    const file = formData.get('file') as File

    if (!file) {
      return new Response(JSON.stringify({ error: 'No file provided' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      })
    }

    const buffer = Buffer.from(await file.arrayBuffer())
    const uuid = randomUUID()
    const year = new Date().getFullYear()
    const month = String(new Date().getMonth() + 1).padStart(2, '0')
    const dir = path.join(process.cwd(), 'public', 'uploads', String(year), month)
    const storedPath = `/uploads/${year}/${month}/${uuid}.webp`
    const absolutePath = path.join(dir)

    // Create directory if it doesn't exist
    await mkdir(absolutePath, { recursive: true })

    // Convert and optimize image
    const imagePath = path.join(absolutePath, `${uuid}.webp`)
    const metadata = await sharp(buffer)
      .webp({ quality: 85 })
      .toFile(imagePath)

    // Save to database
    const media = await prisma.mediaItem.create({
      data: {
        filename: file.name,
        storedPath,
        url: storedPath,
        mimeType: 'image/webp',
        size: metadata.size,
        width: metadata.width,
        height: metadata.height,
      },
    })

    return new Response(JSON.stringify({ success: true, url: media.url, id: media.id }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (error) {
    console.error('Upload error:', error)
    return new Response(JSON.stringify({ error: 'Upload failed' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}
