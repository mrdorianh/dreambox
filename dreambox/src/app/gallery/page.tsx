import React from 'react';
import Link from 'next/link';

// Mock data for dream videos
const dreamVideos = [
  {
    id: 1,
    title: "Flying over a crystal city",
    description: "I dreamt I was flying over an ancient city made of crystal, with rainbow bridges connecting floating islands...",
    contributor: "@dreamuser1",
    videoUrl: "/videos/dream1.mp4",
    thumbnail: "/images/dream1-thumb.jpg",
    views: 12500,
    likes: 3200,
    date: "2023-06-15"
  },
  {
    id: 2,
    title: "Forest with talking trees",
    description: "In my dream, I was walking through a forest where the trees had faces and whispered secrets as I passed by...",
    contributor: "@dreamuser2",
    videoUrl: "/videos/dream2.mp4",
    thumbnail: "/images/dream2-thumb.jpg",
    views: 8700,
    likes: 1900,
    date: "2023-06-14"
  },
  {
    id: 3,
    title: "Bioluminescent ocean",
    description: "I dreamed I was underwater in a bioluminescent ocean, swimming with creatures that looked like constellations...",
    contributor: "@dreamuser3",
    videoUrl: "/videos/dream3.mp4",
    thumbnail: "/images/dream3-thumb.jpg",
    views: 15300,
    likes: 4100,
    date: "2023-06-13"
  },
  {
    id: 4,
    title: "Mountain of books",
    description: "I was climbing a mountain made entirely of books, and each time I opened one, I was transported into its story...",
    contributor: "@dreamuser4",
    videoUrl: "/videos/dream4.mp4",
    thumbnail: "/images/dream4-thumb.jpg",
    views: 9200,
    likes: 2700,
    date: "2023-06-12"
  },
  {
    id: 5,
    title: "Dancing with shadows",
    description: "I was in a moonlit ballroom, dancing with shadows that took the forms of people from my past and future...",
    contributor: "@dreamuser5",
    videoUrl: "/videos/dream5.mp4",
    thumbnail: "/images/dream5-thumb.jpg",
    views: 11800,
    likes: 3500,
    date: "2023-06-11"
  },
  {
    id: 6,
    title: "City of hourglasses",
    description: "I wandered through a city where buildings were giant hourglasses, and time flowed differently in each district...",
    contributor: "@dreamuser6",
    videoUrl: "/videos/dream6.mp4",
    thumbnail: "/images/dream6-thumb.jpg",
    views: 7600,
    likes: 1800,
    date: "2023-06-10"
  }
];

export default function Gallery() {
  return (
    <div className="container mx-auto px-4 py-12">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Dream Gallery</h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Explore the fascinating world of dreams visualized through AI. Each video represents someone's actual dream experience.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {dreamVideos.map((dream) => (
          <div key={dream.id} className="card overflow-hidden flex flex-col">
            <div className="relative aspect-video bg-gray-700 overflow-hidden">
              {/* This would be a video thumbnail in a real implementation */}
              <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                Video Thumbnail Placeholder
              </div>
              <div className="absolute bottom-0 right-0 bg-black bg-opacity-70 px-2 py-1 text-sm">
                {Math.floor(dream.views / 1000)}K views
              </div>
              <button className="absolute inset-0 w-full h-full flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-indigo-600 bg-opacity-80 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </button>
            </div>
            
            <div className="p-4 flex-grow">
              <h2 className="text-xl font-bold mb-2">{dream.title}</h2>
              <p className="text-gray-300 mb-4 line-clamp-2">{dream.description}</p>
              <div className="flex justify-between items-center text-sm text-gray-400">
                <span>Dream by {dream.contributor}</span>
                <span>{dream.date}</span>
              </div>
            </div>
            
            <div className="px-4 pb-4 flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-red-500 mr-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                  <span>{Math.floor(dream.likes / 100) / 10}K</span>
                </div>
                <button className="text-indigo-400 hover:text-indigo-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z" />
                  </svg>
                </button>
              </div>
              <Link href={`/dream/${dream.id}`} className="text-indigo-400 hover:text-indigo-300">
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <button className="btn-primary">
          Load More Dreams
        </button>
      </div>
    </div>
  );
} 