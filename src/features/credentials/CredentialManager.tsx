import React from 'react';
import { Shield, Plus } from 'lucide-react';
import { useCredentials } from '../../hooks/useCredentials';
import { issueCredential } from '../../services/credentials';
import { CredentialList } from './CredentialList';

export function CredentialManager() {
  const { credentials, addCredential } = useCredentials();

  const handleAddTestCredential = async () => {
    const credential = await issueCredential('EmailVerification', {
      email: 'test@example.com'
    });
    addCredential(credential);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <Shield className="h-5 w-5 text-indigo-600" />
          Credentials
        </h2>
        <button
          onClick={handleAddTestCredential}
          className="flex items-center gap-2 px-3 py-2 text-sm bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
        >
          <Plus className="h-4 w-4" />
          Add Test Credential
        </button>
      </div>
      <CredentialList credentials={credentials} />
    </div>
  );
}