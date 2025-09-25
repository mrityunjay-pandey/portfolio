import { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';

const API_BASE = process.env.NEXT_PUBLIC_API_BASE || 'http://localhost:5000';

export default function ProjectsGrid() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(`${API_BASE}/api/projects`);
        if (!res.ok) throw new Error('Failed to load projects');
        const data = await res.json();
        setProjects(Array.isArray(data) ? data : data.projects || []);
      } catch (e) {
        setError(e.message || 'Error loading projects');
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  return (
    <section id="projects" aria-label="Projects" className="bg-white">
      <div className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-semibold">Projects</h2>
        {loading && <p className="mt-4 text-gray-600">Loading projects…</p>}
        {error && !loading && (
          <p className="mt-4 text-red-600">{error}</p>
        )}
        {!loading && !error && (
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((p) => (
              <ProjectCard key={p._id || p.id || p.title} project={p} />)
            )}
          </div>
        )}
      </div>
    </section>
  );
}

