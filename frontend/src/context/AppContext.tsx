import React, { createContext, useContext, useState, ReactNode } from 'react';

type PredictionResult = {
  predicted_class: string;
  timestamp?: Date;
} | null;

interface AppContextType {
  selectedImage: File | null;
  setSelectedImage: (file: File | null) => void;
  previewUrl: string | null;
  setPreviewUrl: (url: string | null) => void;
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
  error: string | null;
  setError: (error: string | null) => void;
  prediction: PredictionResult;
  setPrediction: (result: PredictionResult) => void;
  predictionHistory: PredictionResult[];
  addToPredictionHistory: (result: PredictionResult) => void;
  resetState: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [prediction, setPrediction] = useState<PredictionResult>(null);
  const [predictionHistory, setPredictionHistory] = useState<PredictionResult[]>([]);

  const addToPredictionHistory = (result: PredictionResult) => {
    if (result) {
      const historyItem = {
        ...result,
        timestamp: new Date()
      };
      setPredictionHistory(prev => [historyItem, ...prev.slice(0, 9)]);
    }
  };

  const resetState = () => {
    setSelectedImage(null);
    setPreviewUrl(null);
    setIsLoading(false);
    setError(null);
    setPrediction(null);
  };

  return (
    <AppContext.Provider
      value={{
        selectedImage,
        setSelectedImage,
        previewUrl,
        setPreviewUrl,
        isLoading,
        setIsLoading,
        error,
        setError,
        prediction,
        setPrediction,
        predictionHistory,
        addToPredictionHistory,
        resetState
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};