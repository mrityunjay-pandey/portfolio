import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Hero() {
  const defaultCompany = process.env.NEXT_PUBLIC_TARGET_COMPANY || '';
  const [company, setCompany] = useState(defaultCompany);

  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const c = params.get('company');
      if (c) setCompany(c);
    } catch (_) {}
  }, []);

  const welcomeText = company
    ? `Welcome, ${company} recruiters!`
    : 'Welcome! This page highlights impact, scalability, and reuse.';

  return (
    <section id="home" aria-label="Hero" className="relative bg-white overflow-hidden">
      <div className="relative max-w-6xl mx-auto px-4 py-20 md:py-28 grid md:grid-cols-12 gap-10 items-center">
        {/* Left: Bold text */}
        <div className="md:col-span-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            {/* Welcome badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-200 bg-white/70 backdrop-blur text-sm text-gray-700">
              <span className="text-googleGreen">●</span>
              <span>{welcomeText}</span>
            </div>

            <h1 className="mt-3 text-5xl md:text-6xl font-extrabold leading-[1.1] tracking-tight text-gray-900">
              Mrityunjay Pandey
            </h1>
            <p className="mt-3 text-xl text-gray-900 font-medium">
              Aspiring Software Engineer | Entrepreneur | Problem-Solver
            </p>
            <p className="mt-4 text-gray-600 max-w-prose">
              I build scalable products and solve real-world problems through code.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="/resume.pdf" className="px-5 py-2.5 rounded-md bg-googleBlue text-white shadow-sm hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-googleBlue/30">
                Resume
              </a>
              <a href="https://github.com/mrityunjay-pandey" target="_blank" rel="noreferrer" className="px-5 py-2.5 rounded-md border border-gray-200 bg-white hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-googleBlue/20">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/mrityunjay-pandey-59783a255/" target="_blank" rel="noreferrer" className="px-5 py-2.5 rounded-md border border-gray-200 bg-white hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-googleBlue/20">
                LinkedIn
              </a>
              <a href="#contact" className="px-5 py-2.5 rounded-md border border-gray-200 bg-white hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-googleBlue/20">
                Contact
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right: Visual image */}
        <motion.div
          className="md:col-span-6"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <div className="relative w-full aspect-[4/3] rounded-2xl border border-gray-100 bg-white shadow-sm overflow-hidden">
            <Image
              src="/images/visual3.png"
              alt="Developer visual"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover object-[right]"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

