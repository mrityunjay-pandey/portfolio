import { motion } from 'framer-motion';
import { useRef } from 'react';
import ProjectCard from './ProjectCard';

const featuredProjects = [
  {
    title: 'PathPradarshak',
    description: 'A mentorship platform providing career guidance and study materials to 500+ students.',
    tech: ['Next.js', 'MongoDB', 'Modular Architecture'],
    link: 'https://pathpradarshak.in/',
  },
  {
    title: 'CivicSync',
    description: 'AI-powered civic engagement platform for real-time issue reporting and problem-solving.',
    tech: ['React', 'Flask', 'AI Integration'],
    link: 'https://deploy-three-lac.vercel.app/',
  },
  {
    title: 'Get Me a Chai',
    description: 'Donation platform enabling creators to receive support with payment integration.',
    tech: ['Next.js', 'Razorpay', 'NextAuth'],
  }
];

export default function ProjectsGrid() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -344 : 344;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" aria-label="Projects" className="bg-white overflow-hidden relative">
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-20 relative">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-semibold">Featured Projects</h2>
          <div className="flex gap-2">
            <button
              onClick={() => scroll('left')}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-gray-900 hover:bg-gray-50 focus:outline-none transition-colors"
              aria-label="Scroll left"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m15 18-6-6 6-6"/>
              </svg>
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-gray-900 hover:bg-gray-50 focus:outline-none transition-colors"
              aria-label="Scroll right"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 18 6-6-6-6"/>
              </svg>
            </button>
          </div>
        </div>
        
        {/* Horizontally scrolling ribbon */}
        <div className="relative w-full">
          {/* Fading edges for the scrolling container */}
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto gap-6 pb-8 pt-2 px-2 snap-x snap-mandatory scroll-smooth hide-scrollbar" 
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <style jsx>{`
              .hide-scrollbar::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            
            {featuredProjects.map((p, index) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex-shrink-0 w-[280px] sm:w-[320px] snap-center"
              >
                <ProjectCard project={p} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

