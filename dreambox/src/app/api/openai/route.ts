import { NextResponse } from 'next/server';
import { enhanceDreamDescription, generateSoraPrompt, moderateContent } from '@/lib/openai';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { action, text } = body;
    
    if (!text) {
      return NextResponse.json(
        { error: 'Text is required' },
        { status: 400 }
      );
    }
    
    let result;
    
    switch (action) {
      case 'enhance':
        result = await enhanceDreamDescription(text);
        return NextResponse.json({ result });
        
      case 'prompt':
        result = await generateSoraPrompt(text);
        return NextResponse.json({ result });
        
      case 'moderate':
        result = await moderateContent(text);
        return NextResponse.json({ result });
        
      default:
        return NextResponse.json(
          { error: 'Invalid action. Use "enhance", "prompt", or "moderate".' },
          { status: 400 }
        );
    }
  } catch (error) {
    console.error('API route error:', error);
    return NextResponse.json(
      { error: 'Server error processing request' },
      { status: 500 }
    );
  }
} 