import React from 'react';
import type { Credential } from '../../types/auth';

interface CredentialListProps {
  credentials: Credential[];
}

export function CredentialList({ credentials }: CredentialListProps) {
  return (
    <div className="grid gap-4">
      {credentials.map((cred) => (
        <div key={cred.id} className="p-4 bg-white rounded-lg shadow">
          <h3 className="font-medium">{cred.type}</h3>
          <p className="text-sm text-gray-500">
            Issued: {new Date(cred.issuanceDate).toLocaleDateString()}
          </p>
          <div className="mt-2">
            {Object.entries(cred.claims).map(([key, value]) => (
              <div key={key} className="text-sm">
                <span className="font-medium">{key}:</span> {value}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}