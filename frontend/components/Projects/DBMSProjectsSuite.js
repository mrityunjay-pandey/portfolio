import { motion } from 'framer-motion';

const dbmsProjects = [
  {
    name: 'Bank Management System',
    date: 'Apr 10, 2025',
    description: 'Complete banking solution with account management, transactions, loan processing, and customer portal.',
    tech: ['Java', 'MySQL', 'Swing GUI', 'JDBC'],
    features: ['Account Creation', 'Transaction Processing', 'Loan Management', 'Customer Dashboard'],
    impact: 'Used by 20+ students for semester projects'
  },
  {
    name: 'Hotel Management System',
    date: 'Apr 11, 2025',
    description: 'Comprehensive hotel booking and management platform with room allocation and billing.',
    tech: ['Java', 'MySQL', 'Swing GUI', 'JDBC'],
    features: ['Room Booking', 'Guest Management', 'Billing System', 'Inventory Tracking'],
    impact: 'Demonstrated complex relational database design'
  },
  {
    name: 'Car Rental System',
    date: 'Apr 10, 2025',
    description: 'Vehicle rental management system with booking, payment processing, and fleet tracking.',
    tech: ['Java', 'MySQL', 'Swing GUI', 'JDBC'],
    features: ['Vehicle Booking', 'Payment Integration', 'Fleet Management', 'Customer Portal'],
    impact: 'Showcased real-world business logic implementation'
  },
  {
    name: 'Library Management System',
    date: 'Apr 11, 2025',
    description: 'Digital library solution with book cataloging, member management, and borrowing system.',
    tech: ['Java', 'MySQL', 'Swing GUI', 'JDBC'],
    features: ['Book Cataloging', 'Member Management', 'Borrowing System', 'Fine Calculation'],
    impact: 'Improved library operations efficiency'
  },
  {
    name: 'Student Record Management',
    date: 'Apr 11, 2025',
    description: 'Academic record management system for tracking student progress and grades.',
    tech: ['Java', 'MySQL', 'Swing GUI', 'JDBC'],
    features: ['Student Profiles', 'Grade Management', 'Course Tracking', 'Report Generation'],
    impact: 'Streamlined academic record keeping'
  },
  {
    name: 'Restaurant Management System',
    date: 'Apr 12, 2025',
    description: 'Food service management platform with menu management, order processing, and billing.',
    tech: ['Java', 'MySQL', 'Swing GUI', 'JDBC'],
    features: ['Menu Management', 'Order Processing', 'Table Management', 'Billing System'],
    impact: 'Enhanced restaurant operational efficiency'
  },
  {
    name: 'E-commerce Catalogue Management',
    date: 'Apr 2, 2025',
    description: 'Product catalog system with inventory management, category organization, and search functionality.',
    tech: ['Java', 'MySQL', 'Swing GUI', 'JDBC'],
    features: ['Product Catalog', 'Inventory Management', 'Category Organization', 'Search & Filter'],
    impact: 'Simplified product management for small businesses'
  }
];

const ecommerceProjects = [
  {
    name: 'NIET Portal - Study Material Upload',
    date: 'Apr 18, 2025',
    description: 'Course-wise and semester-wise study material management system for university students.',
    tech: ['React', 'Node.js', 'MongoDB', 'File Upload'],
    features: ['Course Organization', 'File Management', 'Student Access', 'Admin Dashboard'],
    impact: 'Centralized study resources for 1000+ students'
  }
];

export default function DBMSProjectsSuite() {
  return (
    <section className="bg-white">
      <div className="max-w-5xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold mb-2">E-commerce & DBMS Projects Suite</h2>
          <p className="text-gray-600 mb-8">Comprehensive management systems demonstrating full-stack development and database design expertise</p>
        </motion.div>

        {/* DBMS Projects */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-6 border-l-4 border-googleBlue pl-4">Database Management Systems</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dbmsProjects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg p-6 border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between mb-3">
                  <h4 className="text-lg font-semibold text-gray-900">{project.name}</h4>
                  <span className="text-sm text-gray-500">{project.date}</span>
                </div>
                <p className="text-gray-700 text-sm mb-4">{project.description}</p>
                
                <div className="mb-4">
                  <div className="text-sm font-medium text-gray-900 mb-2">Tech Stack:</div>
                  <div className="flex flex-wrap gap-1">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-2 py-1 text-xs rounded bg-googleBlue/10 text-googleBlue font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <div className="text-sm font-medium text-gray-900 mb-2">Key Features:</div>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {project.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-googleBlue" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="text-sm text-gray-600">
                  <span className="font-medium">Impact:</span> {project.impact}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* E-commerce Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-6 border-l-4 border-googleGreen pl-4">E-commerce & Web Applications</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ecommerceProjects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg p-6 border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between mb-3">
                  <h4 className="text-lg font-semibold text-gray-900">{project.name}</h4>
                  <span className="text-sm text-gray-500">{project.date}</span>
                </div>
                <p className="text-gray-700 text-sm mb-4">{project.description}</p>
                
                <div className="mb-4">
                  <div className="text-sm font-medium text-gray-900 mb-2">Tech Stack:</div>
                  <div className="flex flex-wrap gap-1">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-2 py-1 text-xs rounded bg-googleGreen/10 text-googleGreen font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <div className="text-sm font-medium text-gray-900 mb-2">Key Features:</div>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {project.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-googleGreen" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="text-sm text-gray-600">
                  <span className="font-medium">Impact:</span> {project.impact}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Summary Stats */}
        <motion.div
          className="mt-12 bg-gradient-to-r from-googleBlue/5 to-googleGreen/5 rounded-lg p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Project Suite Impact</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-googleBlue">7+</div>
              <div className="text-sm text-gray-600">Management Systems</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-googleGreen">1000+</div>
              <div className="text-sm text-gray-600">Students Impacted</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-googleYellow">100%</div>
              <div className="text-sm text-gray-600">Production Ready</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

