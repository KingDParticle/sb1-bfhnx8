import React from 'react';
import { Home, BarChart, HelpCircle, User } from 'lucide-react';

const Navigation: React.FC = () => {
  return (
    <nav className="glass-effect fixed top-0 left-0 right-0 p-4 z-10">
      <ul className="flex justify-center space-x-8">
        <li>
          <a href="#" className="flex items-center glow-effect p-2 rounded-full">
            <Home className="mr-2" />
            <span>Home</span>
          </a>
        </li>
        <li>
          <a href="#" className="flex items-center glow-effect p-2 rounded-full">
            <BarChart className="mr-2" />
            <span>Analytics</span>
          </a>
        </li>
        <li>
          <a href="#" className="flex items-center glow-effect p-2 rounded-full">
            <HelpCircle className="mr-2" />
            <span>Help</span>
          </a>
        </li>
        <li>
          <a href="#" className="flex items-center glow-effect p-2 rounded-full">
            <User className="mr-2" />
            <span>Profile</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;