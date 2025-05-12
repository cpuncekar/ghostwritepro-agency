import React from 'react';
import { PenTool } from 'lucide-react';

const Header: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-white shadow-sm py-4 sticky top-0 z-10">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <PenTool className="h-6 w-6 text-blue-600" />
          <h1 className="text-xl font-semibold text-gray-900">
            <span className="text-blue-600">Ghost</span>WritePro
            <span className="hidden sm:inline-block text-sm ml-1 font-medium text-gray-500">Agency Edition</span>
          </h1>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <button 
            onClick={() => scrollToSection('features')}
            className="text-sm font-medium text-gray-600 hover:text-blue-600 transition"
          >
            Features
          </button>
          <button 
            onClick={() => scrollToSection('pricing')}
            className="text-sm font-medium text-gray-600 hover:text-blue-600 transition"
          >
            Pricing
          </button>
          <button 
            onClick={() => scrollToSection('resources')}
            className="text-sm font-medium text-gray-600 hover:text-blue-600 transition"
          >
            Resources
          </button>
          <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-md transition shadow-sm">
            Try Pro
          </button>
        </div>
        <button className="md:hidden text-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;