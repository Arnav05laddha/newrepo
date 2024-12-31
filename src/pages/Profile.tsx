import React from 'react';
import { useAuth } from '../features/auth/AuthProvider';
import { ProfileHeader } from '../components/profile/ProfileHeader';
import { CredentialManager } from '../features/credentials/CredentialManager';
import { ConnectedApps } from '../components/profile/ConnectedApps';
import { SecuritySettings } from '../components/profile/SecuritySettings';
import { ActivityLog } from '../components/profile/ActivityLog';

export function Profile() {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Please connect your wallet</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            You need to connect your wallet to view your profile.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <ProfileHeader />
      
      <div className="mt-8 grid gap-8 md:grid-cols-2">
        <div className="space-y-8">
          <CredentialManager />
          <SecuritySettings />
        </div>
        <div className="space-y-8">
          <ConnectedApps />
          <ActivityLog />
        </div>
      </div>
    </div>
  );
}