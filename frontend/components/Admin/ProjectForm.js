import { useState, useEffect } from 'react';

export default function ProjectForm({ initial = null, onSubmit, submitting }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [techStack, setTechStack] = useState('');
  const [githubUrl, setGithubUrl] = useState('');
  const [liveUrl, setLiveUrl] = useState('');
  const [thumbnailUrl, setThumbnailUrl] = useState('');

  useEffect(() => {
    if (initial) {
      setTitle(initial.title || '');
      setDescription(initial.description || '');
      setTechStack((initial.techStack || []).join(', '));
      setGithubUrl(initial.githubUrl || '');
      setLiveUrl(initial.liveUrl || '');
      setThumbnailUrl(initial.thumbnailUrl || '');
    }
  }, [initial]);

  function handleSubmit(e) {
    e.preventDefault();
    const payload = {
      title,
      description,
      techStack: techStack.split(',').map((s) => s.trim()).filter(Boolean),
      githubUrl,
      liveUrl,
      thumbnailUrl,
    };
    onSubmit(payload);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium">Title</label>
        <input value={title} onChange={(e) => setTitle(e.target.value)} className="mt-1 w-full rounded border border-gray-300 px-3 py-2" required />
      </div>
      <div>
        <label className="block text-sm font-medium">Description</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} rows="3" className="mt-1 w-full rounded border border-gray-300 px-3 py-2" required />
      </div>
      <div>
        <label className="block text-sm font-medium">Tech Stack (comma separated)</label>
        <input value={techStack} onChange={(e) => setTechStack(e.target.value)} className="mt-1 w-full rounded border border-gray-300 px-3 py-2" />
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium">GitHub URL</label>
          <input value={githubUrl} onChange={(e) => setGithubUrl(e.target.value)} className="mt-1 w-full rounded border border-gray-300 px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm font-medium">Live URL</label>
          <input value={liveUrl} onChange={(e) => setLiveUrl(e.target.value)} className="mt-1 w-full rounded border border-gray-300 px-3 py-2" />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium">Thumbnail URL</label>
        <input value={thumbnailUrl} onChange={(e) => setThumbnailUrl(e.target.value)} className="mt-1 w-full rounded border border-gray-300 px-3 py-2" />
      </div>
      <button type="submit" disabled={submitting} className="px-4 py-2 rounded bg-googleBlue text-white hover:opacity-90 disabled:opacity-50">
        {submitting ? 'Saving…' : 'Save Project'}
      </button>
    </form>
  );
}

