
# Business Growth Dashboard

A modern, responsive web application designed to help local businesses analyze their online presence and optimize their SEO performance. This dashboard provides real-time insights into business metrics, Google ratings, and AI-powered SEO recommendations.

![Business Growth Dashboard](https://img.shields.io/badge/React-18.3.1-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-Latest-blue) ![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.x-38B2AC) 
## 🚀 Features

- **Business Analytics**: Get instant insights into your business performance
- **Google Rating Integration**: Real-time display of Google Business ratings and reviews
- **AI-Powered SEO Headlines**: Generate compelling headlines to boost local search visibility
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Real-time Data**: Live business metrics and performance indicators
- **Modern UI/UX**: Clean, professional interface built with Tailwind CSS
- **Fast Performance**: Built with Vite for lightning-fast development and production builds

## 🛠️ Technology Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom animations
- **UI Components**: Radix UI primitives with shadcn/ui
- **State Management**: React hooks with context patterns
- **Build Tool**: Vite
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Notifications**: Sonner for toast notifications
- **Data Fetching**: TanStack Query for server state management

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- Node.js (version 18 or higher)
- npm, yarn, or pnpm package manager

## 🔧 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/ujwalsingamsetti/growthpro.git
   cd growthpro
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application.

## 🎯 Usage

### Getting Started

1. **Enter Business Information**: Input your business name and location in the form
2. **Analyze Performance**: Click "Get Business Insights" to fetch analytics
3. **View Metrics**: Review your Google rating, review count, and SEO score
4. **Optimize Headlines**: Use the "Regenerate" button to create new SEO headlines
5. **Track Progress**: Monitor your business performance indicators

### Key Components

- **Business Form**: Input interface for business details
- **Metrics Card**: Comprehensive display of business analytics
- **SEO Headlines**: AI-generated headlines for better search visibility
- **Performance Indicators**: Visual representation of business metrics

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── ui/              # Base UI components (shadcn/ui)
│   ├── BusinessForm.tsx      # Business input form
│   ├── BusinessMetricsCard.tsx # Metrics display component
│   ├── Header.tsx            # Application header
│   └── LoadingSpinner.tsx    # Loading state component
├── pages/               # Application pages
│   ├── Index.tsx        # Main dashboard page
│   └── NotFound.tsx     # 404 error page
├── services/            # API services and business logic
│   └── businessApi.ts   # Business data service
├── types/               # TypeScript type definitions
│   └── business.ts      # Business-related types
├── lib/                 # Utility functions
│   └── utils.ts         # Common utility functions
└── hooks/               # Custom React hooks
    └── use-mobile.tsx   # Mobile detection hook
```

## 🔌 API Documentation

### Business Data Endpoint

**Simulated Backend Functionality**

The application currently uses simulated API calls for demonstration purposes:

#### Get Business Data
- **Method**: Simulated POST
- **Payload**: `{ name: string, location: string }`
- **Response**: 
  ```json
  {
    "rating": 4.3,
    "reviews": 127,
    "headline": "Why Your Business is Location's Best Kept Secret in 2025"
  }
  ```

#### Regenerate SEO Headlines
- **Method**: Simulated GET
- **Parameters**: Business name and location
- **Response**: New AI-generated SEO headline

## 🚀 Development Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint

# Type check
npm run type-check
```

## 🌐 Deployment 

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

### Deployed LIknk: ([growthpro-ten.vercel.app](https://growthpro-ten.vercel.app/))

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Development Guidelines

- Follow TypeScript best practices
- Use Tailwind CSS for styling
- Write descriptive commit messages
- Ensure responsive design compatibility
- Test on multiple devices and browsers
---

**Built with ❤️ for local businesses looking to grow their online presence.**
