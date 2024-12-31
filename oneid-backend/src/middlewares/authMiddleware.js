import { jwtVerify } from 'jose';
import { env } from '../config/env.js';
import { ApiError } from '../utils/responseHandler.js';

export async function authenticate(req, res, next) {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader?.startsWith('Bearer ')) {
      throw new ApiError(401, 'No token provided');
    }

    const token = authHeader.split(' ')[1];
    const { payload } = await jwtVerify(
      token,
      new TextEncoder().encode(env.JWT_SECRET)
    );

    req.user = payload;
    next();
  } catch (error) {
    next(new ApiError(401, 'Invalid or expired token'));
  }
}