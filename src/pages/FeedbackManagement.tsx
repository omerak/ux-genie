import React, { useState } from 'react';
import { Card } from '../components/Card';
import { MessageSquare, Star, TrendingUp, Filter, Search, Tag } from 'lucide-react';

export const FeedbackManagement: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const feedbackStats = [
    { label: 'Total Feedback', value: '12,458', change: '+18%', icon: MessageSquare },
    { label: 'Avg. Rating', value: '4.2', change: '+0.3', icon: Star },
    { label: 'Response Rate', value: '73%', change: '+5%', icon: TrendingUp },
  ];

  const feedbackItems = [
    {
      id: 1,
      user: 'Alex Thompson',
      rating: 5,
      category: 'UI/UX',
      sentiment: 'positive',
      date: '2 hours ago',
      message: 'The new checkout flow is incredibly smooth! Love how streamlined everything feels now.',
      tags: ['checkout', 'positive', 'ui']
    },
    {
      id: 2,
      user: 'Maria Garcia',
      rating: 2,
      category: 'Performance',
      sentiment: 'negative',
      date: '4 hours ago',
      message: 'Pages are loading very slowly, especially on mobile. It\'s frustrating when trying to complete purchases.',
      tags: ['performance', 'mobile', 'slow']
    },
    {
      id: 3,
      user: 'James Wilson',
      rating: 4,
      category: 'Features',
      sentiment: 'neutral',
      date: '6 hours ago',
      message: 'Good overall experience, but would love to see more payment options available.',
      tags: ['features', 'payment', 'suggestion']
    },
    {
      id: 4,
      user: 'Sarah Kim',
      rating: 5,
      category: 'UI/UX',
      sentiment: 'positive',
      date: '8 hours ago',
      message: 'Navigation is so intuitive now! Found everything I needed without any confusion.',
      tags: ['navigation', 'intuitive', 'positive']
    }
  ];

  const categories = ['all', 'UI/UX', 'Performance', 'Features', 'Bug Reports'];
  const sentiments = ['all', 'positive', 'neutral', 'negative'];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Feedback Management</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Analyze and manage user feedback with AI-powered insights.
          </p>
        </div>
        <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          Export Report
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {feedbackStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{stat.label}</p>
                  <p className="text-3xl font-bold text-gray-900 dark:text-white mt-2">{stat.value}</p>
                  <p className="text-sm text-green-600 dark:text-green-400 mt-2">{stat.change}</p>
                </div>
                <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
                  <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <Card>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Filters</h3>
          
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">Category</label>
              <select 
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">Sentiment</label>
              <select className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100">
                {sentiments.map(sentiment => (
                  <option key={sentiment} value={sentiment}>
                    {sentiment.charAt(0).toUpperCase() + sentiment.slice(1)}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">Rating</label>
              <div className="space-y-2">
                {[5, 4, 3, 2, 1].map(rating => (
                  <label key={rating} className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <div className="flex items-center">
                      {[...Array(rating)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      ))}
                      <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">& up</span>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </Card>

        <div className="lg:col-span-3">
          <Card padding={false}>
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Recent Feedback</h3>
                <div className="flex items-center space-x-2">
                  <button className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 border border-gray-300 dark:border-gray-600 rounded-lg">
                    <Filter className="w-4 h-4" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 border border-gray-300 dark:border-gray-600 rounded-lg">
                    <Search className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            <div className="divide-y divide-gray-200 dark:divide-gray-700">
              {feedbackItems.map((item) => (
                <div key={item.id} className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-medium">
                        {item.user.charAt(0)}
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">{item.user}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{item.date}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < item.rating 
                                ? 'fill-yellow-400 text-yellow-400' 
                                : 'text-gray-300 dark:text-gray-600'
                            }`}
                          />
                        ))}
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        item.sentiment === 'positive' ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400' :
                        item.sentiment === 'negative' ? 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400' :
                        'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400'
                      }`}>
                        {item.sentiment}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 dark:text-gray-300 mb-3">{item.message}</p>
                  
                  <div className="flex items-center space-x-2">
                    {item.tags.map((tag, index) => (
                      <span 
                        key={index}
                        className="inline-flex items-center px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full"
                      >
                        <Tag className="w-3 h-3 mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};