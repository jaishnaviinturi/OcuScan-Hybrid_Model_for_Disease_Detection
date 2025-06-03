import React, { useCallback, useRef } from 'react';
import { UploadCloud, X, Image as ImageIcon } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { predictDisease } from '../services/apiService';

const ImageUploader: React.FC = () => {
  const {
    selectedImage,
    setSelectedImage,
    previewUrl,
    setPreviewUrl,
    isLoading,
    setIsLoading,
    setError,
    setPrediction,
    addToPredictionHistory,
    resetState
  } = useAppContext();

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      processFile(file);
    }
  };

  const handleDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      if (e.dataTransfer.files && e.dataTransfer.files[0]) {
        const file = e.dataTransfer.files[0];
        processFile(file);
      }
    },
    []
  );

  const processFile = (file: File) => {
    // Check if file is an image
    if (!file.type.match('image.*')) {
      setError('Please upload an image file');
      return;
    }

    setSelectedImage(file);
    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target) {
        setPreviewUrl(e.target.result as string);
      }
    };
    reader.readAsDataURL(file);
    setError(null);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleRemoveImage = () => {
    resetState();
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSubmit = async () => {
    if (!selectedImage) {
      setError('Please select an image first');
      return;
    }

    setIsLoading(true);
    setError(null);
    setPrediction(null);

    try {
      const result = await predictDisease(selectedImage);
      setPrediction(result);
      addToPredictionHistory(result);
    } catch (err) {
      setError('An error occurred during prediction. Please try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-lg">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Upload Eye Image</h3>

      {!previewUrl ? (
        <div
          onClick={() => fileInputRef.current?.click()}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          className="border-2 border-dashed border-blue-300 rounded-lg p-8 text-center cursor-pointer hover:bg-blue-50 transition-colors"
        >
          <UploadCloud className="w-16 h-16 text-blue-500 mx-auto mb-4" />
          <p className="text-gray-700 mb-2">Drag and drop your image here or click to select</p>
          <p className="text-sm text-gray-500">Supports JPG, PNG files</p>
          <input
            type="file"
            accept="image/*"
            className="hidden"
            ref={fileInputRef}
            onChange={handleFileChange}
          />
        </div>
      ) : (
        <div className="relative mt-4">
          <div className="relative overflow-hidden rounded-lg aspect-video bg-gray-100 flex items-center justify-center">
            <img
              src={previewUrl}
              alt="Eye preview"
              className="object-contain max-h-[300px] w-full"
            />
            <button
              onClick={handleRemoveImage}
              className="absolute top-2 right-2 bg-gray-800 bg-opacity-70 text-white rounded-full p-1 hover:bg-opacity-90 transition-opacity"
              aria-label="Remove image"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <p className="mt-2 text-sm text-gray-600 truncate">
            {selectedImage?.name}
          </p>
        </div>
      )}

      <div className="mt-6">
        <button
          onClick={handleSubmit}
          disabled={!selectedImage || isLoading}
          className={`w-full py-3 px-4 rounded-lg font-medium text-white ${
            !selectedImage || isLoading
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-blue-600 hover:bg-blue-700 transition-colors'
          }`}
        >
          {isLoading ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white\" xmlns="http://www.w3.org/2000/svg\" fill="none\" viewBox="0 0 24 24">
                <circle className="opacity-25\" cx="12\" cy="12\" r="10\" stroke="currentColor\" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Analyzing...
            </span>
          ) : (
            'Analyze Image'
          )}
        </button>
      </div>
    </div>
  );
};

export default ImageUploader;