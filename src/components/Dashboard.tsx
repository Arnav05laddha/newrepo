import React from 'react';
import { Key } from 'lucide-react';
import { useAuth } from '../features/auth/AuthProvider';
import { CredentialManager } from '../features/credentials/CredentialManager';
import { SelectiveDisclosure } from '../features/disclosure/SelectiveDisclosure';

export function Dashboard() {
  const { did, isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">Welcome to OneID</h2>
          <p className="mt-2 text-gray-600">Please connect your wallet to continue.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <div className="flex items-center space-x-4">
          <Key className="h-8 w-8 text-indigo-600" />
          <div>
            <h2 className="text-2xl font-bold">Your DID</h2>
            <p className="text-gray-600 break-all">{did}</p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <CredentialManager />
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <SelectiveDisclosure />
        </div>
      </div>
    </div>
  );
}