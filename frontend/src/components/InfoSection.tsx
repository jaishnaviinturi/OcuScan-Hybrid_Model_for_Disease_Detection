import React, { useState } from 'react';
import { 
  AlertCircle, 
  BarChart2, 
  Info
} from 'lucide-react';

const InfoSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('about');

  return (
    <section className="mt-16" id="about">
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="border-b border-gray-200">
          <nav className="flex -mb-px">
            <button
              onClick={() => setActiveTab('about')}
              className={`py-4 px-6 font-medium text-sm border-b-2 ${
                activeTab === 'about'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } transition-colors`}
            >
              <Info className="w-4 h-4 inline mr-2" />
              About This Tool
            </button>
            <button
              data-tab="conditions"
              onClick={() => setActiveTab('conditions')}
              className={`py-4 px-6 font-medium text-sm border-b-2 ${
                activeTab === 'conditions'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } transition-colors`}
              id="conditions"
            >
              <AlertCircle className="w-4 h-4 inline mr-2" />
              Eye Conditions
            </button>
            <button
              onClick={() => setActiveTab('accuracy')}
              className={`py-4 px-6 font-medium text-sm border-b-2 ${
                activeTab === 'accuracy'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } transition-colors`}
            >
              <BarChart2 className="w-4 h-4 inline mr-2" />
              Accuracy & Limitations
            </button>
          </nav>
        </div>

        <div className="p-6">
          {activeTab === 'about' && (
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800">About EyeDiagnostic</h3>
              <p className="text-gray-700">
                EyeDiagnostic is an AI-powered tool designed to help identify potential eye conditions from fundus photographs. 
                Our system uses advanced deep learning technology trained on thousands of medical images to provide 
                preliminary assessments of various ocular conditions.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-blue-800 font-medium">Important Note:</p>
                <p className="text-blue-700">
                  This tool is intended for educational and preliminary screening purposes only. 
                  It is not a substitute for professional medical advice, diagnosis, or treatment. 
                  Always seek the advice of your physician or other qualified health provider with any 
                  questions you may have regarding a medical condition.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'conditions' && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-800">Eye Conditions We Can Detect</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <h4 className="font-medium text-gray-800 mb-2">Cataract</h4>
                  <p className="text-gray-700 text-sm">
                    A clouding of the lens in the eye leading to a decrease in vision. 
                    It develops slowly and can affect one or both eyes.
                  </p>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <h4 className="font-medium text-gray-800 mb-2">Glaucoma</h4>
                  <p className="text-gray-700 text-sm">
                    A group of eye conditions that damage the optic nerve, often caused by 
                    abnormally high pressure in the eye.
                  </p>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <h4 className="font-medium text-gray-800 mb-2">Diabetic Retinopathy</h4>
                  <p className="text-gray-700 text-sm">
                    A diabetes complication that affects the eyes, caused by damage to the 
                    blood vessels of the light-sensitive tissue at the back of the eye (retina).
                  </p>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <h4 className="font-medium text-gray-800 mb-2">Age-related Macular Degeneration</h4>
                  <p className="text-gray-700 text-sm">
                    A common eye condition that affects the central part of your vision. It usually 
                    first affects people in their 50s and 60s.
                  </p>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <h4 className="font-medium text-gray-800 mb-2">Pathological Myopia</h4>
                  <p className="text-gray-700 text-sm">
                    A less common but more severe form of nearsightedness where the eyeball 
                    continues to elongate after normal growth has stopped.
                  </p>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <h4 className="font-medium text-gray-800 mb-2">Normal Fundus</h4>
                  <p className="text-gray-700 text-sm">
                    A healthy eye fundus with no detectable abnormalities or signs of pathology.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'accuracy' && (
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800">Accuracy & Limitations</h3>
              <p className="text-gray-700">
                Our AI model has been trained on a diverse dataset of fundus images and has demonstrated 
                strong performance in identifying common eye conditions. However, it's important to understand its limitations:
              </p>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>
                  <strong>Not a diagnostic tool:</strong> This application is intended as a screening aid, 
                  not as a replacement for professional diagnosis.
                </li>
                <li>
                  <strong>Image quality matters:</strong> Poor quality images, improper framing, or inadequate 
                  lighting can significantly affect the accuracy of results.
                </li>
                <li>
                  <strong>Limited conditions:</strong> Our model is trained to recognize specific conditions. 
                  It may not identify rare or uncommon eye diseases.
                </li>
                <li>
                  <strong>Continuous improvement:</strong> The AI system is constantly being improved with new data and 
                  research findings to enhance its accuracy and capabilities.
                </li>
              </ul>
              <div className="bg-yellow-50 p-4 rounded-lg mt-4">
                <p className="text-yellow-800">
                  Always consult with a healthcare professional for proper diagnosis and treatment of any eye condition.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default InfoSection;