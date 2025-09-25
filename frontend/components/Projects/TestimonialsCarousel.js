import { useState } from 'react';

const testimonials = [
  { quote: 'Used the DBMS project templates for our semester project—saved weeks!', author: 'Peer on LinkedIn' },
  { quote: 'Clean code and reusable modules—great foundation for CiviSync.', author: 'SIH teammate' },
  { quote: 'Helpful mentorship and consistent content helped me crack interviews.', author: 'Student' },
];

export default function TestimonialsCarousel() {
  const [idx, setIdx] = useState(0);
  function next() { setIdx((idx + 1) % testimonials.length); }
  function prev() { setIdx((idx - 1 + testimonials.length) % testimonials.length); }
  const t = testimonials[idx];
  return (
    <div className="mt-8 border border-gray-100 rounded p-4 bg-white">
      <div className="text-gray-800">“{t.quote}”</div>
      <div className="mt-1 text-sm text-gray-600">— {t.author}</div>
      <div className="mt-3 flex gap-2">
        <button onClick={prev} className="px-3 py-1.5 text-sm rounded border border-gray-200 hover:border-gray-300">Prev</button>
        <button onClick={next} className="px-3 py-1.5 text-sm rounded bg-googleBlue text-white hover:opacity-90">Next</button>
      </div>
    </div>
  );
}
