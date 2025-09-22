import React, { useState } from 'react';
import { Plus, X, Monitor, Smartphone, Tablet, Clock, Users } from 'lucide-react';
import { TestData } from '../NewTestModal';

interface TestConfigurationProps {
  testData: TestData;
  updateTestData: (updates: Partial<TestData>) => void;
}

const deviceOptions = [
  { id: 'desktop', name: 'Desktop', icon: Monitor },
  { id: 'mobile', name: 'Mobile', icon: Smartphone },
  { id: 'tablet', name: 'Tablet', icon: Tablet }
];

const durationSuggestions = {
  usability: 20,
  prototype: 15,
  survey: 10,
  'ab-test': 15,
  heatmap: 8
};

export const TestConfiguration: React.FC<TestConfigurationProps> = ({ testData, updateTestData }) => {
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim()) {
      updateTestData({
        tasks: [...testData.tasks, newTask.trim()]
      });
      setNewTask('');
    }
  };

  const removeTask = (index: number) => {
    updateTestData({
      tasks: testData.tasks.filter((_, i) => i !== index)
    });
  };

  const toggleDevice = (device: string) => {
    const devices = testData.devicePreference.includes(device)
      ? testData.devicePreference.filter(d => d !== device)
      : [...testData.devicePreference, device];
    updateTestData({ devicePreference: devices });
  };

  const suggestedDuration = durationSuggestions[testData.type as keyof typeof durationSuggestions] || 15;

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          Configure Test Details
        </h3>
        <p className="text-gray-600 dark:text-gray-400">
          Set up the specifics for your {testData.type.replace('-', ' ')} test
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column */}
        <div className="space-y-6">
          {/* Test Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Test Name *
            </label>
            <input
              type="text"
              value={testData.name}
              onChange={(e) => updateTestData({ name: e.target.value })}
              placeholder="e.g., Checkout Flow Usability Test"
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Description
            </label>
            <textarea
              value={testData.description}
              onChange={(e) => updateTestData({ description: e.target.value })}
              placeholder="Describe what you want to learn from this test..."
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            />
          </div>

          {/* Device Preference */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
              Device Preference
            </label>
            <div className="grid grid-cols-3 gap-3">
              {deviceOptions.map((device) => {
                const Icon = device.icon;
                const isSelected = testData.devicePreference.includes(device.id);
                
                return (
                  <button
                    key={device.id}
                    onClick={() => toggleDevice(device.id)}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      isSelected
                        ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                        : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                    }`}
                  >
                    <Icon className={`w-6 h-6 mx-auto mb-2 ${
                      isSelected ? 'text-blue-600 dark:text-blue-400' : 'text-gray-400'
                    }`} />
                    <span className={`text-sm font-medium ${
                      isSelected ? 'text-blue-700 dark:text-blue-300' : 'text-gray-600 dark:text-gray-400'
                    }`}>
                      {device.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Duration */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Estimated Duration (minutes)
            </label>
            <div className="relative">
              <input
                type="number"
                value={testData.estimatedDuration}
                onChange={(e) => updateTestData({ estimatedDuration: parseInt(e.target.value) || 0 })}
                min="1"
                max="120"
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Clock className="absolute right-3 top-3 w-5 h-5 text-gray-400" />
            </div>
            {testData.estimatedDuration !== suggestedDuration && (
              <button
                onClick={() => updateTestData({ estimatedDuration: suggestedDuration })}
                className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mt-1"
              >
                Use suggested: {suggestedDuration} minutes
              </button>
            )}
          </div>

          {/* Tasks/Scenarios */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
              Tasks & Scenarios
            </label>
            
            {/* Add Task Input */}
            <div className="flex space-x-2 mb-4">
              <input
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                placeholder="Add a task for users to complete..."
                className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                onKeyPress={(e) => e.key === 'Enter' && addTask()}
              />
              <button
                onClick={addTask}
                disabled={!newTask.trim()}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>

            {/* Task List */}
            <div className="space-y-2">
              {testData.tasks.map((task, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <span className="text-sm text-gray-700 dark:text-gray-300 flex-1">
                    {index + 1}. {task}
                  </span>
                  <button
                    onClick={() => removeTask(index)}
                    className="p-1 text-gray-400 hover:text-red-500 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
              
              {testData.tasks.length === 0 && (
                <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                  <Users className="w-8 h-8 mx-auto mb-2 opacity-50" />
                  <p className="text-sm">No tasks added yet</p>
                  <p className="text-xs">Add tasks for users to complete during the test</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Summary Card */}
      {testData.name && (
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Test Summary</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div>
              <span className="text-gray-600 dark:text-gray-400">Name:</span>
              <p className="font-medium text-gray-900 dark:text-white">{testData.name}</p>
            </div>
            <div>
              <span className="text-gray-600 dark:text-gray-400">Duration:</span>
              <p className="font-medium text-gray-900 dark:text-white">{testData.estimatedDuration} min</p>
            </div>
            <div>
              <span className="text-gray-600 dark:text-gray-400">Devices:</span>
              <p className="font-medium text-gray-900 dark:text-white">
                {testData.devicePreference.length > 0 ? testData.devicePreference.join(', ') : 'None selected'}
              </p>
            </div>
            <div>
              <span className="text-gray-600 dark:text-gray-400">Tasks:</span>
              <p className="font-medium text-gray-900 dark:text-white">{testData.tasks.length} tasks</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};