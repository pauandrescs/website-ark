import { queryBlog } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const { slug } = await req.json();
    if (!slug) return NextResponse.json({ error: 'Missing slug' }, { status: 400 });

    // Incrementar vistas de forma segura
    await queryBlog('UPDATE posts SET views = views + 1 WHERE slug = ?', [slug]);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('View increment API error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
