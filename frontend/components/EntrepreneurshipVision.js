import { motion } from 'framer-motion';

export default function EntrepreneurshipVision() {
  return (
    <section id="entrepreneurship" aria-label="Entrepreneurship & Vision" className="bg-white">
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-20">
        <h2 className="text-2xl font-semibold">Entrepreneurship & Vision</h2>
        <motion.p className="mt-3 text-gray-700 max-w-prose" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          PathPradarshak founder story. Vision: build products that scale globally and solve real problems. Leadership, mentorship, and a strong product mindset guide my work.
        </motion.p>
      </div>
    </section>
  );
}
