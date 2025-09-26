import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AboutMe from '../components/AboutMe';
import Skills from '../components/Skills';
import ProjectsGrid from '../components/ProjectsGrid';
import ReusabilityShowcase from '../components/Projects/ReusabilityShowcase';
import TestimonialsCarousel from '../components/Projects/TestimonialsCarousel';
import AchievementsExperience from '../components/AchievementsExperience';
import EntrepreneurshipVision from '../components/EntrepreneurshipVision';
import CertificatesGallery from '../components/CertificatesGallery';
import ContactForm from '../components/ContactForm';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <AboutMe />
      <Skills />
      <section id="projects" className="bg-white">
        <div className="max-w-5xl mx-auto px-4 py-16">
          <h2 className="text-2xl font-semibold">Projects</h2>
        </div>
      </section>
      <ProjectsGrid />
      <ReusabilityShowcase />
      <TestimonialsCarousel />
      <AchievementsExperience />
      <CertificatesGallery />
      <EntrepreneurshipVision />
      <ContactForm />
    </div>
  );
}

