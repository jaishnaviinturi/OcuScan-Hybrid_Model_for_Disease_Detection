import React from 'react';
import { useAppContext } from '../context/AppContext';
import { AlertTriangle, CheckCircle, Activity } from 'lucide-react';
import { getConditionInfo } from '../utils/conditionInfo';

const ResultsSection: React.FC = () => {
  const { prediction, error, isLoading } = useAppContext();

  const renderContent = () => {
    if (error) {
      return (
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 flex items-start">
          <AlertTriangle className="text-red-500 w-6 h-6 mr-3 flex-shrink-0" />
          <div>
            <h4 className="font-medium text-red-800">Error</h4>
            <p className="text-red-700">{error}</p>
          </div>
        </div>
      );
    }

    if (isLoading) {
      return (
        <div className="bg-blue-50 border border-blue-100 rounded-lg p-6 animate-pulse">
          <div className="flex items-center space-x-4 mb-4">
            <div className="h-8 w-8 bg-blue-200 rounded-full"></div>
            <div className="h-6 w-1/2 bg-blue-200 rounded"></div>
          </div>
          <div className="space-y-3">
            <div className="h-4 bg-blue-200 rounded w-3/4"></div>
            <div className="h-4 bg-blue-200 rounded"></div>
            <div className="h-4 bg-blue-200 rounded w-5/6"></div>
          </div>
        </div>
      );
    }

    if (prediction) {
      const condition = prediction.predicted_class;
      const conditionInfo = getConditionInfo(condition);

      return (
        <div className={`border rounded-lg p-6 ${conditionInfo.bgColor} transition-all duration-500`}>
          <div className="flex items-start">
            {conditionInfo.icon}
            <div className="ml-4">
              <h4 className={`text-xl font-semibold ${conditionInfo.textColor}`}>
                {conditionInfo.title}
              </h4>
              <p className="text-gray-700 mt-1">{conditionInfo.description}</p>
              
              <div className="mt-4 p-4 bg-white bg-opacity-70 rounded-lg">
                <h5 className="font-medium text-gray-800 mb-2">Recommendations:</h5>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  {conditionInfo.recommendations.map((rec, index) => (
                    <li key={index}>{rec}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="border border-gray-200 rounded-lg p-6 bg-gray-50 text-center">
        <Activity className="w-12 h-12 text-gray-400 mx-auto mb-4" />
        <h4 className="text-lg font-medium text-gray-700 mb-2">No Analysis Yet</h4>
        <p className="text-gray-600">
          Upload an eye image and click "Analyze" to receive an AI-powered diagnosis.
        </p>
      </div>
    );
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-lg">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Analysis Results</h3>
      {renderContent()}
    </div>
  );
};

export default ResultsSection;