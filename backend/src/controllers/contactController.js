import Joi from 'joi';
import { saveContactMessage } from '../services/contactService.js';

const contactSchema = Joi.object({
  name: Joi.string().max(100).required(),
  email: Joi.string().email().max(120).required(),
  message: Joi.string().max(2000).required(),
});

/**
 * POST /api/contact
 */
export async function createContact(req, res, next) {
  try {
    const { value, error } = contactSchema.validate(req.body);
    if (error) return res.status(400).json({ message: error.message });
    const saved = await saveContactMessage(value);
    res.status(201).json(saved);
  } catch (err) { next(err); }
}

