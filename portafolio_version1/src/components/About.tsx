import React from 'react';
import { Code2, Palette, Rocket } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Code2 className="text-indigo-600" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Clean Code</h3>
            <p className="text-gray-600">I write clean, maintainable, and efficient code following best practices.</p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Palette className="text-indigo-600" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Design Focus</h3>
            <p className="text-gray-600">Creating beautiful and intuitive user interfaces is my passion.</p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Rocket className="text-indigo-600" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Problem Solver</h3>
            <p className="text-gray-600">I love tackling complex problems and finding elegant solutions.</p>
          </div>
        </div>
      </div>
    </section>
  );
}