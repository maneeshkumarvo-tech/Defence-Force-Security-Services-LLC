import React from 'react';

export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Welcome to Security Website
        </h1>
        <p className="text-xl text-slate-300 mb-8">
          A modern, secure, and scalable web template
        </p>
        <div className="flex gap-4 justify-center">
          <button className="px-6 py-3 bg-white text-slate-900 font-semibold rounded-lg hover:bg-slate-100 transition">
            Get Started
          </button>
          <button className="px-6 py-3 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-slate-900 transition">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}
