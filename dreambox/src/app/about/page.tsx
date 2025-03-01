import React from 'react';
import Link from 'next/link';

export default function About() {
  return (
    <div className="container mx-auto px-4 py-12">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">About DreamBox</h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Bringing dreams to life through the power of AI
        </p>
      </header>

      <div className="max-w-4xl mx-auto">
        <div className="card mb-12">
          <h2 className="text-2xl font-bold mb-6">Our Mission</h2>
          <p className="text-gray-300 mb-4">
            DreamBox is an innovative AI system that creates and manages a TikTok account dedicated to visualizing people's dreams. 
            We leverage cutting-edge text-to-video AI models to transform written dream descriptions into captivating visual content, 
            which is then automatically posted to TikTok.
          </p>
          <p className="text-gray-300 mb-4">
            Our mission is to create a community-driven platform where people can share their dream experiences and see them come to life. 
            We believe that dreams are a universal human experience that can inspire creativity, foster connection, and provide insights 
            into our subconscious minds.
          </p>
          <p className="text-gray-300">
            By turning dreams into visual experiences, DreamBox creates a unique and engaging social media presence while pushing 
            the boundaries of automated content creation and community management.
          </p>
        </div>

        <div className="card mb-12">
          <h2 className="text-2xl font-bold mb-6">How It Works</h2>
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-16 flex-shrink-0 flex justify-center">
                <div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center text-xl font-bold">1</div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Dream Collection</h3>
                <p className="text-gray-300">
                  Our system monitors comments on our TikTok videos for dream descriptions. When you share your dream in the comments, 
                  our AI identifies it as a dream and adds it to our processing queue.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-16 flex-shrink-0 flex justify-center">
                <div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center text-xl font-bold">2</div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Dream Processing</h3>
                <p className="text-gray-300">
                  Our AI analyzes your dream description, enhances it for visual clarity, and transforms it into an optimized prompt 
                  for our video generation model. We carefully filter content to ensure it meets our community guidelines.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-16 flex-shrink-0 flex justify-center">
                <div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center text-xl font-bold">3</div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Video Generation</h3>
                <p className="text-gray-300">
                  Using advanced text-to-video AI technology, we transform your dream description into a visually stunning video. 
                  Each video is uniquely generated based on your specific dream narrative.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-16 flex-shrink-0 flex justify-center">
                <div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center text-xl font-bold">4</div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">TikTok Posting</h3>
                <p className="text-gray-300">
                  We automatically post your dream video to our TikTok account with proper attribution to you. Videos are scheduled 
                  for optimal posting times to maximize engagement and visibility.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="card mb-12">
          <h2 className="text-2xl font-bold mb-6">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Creativity</h3>
              <p className="text-gray-300">
                We celebrate the boundless creativity of the human mind through dreams and strive to faithfully represent 
                these unique visions.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Community</h3>
              <p className="text-gray-300">
                We foster a supportive community where people can share their dream experiences and connect through 
                common dream themes.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Ethical AI</h3>
              <p className="text-gray-300">
                We are committed to responsible AI use, with strong content moderation, user privacy protection, 
                and transparent attribution.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-gray-300">
                We continuously push the boundaries of what's possible with AI-generated content and automated 
                community management.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-6">Ready to Share Your Dream?</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Follow us on TikTok and share your dream in the comments of our videos. Our AI will transform your dream into a 
            captivating video and share it with our community.
          </p>
          <a 
            href="https://tiktok.com/@dreambox" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center"
          >
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
            </svg>
            Follow @dreambox on TikTok
          </a>
        </div>
      </div>
    </div>
  );
} 