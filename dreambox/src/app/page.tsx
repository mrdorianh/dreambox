import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <header className="flex flex-col items-center justify-center text-center mb-16">
        <div className="relative w-24 h-24 mb-6">
          <Image 
            src="/logo.svg" 
            alt="DreamBox Logo" 
            fill
            className="object-contain"
            priority
          />
        </div>
        <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          DreamBox
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl">
          Transform your dreams into stunning videos with AI and share them on TikTok
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <div className="card">
          <h2 className="text-2xl font-bold mb-4">How It Works</h2>
          <ol className="space-y-4 text-gray-300">
            <li className="flex items-start">
              <span className="bg-indigo-600 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">1</span>
              <span>Share your dream in the comments of our TikTok videos</span>
            </li>
            <li className="flex items-start">
              <span className="bg-indigo-600 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">2</span>
              <span>Our AI transforms your dream into a captivating video</span>
            </li>
            <li className="flex items-start">
              <span className="bg-indigo-600 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">3</span>
              <span>We post your dream video on our TikTok with credit to you</span>
            </li>
            <li className="flex items-start">
              <span className="bg-indigo-600 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">4</span>
              <span>Watch your dream come to life and share it with friends</span>
            </li>
          </ol>
        </div>

        <div className="card">
          <h2 className="text-2xl font-bold mb-4">Featured Dreams</h2>
          <div className="space-y-4">
            <p className="text-gray-300 italic">
              "I dreamt I was flying over an ancient city made of crystal, with rainbow bridges connecting floating islands..."
            </p>
            <p className="text-gray-300 italic">
              "In my dream, I was walking through a forest where the trees had faces and whispered secrets as I passed by..."
            </p>
            <p className="text-gray-300 italic">
              "I dreamed I was underwater in a bioluminescent ocean, swimming with creatures that looked like constellations..."
            </p>
          </div>
          <div className="mt-6">
            <Link href="/gallery" className="btn-primary inline-block">
              View Dream Gallery
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold mb-6">Follow Us on TikTok</h2>
        <a 
          href="https://tiktok.com/@dreambox" 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn-primary inline-flex items-center"
        >
          <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
          </svg>
          @dreambox
        </a>
      </div>

      <footer className="mt-20 text-center text-gray-400 text-sm">
        <p>© {new Date().getFullYear()} DreamBox AI. All rights reserved.</p>
        <div className="mt-2 space-x-4">
          <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white">Terms of Service</Link>
          <Link href="/about" className="hover:text-white">About Us</Link>
        </div>
      </footer>
    </div>
  );
} 