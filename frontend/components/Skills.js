import Image from 'next/image';
import { motion } from 'framer-motion';

// Map to Simple Icons brand slugs where applicable
const tech = [
  { name: 'Python', brand: 'python' },
  { name: 'JavaScript', brand: 'javascript' },
  { name: 'DSA', brand: null, generic: 'brain' },
  { name: 'Next.js', brand: 'nextdotjs' },
  { name: 'Node.js', brand: 'nodedotjs' },
  { name: 'Express', brand: 'express' },
  { name: 'MongoDB', brand: 'mongodb' },
  { name: 'Tailwind CSS', brand: 'tailwindcss' },
  { name: 'Firebase', brand: 'firebase' },
  { name: 'Razorpay API', brand: 'razorpay' },
];

const softSkills = [
  { name: 'Problem-solving', generic: 'brain' },
  { name: 'Consistency', generic: 'calendar' },
  { name: 'Mentorship', generic: 'users' },
  { name: 'Leadership', generic: 'flag' },
  { name: 'Teaching', generic: 'book' },
];

const certifications = [
  { name: 'Infosys Springboard Python', brand: 'infosys' },
  { name: 'Oracle Academy DBMS', brand: 'oracle' },
  { name: 'Coursera Design Thinking', brand: 'coursera' },
  { name: 'Forage Web Dev', brand: 'theforage' },
];

function GenericIcon({ type }) {
  const common = 'stroke-current text-gray-700';
  switch (type) {
    case 'brain':
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none" strokeWidth="1.6" aria-hidden="true">
          <path d="M8 9a3 3 0 1 1 0-6m8 6a3 3 0 1 0 0-6M7 21a3 3 0 0 1-3-3v-3a4 4 0 0 1 4-4h1a3 3 0 0 1 3 3v7M17 21a3 3 0 0 0 3-3v-3a4 4 0 0 0-4-4h-1a3 3 0 0 0-3 3" />
        </svg>
      );
    case 'calendar':
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none" strokeWidth="1.6" aria-hidden="true">
          <rect x="3" y="4" width="18" height="18" rx="2" />
          <path d="M8 2v4M16 2v4M3 10h18" />
        </svg>
      );
    case 'users':
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none" strokeWidth="1.6" aria-hidden="true">
          <circle cx="8" cy="8" r="3" />
          <circle cx="16" cy="8" r="3" />
          <path d="M2 20a6 6 0 0 1 12 0M10 20a6 6 0 0 1 12 0" />
        </svg>
      );
    case 'flag':
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none" strokeWidth="1.6" aria-hidden="true">
          <path d="M4 21V4h9l1 3h6v9h-9l-1-3H4z" />
        </svg>
      );
    case 'book':
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none" strokeWidth="1.6" aria-hidden="true">
          <path d="M4 19V5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z" />
          <path d="M6 3v16" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none" strokeWidth="1.6" aria-hidden="true">
          <circle cx="12" cy="12" r="9" />
        </svg>
      );
  }
}

function BrandIcon({ brand, label }) {
  const src = `https://cdn.simpleicons.org/${brand}/000000`;
  return (
    <img src={src} alt={label} className="h-10 w-10 object-contain" loading="lazy" />
  );
}

function SkillBadge({ name, brand, generic }) {
  return (
    <div className="flex items-center gap-3 px-3 py-2 rounded-lg border border-gray-100 bg-white shadow-sm">
      <div className="h-10 w-10 grid place-items-center">
        {brand ? <BrandIcon brand={brand} label={name} /> : <GenericIcon type={generic} />}
      </div>
      <span className="text-base font-medium text-gray-900">{name}</span>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" aria-label="Skills" className="bg-white">
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-20">
        <h2 className="text-2xl font-semibold">Skills</h2>

        {/* Technical Skills */}
        <div className="mt-4">
          <div className="text-sm font-semibold text-gray-900 mb-3">Technical Skills</div>
          <div className="flex flex-wrap gap-3">
            {tech.map((t, i) => (
              <motion.div key={t.name} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.03 }}>
                <SkillBadge name={t.name} brand={t.brand} generic={t.generic} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div className="mt-8">
          <div className="text-sm font-semibold text-gray-900 mb-3">Soft Skills</div>
          <div className="flex flex-wrap gap-3">
            {softSkills.map((t, i) => (
              <motion.div key={t.name} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.03 }}>
                <SkillBadge name={t.name} brand={t.brand} generic={t.generic} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-8">
          <div className="text-sm font-semibold text-gray-900 mb-3">Certifications</div>
          <div className="flex flex-wrap gap-3">
            {certifications.map((t, i) => (
              <motion.div key={t.name} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.03 }}>
                <SkillBadge name={t.name} brand={t.brand} generic={t.generic} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

