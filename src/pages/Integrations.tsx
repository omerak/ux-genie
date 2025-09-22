import React, { useState } from 'react';
import { Card } from '../components/Card';
import { 
  Figma, 
  Slack, 
  Chrome,
  Smartphone,
  BarChart,
  Zap,
  Settings,
  Plus,
  Check,
  ExternalLink
} from 'lucide-react';

export const Integrations: React.FC = () => {
  const [connectedIntegrations, setConnectedIntegrations] = useState(['figma', 'slack']);

  const integrations = [
    {
      id: 'figma',
      name: 'Figma',
      description: 'Sync prototypes and design files for user testing',
      icon: Figma,
      category: 'Design',
      isConnected: true,
      features: ['Prototype sync', 'Comment integration', 'Version tracking'],
      color: 'bg-purple-500'
    },
    {
      id: 'miro',
      name: 'Miro',
      description: 'Import whiteboard sessions and collaboration data',
      icon: BarChart,
      category: 'Collaboration',
      isConnected: false,
      features: ['Board import', 'User journey mapping', 'Workshop analytics'],
      color: 'bg-yellow-500'
    },
    {
      id: 'hotjar',
      name: 'Hotjar',
      description: 'Combine heatmaps with user feedback data',
      icon: Chrome,
      category: 'Analytics',
      isConnected: false,
      features: ['Heatmap overlay', 'Session recordings', 'Funnel analysis'],
      color: 'bg-red-500'
    },
    {
      id: 'slack',
      name: 'Slack',
      description: 'Get real-time notifications and insights',
      icon: Slack,
      category: 'Communication',
      isConnected: true,
      features: ['Smart notifications', 'Report sharing', 'Alert system'],
      color: 'bg-green-500'
    },
    {
      id: 'mobile-sdk',
      name: 'Mobile SDK',
      description: 'Integrate with native iOS and Android apps',
      icon: Smartphone,
      category: 'Development',
      isConnected: false,
      features: ['Native integration', 'In-app feedback', 'Performance tracking'],
      color: 'bg-blue-500'
    },
    {
      id: 'zapier',
      name: 'Zapier',
      description: 'Connect with 3000+ apps through automation',
      icon: Zap,
      category: 'Automation',
      isConnected: false,
      features: ['Custom workflows', 'Trigger actions', 'Data sync'],
      color: 'bg-orange-500'
    }
  ];

  const categories = ['All', 'Design', 'Analytics', 'Communication', 'Development', 'Automation', 'Collaboration'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredIntegrations = selectedCategory === 'All' 
    ? integrations 
    : integrations.filter(integration => integration.category === selectedCategory);

  const toggleIntegration = (id: string) => {
    setConnectedIntegrations(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Integrations</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Connect UXGenie with your favorite tools and workflows.
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
            <Settings className="w-4 h-4 mr-2 inline" />
            Manage Webhooks
          </button>
          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <Plus className="w-4 h-4 mr-2 inline" />
            Custom Integration
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <div className="text-center">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Check className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{connectedIntegrations.length}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Connected</p>
          </div>
        </Card>

        <Card>
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center mx-auto mb-3">
              <BarChart className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{integrations.length}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Available</p>
          </div>
        </Card>

        <Card>
          <div className="text-center">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Zap className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">12.4k</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Data Points Synced</p>
          </div>
        </Card>
      </div>

      <Card>
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Popular Integrations</h3>
          <div className="flex items-center space-x-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 py-1 text-sm rounded-full transition-colors ${
                  selectedCategory === category
                    ? 'bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredIntegrations.map((integration) => {
            const Icon = integration.icon;
            const isConnected = connectedIntegrations.includes(integration.id);
            
            return (
              <div key={integration.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-3 mb-3">
                  <div className={`w-10 h-10 ${integration.color} rounded-lg flex items-center justify-center`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 dark:text-white">{integration.name}</h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{integration.category}</p>
                  </div>
                  {isConnected && (
                    <div className="w-6 h-6 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center">
                      <Check className="w-3 h-3 text-green-600 dark:text-green-400" />
                    </div>
                  )}
                </div>
                
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{integration.description}</p>
                
                <div className="mb-4">
                  <h5 className="text-xs font-medium text-gray-700 dark:text-gray-300 mb-2">Features:</h5>
                  <ul className="space-y-1">
                    {integration.features.map((feature, index) => (
                      <li key={index} className="text-xs text-gray-600 dark:text-gray-400 flex items-center">
                        <div className="w-1 h-1 bg-gray-400 rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => toggleIntegration(integration.id)}
                    className={`flex-1 py-2 px-3 text-sm font-medium rounded-lg transition-colors ${
                      isConnected
                        ? 'bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-400 hover:bg-red-200 dark:hover:bg-red-900/30'
                        : 'bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-900/30'
                    }`}
                  >
                    {isConnected ? 'Disconnect' : 'Connect'}
                  </button>
                  <button className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </Card>

      <Card>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Webhook Configuration</h3>
        <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-gray-900 dark:text-white">Endpoint URL</span>
            <button className="text-xs text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300">
              Generate New
            </button>
          </div>
          <code className="block text-sm text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-800 p-3 rounded border">
            https://api.uxgenie.com/webhooks/your-unique-id
          </code>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
            Use this endpoint to receive real-time events from connected integrations.
          </p>
        </div>
      </Card>
    </div>
  );
};