import { NextRequest, NextResponse } from 'next/server';
import { enhanceDreamDescription, generateSoraPrompt, moderateContent } from '@/lib/openai';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { text, action = 'enhance' } = body;

    if (!text) {
      return NextResponse.json({ error: 'No text provided' }, { status: 400 });
    }

    let result;
    switch (action) {
      case 'enhance':
        result = await enhanceDreamDescription(text);
        return NextResponse.json({ enhancedDream: result });
      
      case 'prompt':
        result = await generateSoraPrompt(text);
        return NextResponse.json({ soraPrompt: result });
      
      case 'moderate':
        result = await moderateContent(text);
        return NextResponse.json(result);
      
      default:
        return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
    }
  } catch (error) {
    console.error('Error processing OpenAI test request:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
} 