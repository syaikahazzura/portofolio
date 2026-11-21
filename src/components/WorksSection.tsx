import { Film, FileText, Zap } from 'lucide-react';
import { SELECTED_WORKS, WorkProject } from '../data/portfolioData';
import { ResilientImage } from './ResilientImage';

interface WorksSectionProps {
  onSelectProject: (project: WorkProject) => void;
}

export function WorksSection({ onSelectProject }: WorksSectionProps) {
  const renderIcon = (icon: WorkProject['icon']) => {
    switch (icon) {
      case 'movie':
        return <Film className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />;
      case 'article':
        return (
          <FileText className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
        );
      case 'bolt':
        return <Zap className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />;
    }
  };

  return (
    <section
      id="works"
      className="w-full py-20 px-5 md:px-6 lg:px-12 max-w-[1240px] mx-auto scroll-mt-20"
    >
      <div className="text-left mb-12">
        <span className="font-mono text-[11px] leading-[14px] text-primary uppercase tracking-[0.1em] font-semibold">
          Portfolio Showcase
        </span>
        <h2 className="text-[28px] md:text-[36px] leading-[36px] md:leading-[44px] tracking-[-0.02em] text-on-surface font-bold mt-1">
          Selected Works &amp; Projects
        </h2>
      </div>

      {/* 3-Column Bento Showcase Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {SELECTED_WORKS.map((project) => (
          <button
            key={project.id}
            type="button"
            onClick={() => onSelectProject(project)}
            className="text-left bg-surface-container-lowest rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-on-surface/5 flex flex-col group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <div className="relative w-full h-56 overflow-hidden">
              <div className="w-full h-full transition-transform duration-500 group-hover:scale-105">
                <ResilientImage
                  src={project.imageUrl}
                  alt={project.imageAlt}
                  fallbackGradient={project.fallbackGradient}
                  fallbackLabel={project.badge}
                />
              </div>
              <div className="absolute top-4 right-4 bg-surface-container-lowest/90 backdrop-blur-md px-3 py-1 rounded-full font-mono text-[11px] text-on-surface font-semibold shadow-sm">
                {project.badge}
              </div>
            </div>

            <div className="p-7 flex flex-col flex-1 justify-between w-full">
              <div>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[10px] font-semibold bg-surface-container-high text-on-surface-variant px-2.5 py-0.5 rounded-full whitespace-nowrap"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-[20px] leading-[28px] tracking-[-0.01em] font-bold text-on-surface group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-[14px] leading-[22px] text-on-surface-variant mt-2">
                  {project.summary}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-on-surface/5 flex items-center justify-between w-full">
                <span className="font-mono text-[13px] text-primary font-medium tabular-nums">
                  {project.meta}
                </span>
                {renderIcon(project.icon)}
              </div>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}
