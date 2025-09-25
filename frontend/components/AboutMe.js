import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AboutMe() {
  return (
    <section id="about" aria-label="About Me" className="bg-white">
      <div className="max-w-5xl mx-auto px-4 py-16 grid md:grid-cols-12 gap-8 items-start">
        <div className="md:col-span-4">
          <div className="w-full aspect-square rounded-lg overflow-hidden bg-gray-100">
            <Image src="/images/profile1.jpg" alt="Profile" width={600} height={600} className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="md:col-span-8">
          <motion.h2 className="text-2xl font-semibold" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>About Me</motion.h2>
          <motion.p className="mt-3 text-gray-700" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            I am a compassionate, curious, and adaptable problem-solver. I value truth, mentorship, and lifelong learning—from books, experiences, and people. Technically skilled yet approachable, I build innovative solutions, embrace challenges, and thrive through hard work and giving back.
          </motion.p>

          <div className="mt-6 grid sm:grid-cols-2 gap-4 text-sm text-gray-700">
            <div>
              <div className="font-medium">Education</div>
              <div>B.Tech CSE, NIET Greater Noida — CGPA 8.8 (Expected 2027)</div>
            </div>
            <div>
              <div className="font-medium">Career Objective</div>
              <div>Google Summer 2026 Internship + entrepreneurial/product vision</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
