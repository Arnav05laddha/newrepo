import { Router } from 'express';
import { registerDID, verifyDIDOwnership } from '../controllers/didController.js';
import { authenticate } from '../middlewares/authMiddleware.js';

const router = Router();

router.post('/register', registerDID);
router.post('/verify', authenticate, verifyDIDOwnership);

export default router;