import React, { useState } from 'react';
import { Upload, Users, Star, Clock, Download } from 'lucide-react';
import { TestData } from '../NewTestModal';

interface ParticipantManagementProps {
  testData: TestData;
  updateTestData: (updates: Partial<TestData>) => void;
}

const ageRanges = ['18-24', '25-34', '35-44', '45-54', '55-64', '65+'];
const locations = ['United States', 'United Kingdom', 'Canada', 'Australia', 'Germany', 'France', 'Global'];
const deviceExperience = ['beginner', 'intermediate', 'advanced'];
const experienceLevels = ['first-time', 'occasional', 'regular', 'power-user'];

export const ParticipantManagement: React.FC<ParticipantManagementProps> = ({ testData, updateTestData }) => {
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    // Handle file drop logic here
  };

  const updateFilters = (key: string, value: string) => {
    updateTestData({
      participantFilters: {
        ...testData.participantFilters,
        [key]: value
      }
    });
  };

  const estimatedCost = testData.participantCount * (testData.participantSource === 'panel' ? 12 : 0);
  const estimatedTime = Math.ceil(testData.participantCount / 5) * testData.estimatedDuration;

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          Participant Management
        </h3>
        <p className="text-gray-600 dark:text-gray-400">
          Choose how to recruit participants for your test
        </p>
      </div>

      {/* Source Selection */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <button
          onClick={() => updateTestData({ participantSource: 'upload' })}
          className={`p-6 rounded-xl border-2 text-left transition-all ${
            testData.participantSource === 'upload'
              ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
              : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
          }`}
        >
          <div className="flex items-center space-x-3 mb-4">
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
              testData.participantSource === 'upload'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-400'
            }`}>
              <Upload className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
              Upload Participants
            </h4>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Use your own participant list via CSV upload or manual entry
          </p>
          <div className="space-y-2 text-xs text-gray-500 dark:text-gray-400">
            <div className="flex items-center">
              <div className="w-1 h-1 bg-gray-400 rounded-full mr-2" />
              Full control over participants
            </div>
            <div className="flex items-center">
              <div className="w-1 h-1 bg-gray-400 rounded-full mr-2" />
              No additional recruitment costs
            </div>
            <div className="flex items-center">
              <div className="w-1 h-1 bg-gray-400 rounded-full mr-2" />
              Requires existing user base
            </div>
          </div>
        </button>

        <button
          onClick={() => updateTestData({ participantSource: 'panel' })}
          className={`p-6 rounded-xl border-2 text-left transition-all ${
            testData.participantSource === 'panel'
              ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
              : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
          }`}
        >
          <div className="flex items-center space-x-3 mb-4">
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
              testData.participantSource === 'panel'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-400'
            }`}>
              <Users className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
              UXGenie Panel
            </h4>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Recruit from our vetted panel of 50,000+ participants worldwide
          </p>
          <div className="space-y-2 text-xs text-gray-500 dark:text-gray-400">
            <div className="flex items-center">
              <div className="w-1 h-1 bg-gray-400 rounded-full mr-2" />
              Pre-screened participants
            </div>
            <div className="flex items-center">
              <div className="w-1 h-1 bg-gray-400 rounded-full mr-2" />
              Advanced targeting options
            </div>
            <div className="flex items-center">
              <div className="w-1 h-1 bg-gray-400 rounded-full mr-2" />
              $12 per participant
            </div>
          </div>
        </button>
      </div>

      {/* Upload Section */}
      {testData.participantSource === 'upload' && (
        <div className="space-y-6">
          <div
            className={`border-2 border-dashed rounded-xl p-8 text-center transition-colors ${
              dragActive
                ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                : 'border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500'
            }`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Upload Participant List
            </h4>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Drag and drop your CSV file or click to browse
            </p>
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Choose File
            </button>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
              CSV format: email, name, phone (optional)
            </p>
          </div>

          <div className="flex items-center justify-center">
            <button className="flex items-center text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300">
              <Download className="w-4 h-4 mr-2" />
              Download CSV Template
            </button>
          </div>
        </div>
      )}

      {/* Panel Configuration */}
      {testData.participantSource === 'panel' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
              Targeting Filters
            </h4>

            {/* Age Range */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Age Range
              </label>
              <select
                value={testData.participantFilters.ageRange}
                onChange={(e) => updateFilters('ageRange', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {ageRanges.map(range => (
                  <option key={range} value={range}>{range}</option>
                ))}
              </select>
            </div>

            {/* Location */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Location
              </label>
              <select
                value={testData.participantFilters.location}
                onChange={(e) => updateFilters('location', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {locations.map(location => (
                  <option key={location} value={location}>{location}</option>
                ))}
              </select>
            </div>

            {/* Device Experience */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Device Experience
              </label>
              <select
                value={testData.participantFilters.deviceExperience}
                onChange={(e) => updateFilters('deviceExperience', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {deviceExperience.map(level => (
                  <option key={level} value={level}>
                    {level.charAt(0).toUpperCase() + level.slice(1)}
                  </option>
                ))}
              </select>
            </div>

            {/* Experience Level */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Experience Level
              </label>
              <select
                value={testData.participantFilters.experienceLevel}
                onChange={(e) => updateFilters('experienceLevel', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {experienceLevels.map(level => (
                  <option key={level} value={level}>
                    {level.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
              Participant Count
            </h4>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Number of Participants
              </label>
              <input
                type="number"
                value={testData.participantCount}
                onChange={(e) => updateTestData({ participantCount: parseInt(e.target.value) || 0 })}
                min="1"
                max="500"
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                Recommended: 5-15 for qualitative tests, 50+ for quantitative
              </p>
            </div>

            {/* Estimation Cards */}
            <div className="space-y-4">
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Estimated Cost</span>
                  <Clock className="w-4 h-4 text-gray-400" />
                </div>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  ${estimatedCost}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {testData.participantCount} participants × $12 each
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Completion Time</span>
                  <Users className="w-4 h-4 text-gray-400" />
                </div>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {Math.floor(estimatedTime / 60)}h {estimatedTime % 60}m
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Estimated total duration
                </p>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
                <div className="flex items-center space-x-2 mb-2">
                  <Star className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span className="text-sm font-medium text-blue-800 dark:text-blue-300">Quality Guarantee</span>
                </div>
                <p className="text-xs text-blue-700 dark:text-blue-400">
                  All participants are pre-screened and rated 4.5+ stars
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};