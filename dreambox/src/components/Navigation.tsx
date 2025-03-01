import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navigation: React.FC = () => {
  return (
    <nav className="bg-gray-800 bg-opacity-90 backdrop-blur-sm fixed w-full z-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative w-8 h-8">
              <Image 
                src="/logo.svg" 
                alt="DreamBox Logo" 
                fill
                className="object-contain"
              />
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              DreamBox
            </span>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-300 hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/gallery" className="text-gray-300 hover:text-white transition-colors">
              Dream Gallery
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
              About
            </Link>
            <div className="relative group">
              <button className="text-gray-300 hover:text-white transition-colors flex items-center">
                Dashboard
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg py-1 z-10 hidden group-hover:block">
                <Link href="/dashboard" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700">
                  Main Dashboard
                </Link>
                <Link href="/dashboard/settings" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700">
                  Settings
                </Link>
              </div>
            </div>
            <div className="relative group">
              <button className="text-gray-300 hover:text-white transition-colors flex items-center">
                Test
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg py-1 z-10 hidden group-hover:block">
                <Link href="/test" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700">
                  TikTok Integration
                </Link>
                <Link href="/test/openai" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700">
                  OpenAI Integration
                </Link>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <a 
              href="https://tiktok.com/@dreambox" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white"
              aria-label="TikTok"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            </a>
            
            <button className="md:hidden text-gray-300 hover:text-white" aria-label="Menu">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu - hidden by default */}
      <div className="hidden md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="/" className="block px-3 py-2 text-gray-300 hover:text-white">
            Home
          </Link>
          <Link href="/gallery" className="block px-3 py-2 text-gray-300 hover:text-white">
            Dream Gallery
          </Link>
          <Link href="/about" className="block px-3 py-2 text-gray-300 hover:text-white">
            About
          </Link>
          <Link href="/dashboard" className="block px-3 py-2 text-gray-300 hover:text-white">
            Dashboard
          </Link>
          <Link href="/dashboard/settings" className="block px-3 py-2 text-gray-300 hover:text-white">
            Settings
          </Link>
          <Link href="/test" className="block px-3 py-2 text-gray-300 hover:text-white">
            TikTok Integration Test
          </Link>
          <Link href="/test/openai" className="block px-3 py-2 text-gray-300 hover:text-white">
            OpenAI Integration Test
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 