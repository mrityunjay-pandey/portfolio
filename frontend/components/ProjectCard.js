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
  const { title, description, techStack, tech, githubUrl, liveUrl, link, thumbnailUrl } = project;
  
  const projectLink = liveUrl || link;
  const projectTech = (techStack && techStack.length > 0) ? techStack : (tech || []);

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
    <div className="rounded-xl border border-gray-200 bg-white hover:bg-gray-50 transition-colors flex flex-col h-full relative group/card">
      <article
        ref={cardRef}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        style={style}
        className="rounded-xl overflow-hidden flex flex-col h-full will-change-transform"
      >
        <div className="relative aspect-video overflow-hidden border-b border-gray-100 bg-gray-50">
          {thumbnailUrl ? (
            <img
              src={thumbnailUrl}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover/card:scale-[1.03]"
              loading="lazy"
            />
          ) : projectLink ? (
            <div className="w-[200%] h-[200%] origin-top-left scale-50 transition-transform duration-500 group-hover/card:scale-[0.52]">
              <iframe 
                src={projectLink} 
                title={`${title} preview`}
                className="w-full h-full border-0 pointer-events-none"
                sandbox="allow-scripts allow-same-origin"
                loading="lazy"
              />
            </div>
          ) : (
            <div className={`w-full h-full ${gradientFromTitle(title)} grid place-items-center text-white`}>
              <div className="text-center">
                <div className="text-2xl font-semibold drop-shadow-sm">{title?.[0] || 'P'}</div>
                <div className="text-xs opacity-90">Preview not available</div>
              </div>
            </div>
          )}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity" />
        </div>
        <div className="p-5 flex flex-col flex-grow">
          <h3 className="font-semibold text-lg tracking-tight text-gray-900">
            {title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-gray-600 line-clamp-3">
            {description}
          </p>
          {projectTech.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {projectTech.slice(0, 6).map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 text-[11px] rounded bg-gray-100 text-gray-700 font-medium"
                >
                  {t}
                </span>
              ))}
              {projectTech.length > 6 && (
                <span className="px-2.5 py-1 text-[11px] rounded bg-gray-100 text-gray-500 font-medium">
                  +{projectTech.length - 6}
                </span>
              )}
            </div>
          )}
          <div className="mt-auto pt-5 flex items-center gap-2">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-sm rounded font-medium text-googleBlue hover:bg-googleBlue/5 transition-colors focus:outline-none"
              >
                <span>Code</span>
                <span aria-hidden>↗</span>
              </a>
            )}
            {projectLink && (
              <a
                href={projectLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-sm rounded font-medium bg-googleBlue text-white hover:bg-googleBlue/90 transition-colors focus:outline-none"
              >
                <span>Open</span>
                <span aria-hidden>↗</span>
              </a>
            )}
          </div>
        </div>
      </article>
    </div>
  );
}
