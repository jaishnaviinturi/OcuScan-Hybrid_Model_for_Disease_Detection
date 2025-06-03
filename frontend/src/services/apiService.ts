import { PredictionResponse } from '../types';

// Replace with your actual API endpoint
const API_URL = 'http://localhost:5000/api/predict';

export const predictDisease = async (imageFile: File): Promise<PredictionResponse> => {
  const formData = new FormData();
  formData.append('image', imageFile);

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`Server responded with ${response.status}: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error predicting disease:', error);
    throw error;
  }
};