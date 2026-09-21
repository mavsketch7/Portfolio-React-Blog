import { revalidateTag } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

const ALLOWED_TAGS = new Set(['projects', 'posts', 'stacks'])

export async function POST(request: NextRequest) {
  const secret = request.headers.get('x-revalidate-secret')

  if (!process.env.REVALIDATE_SECRET || secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ error: 'Invalid secret' }, { status: 401 })
  }

  let tag: unknown
  try {
    ;({ tag } = await request.json())
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 })
  }

  if (typeof tag !== 'string' || !ALLOWED_TAGS.has(tag)) {
    return NextResponse.json({ error: 'Unknown tag' }, { status: 400 })
  }

  revalidateTag(tag, 'max')

  return NextResponse.json({ revalidated: true, tag, now: Date.now() })
}
