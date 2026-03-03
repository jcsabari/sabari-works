import { useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';

interface ProjectCardProps {
  title: string;
  tag: string;
  description: string;
  href: string;
  icon: string;
}

export default function ProjectCard({ title, tag, description, href, icon }: ProjectCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={[
        'flex flex-col gap-3 p-7 rounded-2xl border bg-white cursor-pointer',
        'transition-all duration-300',
        hovered
          ? 'border-sky-400 shadow-xl shadow-sky-100 -translate-y-1.5'
          : 'border-slate-200 shadow-sm',
      ].join(' ')}
    >
      {/* Icon + Tag row */}
      <div className="flex items-start justify-between">
        <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-slate-100 border border-slate-200 text-2xl">
          {icon}
        </div>
        <span className="text-[11px] font-semibold tracking-widest uppercase text-sky-500 bg-sky-50 border border-sky-200 px-2.5 py-1 rounded-full">
          {tag}
        </span>
      </div>

      {/* Title */}
      <h3 className="font-bold text-[17px] text-slate-900" style={{ fontFamily: "'Syne', sans-serif" }}>
        {title}
      </h3>

      {/* Description */}
      <p className="text-[13px] text-slate-500 leading-relaxed flex-1">
        {description}
      </p>

      {/* Footer */}
      <div className={`pt-4 border-t border-slate-100 flex items-center justify-between`}>
        <span className={`text-[13px] font-semibold transition-colors duration-200 flex items-center gap-1.5 ${hovered ? 'text-sky-500' : 'text-slate-400'}`}>
          View projects <FiArrowRight size={13} />
        </span>
        <span className={`text-xs font-medium px-2 py-0.5 rounded-md transition-colors duration-200 ${hovered ? 'bg-sky-50 text-sky-500' : 'bg-slate-100 text-slate-400'}`}>
          React
        </span>
      </div>
    </a>
  );
}
