// App.js
import React from 'react';

function HomePage() {
  return (
    <div className="bg-gray-100">
      {/* Navbar */}
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-indigo-600">BlameItOn</h1>
          <nav className="space-x-4">
            <a href="#features" className="text-gray-700 hover:text-indigo-600">Features</a>
            <a href="#community" className="text-gray-700 hover:text-indigo-600">Community</a>
            <a href="#about" className="text-gray-700 hover:text-indigo-600">About</a>
            <a href="#contact" className="bg-indigo-600 text-white px-4 py-2 rounded shadow hover:bg-indigo-700">Get Started</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-indigo-600 text-white py-20 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4">Welcome to BlameItOn</h2>
          <p className="text-lg mb-6">Your ultimate excuse generator and creative hub.</p>
          <a href="#features" className="bg-white text-indigo-600 px-6 py-3 rounded shadow hover:bg-gray-200">Explore Features</a>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-10">Key Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white shadow p-6 rounded-lg text-center">
              <h4 className="text-xl font-semibold mb-4">Excuse Generator</h4>
              <p className="text-gray-600">Create tailored excuses for any situation with ease.</p>
            </div>
            <div className="bg-white shadow p-6 rounded-lg text-center">
              <h4 className="text-xl font-semibold mb-4">Community Sharing</h4>
              <p className="text-gray-600">Share and engage with others by exchanging excuses and stories.</p>
            </div>
            <div className="bg-white shadow p-6 rounded-lg text-center">
              <h4 className="text-xl font-semibold mb-4">Leaderboard & Titles</h4>
              <p className="text-gray-600">Earn points and compete for the top spot with creative excuses.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="bg-gray-200 py-20">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-10">Join Our Community</h3>
          <p className="text-center text-gray-700 mb-6">Be part of a fun, engaging, and creative space where ideas flourish.</p>
          <div className="flex justify-center">
            <a href="#" className="bg-indigo-600 text-white px-6 py-3 rounded shadow hover:bg-indigo-700">Get Involved</a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-10">About BlameItOn</h3>
          <p className="text-gray-600 text-center max-w-3xl mx-auto">
            BlameItOn is a platform built to combine creativity with technology. It’s a place to share ideas, participate in challenges, and explore the fun side of making excuses. Showcase your creativity, engage with others, and climb the leaderboard to become the ultimate excuse maker.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">&copy; 2025 BlameItOn. All rights reserved.</p>
          <p className="text-sm mt-2">Follow us on <a href="#" className="text-indigo-400 hover:underline">Twitter</a> | <a href="#" className="text-indigo-400 hover:underline">Instagram</a></p>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
