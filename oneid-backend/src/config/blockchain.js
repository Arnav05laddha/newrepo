import { ethers } from 'ethers';
import { env } from './env.js';

export const provider = new ethers.JsonRpcProvider(env.RPC_URL);

export async function verifySignature(message, signature, address) {
  try {
    const recoveredAddress = ethers.verifyMessage(message, signature);
    return recoveredAddress.toLowerCase() === address.toLowerCase();
  } catch (error) {
    return false;
  }
}