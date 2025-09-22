import React from 'react';
import { Figma, Video, BarChart, MessageSquare, ExternalLink, Settings, Zap } from 'lucide-react';
import { TestData } from '../NewTestModal';

interface IntegrationsSettingsProps {
  testData: TestData;
  updateTestData: (updates: Partial<TestData>) => void;
}

const prototypeTools = [
  { id: 'figma', name: 'Figma', icon: Figma, color: 'bg-purple-500' },
  { id: 'miro', name: 'Miro', icon: BarChart, color: 'bg-yellow-500' },
  { id: 'xd', name: 'Adobe XD', icon: Settings, color: 'bg-pink-500' },
  { id: 'sketch', name: 'Sketch', icon: Settings, color: 'bg-orange-500' }
];

const analyticsTools = [
  { id: 'hotjar', name: 'Hotjar', color: 'bg-red-500' },
  { id: 'ga', name: 'Google Analytics', color: 'bg-blue-500' },
  { id: 'mixpanel', name: 'Mixpanel', color: 'bg-purple-500' },
  { id: 'amplitude', name: 'Amplitude', color: 'bg-green-500' }
];

export const IntegrationsSettings: React.FC<IntegrationsSettingsProps> = ({ testData, updateTestData }) => {
  const updateIntegrations = (key: string, value: string | string[] | boolean) => {
    updateTestData({
      integrations: {
        ...testData.integrations,
        [key]: value
      }
    });
  };

  const toggleAnalytics = (tool: string) => {
    const analytics = testData.integrations.analytics.includes(tool)
      ? testData.integrations.analytics.filter(t => t !== tool)
      : [...testData.integrations.analytics, tool];
    updateIntegrations('analytics', analytics);
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          Integrations & Settings
        </h3>
        <p className="text-gray-600 dark:text-gray-400">
          Connect your tools and configure test settings
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column - Integrations */}
        <div className="space-y-6">
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
            Prototype Integration
          </h4>

          {/* Prototype Tool Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
              Design Tool
            </label>
            <div className="grid grid-cols-2 gap-3">
              {prototypeTools.map((tool) => {
                const Icon = tool.icon;
                const isSelected = testData.integrations.prototypeTool === tool.id;
                
                return (
                  <button
                    key={tool.id}
                    onClick={() => updateIntegrations('prototypeTool', tool.id)}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      isSelected
                        ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                        : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                    }`}
                  >
                    <div className={`w-8 h-8 ${tool.color} rounded-lg flex items-center justify-center mx-auto mb-2`}>
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <span className={`text-sm font-medium ${
                      isSelected ? 'text-blue-700 dark:text-blue-300' : 'text-gray-600 dark:text-gray-400'
                    }`}>
                      {tool.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Prototype URL */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Prototype URL
            </label>
            <div className="relative">
              <input
                type="url"
                value={testData.integrations.prototypeUrl}
                onChange={(e) => updateIntegrations('prototypeUrl', e.target.value)}
                placeholder="https://www.figma.com/proto/..."
                className="w-full px-4 py-3 pr-10 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <ExternalLink className="absolute right-3 top-3 w-5 h-5 text-gray-400" />
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Participants will interact with this prototype during the test
            </p>
          </div>

          {/* Analytics Integration */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
              Analytics Integration
            </label>
            <div className="space-y-2">
              {analyticsTools.map((tool) => {
                const isSelected = testData.integrations.analytics.includes(tool.id);
                
                return (
                  <button
                    key={tool.id}
                    onClick={() => toggleAnalytics(tool.id)}
                    className={`w-full flex items-center justify-between p-3 rounded-lg border transition-all ${
                      isSelected
                        ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                        : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-6 h-6 ${tool.color} rounded flex items-center justify-center`}>
                        <BarChart className="w-3 h-3 text-white" />
                      </div>
                      <span className={`font-medium ${
                        isSelected ? 'text-blue-700 dark:text-blue-300' : 'text-gray-700 dark:text-gray-300'
                      }`}>
                        {tool.name}
                      </span>
                    </div>
                    <div className={`w-4 h-4 rounded border-2 flex items-center justify-center ${
                      isSelected 
                        ? 'border-blue-500 bg-blue-500' 
                        : 'border-gray-300 dark:border-gray-600'
                    }`}>
                      {isSelected && <div className="w-2 h-2 bg-white rounded-full" />}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column - Settings */}
        <div className="space-y-6">
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
            Test Settings
          </h4>

          {/* Recording Settings */}
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-red-100 dark:bg-red-900/20 rounded-lg flex items-center justify-center">
                  <Video className="w-5 h-5 text-red-600 dark:text-red-400" />
                </div>
                <div>
                  <h5 className="font-medium text-gray-900 dark:text-white">Video Recording</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Record participant sessions</p>
                </div>
              </div>
              <button
                onClick={() => updateIntegrations('videoRecording', !testData.integrations.videoRecording)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  testData.integrations.videoRecording ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    testData.integrations.videoRecording ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h5 className="font-medium text-gray-900 dark:text-white">Live Notes</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Take notes during sessions</p>
                </div>
              </div>
              <button
                onClick={() => updateIntegrations('liveNotes', !testData.integrations.liveNotes)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  testData.integrations.liveNotes ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    testData.integrations.liveNotes ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          </div>

          {/* AI Features */}
          <div>
            <h5 className="font-medium text-gray-900 dark:text-white mb-3">AI-Powered Features</h5>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
                <div className="flex items-center space-x-2">
                  <Zap className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                  <span className="text-sm font-medium text-purple-800 dark:text-purple-300">
                    Auto-generate insights
                  </span>
                </div>
                <div className="w-4 h-4 rounded border-2 border-purple-500 bg-purple-500 flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
              </div>

              <div className="flex items-center justify-between p-3 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
                <div className="flex items-center space-x-2">
                  <Zap className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                  <span className="text-sm font-medium text-purple-800 dark:text-purple-300">
                    Sentiment analysis
                  </span>
                </div>
                <div className="w-4 h-4 rounded border-2 border-purple-500 bg-purple-500 flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
              </div>

              <div className="flex items-center justify-between p-3 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
                <div className="flex items-center space-x-2">
                  <Zap className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                  <span className="text-sm font-medium text-purple-800 dark:text-purple-300">
                    Behavior predictions
                  </span>
                </div>
                <div className="w-4 h-4 rounded border-2 border-purple-500 bg-purple-500 flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
              </div>
            </div>
          </div>

          {/* Summary */}
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
            <h5 className="font-medium text-blue-800 dark:text-blue-300 mb-2">Integration Summary</h5>
            <div className="space-y-1 text-sm text-blue-700 dark:text-blue-400">
              <p>• {testData.integrations.prototypeTool ? `${prototypeTools.find(t => t.id === testData.integrations.prototypeTool)?.name} prototype` : 'No prototype'}</p>
              <p>• {testData.integrations.analytics.length} analytics tools connected</p>
              <p>• Video recording: {testData.integrations.videoRecording ? 'Enabled' : 'Disabled'}</p>
              <p>• Live notes: {testData.integrations.liveNotes ? 'Enabled' : 'Disabled'}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};