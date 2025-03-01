'use client';

import React, { useState } from 'react';
import { isDreamDescription } from '@/lib/tiktok';

export default function TestPage() {
  const [dreamText, setDreamText] = useState('');
  const [result, setResult] = useState<{ isDream: boolean } | null>(null);

  const testDreamDetection = () => {
    const isDream = isDreamDescription(dreamText);
    setResult({ isDream });
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">API Testing Page</h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Test the DreamBox API utilities
        </p>
      </header>

      <div className="max-w-4xl mx-auto">
        <div className="card mb-12">
          <h2 className="text-2xl font-bold mb-6">Test Dream Detection</h2>
          <div className="space-y-4">
            <textarea
              value={dreamText}
              onChange={(e) => setDreamText(e.target.value)}
              className="w-full input h-40"
              placeholder="Enter a dream description to test..."
            />
            <button onClick={testDreamDetection} className="btn-primary">
              Test Dream Detection
            </button>
            
            {result && (
              <div className="mt-4 p-4 bg-gray-700 rounded-md">
                <p>Result: {result.isDream ? 'This is a dream description!' : 'This is not a dream description.'}</p>
                <p className="text-sm text-gray-400 mt-2">
                  Note: Dream detection requires dream-related keywords and a minimum length of 50 characters.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 