
import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { BusinessForm } from '@/components/BusinessForm';
import { BusinessMetricsCard } from '@/components/BusinessMetricsCard';
import { LoadingSpinner } from '@/components/LoadingSpinner';
import { BusinessData, BusinessMetrics } from '@/types/business';
import { businessService } from '@/services/businessApi';
import { toast } from 'sonner';

const Index = () => {
  const [businessData, setBusinessData] = useState<BusinessData | null>(null);
  const [metrics, setMetrics] = useState<BusinessMetrics | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleFormSubmit = async (data: BusinessData) => {
    setIsLoading(true);
    setBusinessData(data);
    setMetrics(null);

    try {
      console.log('Submitting business data:', data);
      const result = await businessService.getBusinessData(data);
      setMetrics(result);
      toast.success(`Analytics loaded for ${data.name}!`);
    } catch (error) {
      console.error('Failed to fetch business data:', error);
      toast.error('Failed to load business analytics. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleHeadlineUpdate = (newHeadline: string) => {
    if (metrics) {
      setMetrics({ ...metrics, headline: newHeadline });
      toast.success('SEO headline updated successfully!');
    }
  };

  const handleReset = () => {
    setBusinessData(null);
    setMetrics(null);
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-green-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Introduction */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Unlock Your Business Potential
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get instant insights into your business performance with our advanced analytics platform. 
              Discover your Google ratings, SEO opportunities, and growth potential in seconds.
            </p>
          </div>

          {/* Main Content */}
          {!businessData && !isLoading && (
            <BusinessForm onSubmit={handleFormSubmit} isLoading={isLoading} />
          )}

          {isLoading && <LoadingSpinner />}

          {businessData && metrics && !isLoading && (
            <div className="space-y-6">
              <BusinessMetricsCard
                business={businessData}
                metrics={metrics}
                onHeadlineUpdate={handleHeadlineUpdate}
              />
              
              <div className="text-center">
                <button
                  onClick={handleReset}
                  className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
                >
                  ← Analyze Another Business
                </button>
              </div>
            </div>
          )}

          {/* Features Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⭐</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Real-time Ratings</h3>
              <p className="text-gray-600 text-sm">Get instant access to your Google Business ratings and customer feedback.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">AI-Powered SEO</h3>
              <p className="text-gray-600 text-sm">Generate compelling headlines that boost your local search visibility.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Growth Analytics</h3>
              <p className="text-gray-600 text-sm">Track your business performance and identify growth opportunities.</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <span className="text-2xl">📈</span>
            <span className="text-xl font-bold">Business Growth Dashboard</span>
          </div>
          <p className="text-gray-400">
            Empowering local businesses with data-driven insights and SEO optimization.
          </p>
          <div className="mt-4 text-sm text-gray-500">
            Built with modern web technologies for optimal performance and user experience.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
