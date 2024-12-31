import React from 'react';
import { Shield, Check, Clock } from 'lucide-react';
import type { Credential } from '../../types/auth';

interface CredentialCardProps {
  credential: Credential;
}

export function CredentialCard({ credential }: CredentialCardProps) {
  return (
    <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <Shield className="h-5 w-5 text-indigo-600" />
          <div>
            <h4 className="font-medium">{credential.type}</h4>
            <p className="text-sm text-gray-500">
              Issued: {new Date(credential.issuanceDate).toLocaleDateString()}
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Check className="h-5 w-5 text-green-500" />
          <span className="text-sm text-green-600">Verified</span>
        </div>
      </div>
      {credential.expirationDate && (
        <div className="mt-2 flex items-center text-sm text-gray-500">
          <Clock className="h-4 w-4 mr-1" />
          Expires: {new Date(credential.expirationDate).toLocaleDateString()}
        </div>
      )}
    </div>
  );
}