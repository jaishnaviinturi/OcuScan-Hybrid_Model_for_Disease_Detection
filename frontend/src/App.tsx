import React from 'react';
import { EyeIcon } from 'lucide-react';
import { AppProvider } from './context/AppContext';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  return (
    <AppProvider>
      <div id="top" className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-blue-50">
        <Header />
        <MainContent />
        <Footer />
      </div>
    </AppProvider>
  );
}

export default App;