import React from 'react';
import { EyeIcon } from 'lucide-react';

const Header: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      if (id === 'conditions') {
        const tabButton = document.querySelector('[data-tab="conditions"]') as HTMLButtonElement;
        if (tabButton) {
          tabButton.click();
        }
      }
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-white shadow-sm py-4 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <EyeIcon className="h-8 w-8 text-blue-600" />
          <h1 className="text-2xl font-semibold text-gray-800">
            <span className="text-blue-600">Eye</span>Diagnostic
          </h1>
        </div>
        <nav className="hidden md:flex space-x-8">
          <button
            onClick={() => scrollToSection('top')}
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('conditions')}
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            Eye Conditions
          </button>
        </nav>
        <button className="md:hidden text-gray-700">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;