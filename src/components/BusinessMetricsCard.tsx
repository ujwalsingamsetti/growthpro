
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BusinessData, BusinessMetrics } from '@/types/business';
import { businessService } from '@/services/businessApi';
import { Edit } from 'lucide-react';

interface BusinessMetricsCardProps {
  business: BusinessData;
  metrics: BusinessMetrics;
  onHeadlineUpdate: (newHeadline: string) => void;
}

export const BusinessMetricsCard: React.FC<BusinessMetricsCardProps> = ({
  business,
  metrics,
  onHeadlineUpdate,
}) => {
  const [isRegenerating, setIsRegenerating] = useState(false);

  const handleRegenerateHeadline = async () => {
    setIsRegenerating(true);
    try {
      const newHeadline = await businessService.regenerateHeadline(business);
      onHeadlineUpdate(newHeadline);
    } catch (error) {
      console.error('Failed to regenerate headline:', error);
    } finally {
      setIsRegenerating(false);
    }
  };

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <div className="flex items-center">
        {/* Full stars */}
        {[...Array(fullStars)].map((_, i) => (
          <span key={`full-${i}`} className="text-yellow-400 text-lg">★</span>
        ))}
        {/* Half star */}
        {hasHalfStar && <span className="text-yellow-400 text-lg">☆</span>}
        {/* Empty stars */}
        {[...Array(emptyStars)].map((_, i) => (
          <span key={`empty-${i}`} className="text-gray-300 text-lg">☆</span>
        ))}
      </div>
    );
  };

  return (
    <Card className="w-full max-w-2xl mx-auto bg-gradient-to-br from-white via-blue-50 to-green-50 border-0 shadow-xl animate-in fade-in duration-500">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-2xl font-bold text-gray-800">
              {business.name}
            </CardTitle>
            <CardDescription className="text-gray-600 flex items-center mt-1">
              📍 {business.location}
            </CardDescription>
          </div>
          <Badge variant="secondary" className="bg-green-100 text-green-800 font-medium">
            Live Data
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Rating and Reviews */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold text-gray-700">Google Rating</h3>
              <span className="text-2xl font-bold text-blue-600">{metrics.rating}</span>
            </div>
            <div className="flex items-center">
              {renderStars(metrics.rating)}
              <span className="ml-2 text-sm text-gray-500">({metrics.rating}/5)</span>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold text-gray-700">Total Reviews</h3>
              <span className="text-2xl font-bold text-green-600">{metrics.reviews}</span>
            </div>
            <p className="text-sm text-gray-500">Customer feedback</p>
          </div>
        </div>

        {/* SEO Headline */}
        <div className="bg-gradient-to-r from-blue-600 to-green-600 p-6 rounded-lg text-white">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold">AI-Generated SEO Headline</h3>
            <Button
              onClick={handleRegenerateHeadline}
              disabled={isRegenerating}
              variant="secondary"
              size="sm"
              className="bg-white/20 hover:bg-white/30 text-white border-white/30"
            >
              {isRegenerating ? (
                <div className="flex items-center">
                  <div className="animate-spin rounded-full h-3 w-3 border-2 border-white border-t-transparent mr-2"></div>
                  Generating...
                </div>
              ) : (
                <>
                  <Edit className="w-3 h-3 mr-2" />
                  Regenerate
                </>
              )}
            </Button>
          </div>
          <p className="text-lg font-medium leading-relaxed">
            "{metrics.headline}"
          </p>
        </div>

        {/* Additional Insights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
          <div className="text-center p-3 bg-blue-50 rounded-lg">
            <div className="text-2xl font-bold text-blue-600">A+</div>
            <div className="text-sm text-gray-600">SEO Score</div>
          </div>
          <div className="text-center p-3 bg-green-50 rounded-lg">
            <div className="text-2xl font-bold text-green-600">94%</div>
            <div className="text-sm text-gray-600">Visibility</div>
          </div>
          <div className="text-center p-3 bg-purple-50 rounded-lg">
            <div className="text-2xl font-bold text-purple-600">#{Math.floor(Math.random() * 5) + 1}</div>
            <div className="text-sm text-gray-600">Local Rank</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
