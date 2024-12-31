import { ethers } from 'ethers';

export async function createDID(address: string): Promise<string> {
  return `did:oneid:${address}`;
}

export async function verifyDID(did: string): Promise<boolean> {
  try {
    const address = did.split(':')[2];
    return ethers.isAddress(address);
  } catch {
    return false;
  }
}