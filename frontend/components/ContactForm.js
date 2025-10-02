import { useState } from 'react';

const API_BASE = process.env.NEXT_PUBLIC_API_BASE || 'http://localhost:5000';

function Toast({ type = 'success', message = '', onClose }) {
  if (!message) return null;
  const color = type === 'success' ? 'bg-green-600' : 'bg-red-600';
  return (
    <div className={`fixed bottom-4 right-4 text-white px-4 py-2 rounded shadow ${color}`} role="status" aria-live="polite">
      <div className="flex items-center gap-3">
        <span>{message}</span>
        <button onClick={onClose} className="underline">Close</button>
      </div>
    </div>
  );
}

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [toast, setToast] = useState({ type: 'success', message: '' });

  async function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setToast({ type: 'error', message: 'Please fill all fields.' });
      return;
    }
    const emailOk = /.+@.+\..+/.test(email);
    if (!emailOk) {
      setToast({ type: 'error', message: 'Please enter a valid email.' });
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch(`${API_BASE}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });
      if (!res.ok) throw new Error('Failed to send message');
      setName('');
      setEmail('');
      setMessage('');
      setToast({ type: 'success', message: 'Message sent successfully!' });
    } catch (err) {
      setToast({ type: 'error', message: err.message || 'Something went wrong.' });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="contact" aria-label="Contact" className="bg-white">
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-20">
        <h2 className="text-2xl font-semibold">Contact</h2>
        <form onSubmit={handleSubmit} className="mt-6 max-w-2xl space-y-4" noValidate>
          <div>
            <label htmlFor="name" className="block text-sm font-medium">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-googleBlue/40"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-googleBlue/40"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium">Message</label>
            <textarea
              id="message"
              name="message"
              required
              rows="5"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="mt-1 w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-googleBlue/40"
              placeholder="Write your message..."
            />
          </div>
          <div>
            <button
              type="submit"
              disabled={submitting}
              className="px-4 py-2 rounded bg-googleBlue text-white hover:opacity-90 disabled:opacity-50"
            >
              {submitting ? 'Sending…' : 'Send Message'}
            </button>
          </div>
        </form>
      </div>
      <Toast type={toast.type} message={toast.message} onClose={() => setToast({ ...toast, message: '' })} />
    </section>
  );
}

