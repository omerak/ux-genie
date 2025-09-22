import React, { useState } from 'react';
import { X, ArrowLeft, ArrowRight, Check } from 'lucide-react';
import { TestTypeSelection } from './onboarding/TestTypeSelection';
import { TestConfiguration } from './onboarding/TestConfiguration';
import { ParticipantManagement } from './onboarding/ParticipantManagement';
import { IntegrationsSettings } from './onboarding/IntegrationsSettings';
import { ReviewLaunch } from './onboarding/ReviewLaunch';

interface NewTestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface TestData {
  type: string;
  name: string;
  description: string;
  devicePreference: string[];
  tasks: string[];
  estimatedDuration: number;
  participantSource: 'upload' | 'panel';
  participantCount: number;
  participantFilters: {
    ageRange: string;
    location: string;
    deviceExperience: string;
    experienceLevel: string;
  };
  integrations: {
    prototypeUrl: string;
    prototypeTool: string;
    videoRecording: boolean;
    analytics: string[];
    liveNotes: boolean;
  };
}

const steps = [
  { id: 1, title: 'Test Type', description: 'Choose your test format' },
  { id: 2, title: 'Configuration', description: 'Set up test details' },
  { id: 3, title: 'Participants', description: 'Manage your audience' },
  { id: 4, title: 'Integrations', description: 'Connect your tools' },
  { id: 5, title: 'Review', description: 'Launch your test' }
];

export const NewTestModal: React.FC<NewTestModalProps> = ({ isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [testData, setTestData] = useState<TestData>({
    type: '',
    name: '',
    description: '',
    devicePreference: [],
    tasks: [],
    estimatedDuration: 15,
    participantSource: 'panel',
    participantCount: 10,
    participantFilters: {
      ageRange: '25-45',
      location: 'United States',
      deviceExperience: 'intermediate',
      experienceLevel: 'regular'
    },
    integrations: {
      prototypeUrl: '',
      prototypeTool: '',
      videoRecording: true,
      analytics: [],
      liveNotes: true
    }
  });

  const updateTestData = (updates: Partial<TestData>) => {
    setTestData(prev => ({ ...prev, ...updates }));
  };

  const nextStep = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return testData.type !== '';
      case 2:
        return testData.name.trim() !== '';
      case 3:
        return testData.participantCount > 0;
      case 4:
        return true;
      case 5:
        return true;
      default:
        return false;
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return <TestTypeSelection testData={testData} updateTestData={updateTestData} />;
      case 2:
        return <TestConfiguration testData={testData} updateTestData={updateTestData} />;
      case 3:
        return <ParticipantManagement testData={testData} updateTestData={updateTestData} />;
      case 4:
        return <IntegrationsSettings testData={testData} updateTestData={updateTestData} />;
      case 5:
        return <ReviewLaunch testData={testData} onLaunch={() => {
          // Handle test launch
          console.log('Launching test:', testData);
          onClose();
        }} />;
      default:
        return null;
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Create New Test</h2>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              Step {currentStep} of {steps.length}: {steps[currentStep - 1].description}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="px-6 py-4 bg-gray-50 dark:bg-gray-800/50">
          <div className="flex items-center justify-between mb-2">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                  currentStep > step.id
                    ? 'bg-green-500 text-white'
                    : currentStep === step.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400'
                }`}>
                  {currentStep > step.id ? <Check className="w-4 h-4" /> : step.id}
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-16 h-0.5 mx-2 transition-colors ${
                    currentStep > step.id ? 'bg-green-500' : 'bg-gray-200 dark:bg-gray-700'
                  }`} />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between text-xs text-gray-600 dark:text-gray-400">
            {steps.map(step => (
              <span key={step.id} className="text-center">{step.title}</span>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[60vh]">
          {renderStepContent()}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between p-6 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
          <button
            onClick={prevStep}
            disabled={currentStep === 1}
            className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </button>

          <div className="flex items-center space-x-3">
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {currentStep} of {steps.length}
            </span>
            {currentStep === 5 ? (
              <button
                onClick={() => {
                  console.log('Launching test:', testData);
                  onClose();
                }}
                className="flex items-center px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-colors font-medium"
              >
                Launch Test
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            ) : (
              <button
                onClick={nextStep}
                disabled={!canProceed()}
                className="flex items-center px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium"
              >
                Continue
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};