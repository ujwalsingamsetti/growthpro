
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BusinessData } from '@/types/business';
import { Search } from 'lucide-react';

interface BusinessFormProps {
  onSubmit: (data: BusinessData) => void;
  isLoading: boolean;
}

export const BusinessForm: React.FC<BusinessFormProps> = ({ onSubmit, isLoading }) => {
  const [businessName, setBusinessName] = useState('');
  const [location, setLocation] = useState('');
  const [errors, setErrors] = useState<{ name?: string; location?: string }>({});

  const validateForm = (): boolean => {
    const newErrors: { name?: string; location?: string } = {};
    
    if (!businessName.trim()) {
      newErrors.name = 'Business name is required';
    } else if (businessName.trim().length < 2) {
      newErrors.name = 'Business name must be at least 2 characters';
    }
    
    if (!location.trim()) {
      newErrors.location = 'Location is required';
    } else if (location.trim().length < 2) {
      newErrors.location = 'Location must be at least 2 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      onSubmit({
        name: businessName.trim(),
        location: location.trim(),
      });
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto bg-gradient-to-br from-white to-blue-50 border-0 shadow-xl">
      <CardHeader className="text-center pb-4">
        <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center">
          <Search className="w-8 h-8 text-white" />
        </div>
        <CardTitle className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
          Business Analytics
        </CardTitle>
        <CardDescription className="text-gray-600">
          Get instant SEO insights and business metrics
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="business-name" className="text-sm font-medium text-gray-700">
              Business Name
            </Label>
            <Input
              id="business-name"
              type="text"
              placeholder="e.g., Cake & Co"
              value={businessName}
              onChange={(e) => {
                setBusinessName(e.target.value);
                if (errors.name) setErrors(prev => ({ ...prev, name: undefined }));
              }}
              className={`transition-all duration-200 ${
                errors.name 
                  ? 'border-red-300 focus:border-red-500' 
                  : 'border-gray-200 focus:border-blue-500'
              }`}
              disabled={isLoading}
            />
            {errors.name && (
              <p className="text-sm text-red-600 mt-1">{errors.name}</p>
            )}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="location" className="text-sm font-medium text-gray-700">
              Location
            </Label>
            <Input
              id="location"
              type="text"
              placeholder="e.g., Mumbai"
              value={location}
              onChange={(e) => {
                setLocation(e.target.value);
                if (errors.location) setErrors(prev => ({ ...prev, location: undefined }));
              }}
              className={`transition-all duration-200 ${
                errors.location 
                  ? 'border-red-300 focus:border-red-500' 
                  : 'border-gray-200 focus:border-blue-500'
              }`}
              disabled={isLoading}
            />
            {errors.location && (
              <p className="text-sm text-red-600 mt-1">{errors.location}</p>
            )}
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white font-medium py-2.5 transition-all duration-200 transform hover:scale-105"
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2"></div>
                Analyzing Business...
              </div>
            ) : (
              'Get Business Insights'
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
