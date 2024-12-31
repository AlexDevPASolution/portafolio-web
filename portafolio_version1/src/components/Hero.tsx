import React from 'react';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
          Hi, I'm <span className="text-indigo-600">Alex Padilla</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto">
          Full Stack Developer passionate about creating beautiful and functional web applications
        </p>
        <div className="flex justify-center gap-4">
          <a href="#contact" className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition">
            Contact Me
          </a>
          <a href="#projects" className="border-2 border-indigo-600 text-indigo-600 px-8 py-3 rounded-lg hover:bg-indigo-50 transition">
            View Projects
          </a>
        </div>
        <a href="#about" className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-gray-400" size={24} />
        </a>
      </div>
    </section>
  );
}