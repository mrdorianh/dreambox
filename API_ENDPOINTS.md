# DreamBox API Endpoints

This document outlines the API endpoints available in the DreamBox application for processing TikTok comments, extracting dreams, and generating videos.

## Comments API

### Fetch Comments
`POST /api/comments/fetch`

Fetches comments from TikTok videos, identifies potential dream descriptions, and saves them to the database.

**Request Body:**
```json
{
  "videoId": "optional-specific-video-id",
  "lookbackHours": 24
}
```

**Response:**
```json
{
  "success": true,
  "message": "Fetched 5 new dream descriptions from comments",
  "dreamCount": 5,
  "dreamIds": ["dream-id-1", "dream-id-2", "..."],
  "errors": ["Optional error messages if any occurred"]
}
```

## Dreams API

### Process Dream
`POST /api/dreams/process`

Processes a single dream by moderating content, enhancing the description, and generating a prompt for video creation.

**Request Body:**
```json
{
  "dreamText": "I had a dream about flying over mountains...",
  "userId": "user-id",
  "username": "username",
  "sourceCommentId": "comment-id",
  "sourceVideoId": "video-id"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Dream submitted successfully and approved for generation",
  "dreamId": "dream-id",
  "status": "approved"
}
```

### Batch Process Dreams
`POST /api/dreams/batch-process`

Processes multiple pending dreams in a batch, enhancing descriptions and preparing them for video generation.

**Request Body:**
```json
{
  "batchSize": 5,
  "specificIds": ["optional-dream-id-1", "optional-dream-id-2"]
}
```

**Response:**
```json
{
  "success": true,
  "message": "Processed 3 dreams, skipped 1, failed 1",
  "processed": 3,
  "skipped": 1,
  "failed": 1,
  "dreamIds": ["processed-dream-id-1", "processed-dream-id-2", "processed-dream-id-3"]
}
```

## Videos API

### Generate Videos (Batch)
`POST /api/videos/generate-batch`

Generates videos for a batch of approved dreams.

**Request Body:**
```json
{
  "batchSize": 3,
  "specificDreamIds": ["optional-dream-id-1", "optional-dream-id-2"]
}
```

**Response:**
```json
{
  "success": true,
  "message": "Generated 2 videos, skipped 1, failed 0",
  "generated": 2,
  "skipped": 1,
  "failed": 0,
  "videoIds": ["video-id-1", "video-id-2"]
}
```

### Publish Video
`POST /api/videos/publish`

Publishes a generated video to TikTok.

**Request Body:**
```json
{
  "videoId": "video-id"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Video published successfully to TikTok",
  "tikTokVideoId": "tiktok-video-id",
  "tikTokVideoUrl": "https://tiktok.com/video/tiktok-video-id"
}
```

## Workflow

The typical workflow for processing dreams from TikTok comments is:

1. Fetch comments from TikTok videos using `/api/comments/fetch`
2. Process pending dreams in batches using `/api/dreams/batch-process`
3. Generate videos for approved dreams using `/api/videos/generate-batch`
4. Publish videos to TikTok using `/api/videos/publish`

This workflow can be automated with scheduled tasks or triggered manually through an admin interface. 