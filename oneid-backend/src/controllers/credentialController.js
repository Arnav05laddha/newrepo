import { supabase } from '../config/db.js';
import { ApiError } from '../utils/responseHandler.js';
import { issueCredential, verifyCredential } from '../services/credentialService.js';

export async function issueNewCredential(req, res, next) {
  try {
    const { type, claims, userId } = req.body;
    
    if (!type || !claims || !userId) {
      throw new ApiError(400, 'Type, claims, and userId are required');
    }

    const credential = await issueCredential(type, claims, userId);
    
    const { data, error } = await supabase
      .from('credentials')
      .insert({
        user_id: userId,
        type,
        issuer: credential.issuer,
        claims: credential.claims
      })
      .select()
      .single();

    if (error) throw new ApiError(500, 'Failed to store credential');

    return res.status(201).json({ credential: data });
  } catch (error) {
    next(error);
  }
}

export async function verifyCredentialValidity(req, res, next) {
  try {
    const { credentialId } = req.params;
    
    const { data: credential, error } = await supabase
      .from('credentials')
      .select()
      .eq('id', credentialId)
      .single();

    if (error || !credential) {
      throw new ApiError(404, 'Credential not found');
    }

    const isValid = await verifyCredential(credential);
    
    return res.json({ isValid });
  } catch (error) {
    next(error);
  }
}