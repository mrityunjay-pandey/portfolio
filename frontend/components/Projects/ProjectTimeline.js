import { motion } from 'framer-motion';

const phases = [
  {
    title: 'Foundations (Aug 2023)',
    description: 'Initial web development journey with React fundamentals',
    projects: [
      {
        name: 'TextUtils',
        description: 'Built a React text utility app with real-time character counting and formatting features, deployed on GitHub Pages for public access.',
        tech: ['React', 'JavaScript', 'CSS'],
        link: 'https://mrityunjay-pandey.github.io/TextUtils/',
        impact: 'First deployed React application demonstrating component-based architecture'
      },
      {
        name: 'NewsMonkey',
        description: 'Developed a news aggregation app with category filtering and responsive design, showcasing API integration skills.',
        tech: ['React', 'News API', 'Bootstrap'],
        impact: 'Learned API consumption and state management patterns'
      }
    ]
  },
  {
    title: 'Python Mastery (2023-2024)',
    description: 'Deep dive into Python programming and system design',
    projects: [
      {
        name: 'Advanced Python Certification',
        description: 'Completed comprehensive Python course covering OOP, data structures, algorithms, and advanced programming concepts.',
        tech: ['Python', 'OOP', 'Data Structures'],
        impact: 'Mastered core programming fundamentals and problem-solving approaches'
      },
      {
        name: 'University Management System',
        description: 'Built a complete university management system using Java with student, faculty, and course management modules.',
        tech: ['Java', 'OOP', 'Database Design'],
        impact: 'Demonstrated system design skills and complex data modeling'
      }
    ]
  },
  {
    title: 'Web Development Growth (Feb-Apr 2025)',
    description: 'Intensive web development phase with full-stack projects',
    projects: [
      {
        name: 'Get Me a Chai',
        description: 'Developed a donation platform enabling creators to receive support through "chai" donations with payment integration.',
        tech: ['Next.js', 'MongoDB', 'Razorpay', 'NextAuth'],
        impact: 'Created a monetization solution for content creators with secure payment processing'
      },
      {
        name: 'College Frontend Challenge Winner',
        description: 'Won college frontend development competition with innovative UI/UX design and performance optimization.',
        tech: ['React', 'Tailwind CSS', 'Performance Optimization'],
        impact: 'Recognized for technical excellence and creative problem-solving'
      },
      {
        name: 'E-commerce & DBMS Projects Suite',
        description: 'Built comprehensive management systems for Bank, Hotel, Car Rental, Library, and Restaurant with full CRUD operations.',
        tech: ['React', 'Node.js', 'MongoDB', 'MySQL'],
        impact: 'Delivered 5+ production-ready management systems used by peers'
      }
    ]
  },
  {
    title: 'Product-Oriented Development (May-Sep 2025)',
    description: 'Focus on scalable products and real-world impact',
    projects: [
      {
        name: 'PathPradarshak',
        description: 'Founded a mentorship platform providing career guidance and study materials to 500+ students, with modular architecture reused in CivicSync.',
        tech: ['Next.js', 'MongoDB', 'Modular Architecture'],
        impact: 'Scaled mentorship program helping 500+ students with career guidance'
      },
      {
        name: 'CivicSync',
        description: 'Developed an AI-powered civic engagement platform for hackathon enabling real-time issue reporting and community problem-solving.',
        tech: ['React', 'Flask', 'AI Integration', 'Real-time Updates'],
        impact: 'Built civic tech solution for community engagement and issue resolution'
      },
      {
        name: 'Career Path Finder',
        description: 'Created an intelligent career guidance system using logic-driven UI to suggest career paths based on user skills and interests.',
        tech: ['React', 'Algorithm Design', 'User Experience'],
        impact: 'Helped students make informed career decisions through data-driven recommendations'
      }
    ]
  }
];

export default function ProjectTimeline() {
  return (
    <section className="bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-20">
        <h2 className="text-2xl font-semibold mb-2">Project Journey</h2>
        <p className="text-gray-600 mb-8">From foundations to product-oriented development, showcasing continuous growth and real-world impact</p>
        
        <div className="space-y-12">
          {phases.map((phase, phaseIndex) => (
            <motion.div
              key={phase.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: phaseIndex * 0.1 }}
            >
              <div className="border-l-4 border-googleBlue pl-6">
                <h3 className="text-xl font-semibold text-gray-900">{phase.title}</h3>
                <p className="text-gray-600 mt-1">{phase.description}</p>
                
                <div className="mt-6 grid gap-6">
                  {phase.projects.map((project, projectIndex) => (
                    <motion.div
                      key={project.name}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: (phaseIndex * 0.1) + (projectIndex * 0.05) }}
                      className="bg-gray-50 rounded-lg p-6 border border-gray-100"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-gray-900">{project.name}</h4>
                          <p className="text-gray-700 mt-2">{project.description}</p>
                          <div className="mt-3 flex flex-wrap gap-2">
                            {project.tech.map((tech) => (
                              <span key={tech} className="px-2 py-1 text-xs rounded bg-googleBlue/10 text-googleBlue font-medium">
                                {tech}
                              </span>
                            ))}
                          </div>
                          <div className="mt-3 text-sm text-gray-600">
                            <span className="font-medium">Impact:</span> {project.impact}
                          </div>
                        </div>
                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noreferrer"
                            className="ml-4 px-3 py-1.5 text-sm rounded bg-googleBlue text-white hover:opacity-90 transition-opacity"
                          >
                            View →
                          </a>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


