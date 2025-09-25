import { motion } from 'framer-motion';

const groups = [
  { title: 'Technical Skills', items: ['Java', 'C++', 'C', 'Python', 'JavaScript', 'DSA', 'Next.js', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'Firebase', 'Razorpay API'] },
  { title: 'Soft Skills', items: ['Problem-solving', 'Consistency', 'Mentorship', 'Leadership', 'Teaching'] },
  { title: 'Certifications', items: ['Infosys Springboard Python', 'Oracle Academy DBMS', 'Coursera Design Thinking', 'Forage Web Dev'] },
];

export default function Skills() {
  return (
    <section id="skills" aria-label="Skills" className="bg-white">
      <div className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-semibold">Skills</h2>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {groups.map((g, i) => (
            <motion.div key={g.title} className="rounded-lg border border-gray-100 p-4 bg-white" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
              <h3 className="font-medium">{g.title}</h3>
              <ul className="mt-2 text-sm text-gray-700">
                {g.items.map((item) => (
                  <li key={item} className="inline-block mr-2 mt-2"><span className="px-2 py-1 rounded bg-gray-100">{item}</span></li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

