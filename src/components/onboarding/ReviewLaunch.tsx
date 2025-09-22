import React from 'react';
import { 
  CheckCircle, 
  Users, 
  Clock, 
  Monitor, 
  Smartphone, 
  Tablet,
  Video,
  MessageSquare,
  BarChart,
  Zap,
  Rocket
} from 'lucide-react';
import { TestData } from '../NewTestModal';

interface ReviewLaunchProps {
  testData: TestData;
  onLaunch: () => void;
}

const deviceIcons = {
  desktop: Monitor,
  mobile: Smartphone,
  tablet: Tablet
};

const testTypeNames = {
  usability: 'Usability Test',
  prototype: 'Prototype Test',
  survey: 'Survey',
  'ab-test': 'A/B Test',
  heatmap: 'Heatmap Test'
};

export const ReviewLaunch: React.FC<ReviewLaunchProps> = ({ testData, onLaunch }) => {
  const estimatedCost = testData.participantSource === 'panel' ? testData.participantCount * 12 : 0;
  const estimatedCompletion = new Date(Date.now() + (testData.participantCount * testData.estimatedDuration * 60000));

  return (
    <div className="space-y-8">
      <div className="text-center">
        <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Ready to Launch!
        </h3>
        <p className="text-gray-600 dark:text-gray-400">
          Review your test configuration and launch when ready
        </p>
      </div>

      {/* Test Overview */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-xl font-bold text-gray-900 dark:text-white">
            {testData.name || 'Untitled Test'}
          </h4>
          <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm font-medium rounded-full">
            {testTypeNames[testData.type as keyof typeof testTypeNames]}
          </span>
        </div>
        
        {testData.description && (
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            {testData.description}
          </p>
        )}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center mx-auto mb-2">
              <Clock className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Duration</p>
            <p className="font-semibold text-gray-900 dark:text-white">{testData.estimatedDuration} min</p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center mx-auto mb-2">
              <Users className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Participants</p>
            <p className="font-semibold text-gray-900 dark:text-white">{testData.participantCount}</p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center mx-auto mb-2">
              <BarChart className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Tasks</p>
            <p className="font-semibold text-gray-900 dark:text-white">{testData.tasks.length}</p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/20 rounded-lg flex items-center justify-center mx-auto mb-2">
              <Zap className="w-6 h-6 text-orange-600 dark:text-orange-400" />
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Cost</p>
            <p className="font-semibold text-gray-900 dark:text-white">${estimatedCost}</p>
          </div>
        </div>
      </div>

      {/* Configuration Details */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="space-y-6">
          {/* Device Preferences */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
            <h5 className="font-semibold text-gray-900 dark:text-white mb-4">Device Preferences</h5>
            <div className="flex space-x-4">
              {testData.devicePreference.map((device) => {
                const Icon = deviceIcons[device as keyof typeof deviceIcons];
                return (
                  <div key={device} className="flex items-center space-x-2">
                    <Icon className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                    <span className="text-sm text-gray-700 dark:text-gray-300 capitalize">{device}</span>
                  </div>
                );
              })}
              {testData.devicePreference.length === 0 && (
                <span className="text-sm text-gray-500 dark:text-gray-400">No preference specified</span>
              )}
            </div>
          </div>

          {/* Tasks */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
            <h5 className="font-semibold text-gray-900 dark:text-white mb-4">Tasks & Scenarios</h5>
            <div className="space-y-2">
              {testData.tasks.map((task, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center text-xs font-medium">
                    {index + 1}
                  </span>
                  <span className="text-sm text-gray-700 dark:text-gray-300">{task}</span>
                </div>
              ))}
              {testData.tasks.length === 0 && (
                <span className="text-sm text-gray-500 dark:text-gray-400">No tasks specified</span>
              )}
            </div>
          </div>

          {/* Participants */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
            <h5 className="font-semibold text-gray-900 dark:text-white mb-4">Participant Details</h5>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600 dark:text-gray-400">Source:</span>
                <span className="text-sm font-medium text-gray-900 dark:text-white capitalize">
                  {testData.participantSource === 'panel' ? 'UXGenie Panel' : 'Upload'}
                </span>
              </div>
              {testData.participantSource === 'panel' && (
                <>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Age Range:</span>
                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                      {testData.participantFilters.ageRange}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Location:</span>
                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                      {testData.participantFilters.location}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Experience:</span>
                    <span className="text-sm font-medium text-gray-900 dark:text-white capitalize">
                      {testData.participantFilters.experienceLevel.replace('-', ' ')}
                    </span>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Integrations */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
            <h5 className="font-semibold text-gray-900 dark:text-white mb-4">Integrations</h5>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600 dark:text-gray-400">Prototype Tool:</span>
                <span className="text-sm font-medium text-gray-900 dark:text-white capitalize">
                  {testData.integrations.prototypeTool || 'None'}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600 dark:text-gray-400">Analytics:</span>
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  {testData.integrations.analytics.length} tools
                </span>
              </div>
              {testData.integrations.prototypeUrl && (
                <div>
                  <span className="text-sm text-gray-600 dark:text-gray-400 block mb-1">Prototype URL:</span>
                  <span className="text-xs text-blue-600 dark:text-blue-400 break-all">
                    {testData.integrations.prototypeUrl}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Settings */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
            <h5 className="font-semibold text-gray-900 dark:text-white mb-4">Test Settings</h5>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Video className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">Video Recording</span>
                </div>
                <span className={`text-sm font-medium ${
                  testData.integrations.videoRecording 
                    ? 'text-green-600 dark:text-green-400' 
                    : 'text-gray-500 dark:text-gray-400'
                }`}>
                  {testData.integrations.videoRecording ? 'Enabled' : 'Disabled'}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <MessageSquare className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">Live Notes</span>
                </div>
                <span className={`text-sm font-medium ${
                  testData.integrations.liveNotes 
                    ? 'text-green-600 dark:text-green-400' 
                    : 'text-gray-500 dark:text-gray-400'
                }`}>
                  {testData.integrations.liveNotes ? 'Enabled' : 'Disabled'}
                </span>
              </div>
            </div>
          </div>

          {/* Launch Estimation */}
          <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-lg p-6 border border-green-200 dark:border-green-800">
            <h5 className="font-semibold text-green-800 dark:text-green-300 mb-4">Launch Estimation</h5>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-green-700 dark:text-green-400">Expected Completion:</span>
                <span className="text-sm font-medium text-green-800 dark:text-green-300">
                  {estimatedCompletion.toLocaleDateString()}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-green-700 dark:text-green-400">Total Cost:</span>
                <span className="text-sm font-medium text-green-800 dark:text-green-300">
                  ${estimatedCost}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-green-700 dark:text-green-400">Data Points:</span>
                <span className="text-sm font-medium text-green-800 dark:text-green-300">
                  ~{testData.participantCount * testData.tasks.length * 5}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Launch Button */}
      <div className="text-center">
        <button
          onClick={onLaunch}
          className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg"
        >
          <Rocket className="w-6 h-6 mr-3" />
          Launch Test
        </button>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-3">
          Your test will be live immediately and participants will be notified
        </p>
      </div>
    </div>
  );
};