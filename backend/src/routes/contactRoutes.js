import { Router } from 'express';
import { createContact } from '../controllers/contactController.js';
import { contactLimiter } from '../middleware/rateLimiters.js';

const router = Router();

router.post('/', contactLimiter, createContact);

export default router;

