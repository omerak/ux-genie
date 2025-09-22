import React from 'react';
import { useState } from 'react';
import { MetricCard } from '../components/MetricCard';
import { Card } from '../components/Card';
import { NewTestModal } from '../components/NewTestModal';
import { Users, MessageSquare, TrendingUp, Clock, Play, AlertTriangle } from 'lucide-react';

export const Dashboard: React.FC = () => {
  const [showNewTestModal, setShowNewTestModal] = useState(false);

  const metrics = [
    {
      title: 'Total Feedback',
      value: '12,458',
      change: '+18% from last month',
      changeType: 'positive' as const,
      icon: MessageSquare
    },
    {
      title: 'Active Sessions',
      value: '342',
      change: '+12% from yesterday',
      changeType: 'positive' as const,
      icon: Users
    },
    {
      title: 'Conversion Rate',
      value: '73.2%',
      change: '+5.4% from last week',
      changeType: 'positive' as const,
      icon: TrendingUp
    },
    {
      title: 'Avg. Session Time',
      value: '4m 32s',
      change: '-2% from last week',
      changeType: 'negative' as const,
      icon: Clock
    }
  ];

  const recentTests = [
    { id: 1, name: 'Checkout Flow Redesign', status: 'running', participants: 24, completion: 68 },
    { id: 2, name: 'Mobile Navigation Test', status: 'completed', participants: 156, completion: 100 },
    { id: 3, name: 'Onboarding Experience', status: 'draft', participants: 0, completion: 0 },
    { id: 4, name: 'Product Page Layout', status: 'running', participants: 89, completion: 45 }
  ];

  const insights = [
    {
      type: 'critical',
      title: 'High Drop-off Rate Detected',
      description: 'Users are abandoning the checkout process at the payment step',
      impact: 'High',
      confidence: '94%'
    },
    {
      type: 'improvement',
      title: 'Navigation Clarity Improved',
      description: 'Recent navigation changes increased user task completion by 23%',
      impact: 'Medium',
      confidence: '87%'
    },
    {
      type: 'opportunity',
      title: 'Mobile Experience Optimization',
      description: 'Mobile users show 15% lower engagement compared to desktop',
      impact: 'Medium',
      confidence: '91%'
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Welcome back! Here's what's happening with your user research.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <MetricCard key={index} {...metric} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Recent Tests</h3>
              <button 
                onClick={() => setShowNewTestModal(true)}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                New Test
              </button>
            </div>
            
            <div className="space-y-4">
              {recentTests.map((test) => (
                <div key={test.id} className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className={`w-3 h-3 rounded-full ${
                      test.status === 'running' ? 'bg-green-500' : 
                      test.status === 'completed' ? 'bg-blue-500' : 'bg-gray-400'
                    }`} />
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white">{test.name}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 capitalize">{test.status}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-6">
                    <div className="text-right">
                      <p className="text-sm font-medium text-gray-900 dark:text-white">{test.participants} participants</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{test.completion}% complete</p>
                    </div>
                    <button className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                      <Play className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div>
          <Card>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">AI Insights</h3>
            
            <div className="space-y-4">
              {insights.map((insight, index) => (
                <div key={index} className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center mt-0.5 ${
                      insight.type === 'critical' ? 'bg-red-100 dark:bg-red-900/20' :
                      insight.type === 'improvement' ? 'bg-green-100 dark:bg-green-900/20' :
                      'bg-blue-100 dark:bg-blue-900/20'
                    }`}>
                      <AlertTriangle className={`w-3 h-3 ${
                        insight.type === 'critical' ? 'text-red-600 dark:text-red-400' :
                        insight.type === 'improvement' ? 'text-green-600 dark:text-green-400' :
                        'text-blue-600 dark:text-blue-400'
                      }`} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-medium text-gray-900 dark:text-white">{insight.title}</h4>
                      <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">{insight.description}</p>
                      <div className="flex items-center space-x-4 mt-2">
                        <span className="text-xs text-gray-500 dark:text-gray-400">Impact: {insight.impact}</span>
                        <span className="text-xs text-gray-500 dark:text-gray-400">Confidence: {insight.confidence}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>

      <NewTestModal 
        isOpen={showNewTestModal} 
        onClose={() => setShowNewTestModal(false)} 
      />
    </div>
  );
};