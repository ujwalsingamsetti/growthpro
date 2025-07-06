
export interface BusinessData {
  name: string;
  location: string;
}

export interface BusinessMetrics {
  rating: number;
  reviews: number;
  headline: string;
}

export interface ApiResponse {
  success: boolean;
  data: BusinessMetrics;
  error?: string;
}
