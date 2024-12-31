import { useState } from 'react';
import { useAccount } from 'wagmi';
import type { Credential } from '../types/auth';

export function useCredentials() {
  const { address } = useAccount();
  const [credentials, setCredentials] = useState<Credential[]>([
    {
      id: '1',
      type: 'EmailVerification',
      issuer: 'did:oneid:verifier',
      issuanceDate: '2024-03-15',
      claims: { email: 'user@example.com' }
    }
  ]);

  const addCredential = (credential: Credential) => {
    setCredentials(prev => [...prev, credential]);
  };

  const verifyCredential = async (credentialId: string) => {
    // Implement verification logic here
    return true;
  };

  return {
    credentials,
    addCredential,
    verifyCredential,
    isConnected: !!address
  };
}