import React from 'react';
import { Card } from '../components/Card';
import { Brain, TrendingUp, AlertTriangle, Lightbulb, Target, Zap } from 'lucide-react';

export const AIInsights: React.FC = () => {
  const insights = [
    {
      type: 'critical',
      title: 'High Abandonment at Checkout',
      description: 'AI detected 34% of users abandon the cart at the payment information step. This represents a potential revenue loss of $124,000 monthly.',
      confidence: 96,
      impact: 'High',
      actions: ['Simplify payment form', 'Add guest checkout option', 'Implement progress indicators'],
      trend: 'increasing',
      icon: AlertTriangle
    },
    {
      type: 'opportunity',
      title: 'Mobile Experience Gap',
      description: 'Mobile users show 28% lower engagement rates compared to desktop. Key friction points identified in navigation and form completion.',
      confidence: 89,
      impact: 'Medium',
      actions: ['Optimize mobile navigation', 'Improve touch targets', 'Reduce form complexity'],
      trend: 'stable',
      icon: Target
    },
    {
      type: 'improvement',
      title: 'Search Feature Performance',
      description: 'Recent search improvements led to 43% increase in successful product discoveries and 18% higher conversion rates.',
      confidence: 94,
      impact: 'Medium',
      actions: ['Expand search functionality', 'Add visual search', 'Implement personalized results'],
      trend: 'improving',
      icon: TrendingUp
    },
    {
      type: 'suggestion',
      title: 'Personalization Opportunity',
      description: 'User behavior patterns suggest 67% would benefit from personalized product recommendations, potentially increasing average order value.',
      confidence: 78,
      impact: 'Low',
      actions: ['Implement recommendation engine', 'A/B test personalized content', 'Create user preference profiles'],
      trend: 'new',
      icon: Lightbulb
    }
  ];

  const predictions = [
    {
      metric: 'Conversion Rate',
      current: '3.2%',
      predicted: '4.1%',
      change: '+28%',
      timeframe: '3 months',
      confidence: 85
    },
    {
      metric: 'User Satisfaction',
      current: '4.2/5',
      predicted: '4.6/5',
      change: '+9.5%',
      timeframe: '2 months',
      confidence: 92
    },
    {
      metric: 'Task Success Rate',
      current: '76%',
      predicted: '89%',
      change: '+17%',
      timeframe: '6 weeks',
      confidence: 88
    }
  ];

  const getInsightColor = (type: string) => {
    switch (type) {
      case 'critical': return 'border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/10';
      case 'opportunity': return 'border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/10';
      case 'improvement': return 'border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/10';
      case 'suggestion': return 'border-purple-200 dark:border-purple-800 bg-purple-50 dark:bg-purple-900/10';
      default: return 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800';
    }
  };

  const getIconColor = (type: string) => {
    switch (type) {
      case 'critical': return 'text-red-600 dark:text-red-400 bg-red-100 dark:bg-red-900/20';
      case 'opportunity': return 'text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/20';
      case 'improvement': return 'text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/20';
      case 'suggestion': return 'text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900/20';
      default: return 'text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-700';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">AI Insights</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Intelligent analysis and predictions powered by machine learning.
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
            Configure AI
          </button>
          <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-colors">
            Generate Report
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">AI Analysis</h3>
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-sm text-gray-600 dark:text-gray-400">Insights Generated</span>
              <span className="font-semibold text-gray-900 dark:text-white">127</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600 dark:text-gray-400">Avg. Confidence</span>
              <span className="font-semibold text-gray-900 dark:text-white">89%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600 dark:text-gray-400">Action Items</span>
              <span className="font-semibold text-gray-900 dark:text-white">23</span>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Processing Power</h3>
            <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-sm text-gray-600 dark:text-gray-400">Data Points</span>
              <span className="font-semibold text-gray-900 dark:text-white">2.4M</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600 dark:text-gray-400">Models Active</span>
              <span className="font-semibold text-gray-900 dark:text-white">5</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600 dark:text-gray-400">Processing Time</span>
              <span className="font-semibold text-gray-900 dark:text-white">1.2s</span>
            </div>
          </div>
        </Card>

        <Card>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Predictions</h3>
          <div className="space-y-4">
            {predictions.map((prediction, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-3">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm font-medium text-gray-900 dark:text-white">{prediction.metric}</span>
                  <span className="text-sm text-green-600 dark:text-green-400">{prediction.change}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-600 dark:text-gray-400">{prediction.current} → {prediction.predicted}</span>
                  <span className="text-xs text-gray-500 dark:text-gray-500">{prediction.confidence}% confidence</span>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <div className="space-y-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Key Insights</h2>
        
        <div className="space-y-4">
          {insights.map((insight, index) => {
            const Icon = insight.icon;
            return (
              <div key={index} className={`border rounded-xl p-6 ${getInsightColor(insight.type)}`}>
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${getIconColor(insight.type)}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{insight.title}</h3>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-600 dark:text-gray-400">Impact: {insight.impact}</span>
                        <span className="text-sm text-gray-600 dark:text-gray-400">•</span>
                        <span className="text-sm text-gray-600 dark:text-gray-400">{insight.confidence}% confidence</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 dark:text-gray-300 mb-4">{insight.description}</p>
                    
                    <div>
                      <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">Recommended Actions:</h4>
                      <div className="flex flex-wrap gap-2">
                        {insight.actions.map((action, actionIndex) => (
                          <span 
                            key={actionIndex}
                            className="px-3 py-1 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-full border border-gray-200 dark:border-gray-600"
                          >
                            {action}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};