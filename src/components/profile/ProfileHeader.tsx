import React from 'react';
import { Shield, Copy } from 'lucide-react';
import { useAuth } from '../../features/auth/AuthProvider';

export function ProfileHeader() {
  const { did } = useAuth();

  const copyDid = () => {
    navigator.clipboard.writeText(did || '');
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
      <div className="flex items-center space-x-4">
        <div className="h-16 w-16 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center">
          <Shield className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
        </div>
        <div className="flex-1">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Your Profile</h1>
          <div className="mt-1 flex items-center space-x-2">
            <p className="text-sm text-gray-500 dark:text-gray-400 font-mono">{did}</p>
            <button
              onClick={copyDid}
              className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
              title="Copy DID"
            >
              <Copy className="h-4 w-4 text-gray-500" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}