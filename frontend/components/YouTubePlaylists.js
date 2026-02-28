import { motion } from 'framer-motion';

const playlists = [
  { name: 'DSA Playlist', url: 'https://youtube.com/playlist?list=PLVucy3n2uhS0Agjzpi-udbOlDKuF6Hsld&si=WJGCdUa0Yr6MKO1o', description: 'Data Structures & Algorithms tutorials' },
  { name: 'Python Playlist', url: 'https://youtube.com/playlist?list=PLG4pPIA91OaJoiPlgsmQCCtr3FEl168_p&si=9tyHqH3E0vDPOEPo', description: 'Python programming from basics to advanced' },
];

export default function YouTubePlaylists() {
  return (
    <section id="playlists" aria-label="YouTube Playlists" className="bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-20">
        <h2 className="text-2xl font-semibold">YouTube Playlists</h2>
        <p className="mt-2 text-gray-600">Free tutorials on DSA and Python to help you learn and practice.</p>
        <div className="mt-6 grid sm:grid-cols-2 gap-4">
          {playlists.map((p, i) => (
            <motion.a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group flex items-center gap-4 p-4 rounded-xl border border-gray-200 bg-white hover:border-googleBlue/40 hover:shadow-md transition-all"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-red-100 flex items-center justify-center">
                <svg className="w-6 h-6 text-red-600" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <span className="block font-semibold text-gray-900 group-hover:text-googleBlue transition-colors">{p.name}</span>
                <span className="block text-sm text-gray-500 mt-0.5">{p.description}</span>
              </div>
              <span className="text-googleBlue text-lg group-hover:translate-x-0.5 transition-transform">→</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
