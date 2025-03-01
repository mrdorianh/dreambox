# DreamBox API Keys Setup Guide

This guide provides detailed instructions on how to obtain and configure the required API keys for the DreamBox application. You'll need API keys for:

1. OpenAI (for dream enhancement and content moderation)
2. TikTok (for social media integration)
3. MongoDB (for database storage)

## Setting Up .env.local

Create a `.env.local` file in the root of your project (dreambox directory) with the following format:

```
# API Keys
OPENAI_API_KEY=sk-your-openai-key-here
TIKTOK_API_KEY=your-tiktok-api-key
TIKTOK_API_SECRET=your-tiktok-api-secret

# Database
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/dreambox

# Other Settings
NEXT_PUBLIC_SHOW_KEYS=false
```

## OpenAI API Key

The OpenAI API key is required for dream enhancement, prompt generation for Sora, and content moderation.

### Obtaining an OpenAI API Key:

1. Go to [OpenAI Platform](https://platform.openai.com/signup) and create an account if you don't have one.
2. After logging in, navigate to [API Keys](https://platform.openai.com/account/api-keys).
3. Click "Create new secret key" and provide a name for your key (e.g., "DreamBox").
4. Copy the key (it starts with "sk-") and keep it secure. Note that OpenAI will only show it once.
5. Add the key to your `.env.local` file:
   ```
   OPENAI_API_KEY=sk-your-openai-key-here
   ```

### OpenAI API Pricing:

- OpenAI's API is a paid service that charges based on token usage.
- For the DreamBox project, you'll primarily be using GPT-4 for enhancing dream descriptions.
- Check the [OpenAI Pricing Page](https://openai.com/pricing) for current rates.
- Set up usage limits in your OpenAI account to avoid unexpected charges.

## TikTok API Keys

TikTok API keys are required for integrating with TikTok's platform to post videos and manage content.

### Obtaining TikTok API Keys:

1. Create a TikTok developer account at [TikTok for Developers](https://developers.tiktok.com/).
2. Log in and navigate to the [Developer Portal](https://developers.tiktok.com/console).
3. Click "Create App" and complete the application creation process.
4. Select appropriate permissions for your app:
   - Video Upload
   - Video Management
   - Comment Management
   - User Info Basic
5. After approval, copy your API Key and API Secret from the app details page.
6. Add them to your `.env.local` file:
   ```
   TIKTOK_API_KEY=your-tiktok-api-key
   TIKTOK_API_SECRET=your-tiktok-api-secret
   ```

### TikTok API Requirements:

- TikTok's developer program has requirements for app approval.
- You may need to provide detailed information about your application and how it will use the API.
- Review TikTok's [Developer Terms](https://developers.tiktok.com/terms) for usage restrictions.

## MongoDB Database

A MongoDB database is required for storing dream data, user information, and application state.

### Setting Up MongoDB:

#### Option 1: MongoDB Atlas (Cloud)

1. Create an account on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register).
2. Create a new cluster (the free tier is sufficient for development).
3. Set up a database user with a secure password.
4. Configure network access (IP whitelist) or set it to allow access from anywhere for development.
5. Get your connection string by clicking "Connect" > "Connect your application".
6. Add the connection string to your `.env.local` file:
   ```
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/dreambox
   ```
   - Replace `username`, `password`, and `cluster` with your specific details.
   - The `dreambox` at the end is the database name.

#### Option 2: Local MongoDB Installation

1. [Install MongoDB Community Edition](https://www.mongodb.com/docs/manual/installation/) on your development machine.
2. Start the MongoDB service.
3. Add the connection string to your `.env.local` file:
   ```
   MONGODB_URI=mongodb://localhost:27017/dreambox
   ```

## Verifying Your Configuration

After setting up all API keys:

1. Start the DreamBox application:
   ```
   npm run dev
   ```
2. Navigate to the Settings page at `/dashboard/settings` to verify that all API keys are properly configured.
3. Use the test pages at `/test/openai` and `/test` to verify that the OpenAI and TikTok integrations are working correctly.

## Security Best Practices

- **Never commit your `.env.local` file to version control.**
- The `.gitignore` file should already exclude `.env.local`.
- For production deployment, use environment variables in your hosting platform (Vercel, AWS, etc.) rather than in files.
- Regularly rotate your API keys, especially if you suspect they may have been compromised.
- Set up usage limits and alerts for all API services to avoid unexpected charges.

## Troubleshooting

If you encounter issues with your API keys:

1. Verify that the keys are correctly formatted in your `.env.local` file.
2. Check that there are no extra spaces or characters in your keys.
3. Restart the development server after making changes to `.env.local`.
4. Check the console logs for any error messages related to API authentication.
5. Verify that your API keys have the necessary permissions and aren't restricted by IP or usage limits.

## Next Steps

Once your API keys are configured:

1. Start exploring DreamBox's features on the dashboard.
2. Test the dream enhancement, prompt generation, and moderation features.
3. Test the TikTok integration for posting and retrieving content.
4. Begin setting up your production environment for deployment.

For additional help, refer to the API documentation for [OpenAI](https://platform.openai.com/docs/api-reference) and [TikTok](https://developers.tiktok.com/doc). 