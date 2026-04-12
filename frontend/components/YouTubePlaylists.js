import { motion } from 'framer-motion';

const playlists = [
  { 
    name: 'DSA Playlist', 
    url: 'https://youtube.com/playlist?list=PLVucy3n2uhS0Agjzpi-udbOlDKuF6Hsld', 
    embedUrl: 'https://www.youtube.com/embed/videoseries?list=PLVucy3n2uhS0Agjzpi-udbOlDKuF6Hsld',
    description: 'Data Structures & Algorithms tutorials to strengthen problem-solving skills.' 
  },
  { 
    name: 'Python Playlist', 
    url: 'https://youtube.com/playlist?list=PLG4pPIA91OaJoiPlgsmQCCtr3FEl168_p', 
    embedUrl: 'https://www.youtube.com/embed/videoseries?list=PLG4pPIA91OaJoiPlgsmQCCtr3FEl168_p',
    description: 'Python programming journey from absolute basics to advanced project implementation.' 
  },
];

export default function YouTubePlaylists() {
  return (
    <section id="playlists" aria-label="YouTube Playlists" className="bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-20">
        <h2 className="text-2xl font-semibold">YouTube Playlists</h2>
        <p className="mt-2 text-gray-600">Free tutorials on DSA and Python to help you learn and practice.</p>
        
        <div className="mt-8 grid lg:grid-cols-2 gap-8">
          {playlists.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group rounded-xl border border-gray-200 bg-white hover:bg-gray-50 transition-colors flex flex-col overflow-hidden"
            >
              <div className="w-full aspect-video bg-gray-100 border-b border-gray-100 relative">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={p.embedUrl}
                  title={p.name}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{p.name}</h3>
                <p className="text-gray-600 mb-4">{p.description}</p>
                <div className="mt-auto">
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center font-medium text-googleBlue hover:underline"
                  >
                    Watch Full Playlist <span className="ml-1">→</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
