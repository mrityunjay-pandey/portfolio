import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';

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
  { name: 'Infosys Springboard Python', brand: 'infosys', generic: 'certificate' },
  { name: 'Oracle Academy DBMS', brand: 'oracle', generic: 'certificate' },
  { name: 'Coursera Design Thinking', brand: 'coursera', generic: 'certificate' },
  { name: 'Forage Web Dev', brand: 'theforage', generic: 'certificate' },
];

function GenericIcon({ type }) {
  const common = 'stroke-current text-gray-500 group-hover:text-gray-900 transition-colors';
  switch (type) {
    case 'brain':
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none" strokeWidth="2" aria-hidden="true" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"/>
          <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"/>
        </svg>
      );
    case 'calendar':
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none" strokeWidth="2" aria-hidden="true" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
      );
    case 'users':
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none" strokeWidth="2" aria-hidden="true" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="8.5" cy="7" r="4" />
          <line x1="20" y1="8" x2="20" y2="14" />
          <line x1="23" y1="11" x2="17" y2="11" />
        </svg>
      );
    case 'flag':
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none" strokeWidth="2" aria-hidden="true" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
          <line x1="4" y1="22" x2="4" y2="15" />
        </svg>
      );
    case 'book':
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none" strokeWidth="2" aria-hidden="true" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
        </svg>
      );
    case 'certificate':
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none" strokeWidth="2" aria-hidden="true" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="8" r="6" />
          <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none" strokeWidth="2" aria-hidden="true">
          <circle cx="12" cy="12" r="10" />
        </svg>
      );
  }
}

function BrandIcon({ brand, label, fallbackType }) {
  const src = `https://cdn.simpleicons.org/${brand}/000000`;
  const [error, setError] = useState(false);

  if (error) {
    return <GenericIcon type={fallbackType || 'default'} />;
  }

  return (
    <img 
      src={src} 
      alt={label} 
      className="h-full w-full object-contain opacity-70 group-hover:opacity-100 transition-opacity" 
      loading="lazy" 
      onError={() => setError(true)}
    />
  );
}

function SkillBadge({ name, brand, generic }) {
  return (
    <div className="group flex items-center gap-2.5 px-4 py-2 rounded-full border border-gray-200 bg-white hover:bg-gray-50 hover:border-googleBlue/40 transition-colors cursor-default">
      <div className="h-5 w-5 flex-shrink-0 grid place-items-center">
        {brand ? <BrandIcon brand={brand} label={name} fallbackType={generic} /> : <GenericIcon type={generic} />}
      </div>
      <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors">{name}</span>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" aria-label="Skills" className="bg-white">
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-20">
        <h2 className="text-2xl font-semibold mb-8">Skills</h2>

        <div className="space-y-10">
          {/* Technical Skills */}
          <div>
            <h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase mb-4">Technical Skills</h3>
            <div className="flex flex-wrap gap-3">
              {tech.map((t, i) => (
                <motion.div key={t.name} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.03 }}>
                  <SkillBadge name={t.name} brand={t.brand} generic={t.generic} />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase mb-4">Soft Skills</h3>
            <div className="flex flex-wrap gap-3">
              {softSkills.map((t, i) => (
                <motion.div key={t.name} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.03 }}>
                  <SkillBadge name={t.name} brand={t.brand} generic={t.generic} />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase mb-4">Certifications</h3>
            <div className="flex flex-wrap gap-3">
              {certifications.map((t, i) => (
                <motion.div key={t.name} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.03 }}>
                  <SkillBadge name={t.name} brand={t.brand} generic={t.generic} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

