import { ethers } from 'ethers';
import { provider } from '../config/blockchain.js';

export async function issueCredential(type, claims, userId) {
  const credential = {
    id: ethers.id(Date.now().toString()),
    type,
    issuer: 'did:oneid:issuer',
    issuanceDate: new Date().toISOString(),
    claims,
    userId
  };

  // In production, this would sign the credential with the issuer's private key
  return credential;
}

export async function verifyCredential(credential) {
  // In production, this would verify the credential's signature
  // and check revocation status on-chain
  return !credential.revoked;
}