# DreamBox System Architecture

```
┌─────────────────────────────────────────────────────────────────────────┐
│                              DreamBox System                             │
└─────────────────────────────────────────────────────────────────────────┘
                                     │
                                     ▼
┌─────────────────────────────────────────────────────────────────────────┐
│                        Core Processing Pipeline                          │
├─────────────┬─────────────────┬──────────────────┬─────────────────────┤
│  Dream      │   Content       │   Content        │   TikTok            │
│  Collection │   Generation    │   Management     │   Integration       │
│  System     │   System        │   System         │   System            │
└─────┬───────┴────────┬────────┴────────┬─────────┴────────┬────────────┘
      │                │                 │                  │
      ▼                ▼                 ▼                  ▼
┌──────────────┐ ┌────────────────┐ ┌───────────────┐ ┌──────────────────┐
│ Comment      │ │ OpenAI Sora    │ │ Content Queue │ │ TikTok API       │
│ Monitoring   │ │ API            │ │ & Scheduler   │ │ Client           │
└──────┬───────┘ └────────┬───────┘ └───────┬───────┘ └────────┬─────────┘
       │                  │                 │                   │
       │                  ▼                 │                   │
       │         ┌────────────────┐        │                   │
       │         │ Video          │        │                   │
       │         │ Processing     │        │                   │
       │         └────────┬───────┘        │                   │
       │                  │                │                   │
       ▼                  ▼                ▼                   ▼
┌─────────────────────────────────────────────────────────────────────────┐
│                               Data Layer                                 │
├────────────────┬───────────────┬──────────────────┬────────────────────┤
│ Dream Database │ Video Assets  │ User Engagement  │ System Metrics     │
│                │ Repository    │ Tracker          │ & Analytics        │
└────────────────┴───────────────┴──────────────────┴────────────────────┘
                                     │
                                     ▼
┌─────────────────────────────────────────────────────────────────────────┐
│                           Safety & Oversight                             │
├────────────────┬──────────────────┬─────────────────┬──────────────────┤
│ Content        │ User Privacy     │ Platform        │ Human Review     │
│ Moderation     │ Protection       │ Compliance      │ Interface        │
└────────────────┴──────────────────┴─────────────────┴──────────────────┘
```

## Component Descriptions

### 1. Dream Collection System
- Scans comments on TikTok videos for dream descriptions
- Extracts and processes natural language into structured dream data
- Prioritizes dreams based on potential visual appeal, engagement, and policy compliance
- Handles user attribution and consent tracking

### 2. Content Generation System
- Interfaces with OpenAI's Sora or similar text-to-video models
- Transforms processed dream descriptions into optimized generation prompts
- Manages generation parameters for visual style consistency
- Handles generation failures and quality assurance

### 3. Content Management System
- Maintains queue of pending content
- Schedules posts based on optimal timing algorithms
- Generates captions, hashtags, and metadata
- Applies branding elements and attribution overlays

### 4. TikTok Integration System
- Secure API connection to TikTok
- Handles posting of videos and metadata
- Monitors upload success and platform feedback
- Manages rate limiting and API compliance

### 5. Data Layer
- Centralized storage for all system components
- Maintains relationship between dreams, videos, and engagement
- Stores performance metrics and learning models
- Provides data retrieval services for all system components

### 6. Safety & Oversight
- Manages content filtering and policy enforcement
- Ensures privacy protection and legal compliance
- Provides interfaces for human review of edge cases
- Maintains audit logs for system actions

## Data Flow

1. Comments containing dreams are identified and extracted from TikTok
2. Dream descriptions are processed, filtered, and prioritized
3. Selected dreams are transformed into optimized generation prompts
4. Prompts are sent to Sora API for video generation
5. Generated videos are processed with branding and attribution
6. Completed videos are queued with generated metadata
7. Videos are posted to TikTok according to schedule
8. Performance data is collected and fed back into the system
9. System continuously learns and optimizes based on engagement data 