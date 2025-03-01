import { NextRequest, NextResponse } from 'next/server';
import { isDreamDescription } from '@/lib/tiktok';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { text } = body;

    if (!text) {
      return NextResponse.json({ error: 'No text provided' }, { status: 400 });
    }

    const isDream = isDreamDescription(text);
    return NextResponse.json({ isDream });
  } catch (error) {
    console.error('Error processing TikTok test request:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
} 