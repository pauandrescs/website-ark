import { queryBlog } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // 1. Asegurar columnas de monetización y workflow
    await queryBlog(`ALTER TABLE posts ADD COLUMN IF NOT EXISTS status VARCHAR(20) DEFAULT 'review'`);
    await queryBlog(`ALTER TABLE posts ADD COLUMN IF NOT EXISTS is_premium TINYINT(1) DEFAULT 0`);
    await queryBlog(`ALTER TABLE posts ADD COLUMN IF NOT EXISTS price DECIMAL(10,2) DEFAULT 0.00`);
    await queryBlog(`ALTER TABLE posts ADD COLUMN IF NOT EXISTS author_email VARCHAR(255)`);
    
    // 2. FORZAR PUBLICACIÓN: Asegurar que los posts actuales sean visibles
    await queryBlog(`UPDATE posts SET status = 'published' WHERE status IS NULL OR status = 'review'`);

    return NextResponse.json({ 
      success: true, 
      message: 'Database structure repaired and all posts published.',
      timestamp: new Date().toISOString()
    });
  } catch (err) {
    console.error('Diag error:', err);
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
