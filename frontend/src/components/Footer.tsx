import React from 'react';
import { EyeIcon } from 'lucide-react';

const Footer: React.FC = () => {
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
    <footer className="bg-gray-800 text-white py-8 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <EyeIcon className="h-6 w-6 text-blue-400" />
              <h2 className="text-xl font-semibold">
                <span className="text-blue-400">Eye</span>Diagnostic
              </h2>
            </div>
            <p className="text-gray-300">
              AI-powered eye disease detection for screening and educational purposes.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('top')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('conditions')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Eye Conditions
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Important Notice</h3>
            <p className="text-gray-300">
              This tool is for educational purposes only and is not intended to provide medical advice.
              Always consult with a qualified healthcare provider for proper diagnosis and treatment.
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>© {new Date().getFullYear()} EyeDiagnostic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;