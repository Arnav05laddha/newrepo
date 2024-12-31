import { Router } from 'express';
import { issueNewCredential, verifyCredentialValidity } from '../controllers/credentialController.js';
import { authenticate } from '../middlewares/authMiddleware.js';

const router = Router();

router.post('/', authenticate, issueNewCredential);
router.get('/:credentialId/verify', authenticate, verifyCredentialValidity);

export default router;