import React from 'react';

// Import Layout Components
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// Import the main interactive component for this page
import TripCostEstimatorTool from '@/components/TripCostEstimatorTool';

/**
 * TripCostEstimatorPage serves as a dedicated, interactive tool for users
 * to build and price a hypothetical trip. It provides a simple, focused
 * layout that highlights the TripCostEstimatorTool.
 */
const TripCostEstimatorPage: React.FC = () => {
  console.log('TripCostEstimatorPage loaded');

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* The application's standard header with navigation */}
      <Header />

      {/* The main content area, designed to center the tool */}
      <main className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        {/* The core interactive tool for this page */}
        <TripCostEstimatorTool />
      </main>

      {/* The application's standard footer */}
      <Footer />
    </div>
  );
};

export default TripCostEstimatorPage;