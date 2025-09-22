import React from 'react';
import { 
  BarChart3, 
  Video, 
  MessageSquare, 
  Brain, 
  Puzzle, 
  Settings,
  Zap
} from 'lucide-react';

interface SidebarProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ currentPage, onPageChange }) => {
  const menuItems = [
    { id: 'landing', label: 'Landing Page', icon: Zap },
    { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
    { id: 'live-testing', label: 'Live Testing', icon: Video },
    { id: 'feedback', label: 'Feedback', icon: MessageSquare },
    { id: 'ai-insights', label: 'AI Insights', icon: Brain },
    { id: 'integrations', label: 'Integrations', icon: Puzzle },
  ];

  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col">
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center space-x-3">
          <button 
            onClick={() => onPageChange('landing')}
            className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center hover:scale-105 transition-transform"
          >
            <Zap className="w-5 h-5 text-white" />
          </button>
          <button 
            onClick={() => onPageChange('landing')}
            className="text-xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            UXGenie
          </button>
        </div>
      </div>

      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentPage === item.id;
            
            return (
              <li key={item.id}>
                <button
                  onClick={() => onPageChange(item.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                    isActive 
                      ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-800' 
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="p-4 border-t border-gray-200 dark:border-gray-700">
        <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
          <Settings className="w-5 h-5" />
          <span className="font-medium">Settings</span>
        </button>
      </div>
    </div>
  );
};