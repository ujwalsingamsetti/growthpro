
import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="w-full bg-gradient-to-r from-blue-600 via-blue-700 to-green-600 text-white py-6 px-4 shadow-lg">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
              <span className="text-2xl">📈</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold">Business Growth Dashboard</h1>
              <p className="text-blue-100 text-sm">SEO Analytics & Local Business Insights</p>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-6 text-sm">
            <div className="text-center">
              <div className="font-semibold">500+</div>
              <div className="text-blue-200">Businesses</div>
            </div>
            <div className="text-center">
              <div className="font-semibold">98%</div>
              <div className="text-blue-200">Accuracy</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
