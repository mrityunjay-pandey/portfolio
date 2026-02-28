import { useEffect, useState } from 'react';

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'playlists', label: 'Playlists' },
  { id: 'entrepreneurship', label: 'Entrepreneurship' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [activeId, setActiveId] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: '-50% 0px -50% 0px', threshold: 0.01 }
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`sticky top-0 z-50 transition-shadow ${scrolled ? 'bg-white/90 backdrop-blur border-b border-gray-100 shadow-sm' : 'bg-white/80 backdrop-blur border-b border-gray-100'}`}>
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#home" className="font-semibold focus:outline-none focus:ring-2 focus:ring-googleBlue/30 rounded">Mrityunjay Pandey</a>
        <ul className="flex items-center gap-4 text-sm">
          {sections.map((s) => {
            const href = `#${s.id}`;
            const isActive = activeId === s.id;
            return (
              <li key={s.id} className="relative group">
                <a
                  href={href}
                  className={`px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-googleBlue/30 transition-colors ${
                    isActive ? 'text-googleBlue font-medium' : 'text-gray-700 hover:text-googleBlue'
                  }`}
                >
                  {s.label}
                </a>
                <span
                  aria-hidden="true"
                  className={`pointer-events-none absolute left-1/2 -bottom-0.5 h-0.5 w-6 -translate-x-1/2 rounded-full bg-googleBlue transition-transform duration-200 ${
                    isActive ? 'scale-100' : 'scale-0 group-hover:scale-100'
                  }`}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

