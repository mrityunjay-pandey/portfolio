import ContactMessage from '../models/ContactMessage.js';

/**
 * Save a contact message
 */
export async function saveContactMessage({ name, email, message }) {
  const doc = await ContactMessage.create({ name, email, message });
  return doc.toObject();
}

