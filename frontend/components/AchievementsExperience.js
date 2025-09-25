import { motion } from 'framer-motion';

export default function AchievementsExperience() {
  const items = [
    'JEE cleared via online prep (Fee Waiver seat)',
    '9 CGPA while teaching and building projects',
    '500+ students helped with live DSA assignment solutions',
    '200+ LeetCode problems solved',
    'LinkedIn consistency challenges',
    'Hackathons, coding contests',
    'Teaching + YouTube playlists (DSA, Python, Digital Logic)'
  ];
  return (
    <section id="achievements" aria-label="Achievements & Experience" className="bg-white">
      <div className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-semibold">Achievements & Experience</h2>
        <ul className="mt-4 space-y-2 text-gray-700">
          {items.map((txt, i) => (
            <motion.li key={txt} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.03 }} className="flex items-start gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-googleBlue" />
              <span>{txt}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
