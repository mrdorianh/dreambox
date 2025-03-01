'use client';

import React, { useState } from 'react';
import { enhanceDreamDescription, generateSoraPrompt, moderateContent } from '@/lib/openai';

export default function OpenAITestPage() {
  const [dreamText, setDreamText] = useState('');
  const [enhancedDream, setEnhancedDream] = useState('');
  const [soraPrompt, setSoraPrompt] = useState('');
  const [moderationResult, setModerationResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('enhance');
  const [error, setError] = useState<string | null>(null);

  const handleEnhanceDream = async () => {
    try {
      setLoading(true);
      setError(null);
      const enhanced = await enhanceDreamDescription(dreamText);
      setEnhancedDream(enhanced);
    } catch (error) {
      console.error('Error enhancing dream:', error);
      setError('Error enhancing dream. Check console for details.');
    } finally {
      setLoading(false);
    }
  };

  const handleGeneratePrompt = async () => {
    try {
      setLoading(true);
      setError(null);
      const prompt = await generateSoraPrompt(dreamText);
      setSoraPrompt(prompt);
    } catch (error) {
      console.error('Error generating prompt:', error);
      setError('Error generating prompt. Check console for details.');
    } finally {
      setLoading(false);
    }
  };

  const handleModerateContent = async () => {
    try {
      setLoading(true);
      setError(null);
      const result = await moderateContent(dreamText);
      setModerationResult(result);
    } catch (error) {
      console.error('Error moderating content:', error);
      setError('Error moderating content. Check console for details.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">OpenAI Testing Page</h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Test OpenAI integration for dream processing
        </p>
      </header>

      {!process.env.OPENAI_API_KEY && (
        <div className="max-w-4xl mx-auto mb-8">
          <div className="bg-yellow-800 text-yellow-100 p-4 rounded-md">
            <p className="font-semibold">⚠️ OpenAI API Key Not Configured</p>
            <p className="text-sm mt-1">
              The OpenAI API key is not configured. The application will use mock responses for development purposes.
              To use the actual OpenAI API, please set the OPENAI_API_KEY in your .env.local file.
            </p>
          </div>
        </div>
      )}

      {error && (
        <div className="max-w-4xl mx-auto mb-8">
          <div className="bg-red-800 text-red-100 p-4 rounded-md">
            <p className="font-semibold">Error</p>
            <p className="text-sm mt-1">{error}</p>
          </div>
        </div>
      )}

      <div className="max-w-4xl mx-auto">
        <div className="card mb-12">
          <div className="flex border-b border-gray-700 mb-6">
            <button
              className={`px-4 py-2 ${activeTab === 'enhance' ? 'border-b-2 border-indigo-500 text-white' : 'text-gray-400'}`}
              onClick={() => setActiveTab('enhance')}
            >
              Enhance Dream
            </button>
            <button
              className={`px-4 py-2 ${activeTab === 'prompt' ? 'border-b-2 border-indigo-500 text-white' : 'text-gray-400'}`}
              onClick={() => setActiveTab('prompt')}
            >
              Generate Prompt
            </button>
            <button
              className={`px-4 py-2 ${activeTab === 'moderate' ? 'border-b-2 border-indigo-500 text-white' : 'text-gray-400'}`}
              onClick={() => setActiveTab('moderate')}
            >
              Moderate Content
            </button>
          </div>

          <div className="space-y-4">
            <textarea
              value={dreamText}
              onChange={(e) => setDreamText(e.target.value)}
              className="w-full input h-40"
              placeholder="Enter a dream description to process..."
            />
            
            {activeTab === 'enhance' && (
              <div>
                <button 
                  onClick={handleEnhanceDream} 
                  className="btn-primary"
                  disabled={loading}
                >
                  {loading ? 'Processing...' : 'Enhance Dream'}
                </button>
                
                {enhancedDream && (
                  <div className="mt-4">
                    <h3 className="font-semibold mb-2">Enhanced Dream:</h3>
                    <div className="p-4 bg-gray-700 rounded-md">
                      {enhancedDream}
                    </div>
                  </div>
                )}
              </div>
            )}
            
            {activeTab === 'prompt' && (
              <div>
                <button 
                  onClick={handleGeneratePrompt} 
                  className="btn-primary"
                  disabled={loading}
                >
                  {loading ? 'Processing...' : 'Generate Sora Prompt'}
                </button>
                
                {soraPrompt && (
                  <div className="mt-4">
                    <h3 className="font-semibold mb-2">Sora Prompt:</h3>
                    <div className="p-4 bg-gray-700 rounded-md">
                      {soraPrompt}
                    </div>
                  </div>
                )}
              </div>
            )}
            
            {activeTab === 'moderate' && (
              <div>
                <button 
                  onClick={handleModerateContent} 
                  className="btn-primary"
                  disabled={loading}
                >
                  {loading ? 'Processing...' : 'Moderate Content'}
                </button>
                
                {moderationResult && (
                  <div className="mt-4">
                    <h3 className="font-semibold mb-2">Moderation Result:</h3>
                    <div className="p-4 bg-gray-700 rounded-md">
                      <p>Flagged: {moderationResult.flagged ? 'Yes' : 'No'}</p>
                      {moderationResult.reason && <p>Reason: {moderationResult.reason}</p>}
                      
                      {moderationResult.categories && (
                        <div className="mt-2">
                          <p className="font-semibold">Categories:</p>
                          <pre className="text-xs mt-1 overflow-x-auto">
                            {JSON.stringify(moderationResult.categories, null, 2)}
                          </pre>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 