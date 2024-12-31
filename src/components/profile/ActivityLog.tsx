import React from 'react';
import { Activity, LogIn, Shield, Share2 } from 'lucide-react';

interface ActivityItem {
  id: string;
  type: 'login' | 'verification' | 'permission';
  description: string;
  timestamp: string;
  icon: typeof Activity;
}

const mockActivities: ActivityItem[] = [
  {
    id: '1',
    type: 'login',
    description: 'Logged in from Chrome browser',
    timestamp: '2024-03-15T10:30:00Z',
    icon: LogIn
  },
  {
    id: '2',
    type: 'verification',
    description: 'Age verification for DeFi Exchange',
    timestamp: '2024-03-15T09:15:00Z',
    icon: Shield
  },
  {
    id: '3',
    type: 'permission',
    description: 'Updated permissions for NFT Marketplace',
    timestamp: '2024-03-14T16:45:00Z',
    icon: Share2
  }
];

export function ActivityLog() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center gap-2">
        <Activity className="h-5 w-5 text-indigo-600" />
        Recent Activity
      </h2>

      <div className="mt-4 space-y-4">
        {mockActivities.map(activity => (
          <div key={activity.id} className="flex items-start gap-3">
            <div className="p-2 bg-indigo-50 dark:bg-indigo-900/50 rounded">
              <activity.icon className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
            </div>
            <div>
              <p className="text-sm text-gray-900 dark:text-white">{activity.description}</p>
              <p className="text-xs text-gray-500">
                {new Date(activity.timestamp).toLocaleString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}