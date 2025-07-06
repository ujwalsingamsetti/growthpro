
import { BusinessData, BusinessMetrics } from '@/types/business';

const API_BASE = '/api';

// Simulated backend - in production this would hit real endpoints
export const businessService = {
  async getBusinessData(business: BusinessData): Promise<BusinessMetrics> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1200));
    
    const headlines = [
      `Why ${business.name} is ${business.location}'s Best Kept Secret in 2025`,
      `${business.name}: Transforming ${business.location}'s Local Scene`,
      `Discover Why ${business.name} Leads ${business.location}'s Market`,
      `${business.name} - ${business.location}'s Premier Destination`,
      `The Rise of ${business.name}: ${business.location}'s Success Story`,
      `${business.name} Sets New Standards in ${business.location}`,
    ];

    const randomHeadline = headlines[Math.floor(Math.random() * headlines.length)];
    const rating = parseFloat((3.8 + Math.random() * 1.2).toFixed(1));
    const reviews = Math.floor(50 + Math.random() * 300);

    console.log('Business data fetched:', { rating, reviews, headline: randomHeadline });

    return {
      rating,
      reviews,
      headline: randomHeadline,
    };
  },

  async regenerateHeadline(business: BusinessData): Promise<string> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    const headlines = [
      `${business.name}: The Future of ${business.location} Business`,
      `Exclusive: How ${business.name} Dominates ${business.location}`,
      `${business.name} - Where ${business.location} Meets Excellence`,
      `Breaking: ${business.name} Revolutionizes ${business.location}`,
      `${business.name}: ${business.location}'s Hidden Gem Revealed`,
      `Top Choice: ${business.name} Leads ${business.location} Innovation`,
      `Premium Service: ${business.name} Elevates ${business.location}`,
      `Award-Winning ${business.name} Transforms ${business.location}`,
    ];

    const randomHeadline = headlines[Math.floor(Math.random() * headlines.length)];
    console.log('New headline generated:', randomHeadline);
    
    return randomHeadline;
  },
};
