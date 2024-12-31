import React from 'react';
import { Globe, Trash2 } from 'lucide-react';

interface ConnectedApp {
  id: string;
  name: string;
  domain: string;
  lastAccess: string;
  permissions: string[];
}

const mockApps: ConnectedApp[] = [
  {
    id: '1',
    name: 'DeFi Exchange',
    domain: 'defi-exchange.com',
    lastAccess: '2024-03-15',
    permissions: ['Read Profile', 'Verify Age']
  },
  {
    id: '2',
    name: 'NFT Marketplace',
    domain: 'nft-market.io',
    lastAccess: '2024-03-14',
    permissions: ['Read Profile']
  }
];

export function ConnectedApps() {
  const removeApp = (id: string) => {
    // Implement app removal logic
    console.log('Removing app:', id);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center gap-2">
        <Globe className="h-5 w-5 text-indigo-600" />
        Connected Apps
      </h2>
      
      <div className="mt-4 space-y-4">
        {mockApps.map(app => (
          <div key={app.id} className="border dark:border-gray-700 rounded-lg p-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white">{app.name}</h3>
                <p className="text-sm text-gray-500">{app.domain}</p>
                <p className="text-sm text-gray-500 mt-1">
                  Last access: {new Date(app.lastAccess).toLocaleDateString()}
                </p>
              </div>
              <button
                onClick={() => removeApp(app.id)}
                className="p-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
            <div className="mt-2">
              <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">Permissions</h4>
              <div className="mt-1 flex flex-wrap gap-2">
                {app.permissions.map(permission => (
                  <span
                    key={permission}
                    className="px-2 py-1 text-xs bg-indigo-50 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 rounded"
                  >
                    {permission}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}