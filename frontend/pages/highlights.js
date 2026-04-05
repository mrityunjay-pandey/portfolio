import { useState } from 'react';
import Navbar from '../components/Navbar';

const sections = [
  {
    title: 'Competitions & Prizes',
    items: [
      {
        label: 'First prize – Coding competition',
        url: 'https://www.linkedin.com/posts/mrityunjay-pandey-59783a255_codingcompetition-firstprize-codeandcreate-activity-7321149273901862912-5zWP',
        embedSrc: 'https://www.linkedin.com/embed/feed/update/urn:li:activity:7321149273901862912',
      },
      {
        label: 'First prize – Essay (VisionIAS Pratispardha)',
        url: 'https://www.linkedin.com/posts/mrityunjay-pandey-59783a255_visionias-pratispardha2025-casestudychallenge-activity-7320351888963522560-o_cC',
        embedSrc: 'https://www.linkedin.com/embed/feed/update/urn:li:activity:7320351888963522560',
      },
      {
        label: 'Pratispardha essay – video review',
        url: 'https://www.linkedin.com/posts/mrityunjay-pandey-59783a255_pratispardha-visionias-essaycompetition-activity-7319062100599885825-d_1Y',
        embedSrc: 'https://www.linkedin.com/embed/feed/update/urn:li:activity:7319062100599885825',
      },
      {
        label: 'Theme switcher AI competition winner',
        url: 'https://www.linkedin.com/posts/mrityunjay-pandey-59783a255_webdevelopment-aitools-nextjs-activity-7314046105627906049-fTau',
        embedSrc: 'https://www.linkedin.com/embed/feed/update/urn:li:activity:7314046105627906049',
      },
      {
        label: '3rd position – Web development competition',
        url: 'https://www.linkedin.com/posts/mrityunjay-pandey-59783a255_webdevelopment-reactjs-frontenddevelopment-activity-7304195968235622400-KVp7',
        embedSrc: 'https://www.linkedin.com/embed/feed/update/urn:li:activity:7304195968235622400',
      },
    ],
  },
  {
    title: 'Projects',
    items: [
      {
        label: 'Get Me a Chai – full-stack project',
        url: 'https://www.linkedin.com/posts/mrityunjay-pandey-59783a255_getmeachai-fullstackdeveloper-nextjs-activity-7317655305301962752-4ps1',
        embedSrc: 'https://www.linkedin.com/embed/feed/update/urn:li:activity:7317655305301962752',
      },
      {
        label: 'API & catalogue management (MERN)',
        url: 'https://www.linkedin.com/posts/mrityunjay-pandey-59783a255_webdevelopment-mernstack-mongodb-activity-7313271530946207744-IEHK',
        embedSrc: 'https://www.linkedin.com/embed/feed/update/urn:li:activity:7313271530946207744',
      },
      {
        label: 'PassOp – password manager',
        url: 'https://www.linkedin.com/posts/mrityunjay-pandey-59783a255_webdevelopment-reactjs-mongodb-activity-7311728519053524992-cWwO',
        embedSrc: 'https://www.linkedin.com/embed/feed/update/urn:li:activity:7311728519053524992',
      },
      {
        label: 'Spotify clone – India winning',
        url: 'https://www.linkedin.com/posts/mrityunjay-pandey-59783a255_webdevelopment-javascript-spotifyclone-activity-7299870126856626181-FHCn',
        embedSrc: 'https://www.linkedin.com/embed/feed/update/urn:li:activity:7299870126856626181',
      },
      {
        label: 'Netflix clone',
        url: 'https://www.linkedin.com/posts/mrityunjay-pandey-59783a255_webdevelopment-netflixclone-html-activity-7296593310272405504-8n8C',
        embedSrc: 'https://www.linkedin.com/embed/feed/update/urn:li:activity:7296593310272405504',
      },
      {
        label: 'IoT smart streetlight project',
        url: 'https://www.linkedin.com/posts/mrityunjay-pandey-59783a255_infosysspringboard-techinaction-streetlight-activity-7317592021341192192-JJtX',
        embedSrc: 'https://www.linkedin.com/embed/feed/update/urn:li:activity:7317592021341192192',
      },
    ],
  },
  {
    title: 'Teaching, Mentoring & Communication',
    items: [
      {
        label: 'Mentoring peers – LinkedIn embedded post',
        url: 'https://www.linkedin.com/feed/update/urn:li:ugcPost:7316537147698692099',
        embedSrc: 'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7316537147698692099',
      },
      {
        label: 'Communication & presentation',
        url: 'https://www.linkedin.com/posts/mrityunjay-pandey-59783a255_what-is-now-proved-was-just-only-imagined-activity-7200174981777956864-8nkD',
        embedSrc: 'https://www.linkedin.com/embed/feed/update/urn:li:activity:7200174981777956864',
      },
    ],
  },
  {
    title: 'Python & DSA Work',
    items: [
      {
        label: 'Booth multiplication in Python',
        url: 'https://www.linkedin.com/posts/mrityunjay-pandey-59783a255_boothsalgorithm-python-coding-activity-7262172965457272832-pChu',
        embedSrc: 'https://www.linkedin.com/embed/feed/update/urn:li:activity:7262172965457272832',
      },
      {
        label: 'WhatsApp automatic birthday sender (Python)',
        url: 'https://www.linkedin.com/posts/mrityunjay-pandey-59783a255_python-automation-whatsapp-activity-7261064274150633473-wTpo',
        embedSrc: 'https://www.linkedin.com/embed/feed/update/urn:li:activity:7261064274150633473',
      },
      {
        label: 'Advanced Python mastery',
        url: 'https://www.linkedin.com/posts/mrityunjay-pandey-59783a255_python-advancedpython-learningjourney-activity-7210660130533642240-kFuM',
        embedSrc: 'https://www.linkedin.com/embed/feed/update/urn:li:activity:7210660130533642240',
      },
    ],
  },
];

export default function HighlightsPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', ...sections.map((s) => s.title)];
  const visibleSections =
    activeCategory === 'All' ? sections : sections.filter((s) => s.title === activeCategory);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="max-w-5xl mx-auto px-4 py-16">
        <header className="mb-8 text-center">
          <p className="text-xs font-semibold tracking-[0.25em] text-googleBlue/80 uppercase">
            Social feed
          </p>
          <h1 className="mt-3 text-3xl font-semibold text-gray-900">
            Live from LinkedIn
          </h1>
          <p className="mt-2 text-sm text-gray-600 max-w-2xl mx-auto">
            Scroll through an Instagram-style feed of wins, projects, and teaching updates. Use the filters
            to jump between categories.
          </p>

          <div className="mt-5 inline-flex flex-wrap justify-center gap-2 rounded-full bg-gray-50 px-3 py-2 border border-gray-100">
            {categories.map((cat) => {
              const isActive = cat === activeCategory;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 rounded-full border text-xs sm:text-sm transition-colors ${
                    isActive
                      ? 'bg-googleBlue text-white border-googleBlue'
                      : 'bg-white text-gray-700 border-gray-200 hover:border-googleBlue/60'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </header>

        <div className="space-y-10">
          {visibleSections.map((section) => (
            <section key={section.title} className="rounded-2xl bg-white">
              <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-[0.18em] mb-3">
                {section.title}
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                {section.items.map((item) => (
                  <article
                    key={item.url}
                    className="space-y-2 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow overflow-hidden"
                  >
                    <div className="px-4 pt-3 pb-2">
                      <h3 className="text-sm font-medium text-gray-900">{item.label}</h3>
                    </div>
                    <div className="border-t border-gray-100 bg-gray-50">
                      <iframe
                        src={item.embedSrc || item.url}
                        className="w-full"
                        style={{ height: 780 }}
                        frameBorder="0"
                        allowFullScreen
                        scrolling="no"
                        title={item.label}
                      />
                    </div>
                    <p className="px-4 pb-3 text-[11px] text-gray-500 flex justify-between items-center">
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-googleBlue hover:underline"
                      >
                        Open on LinkedIn →
                      </a>
                      <span className="text-gray-400">LinkedIn embed</span>
                    </p>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}

