import React from 'react';
import { Lock, Key, AlertTriangle } from 'lucide-react';

export function SecuritySettings() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center gap-2">
        <Lock className="h-5 w-5 text-indigo-600" />
        Security Settings
      </h2>

      <div className="mt-4 space-y-4">
        <div className="border dark:border-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Key className="h-5 w-5 text-indigo-600" />
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white">Recovery Phrase</h3>
                <p className="text-sm text-gray-500">Backup your wallet recovery phrase</p>
              </div>
            </div>
            <button className="px-3 py-1 text-sm bg-indigo-600 text-white rounded hover:bg-indigo-700">
              View
            </button>
          </div>
        </div>

        <div className="border dark:border-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <AlertTriangle className="h-5 w-5 text-yellow-600" />
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white">Trusted Contacts</h3>
                <p className="text-sm text-gray-500">Add recovery contacts for enhanced security</p>
              </div>
            </div>
            <button className="px-3 py-1 text-sm bg-indigo-600 text-white rounded hover:bg-indigo-700">
              Manage
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}