import { supabase } from '../config/db.js';
import { ApiError } from '../utils/responseHandler.js';
import { createDID, verifyDID } from '../services/didService.js';

export async function registerDID(req, res, next) {
  try {
    const { walletAddress } = req.body;
    
    if (!walletAddress) {
      throw new ApiError(400, 'Wallet address is required');
    }

    const did = await createDID(walletAddress);
    
    const { data, error } = await supabase
      .from('users')
      .insert({ wallet_address: walletAddress, did })
      .select()
      .single();

    if (error) throw new ApiError(500, 'Failed to register DID');

    return res.status(201).json({ did: data.did });
  } catch (error) {
    next(error);
  }
}

export async function verifyDIDOwnership(req, res, next) {
  try {
    const { did, signature, message } = req.body;
    
    if (!did || !signature || !message) {
      throw new ApiError(400, 'DID, signature, and message are required');
    }

    const isValid = await verifyDID(did, signature, message);
    
    return res.json({ isValid });
  } catch (error) {
    next(error);
  }
}