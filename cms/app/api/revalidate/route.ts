import { revalidateTag } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const secret = req.headers.get('x-revalidate-secret')

    if (secret !== process.env.REVALIDATE_SECRET) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { tags } = await req.json()

    if (!tags || !Array.isArray(tags)) {
      return NextResponse.json(
        { error: 'Invalid tags parameter' },
        { status: 400 }
      )
    }

    tags.forEach((tag: string) => {
      revalidateTag(tag)
    })

    return NextResponse.json({
      revalidated: true,
      tags,
    })
  } catch (error) {
    return NextResponse.json(
      { error: 'Revalidation failed' },
      { status: 500 }
    )
  }
}
