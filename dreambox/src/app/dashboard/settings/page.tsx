'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function SettingsPage() {
  const router = useRouter();
  const [apiKeys, setApiKeys] = useState({
    openaiKey: process.env.NEXT_PUBLIC_SHOW_KEYS === 'true' ? process.env.OPENAI_API_KEY || '' : '•••••••••••••••••••••••••••••',
    tiktokApiKey: process.env.NEXT_PUBLIC_SHOW_KEYS === 'true' ? process.env.TIKTOK_API_KEY || '' : '•••••••••••••••••••••••••••••',
    tiktokApiSecret: process.env.NEXT_PUBLIC_SHOW_KEYS === 'true' ? process.env.TIKTOK_API_SECRET || '' : '•••••••••••••••••••••••••••••',
    mongodbUri: process.env.NEXT_PUBLIC_SHOW_KEYS === 'true' ? process.env.MONGODB_URI || '' : '•••••••••••••••••••••••••••••',
  });

  const [showInstructions, setShowInstructions] = useState(true);
  
  return (
    <div className="container mx-auto px-4 py-12">
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Settings</h1>
        <p className="text-gray-400">Manage your DreamBox configuration and API keys</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          <div className="card p-6">
            <h2 className="text-xl font-semibold mb-4">API Configuration</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">
                  OpenAI API Key
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={apiKeys.openaiKey}
                    readOnly
                    className="w-full input bg-gray-800 text-gray-300"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                    <span className="text-yellow-500 text-xs">Set in .env.local</span>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">
                  TikTok API Key
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={apiKeys.tiktokApiKey}
                    readOnly
                    className="w-full input bg-gray-800 text-gray-300"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                    <span className="text-yellow-500 text-xs">Set in .env.local</span>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">
                  TikTok API Secret
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={apiKeys.tiktokApiSecret}
                    readOnly
                    className="w-full input bg-gray-800 text-gray-300"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                    <span className="text-yellow-500 text-xs">Set in .env.local</span>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">
                  MongoDB URI
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={apiKeys.mongodbUri}
                    readOnly
                    className="w-full input bg-gray-800 text-gray-300"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                    <span className="text-yellow-500 text-xs">Set in .env.local</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card p-6">
            <h2 className="text-xl font-semibold mb-4">Application Status</h2>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span>OpenAI API Status</span>
                <span className={`px-2 py-1 rounded text-xs ${process.env.OPENAI_API_KEY ? 'bg-green-900 text-green-300' : 'bg-red-900 text-red-300'}`}>
                  {process.env.OPENAI_API_KEY ? 'Configured' : 'Not Configured'}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span>TikTok API Status</span>
                <span className={`px-2 py-1 rounded text-xs ${(process.env.TIKTOK_API_KEY && process.env.TIKTOK_API_SECRET) ? 'bg-green-900 text-green-300' : 'bg-red-900 text-red-300'}`}>
                  {(process.env.TIKTOK_API_KEY && process.env.TIKTOK_API_SECRET) ? 'Configured' : 'Not Configured'}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span>MongoDB Status</span>
                <span className={`px-2 py-1 rounded text-xs ${process.env.MONGODB_URI ? 'bg-green-900 text-green-300' : 'bg-red-900 text-red-300'}`}>
                  {process.env.MONGODB_URI ? 'Configured' : 'Not Configured'}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="card p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Setup Instructions</h2>
              <button 
                onClick={() => setShowInstructions(!showInstructions)}
                className="text-sm text-indigo-400 hover:text-indigo-300"
              >
                {showInstructions ? 'Hide' : 'Show'}
              </button>
            </div>
            
            {showInstructions && (
              <div className="prose prose-invert prose-sm max-w-none">
                <p>To configure DreamBox, you need to set up the following API keys in your <code>.env.local</code> file:</p>
                
                <h3>1. OpenAI API Key</h3>
                <p>Required for dream enhancement and content moderation.</p>
                <ol>
                  <li>Go to <a href="https://platform.openai.com/account/api-keys" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300">OpenAI API Keys</a></li>
                  <li>Create a new API key</li>
                  <li>Add it to your <code>.env.local</code> file as <code>OPENAI_API_KEY=your_key_here</code></li>
                </ol>
                
                <h3>2. TikTok API Keys</h3>
                <p>Required for TikTok integration and video posting.</p>
                <ol>
                  <li>Go to <a href="https://developers.tiktok.com/console" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300">TikTok for Developers</a></li>
                  <li>Create a new application</li>
                  <li>Add the API key and secret to your <code>.env.local</code> file as:
                    <br /><code>TIKTOK_API_KEY=your_key_here</code>
                    <br /><code>TIKTOK_API_SECRET=your_secret_here</code>
                  </li>
                </ol>
                
                <h3>3. MongoDB URI</h3>
                <p>Required for database storage.</p>
                <ol>
                  <li>Set up a MongoDB Atlas account or use a local MongoDB instance</li>
                  <li>Add the connection string to your <code>.env.local</code> file as <code>MONGODB_URI=your_connection_string</code></li>
                </ol>
                
                <div className="bg-gray-800 p-3 rounded mt-4">
                  <h4 className="text-sm font-semibold">Example .env.local file</h4>
                  <pre className="text-xs overflow-x-auto whitespace-pre p-2">
{`# API Keys
OPENAI_API_KEY=sk-...
TIKTOK_API_KEY=...
TIKTOK_API_SECRET=...

# Database
MONGODB_URI=mongodb+srv://...

# Other Settings
NEXT_PUBLIC_SHOW_KEYS=false`}
                  </pre>
                </div>
              </div>
            )}
          </div>
          
          <div className="card p-6">
            <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
            <div className="space-y-2">
              <Link href="/test/openai" className="block p-2 hover:bg-gray-700 rounded">
                OpenAI Test Page
              </Link>
              <Link href="/test" className="block p-2 hover:bg-gray-700 rounded">
                TikTok Test Page
              </Link>
              <Link href="/dashboard" className="block p-2 hover:bg-gray-700 rounded">
                Dream Dashboard
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 