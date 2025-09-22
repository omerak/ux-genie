import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Dashboard } from './pages/Dashboard';
import { LandingPage } from './pages/LandingPage';
import { LiveTesting } from './pages/LiveTesting';
import { FeedbackManagement } from './pages/FeedbackManagement';
import { AIInsights } from './pages/AIInsights';
import { Integrations } from './pages/Integrations';
import { ThemeProvider } from './context/ThemeContext';
import { Header } from './components/Header';

function App() {
  const [currentPage, setCurrentPage] = useState('landing');

  const renderPage = () => {
    switch (currentPage) {
      case 'landing':
        return <LandingPage />;
      case 'dashboard':
        return <Dashboard />;
      case 'live-testing':
        return <LiveTesting />;
      case 'feedback':
        return <FeedbackManagement />;
      case 'ai-insights':
        return <AIInsights />;
      case 'integrations':
        return <Integrations />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <ThemeProvider>
      {currentPage === 'landing' ? (
        <LandingPage />
      ) : (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
          <div className="flex">
            <Sidebar currentPage={currentPage} onPageChange={setCurrentPage} />
            <div className="flex-1 ml-64">
              <Header />
              <main className="p-6">
                {renderPage()}
              </main>
            </div>
          </div>
        </div>
      )}
    </ThemeProvider>
  );
}

export default App;