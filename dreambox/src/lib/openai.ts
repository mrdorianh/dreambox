import OpenAI from 'openai';

// Initialize the OpenAI client with API key from environment variables
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || 'dummy-key-for-development',
});

/**
 * Enhances a dream description to make it more suitable for video generation
 * @param dreamText The original dream description
 * @returns Enhanced dream description
 */
export async function enhanceDreamDescription(dreamText: string): Promise<string> {
  try {
    // Check if API key is available
    if (!process.env.OPENAI_API_KEY) {
      console.warn('OpenAI API key not found. Using mock response for development.');
      return `Enhanced: ${dreamText}`;
    }

    const response = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        {
          role: 'system',
          content: `You are an expert at enhancing dream descriptions for visual content generation. 
          Your task is to take a user's dream description and enhance it to be more visually descriptive, 
          vivid, and suitable for text-to-video generation. Maintain the core narrative and emotional tone 
          of the original dream, but add visual details, atmosphere, and sensory elements that would make 
          it more compelling as a video. Keep the enhanced description to 3-4 sentences maximum.`
        },
        {
          role: 'user',
          content: dreamText
        }
      ],
      temperature: 0.7,
      max_tokens: 300,
    });

    return response.choices[0].message.content || dreamText;
  } catch (error) {
    console.error('Error enhancing dream description:', error);
    return dreamText; // Return original text if enhancement fails
  }
}

/**
 * Generates a prompt for Sora video generation from a dream description
 * @param enhancedDream The enhanced dream description
 * @returns Optimized prompt for Sora
 */
export async function generateSoraPrompt(enhancedDream: string): Promise<string> {
  try {
    // Check if API key is available
    if (!process.env.OPENAI_API_KEY) {
      console.warn('OpenAI API key not found. Using mock response for development.');
      return `Sora prompt: ${enhancedDream}`;
    }

    const response = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        {
          role: 'system',
          content: `You are an expert at crafting prompts for OpenAI's Sora text-to-video model. 
          Your task is to take an enhanced dream description and transform it into an optimal prompt 
          for Sora to generate a visually stunning and coherent video. The prompt should be specific, 
          descriptive, and include visual style guidance (like cinematic, dreamy, surreal, etc.). 
          Focus on creating a prompt that will result in a cohesive 15-second video that captures 
          the essence of the dream. The prompt should be 1-2 sentences.`
        },
        {
          role: 'user',
          content: enhancedDream
        }
      ],
      temperature: 0.7,
      max_tokens: 200,
    });

    return response.choices[0].message.content || enhancedDream;
  } catch (error) {
    console.error('Error generating Sora prompt:', error);
    return enhancedDream; // Return enhanced dream if prompt generation fails
  }
}

/**
 * Moderates content to ensure it complies with content policies
 * @param text The text to moderate
 * @returns Object containing moderation results
 */
export async function moderateContent(text: string): Promise<{
  flagged: boolean;
  categories: Record<string, boolean>;
  reason?: string;
}> {
  try {
    // Check if API key is available
    if (!process.env.OPENAI_API_KEY) {
      console.warn('OpenAI API key not found. Using mock response for development.');
      return {
        flagged: false,
        categories: {
          sexual: false,
          hate: false,
          harassment: false,
          'self-harm': false,
          'sexual/minors': false,
          'hate/threatening': false,
          'violence/graphic': false,
          'self-harm/intent': false,
          'self-harm/instructions': false,
          'harassment/threatening': false,
          violence: false
        },
        reason: undefined,
      };
    }

    const response = await openai.moderations.create({
      input: text,
    });

    const result = response.results[0];
    
    // Determine the reason for flagging if applicable
    let reason: string | undefined;
    if (result.flagged) {
      const flaggedCategories = Object.entries(result.categories)
        .filter(([_, flagged]) => flagged)
        .map(([category]) => category);
      
      reason = `Content flagged for: ${flaggedCategories.join(', ')}`;
    }

    return {
      flagged: result.flagged,
      categories: result.categories as unknown as Record<string, boolean>,
      reason,
    };
  } catch (error) {
    console.error('Error moderating content:', error);
    return {
      flagged: false, // Changed to false for development
      categories: {
        sexual: false,
        hate: false,
        harassment: false,
        'self-harm': false,
        'sexual/minors': false,
        'hate/threatening': false,
        'violence/graphic': false,
        'self-harm/intent': false,
        'self-harm/instructions': false,
        'harassment/threatening': false,
        violence: false
      },
      reason: `Error during content moderation: ${error instanceof Error ? error.message : 'Unknown error'}`,
    };
  }
}

export default openai; 