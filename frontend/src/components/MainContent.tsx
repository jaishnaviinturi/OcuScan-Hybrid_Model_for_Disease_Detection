import React from 'react';
import ImageUploader from './ImageUploader';
import ResultsSection from './ResultsSection';
import InfoSection from './InfoSection';
import { useAppContext } from '../context/AppContext';

const MainContent: React.FC = () => {
  const { prediction } = useAppContext();

  return (
    <main className="flex-grow py-8 px-4 sm:px-6 max-w-7xl mx-auto w-full">
      <section className="mb-10 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          AI-Powered Eye Disease Detection
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Upload an image of an eye fundus to receive an instant AI-powered assessment.
          Our advanced algorithm can detect various ocular conditions with high accuracy.
        </p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <ImageUploader />
        <ResultsSection />
      </div>

      <InfoSection />
    </main>
  );
};

export default MainContent;