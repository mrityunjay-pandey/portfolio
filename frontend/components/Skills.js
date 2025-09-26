import Image from 'next/image';
import { motion } from 'framer-motion';

const tech = [
  { name: 'Python', slug: 'python' },
  { name: 'JavaScript', slug: 'javascript' },
  { name: 'DSA', slug: 'dsa' },
  { name: 'Next.js', slug: 'nextjs' },
  { name: 'Node.js', slug: 'nodejs' },
  { name: 'Express', slug: 'express' },
  { name: 'MongoDB', slug: 'mongodb' },
  { name: 'Tailwind CSS', slug: 'tailwind' },
  { name: 'Firebase', slug: 'firebase' },
  { name: 'Razorpay API', slug: 'razorpay' },
];

const softSkills = [
  { name: 'Problem-solving', slug: 'problem-solving' },
  { name: 'Consistency', slug: 'consistency' },
  { name: 'Mentorship', slug: 'mentorship' },
  { name: 'Leadership', slug: 'leadership' },
  { name: 'Teaching', slug: 'teaching' },
];

const certifications = [
  { name: 'Infosys Springboard Python', slug: 'infosys-springboard-python' },
  { name: 'Oracle Academy DBMS', slug: 'oracle-academy-dbms' },
  { name: 'Coursera Design Thinking', slug: 'coursera-design-thinking' },
  { name: 'Forage Web Dev', slug: 'forage-web-dev' },
];

function SkillIcon({ name, slug, folder = 'icons' }) {
  const src = `/${folder}/${slug}.svg`;
  function onErr(e) {
    e.currentTarget.style.display = 'none';
    const sib = e.currentTarget.nextElementSibling;
    if (sib) sib.style.display = 'grid';
  }
  return (
    <div className="flex items-center gap-3 px-3 py-2 rounded-lg border border-gray-100 bg-white shadow-sm">
      <div className="relative h-10 w-10">
        <Image src={src} alt={name} fill className="object-contain" onError={onErr} />
        <div className="hidden place-items-center h-full w-full rounded-full bg-gray-100" aria-hidden="true" />
      </div>
      <span className="text-base font-medium text-gray-900">{name}</span>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" aria-label="Skills" className="bg-white">
      <div className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-semibold">Skills</h2>

        {/* Technical Skills: responsive multi-line grid with larger icons */}
        <div className="mt-4">
          <div className="text-sm font-semibold text-gray-900 mb-3">Technical Skills</div>
          <div className="flex flex-wrap gap-3">
            {tech.map((t, i) => (
              <motion.div key={t.slug} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.03 }}>
                <SkillIcon name={t.name} slug={t.slug} folder="icons" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Soft Skills as icon grid */}
        <div className="mt-8">
          <div className="text-sm font-semibold text-gray-900 mb-3">Soft Skills</div>
          <div className="flex flex-wrap gap-3">
            {softSkills.map((t, i) => (
              <motion.div key={t.slug} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.03 }}>
                <SkillIcon name={t.name} slug={t.slug} folder="icons/soft" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications as icon grid */}
        <div className="mt-8">
          <div className="text-sm font-semibold text-gray-900 mb-3">Certifications</div>
          <div className="flex flex-wrap gap-3">
            {certifications.map((t, i) => (
              <motion.div key={t.slug} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.03 }}>
                <SkillIcon name={t.name} slug={t.slug} folder="icons/certs" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

