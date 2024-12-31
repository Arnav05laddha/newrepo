import { ethers } from 'ethers';
import { verifySignature } from '../config/blockchain.js';

export async function createDID(walletAddress) {
  if (!ethers.isAddress(walletAddress)) {
    throw new Error('Invalid wallet address');
  }
  return `did:oneid:${walletAddress.toLowerCase()}`;
}

export async function verifyDID(did, signature, message) {
  try {
    const address = did.split(':')[2];
    return await verifySignature(message, signature, address);
  } catch {
    return false;
  }
}