import { NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import { join } from 'path';
import { randomUUID } from 'crypto'; // Usamos la función nativa de Node.js

export async function POST(request) {
  try {
    const formData = await request.formData();
    const file = formData.get('file');

    if (!file) {
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Create unique filename using native randomUUID
    const fileExt = file.name.split('.').pop();
    const fileName = `${randomUUID()}.${fileExt}`;
    
    // Ensure uploads directory exists
    const uploadDir = join(process.cwd(), 'public', 'uploads');
    try {
      await mkdir(uploadDir, { recursive: true });
    } catch (err) {
      // Directory might already exist
    }

    const path = join(uploadDir, fileName);
    await writeFile(path, buffer);
    
    // Return the public URL
    const publicUrl = `/uploads/${fileName}`;
    
    return NextResponse.json({ url: publicUrl });
  } catch (err) {
    console.error('Upload error:', err);
    return NextResponse.json({ error: 'Upload failed' }, { status: 500 });
  }
}
