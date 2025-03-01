# DreamBox Administrator Guide

## System Overview

DreamBox is an AI-powered system that transforms user-submitted dreams into visual content for TikTok. The system operates through a combination of automated processes and human oversight, collecting dreams from TikTok comments, enhancing them through AI, generating videos, and posting back to TikTok.

## Getting Started

### Prerequisites

- Node.js (v18.x or later)
- MongoDB (v5.x or later)
- OpenAI API key
- TikTok Developer account with API access
- AWS account (optional, for production deployment)

### Initial Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/username/dreambox.git
   cd dreambox/dreambox
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   
   Create a `.env.local` file with the following variables:
   ```
   # MongoDB Connection
   MONGODB_URI=mongodb://localhost:27017/dreambox
   
   # OpenAI Integration
   OPENAI_API_KEY=your-openai-api-key
   
   # TikTok API
   TIKTOK_CLIENT_KEY=your-tiktok-client-key
   TIKTOK_CLIENT_SECRET=your-tiktok-client-secret
   TIKTOK_AUTH_TOKEN=your-tiktok-auth-token
   
   # Application Settings
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ADMIN_USERNAME=admin
   ADMIN_PASSWORD=secure-password
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Access the admin dashboard**
   
   Navigate to `http://localhost:3000/dashboard` and login with your admin credentials.

## System Architecture

### Database Structure (MongoDB)

DreamBox uses MongoDB to store several types of data:

1. **Dreams Collection**
   - Original dream descriptions from users
   - Enhanced dream descriptions
   - Generation prompts
   - Status information (pending, approved, rejected, generated, posted)
   - User attribution
   - Timestamps

2. **Videos Collection**
   - References to generated videos
   - Associated dream IDs
   - TikTok post information
   - Performance metrics
   - Timestamps

3. **Users Collection**
   - TikTok usernames of contributors
   - Contribution history
   - Preference settings

4. **Analytics Collection**
   - Engagement metrics
   - Content performance data
   - System health information

### Component Integration

The system integrates multiple components:

1. **Web Application (Next.js)**
   - User-facing website
   - Admin dashboard
   - API endpoints for internal services

2. **AI Services (OpenAI)**
   - Dream description enhancement
   - Content moderation
   - Video prompt generation

3. **TikTok Integration**
   - Comment scanning for dream collection
   - Video posting
   - Engagement tracking

4. **Background Processing**
   - Scheduled jobs for comment scanning
   - Content generation queue
   - Posting scheduler

## Admin Dashboard

The admin dashboard is your primary interface for managing the DreamBox system. Here's what you can do:

### Dream Management

1. **Dream Queue**
   - View all collected dreams
   - Filter by status (pending, approved, rejected)
   - Approve or reject dreams
   - Edit enhanced descriptions and prompts

2. **Generation Queue**
   - Monitor dreams awaiting video generation
   - View generation status
   - Retry failed generations

3. **Posting Schedule**
   - View upcoming posts
   - Adjust posting times
   - Cancel scheduled posts

### Content Moderation

1. **Content Policies**
   - Configure automatic filtering rules
   - Set up keyword blocklists
   - Adjust sensitivity levels

2. **Manual Review**
   - Review flagged content
   - Override automatic decisions
   - Document moderation decisions

### Analytics Dashboard

1. **Content Performance**
   - View engagement metrics by video
   - Track trending themes
   - Analyze user demographics

2. **System Health**
   - Monitor API usage
   - Track processing times
   - View error logs

### System Configuration

1. **API Settings**
   - Configure API keys
   - Set rate limits
   - Test API connections

2. **Scheduling Parameters**
   - Set comment scanning frequency
   - Adjust posting frequency
   - Configure time zones

## Daily Operations

### Starting the System

1. **Start the web application**
   ```bash
   cd /path/to/dreambox/dreambox
   npm run start
   ```

2. **Start the background processor**
   ```bash
   cd /path/to/dreambox/dreambox
   npm run start:worker
   ```

### Monitoring Operations

The system should run automatically once started, but you should regularly:

1. **Check the dream queue**
   - Review new dreams (2-3 times daily)
   - Approve quality submissions
   - Reject inappropriate content

2. **Monitor content generation**
   - Ensure videos are being generated
   - Check for failed generations
   - Review video quality

3. **Review scheduled posts**
   - Ensure content is being posted
   - Check posting frequency
   - Adjust schedule if needed

4. **Check TikTok engagement**
   - Monitor comments for new dreams
   - Track video performance
   - Identify popular themes

### Handling Issues

1. **API Failures**
   - Check API keys and credentials
   - Verify network connectivity
   - Restart services if necessary

2. **Content Generation Issues**
   - Review error logs
   - Check for problematic prompts
   - Test API connections

3. **Database Issues**
   - Verify MongoDB connection
   - Check disk space
   - Backup data regularly

## Deployment Guide

### Development Environment

The development setup runs locally and uses mock data where needed:

```bash
npm run dev
```

### Production Deployment

For production deployment, we recommend:

1. **AWS EC2 or Similar**
   - t3.medium instance or larger
   - Ubuntu Server 20.04 LTS

2. **MongoDB Atlas**
   - Dedicated cluster
   - Backup enabled

3. **Process Management**
   - PM2 for Node.js process management
   - Configured for automatic restarts

4. **Deployment Script**
   ```bash
   # Install dependencies
   npm install
   
   # Build the application
   npm run build
   
   # Start with PM2
   pm2 start npm --name "dreambox" -- start
   pm2 start npm --name "dreambox-worker" -- run start:worker
   ```

5. **Monitoring**
   - Set up Cloudwatch or similar monitoring
   - Configure alerts for system failures
   - Regular log rotation

## Security Considerations

1. **API Credentials**
   - Rotate API keys regularly
   - Use environment variables
   - Never commit secrets to code

2. **User Data Protection**
   - Implement data retention policies
   - Anonymize sensitive information
   - Provide opt-out mechanisms

3. **Access Control**
   - Use strong admin passwords
   - Implement 2FA for dashboard access
   - Limit dashboard access to trusted IPs

## Troubleshooting

### Common Issues

1. **"No dreams being collected"**
   - Check TikTok API credentials
   - Verify comment scanning is running
   - Check for TikTok API rate limiting

2. **"Videos not being generated"**
   - Check OpenAI API key
   - Verify sufficient API credits
   - Check for malformed prompts

3. **"Videos not posting to TikTok"**
   - Verify TikTok API credentials
   - Check TikTok rate limits
   - Ensure video format compliance

4. **"Server crashes frequently"**
   - Check server resources
   - Review error logs
   - Adjust concurrency settings

### Getting Help

If you encounter persistent issues:

1. Check the GitHub repository for known issues
2. Review the technical documentation
3. Contact support at support@dreambox.ai

## Conclusion

The DreamBox system is designed to operate with minimal intervention once properly configured. Regular monitoring and content moderation are the main ongoing requirements. As the system collects more data, it will continuously improve its ability to generate engaging content from user dreams.