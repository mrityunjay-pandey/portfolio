import Joi from 'joi';
import { loginUser } from '../services/authService.js';

const loginSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
});

/**
 * POST /api/auth/login
 */
export async function login(req, res, next) {
  try {
    const { value, error } = loginSchema.validate(req.body);
    if (error) return res.status(400).json({ message: error.message });
    const result = await loginUser(value);
    if (!result) return res.status(401).json({ message: 'Invalid credentials' });
    res.json(result);
  } catch (err) { next(err); }
}

