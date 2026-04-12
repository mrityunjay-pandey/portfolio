import { useEffect, useState, useMemo } from 'react';

export default function CertificatesGallery() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedCats, setExpandedCats] = useState({});

  const toggleCat = (cat) => {
    setExpandedCats(prev => ({ ...prev, [cat]: !prev[cat] }));
  };

  useEffect(() => {
    async function load() {
      setLoading(true);
      try {
        const res = await fetch('/certificates/manifest.json', { cache: 'no-store' });
        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data)) {
            setItems(data);
            setLoading(false);
            return;
          }
        }
      } catch (_) {}
      setItems([]);
      setLoading(false);
    }
    load();
  }, []);

  const groups = useMemo(() => {
    const byCat = new Map();
    for (const it of items) {
      const cat = (it.category || 'Other').replace(/[-_]/g, ' ').replace(/\b\w/g, (m) => m.toUpperCase());
      if (!byCat.has(cat)) byCat.set(cat, []);
      byCat.get(cat).push(it);
    }
    return Array.from(byCat.entries());
  }, [items]);

  return (
    <section id="certificates" aria-label="Certificates" className="bg-white">
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-20">
        <h2 className="text-2xl font-semibold">Certificates</h2>
        {loading && <p className="mt-4 text-gray-600">Loading…</p>}
        {!loading && items.length === 0 && (
          <div className="mt-4 text-gray-700">
            No certificates found. Generate a manifest with <code>npm run certs:manifest</code> after placing PDFs under <code>/public/certificates</code>.
          </div>
        )}
        {!loading && groups.length > 0 && (
          <div className="mt-6 space-y-10">
            {groups.map(([cat, list]) => {
              const isExpanded = expandedCats[cat];
              const visibleList = isExpanded ? list : list.slice(0, 3);
              
              return (
                <div key={cat}>
                  <h3 className="text-lg font-semibold text-gray-900 border-l-4 border-googleGreen pl-4">{cat}</h3>
                  <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {visibleList.map((c, idx) => (
                      <div key={`${c.file}-${idx}`} className="rounded-xl border border-gray-200 p-4 bg-white hover:bg-gray-50 transition-colors">
                        <div className="font-medium text-gray-900 line-clamp-2">{c.title || c.file}</div>
                        <div className="mt-4 flex gap-2">
                          <a href={`/certificates/${c.file}`} target="_blank" rel="noreferrer" className="px-3 py-1.5 text-sm rounded bg-googleBlue text-white hover:opacity-90 transition-opacity">View</a>
                          <a href={`/certificates/${c.file}`} download className="px-3 py-1.5 text-sm rounded border border-gray-200 hover:border-gray-300 text-gray-700 transition-colors">Download</a>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {list.length > 3 && (
                    <div className="mt-4 text-center sm:text-left">
                      <button
                        onClick={() => toggleCat(cat)}
                        className="text-sm font-medium text-googleBlue hover:text-googleBlue/80 hover:underline focus:outline-none"
                      >
                        {isExpanded ? 'View Less' : `View All ${list.length} Certificates`}
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
