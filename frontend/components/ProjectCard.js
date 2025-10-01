import { useRef, useState, useEffect } from 'react';

function gradientFromTitle(title = '') {
  const colors = [
    ['from-googleBlue', 'to-googleGreen'],
    ['from-googleRed', 'to-googleYellow'],
    ['from-indigo-500', 'to-sky-400'],
    ['from-fuchsia-500', 'to-pink-500'],
    ['from-emerald-500', 'to-lime-400'],
  ];
  let hash = 0;
  for (let i = 0; i < title.length; i++) hash = (hash * 31 + title.charCodeAt(i)) >>> 0;
  const pair = colors[hash % colors.length];
  return `bg-gradient-to-br ${pair[0]} ${pair[1]}`;
}

export default function ProjectCard({ project }) {
  const { title, description, techStack = [], githubUrl, liveUrl, thumbnailUrl } = project;

  const cardRef = useRef(null);
  const [style, setStyle] = useState({});
  const [motionOK, setMotionOK] = useState(true);
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setMotionOK(!mq.matches);
    const handler = (e) => setMotionOK(!e.matches);
    mq.addEventListener?.('change', handler);
    return () => mq.removeEventListener?.('change', handler);
  }, []);

  function handleMove(e) {
    if (!motionOK) return;
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const px = (x / rect.width) - 0.5;
    const py = (y / rect.height) - 0.5;
    const rotateX = (py * -6).toFixed(2);
    const rotateY = (px * 6).toFixed(2);
    setStyle({ transform: `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(0)` });
  }

  function handleLeave() {
    setStyle({ transform: 'perspective(900px) rotateX(0deg) rotateY(0deg) translateZ(0)' });
  }

  return (
    <div className="rounded-2xl p-[1px] bg-gradient-to-r from-googleBlue via-googleGreen to-googleYellow">
      <article
        ref={cardRef}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        style={style}
        className="group rounded-[15px] overflow-hidden bg-white/70 backdrop-blur-sm border border-white/60 shadow-sm hover:shadow-lg transition-[box-shadow,transform] will-change-transform"
      >
        <div className="relative aspect-video overflow-hidden">
          {thumbnailUrl ? (
            <img
              src={thumbnailUrl}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
              loading="lazy"
            />
          ) : (
            <div className={`w-full h-full ${gradientFromTitle(title)} grid place-items-center text-white`}>
              <div className="text-center">
                <div className="text-2xl font-semibold drop-shadow-sm">{title?.[0] || 'P'}</div>
                <div className="text-xs opacity-90">Add a thumbnail for richer preview</div>
              </div>
            </div>
          )}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
        <div className="p-5">
          <h3 className="font-semibold text-lg tracking-tight text-gray-900">
            {title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-gray-600 line-clamp-3">
            {description}
          </p>
          {techStack.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {techStack.slice(0, 6).map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 text-[11px] rounded-full bg-white/70 backdrop-blur border border-gray-200 text-gray-800 shadow-sm"
                >
                  {t}
                </span>
              ))}
              {techStack.length > 6 && (
                <span className="px-2.5 py-1 text-[11px] rounded-full bg-white/60 border border-gray-200 text-gray-600">
                  +{techStack.length - 6}
                </span>
              )}
            </div>
          )}
          <div className="mt-5 flex items-center gap-2">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm rounded-md border border-gray-200 text-gray-800 hover:border-gray-300 hover:bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-googleBlue/30"
              >
                <span>GitHub</span>
                <span aria-hidden>↗</span>
              </a>
            )}
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm rounded-md bg-googleBlue text-white hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-googleBlue/30"
              >
                <span>Live Demo</span>
                <span aria-hidden>↗</span>
              </a>
            )}
          </div>
        </div>
      </article>
    </div>
  );
}
