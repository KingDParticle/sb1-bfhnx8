import React, { useState } from 'react';
import Navigation from './components/Navigation';
import ChatWindow from './components/ChatWindow';
import Dashboard from './components/Dashboard';
import ServicePanel from './components/ServicePanel';
import { ChevronDown, ChevronUp } from 'lucide-react';

const App: React.FC = () => {
  const [showDashboard, setShowDashboard] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-bg to-secondary-bg text-text-color">
      <Navigation />
      <main className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8 text-center text-accent-color">LeadGen AI Assistant</h1>
        <div className="max-w-4xl mx-auto">
          <ChatWindow />
          <button
            className="mt-4 w-full glass-effect glow-effect py-2 rounded-lg flex items-center justify-center dark-glass-button"
            onClick={() => setShowDashboard(!showDashboard)}
          >
            {showDashboard ? (
              <>
                <ChevronUp className="mr-2" />
                Hide Dashboard
              </>
            ) : (
              <>
                <ChevronDown className="mr-2" />
                Show Dashboard
              </>
            )}
          </button>
          {showDashboard && <Dashboard />}
        </div>
      </main>
      <ServicePanel />
    </div>
  );
};

export default App;