import axios from 'axios';
import crypto from 'crypto';

// TikTok API credentials from environment variables
const TIKTOK_API_KEY = process.env.TIKTOK_API_KEY;
const TIKTOK_API_SECRET = process.env.TIKTOK_API_SECRET;

// Base URL for TikTok API
const TIKTOK_API_BASE_URL = 'https://open.tiktokapis.com/v2';

/**
 * Generate signature for TikTok API requests
 * @param params Request parameters
 * @param method HTTP method
 * @param url API endpoint URL
 * @returns Signature for the request
 */
function generateSignature(params: Record<string, any>, method: string, url: string): string {
  const timestamp = Math.floor(Date.now() / 1000);
  const nonce = crypto.randomBytes(16).toString('hex');
  
  // Sort parameters alphabetically
  const sortedParams = Object.keys(params)
    .sort()
    .reduce((result: Record<string, any>, key) => {
      result[key] = params[key];
      return result;
    }, {});
  
  // Create string to sign
  const stringToSign = `${method}\n${url}\n${timestamp}\n${nonce}\n${JSON.stringify(sortedParams)}\n`;
  
  // Generate HMAC-SHA256 signature
  const signature = crypto
    .createHmac('sha256', TIKTOK_API_SECRET || '')
    .update(stringToSign)
    .digest('hex');
  
  return signature;
}

/**
 * Get videos from the TikTok account
 * @param count Number of videos to retrieve
 * @param cursor Pagination cursor
 * @returns List of videos
 */
export async function getVideos(count = 10, cursor = ''): Promise<any> {
  try {
    const endpoint = '/video/list/';
    const params = {
      count,
      cursor,
    };
    
    const signature = generateSignature(params, 'GET', endpoint);
    
    const response = await axios.get(`${TIKTOK_API_BASE_URL}${endpoint}`, {
      params,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${TIKTOK_API_KEY}`,
        'X-Signature': signature,
      },
    });
    
    return response.data.data;
  } catch (error) {
    console.error('Error fetching TikTok videos:', error);
    throw error;
  }
}

/**
 * Get comments for a specific video
 * @param videoId ID of the video
 * @param count Number of comments to retrieve
 * @param cursor Pagination cursor
 * @returns List of comments
 */
export async function getComments(videoId: string, count = 50, cursor = ''): Promise<any> {
  try {
    const endpoint = '/video/comment/list/';
    const params = {
      video_id: videoId,
      count,
      cursor,
    };
    
    const signature = generateSignature(params, 'GET', endpoint);
    
    const response = await axios.get(`${TIKTOK_API_BASE_URL}${endpoint}`, {
      params,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${TIKTOK_API_KEY}`,
        'X-Signature': signature,
      },
    });
    
    return response.data.data.comments;
  } catch (error) {
    console.error('Error fetching TikTok comments:', error);
    throw error;
  }
}

/**
 * Post a video to TikTok
 * @param videoPath Path to the video file
 * @param caption Caption for the video
 * @returns Response from TikTok API
 */
export async function postVideo(videoPath: string, caption: string): Promise<any> {
  try {
    // Step 1: Initialize upload
    const initEndpoint = '/video/upload/';
    const initParams = {
      source_info: {
        source: 'PULL',
        video_url: videoPath,
      },
    };
    
    const initSignature = generateSignature(initParams, 'POST', initEndpoint);
    
    const initResponse = await axios.post(
      `${TIKTOK_API_BASE_URL}${initEndpoint}`,
      initParams,
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${TIKTOK_API_KEY}`,
          'X-Signature': initSignature,
        },
      }
    );
    
    const uploadId = initResponse.data.data.upload_id;
    
    // Step 2: Publish video
    const publishEndpoint = '/video/publish/';
    const publishParams = {
      upload_id: uploadId,
      caption: caption,
      privacy_level: 'PUBLIC',
      disable_comment: false,
      disable_duet: false,
      disable_stitch: false,
    };
    
    const publishSignature = generateSignature(publishParams, 'POST', publishEndpoint);
    
    const publishResponse = await axios.post(
      `${TIKTOK_API_BASE_URL}${publishEndpoint}`,
      publishParams,
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${TIKTOK_API_KEY}`,
          'X-Signature': publishSignature,
        },
      }
    );
    
    return publishResponse.data.data;
  } catch (error) {
    console.error('Error posting video to TikTok:', error);
    throw error;
  }
}

/**
 * Check if a comment contains a dream description
 * @param text Comment text
 * @returns Whether the comment likely contains a dream description
 */
export function isDreamDescription(text: string): boolean {
  // Simple check for dream-related keywords
  const dreamKeywords = ['dream', 'dreamt', 'dreamed', 'nightmare', 'sleep', 'vision'];
  const containsDreamKeyword = dreamKeywords.some(keyword => 
    text.toLowerCase().includes(keyword)
  );
  
  // Check for minimum length to ensure sufficient detail
  const hasMinimumLength = text.length > 50;
  
  return containsDreamKeyword && hasMinimumLength;
}

export default {
  getVideos,
  getComments,
  postVideo,
  isDreamDescription,
}; 