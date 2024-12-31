import React from 'react';
import { useCredentials } from '../../hooks/useCredentials';
import { CredentialCard } from './CredentialCard';

export function CredentialsList() {
  const { credentials } = useCredentials();

  return (
    <div className="space-y-4">
      {credentials.map(credential => (
        <CredentialCard 
          key={credential.id} 
          credential={credential} 
        />
      ))}
    </div>
  );
}