import React, { useState } from 'react';
import { Card } from '../components/Card';
import { Play, Pause, Square, Users, Eye, Clock, Settings } from 'lucide-react';

export const LiveTesting: React.FC = () => {
  const [isRecording, setIsRecording] = useState(false);

  const activeSessions = [
    { id: '1', user: 'John Doe', duration: '00:04:32', task: 'Checkout Process', status: 'active', location: 'New York, US' },
    { id: '2', user: 'Sarah Chen', duration: '00:02:18', task: 'Product Search', status: 'active', location: 'London, UK' },
    { id: '3', user: 'Mike Johnson', duration: '00:07:45', task: 'Account Setup', status: 'paused', location: 'Toronto, CA' },
  ];

  const completedSessions = [
    { id: '4', user: 'Emma Wilson', duration: '00:12:34', task: 'Mobile Navigation', completedAt: '2 hours ago', rating: 4 },
    { id: '5', user: 'David Brown', duration: '00:08:22', task: 'Checkout Process', completedAt: '3 hours ago', rating: 5 },
    { id: '6', user: 'Lisa Garcia', duration: '00:15:17', task: 'Product Discovery', completedAt: '5 hours ago', rating: 3 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Live Testing</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Monitor real-time user sessions and gather behavioral insights.
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
            <Settings className="w-4 h-4 mr-2 inline" />
            Configure
          </button>
          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Start New Test
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <Card>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Active Sessions</p>
              <p className="text-3xl font-bold text-gray-900 dark:text-white mt-2">3</p>
            </div>
            <div className="w-12 h-12 bg-green-50 dark:bg-green-900/20 rounded-lg flex items-center justify-center">
              <Users className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Viewers</p>
              <p className="text-3xl font-bold text-gray-900 dark:text-white mt-2">12</p>
            </div>
            <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
              <Eye className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Avg. Duration</p>
              <p className="text-3xl font-bold text-gray-900 dark:text-white mt-2">8:42</p>
            </div>
            <div className="w-12 h-12 bg-purple-50 dark:bg-purple-900/20 rounded-lg flex items-center justify-center">
              <Clock className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Recording Status</p>
              <p className="text-lg font-bold text-gray-900 dark:text-white mt-2">
                {isRecording ? 'Recording' : 'Stopped'}
              </p>
            </div>
            <button
              onClick={() => setIsRecording(!isRecording)}
              className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors ${
                isRecording 
                  ? 'bg-red-50 dark:bg-red-900/20 hover:bg-red-100 dark:hover:bg-red-900/30' 
                  : 'bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600'
              }`}
            >
              {isRecording ? (
                <Square className="w-6 h-6 text-red-600 dark:text-red-400" />
              ) : (
                <Play className="w-6 h-6 text-gray-600 dark:text-gray-400" />
              )}
            </button>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Active Sessions</h3>
            <span className="px-2 py-1 bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-400 text-xs font-medium rounded-full">
              {activeSessions.length} Live
            </span>
          </div>
          
          <div className="space-y-4">
            {activeSessions.map((session) => (
              <div key={session.id} className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className={`w-3 h-3 rounded-full ${
                    session.status === 'active' ? 'bg-green-500' : 'bg-yellow-500'
                  }`} />
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">{session.user}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{session.task}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-500">{session.location}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <span className="text-sm font-mono text-gray-600 dark:text-gray-400">{session.duration}</span>
                  <div className="flex items-center space-x-2">
                    <button className="p-1 text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                      <Eye className="w-4 h-4" />
                    </button>
                    <button className="p-1 text-gray-400 hover:text-yellow-600 dark:hover:text-yellow-400">
                      <Pause className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Recent Completions</h3>
            <button className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300">
              View All
            </button>
          </div>
          
          <div className="space-y-4">
            {completedSessions.map((session) => (
              <div key={session.id} className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">{session.user}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{session.task}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-500">{session.completedAt}</p>
                </div>
                
                <div className="flex items-center space-x-4">
                  <span className="text-sm font-mono text-gray-600 dark:text-gray-400">{session.duration}</span>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-3 h-3 rounded-full mr-1 ${
                          i < session.rating ? 'bg-yellow-400' : 'bg-gray-200 dark:bg-gray-700'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};