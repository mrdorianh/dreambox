import React from 'react';
import Link from 'next/link';

export default function Dashboard() {
  return (
    <div className="container mx-auto px-4 py-12">
      <header className="mb-12">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Dream Dashboard</h1>
          <Link href="/" className="btn-secondary">
            Back to Home
          </Link>
        </div>
        <p className="text-gray-300 mt-2">
          Manage and monitor dream collection, generation, and posting
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="card">
          <h2 className="text-xl font-semibold mb-2">Dream Queue</h2>
          <div className="text-4xl font-bold text-indigo-400 mb-4">24</div>
          <p className="text-gray-300">Dreams waiting to be processed</p>
        </div>
        <div className="card">
          <h2 className="text-xl font-semibold mb-2">Processing</h2>
          <div className="text-4xl font-bold text-yellow-400 mb-4">3</div>
          <p className="text-gray-300">Dreams currently being generated</p>
        </div>
        <div className="card">
          <h2 className="text-xl font-semibold mb-2">Ready to Post</h2>
          <div className="text-4xl font-bold text-green-400 mb-4">7</div>
          <p className="text-gray-300">Videos ready for TikTok</p>
        </div>
      </div>

      <div className="card mb-12">
        <h2 className="text-2xl font-bold mb-6">Recent Dreams</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="text-left py-3 px-4">Dream</th>
                <th className="text-left py-3 px-4">Contributor</th>
                <th className="text-left py-3 px-4">Status</th>
                <th className="text-left py-3 px-4">Date</th>
                <th className="text-left py-3 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {[
                { id: 1, dream: "Flying over a crystal city...", contributor: "@dreamuser1", status: "Generated", date: "2023-06-15" },
                { id: 2, dream: "Walking through a forest with talking trees...", contributor: "@dreamuser2", status: "Processing", date: "2023-06-14" },
                { id: 3, dream: "Swimming in a bioluminescent ocean...", contributor: "@dreamuser3", status: "Posted", date: "2023-06-13" },
                { id: 4, dream: "Climbing a mountain made of books...", contributor: "@dreamuser4", status: "Queued", date: "2023-06-12" },
                { id: 5, dream: "Dancing with shadows in a moonlit ballroom...", contributor: "@dreamuser5", status: "Queued", date: "2023-06-11" },
              ].map((item) => (
                <tr key={item.id} className="border-b border-gray-700 hover:bg-gray-700">
                  <td className="py-3 px-4">{item.dream}</td>
                  <td className="py-3 px-4">{item.contributor}</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      item.status === 'Posted' ? 'bg-green-900 text-green-300' :
                      item.status === 'Generated' ? 'bg-blue-900 text-blue-300' :
                      item.status === 'Processing' ? 'bg-yellow-900 text-yellow-300' :
                      'bg-gray-700 text-gray-300'
                    }`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">{item.date}</td>
                  <td className="py-3 px-4">
                    <button className="text-indigo-400 hover:text-indigo-300 mr-3">View</button>
                    <button className="text-indigo-400 hover:text-indigo-300">Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="card">
          <h2 className="text-2xl font-bold mb-6">TikTok Performance</h2>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <h3 className="text-gray-400 text-sm">Total Views</h3>
              <div className="text-2xl font-bold">1.2M</div>
            </div>
            <div>
              <h3 className="text-gray-400 text-sm">Total Likes</h3>
              <div className="text-2xl font-bold">245K</div>
            </div>
            <div>
              <h3 className="text-gray-400 text-sm">Total Comments</h3>
              <div className="text-2xl font-bold">32K</div>
            </div>
            <div>
              <h3 className="text-gray-400 text-sm">Total Shares</h3>
              <div className="text-2xl font-bold">18K</div>
            </div>
          </div>
          <div className="h-48 bg-gray-700 rounded-md flex items-center justify-center">
            <p className="text-gray-400">Performance Chart Placeholder</p>
          </div>
        </div>

        <div className="card">
          <h2 className="text-2xl font-bold mb-6">System Status</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-semibold">Dream Collection</h3>
                <p className="text-gray-400 text-sm">Last run: 5 minutes ago</p>
              </div>
              <span className="px-3 py-1 bg-green-900 text-green-300 rounded-full text-xs">Operational</span>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-semibold">Video Generation</h3>
                <p className="text-gray-400 text-sm">Last run: 12 minutes ago</p>
              </div>
              <span className="px-3 py-1 bg-green-900 text-green-300 rounded-full text-xs">Operational</span>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-semibold">TikTok Posting</h3>
                <p className="text-gray-400 text-sm">Last run: 2 hours ago</p>
              </div>
              <span className="px-3 py-1 bg-green-900 text-green-300 rounded-full text-xs">Operational</span>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-semibold">Content Moderation</h3>
                <p className="text-gray-400 text-sm">Last run: 15 minutes ago</p>
              </div>
              <span className="px-3 py-1 bg-yellow-900 text-yellow-300 rounded-full text-xs">Needs Attention</span>
            </div>
          </div>
          <div className="mt-6">
            <button className="btn-primary w-full">Run System Diagnostics</button>
          </div>
        </div>
      </div>
    </div>
  );
} 