
import React from 'react';

export const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-500 rounded-full animate-spin"></div>
        <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-r-green-500 rounded-full animate-spin animate-reverse" style={{ animationDuration: '1.5s' }}></div>
      </div>
      <p className="mt-4 text-gray-600 font-medium">Analyzing your business data...</p>
      <p className="mt-1 text-sm text-gray-500">This may take a few moments</p>
    </div>
  );
};
