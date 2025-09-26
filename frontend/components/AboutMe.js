import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AboutMe() {
  const keywords = [
    'Empathetic',
    'Adaptable',
    'Innovative',
    'Disciplined',
    'Integrity-driven',
    'Collaborative',
    'Lifelong Learner',
  ];

  return (
    <section id="about" aria-label="About Me" className="bg-white">
      <div className="max-w-5xl mx-auto px-4 py-16 grid md:grid-cols-12 gap-8 items-stretch">
        <div className="md:col-span-4 h-full">
          <div className="w-full h-full rounded-lg overflow-hidden bg-gray-100">
            <Image src="/images/profile1.jpg" alt="Profile" width={1200} height={1200} className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="md:col-span-8 h-full flex flex-col">
          <motion.h2
            className="text-3xl font-bold tracking-tight text-gray-900"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h2>

          <motion.p
            className="mt-4 text-gray-700 leading-relaxed"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            I am a compassionate, curious, and adaptable problem-solver. I value truth, mentorship, and lifelong learning—from books, experiences, and people. Technically skilled yet approachable, I build innovative solutions, embrace challenges, and thrive through hard work and giving back.
          </motion.p>

          <div className="mt-8 grid sm:grid-cols-2 gap-6">
            <motion.div
              className="rounded-lg border border-gray-100 p-4 bg-white"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-sm font-semibold text-gray-900">Education</div>
              <div className="mt-1 text-gray-700">
                B.Tech CSE, NIET Greater Noida — <span className="font-medium">CGPA 8.8</span> (Expected 2027)
              </div>
            </motion.div>

            <motion.div
              className="rounded-lg border border-gray-100 p-4 bg-white"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-sm font-semibold text-gray-900">Career Objective</div>
              <div className="mt-1 text-gray-700">
                Google Summer 2026 Internship + entrepreneurial/product vision
              </div>
            </motion.div>
          </div>

          <div className="mt-8">
            <div className="text-sm font-semibold text-gray-900">Who I am</div>
            <p className="mt-2 text-gray-800">
              {keywords.map((k, i) => (
                <span key={k}>
                  {k}
                  {i < keywords.length - 1 && ' • '}
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
