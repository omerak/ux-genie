import React from 'react';
import { 
  Monitor, 
  Smartphone, 
  BarChart3, 
  GitBranch, 
  MousePointer,
  CheckCircle
} from 'lucide-react';
import { TestData } from '../NewTestModal';

interface TestTypeSelectionProps {
  testData: TestData;
  updateTestData: (updates: Partial<TestData>) => void;
}

const testTypes = [
  {
    id: 'usability',
    name: 'Usability Test',
    description: 'Observe users completing tasks on your product',
    icon: Monitor,
    features: ['Task-based testing', 'Screen recording', 'Think-aloud protocol'],
    estimatedTime: '15-30 min',
    participants: '5-10 users',
    color: 'from-blue-500 to-blue-600'
  },
  {
    id: 'prototype',
    name: 'Prototype Test',
    description: 'Test early designs and wireframes with users',
    icon: Smartphone,
    features: ['Interactive prototypes', 'Design feedback', 'Navigation testing'],
    estimatedTime: '10-20 min',
    participants: '8-15 users',
    color: 'from-purple-500 to-purple-600'
  },
  {
    id: 'survey',
    name: 'Survey',
    description: 'Collect structured feedback and opinions',
    icon: BarChart3,
    features: ['Custom questions', 'Rating scales', 'Multiple choice'],
    estimatedTime: '5-15 min',
    participants: '50-200 users',
    color: 'from-green-500 to-green-600'
  },
  {
    id: 'ab-test',
    name: 'A/B Test',
    description: 'Compare two versions to see which performs better',
    icon: GitBranch,
    features: ['Split testing', 'Statistical analysis', 'Conversion tracking'],
    estimatedTime: '10-25 min',
    participants: '100-500 users',
    color: 'from-orange-500 to-orange-600'
  },
  {
    id: 'heatmap',
    name: 'Heatmap Test',
    description: 'Visualize where users click, scroll, and focus',
    icon: MousePointer,
    features: ['Click tracking', 'Scroll maps', 'Attention analysis'],
    estimatedTime: '5-10 min',
    participants: '20-100 users',
    color: 'from-red-500 to-red-600'
  }
];

export const TestTypeSelection: React.FC<TestTypeSelectionProps> = ({ testData, updateTestData }) => {
  const selectTestType = (type: string) => {
    const selectedType = testTypes.find(t => t.id === type);
    updateTestData({ 
      type,
      estimatedDuration: selectedType ? parseInt(selectedType.estimatedTime.split('-')[0]) : 15
    });
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          Choose Your Test Type
        </h3>
        <p className="text-gray-600 dark:text-gray-400">
          Select the type of research that best fits your goals
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {testTypes.map((type) => {
          const Icon = type.icon;
          const isSelected = testData.type === type.id;
          
          return (
            <button
              key={type.id}
              onClick={() => selectTestType(type.id)}
              className={`relative p-6 rounded-xl border-2 text-left transition-all hover:shadow-lg ${
                isSelected
                  ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 shadow-lg'
                  : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 bg-white dark:bg-gray-800'
              }`}
            >
              {isSelected && (
                <div className="absolute top-4 right-4">
                  <CheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
              )}
              
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${type.color} flex items-center justify-center mb-4`}>
                <Icon className="w-6 h-6 text-white" />
              </div>
              
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {type.name}
              </h4>
              
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                {type.description}
              </p>
              
              <div className="space-y-2 mb-4">
                {type.features.map((feature, index) => (
                  <div key={index} className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                    <div className="w-1 h-1 bg-gray-400 rounded-full mr-2" />
                    {feature}
                  </div>
                ))}
              </div>
              
              <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 pt-3 border-t border-gray-200 dark:border-gray-700">
                <span>{type.estimatedTime}</span>
                <span>{type.participants}</span>
              </div>
            </button>
          );
        })}
      </div>

      {testData.type && (
        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
          <div className="flex items-center space-x-2">
            <CheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-medium text-blue-800 dark:text-blue-300">
              {testTypes.find(t => t.id === testData.type)?.name} selected
            </span>
          </div>
          <p className="text-sm text-blue-700 dark:text-blue-400 mt-1">
            You can customize the test details in the next step.
          </p>
        </div>
      )}
    </div>
  );
};