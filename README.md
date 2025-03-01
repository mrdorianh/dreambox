# DreamBox: AI-Powered Dream Visualization Platform

![DreamBox Logo](https://placeholder-for-dreambox-logo.com)

> *"Bringing dreams to life, one TikTok at a time."*

## Project Overview

DreamBox is an innovative AI system that autonomously manages a TikTok account dedicated to visualizing people's dreams. The system leverages OpenAI's Sora (or similar text-to-video AI models) to transform written dream descriptions into captivating visual content, creating a self-sustaining content generation loop that turns viewer engagement into new content.

### Key Features

- **Automated Dream Collection**: Extracts dream descriptions from TikTok comments
- **AI-Powered Visualization**: Transforms dreams into high-quality videos using Sora
- **Autonomous Publishing**: Schedules and posts content at optimal times
- **User Attribution**: Credits dream contributors in generated videos
- **Engagement Analytics**: Learns from viewer response to improve content
- **Content Safety**: Multi-layered approach to ensure appropriate content

## Project Documentation

This repository contains comprehensive documentation for developing and deploying the DreamBox system:

1. [**Development Prompt**](./docs/DreamBox_Development_Prompt.md) - Detailed prompt for AI-assisted development
2. [**System Architecture**](./docs/DreamBox_System_Architecture.md) - Visual and descriptive overview of system components
3. [**Technical Implementation Guide**](./docs/DreamBox_Technical_Implementation.md) - Detailed technical specifications and code examples
4. [**Ethical Framework**](./docs/DreamBox_Ethical_Considerations.md) - Ethical guidelines, policies, and safety measures
5. [**Admin Guide**](./docs/DreamBox_Admin_Guide.md) - Guide for system administrators
6. [**API Keys Setup Guide**](./docs/API_KEYS_GUIDE.md) - Detailed instructions for obtaining and configuring API keys

## Getting Started

### Prerequisites

- Access to OpenAI's Sora API or similar text-to-video model
- TikTok Developer Account with API access
- Node.js (v16+) and npm/yarn
- MongoDB database (local or Atlas)
- FFmpeg for video processing (optional)

### Quick Start

1. Clone this repository
   ```
   git clone https://github.com/your-username/dreambox.git
   cd dreambox
   ```

2. Install dependencies
   ```
   npm install
   ```

3. Configure API keys and environment variables
   ```
   cp .env.example .env.local
   ```
   
   Then edit the `.env.local` file with your API keys:
   - OpenAI API Key (for dream enhancement and moderation)
   - TikTok API Key and Secret (for TikTok integration)
   - MongoDB URI (for database connection)

4. Start the development server
   ```
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

### API Key Setup

DreamBox requires several API keys to function properly:

#### OpenAI API Key
Required for dream enhancement, prompt generation, and content moderation.
1. Create an account at [OpenAI Platform](https://platform.openai.com)
2. Navigate to API Keys section and create a new secret key
3. Add to your `.env.local` file as `OPENAI_API_KEY=sk-...`

#### TikTok API Access
Required for TikTok integration, video posting, and comment monitoring.
1. Create a developer account at [TikTok for Developers](https://developers.tiktok.com)
2. Create a new application and obtain API credentials
3. Add to your `.env.local` file as `TIKTOK_API_KEY=...` and `TIKTOK_API_SECRET=...`

#### MongoDB Database
Required for storing dreams, metadata, and application state.
1. Set up a local MongoDB instance or create a MongoDB Atlas account
2. Create a new cluster and database
3. Add the connection string to your `.env.local` file as `MONGODB_URI=mongodb+srv://...`

For more detailed setup instructions, visit the application's Settings page after starting the development server.

### Development Roadmap

The DreamBox system is designed to be developed in phases:

- **Phase 1 (Foundation)**: Basic infrastructure, API integrations, manual oversight
- **Phase 2 (Automation)**: Automated comment scanning, scheduling, analytics
- **Phase 3 (Intelligence)**: Advanced ML, optimization, content selection
- **Phase 4 (Scaling)**: Performance optimization, multi-account support, cross-platform expansion

## Technology Stack

- **Frontend**: Next.js, React, TailwindCSS
- **Backend**: Node.js, Express, Next.js API Routes
- **Database**: MongoDB with Mongoose
- **Cloud Infrastructure**: AWS (Lambda, S3, SQS)
- **AI & ML**: OpenAI API, Sora (when available)
- **Video Processing**: FFmpeg
- **Deployment**: Vercel, Docker

## Project Structure

```
dreambox/
├── src/                  # Source code
│   ├── app/              # Next.js app directory
│   │   ├── api/          # API endpoints
│   │   ├── dashboard/    # Dashboard pages
│   │   ├── gallery/      # Dream gallery pages
│   │   ├── test/         # API testing pages
│   ├── components/       # React components
│   ├── lib/              # Utility libraries
│   │   ├── openai.ts     # OpenAI integration
│   │   ├── tiktok.ts     # TikTok API integration
│   │   ├── mongodb.ts    # Database connection
│   ├── models/           # MongoDB models
│   ├── types/            # TypeScript type definitions
├── public/               # Static assets
├── docs/                 # Documentation
├── .env.example          # Environment variables template
└── package.json          # Project dependencies and scripts
```

## Contributing

We welcome contributions to the DreamBox project. Please read our [Contributing Guidelines](./CONTRIBUTING.md) and [Code of Conduct](./CODE_OF_CONDUCT.md) before submitting pull requests.

## Ethical Considerations

DreamBox is committed to ethical AI use and responsible content creation. Our comprehensive [Ethical Framework](./docs/DreamBox_Ethical_Considerations.md) details our approach to:

- User consent and privacy
- Content safety and moderation
- Transparency and truthfulness
- Inclusivity and accessibility
- Data protection and security

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

## Support

For questions, feature requests, or support, please open an issue in the GitHub repository or contact the project maintainers at support@dreambox-ai.example.com.

---

*Note: DreamBox is a conceptual system design. Implementation would require access to the OpenAI Sora API, which is not yet publicly available, as well as compliance with TikTok's Terms of Service regarding automated account management.* 