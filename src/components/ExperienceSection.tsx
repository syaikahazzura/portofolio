import { useState } from 'react';
import { EXPERIENCES, ExperienceCategory } from '../data/portfolioData';

type FilterValue = 'all' | ExperienceCategory;

const FILTER_OPTIONS: { value: FilterValue; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'energy', label: 'Energy & Tech' },
  { value: 'leadership', label: 'Leadership' },
  { value: 'creative', label: 'Event & Creative' },
];

export function ExperienceSection() {
  const [filter, setFilter] = useState<FilterValue>('all');

  const filteredExperiences = EXPERIENCES.filter((item) =>
    filter === 'all' ? true : item.categories.includes(filter)
  );

  const getBadgeClasses = (tone: (typeof EXPERIENCES)[number]['badgeTone']) => {
    switch (tone) {
      case 'primary':
        return 'text-primary bg-primary-fixed/50';
      case 'secondary':
        return 'text-secondary bg-secondary-fixed/50';
      case 'primary-fixed':
        return 'text-primary-container bg-primary-fixed';
      default:
        return 'text-on-surface-variant bg-surface-container-high';
    }
  };

  const getDotClasses = (tone: (typeof EXPERIENCES)[number]['dotTone']) => {
    switch (tone) {
      case 'primary':
        return 'bg-primary';
      case 'secondary':
        return 'bg-secondary';
      case 'primary-container':
        return 'bg-primary-container';
      default:
        return 'bg-tertiary';
    }
  };

  return (
    <section
      id="experience"
      className="w-full py-20 px-5 md:px-6 lg:px-12 max-w-[1240px] mx-auto scroll-mt-20"
    >
      {/* Header with interactive category filters */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <span className="font-mono text-[11px] leading-[14px] text-primary uppercase tracking-[0.1em] font-semibold">
            Track Record
          </span>
          <h2 className="text-[28px] md:text-[36px] leading-[36px] md:leading-[44px] tracking-[-0.02em] text-on-surface font-bold mt-1">
            Experience &amp; Leadership
          </h2>
        </div>

        {/* Filter Buttons */}
        <div
          role="group"
          aria-label="Filter experience by category"
          className="inline-flex flex-wrap items-center gap-1.5 p-1.5 bg-surface-container-lowest rounded-full shadow-sm border border-on-surface/5 self-start md:self-auto"
        >
          {FILTER_OPTIONS.map((opt) => {
            const isActive = filter === opt.value;
            return (
              <button
                key={opt.value}
                type="button"
                onClick={() => setFilter(opt.value)}
                aria-pressed={isActive}
                className={`font-mono text-[11px] font-semibold px-4 py-1.5 rounded-full transition-all duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                  isActive
                    ? 'bg-inverse-surface text-inverse-on-surface shadow-sm'
                    : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low/60'
                }`}
              >
                {opt.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Editorial Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredExperiences.map((exp) => (
          <article
            key={exp.id}
            className="bg-surface-container-lowest p-7 rounded-2xl shadow-sm hover:shadow-md transition-all border border-on-surface/5 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-3 mb-3">
                <span
                  className={`font-mono text-[11px] font-semibold px-3 py-1 rounded-full whitespace-nowrap shrink-0 ${getBadgeClasses(
                    exp.badgeTone
                  )}`}
                >
                  {exp.categoryLabel}
                </span>
                <span className="font-mono text-[13px] font-medium text-on-surface-variant tabular-nums whitespace-nowrap">
                  {exp.period}
                </span>
              </div>
              <h3 className="text-[20px] leading-[28px] tracking-[-0.01em] font-bold text-on-surface">
                {exp.role}
              </h3>
              <p className="text-[14px] leading-[20px] font-semibold text-secondary mt-0.5">
                {exp.organization}
              </p>
              <p className="text-[14px] leading-[22px] text-on-surface-variant mt-3">
                {exp.description}
              </p>
            </div>
            <div className="mt-5 pt-4 border-t border-on-surface/5 flex items-center gap-2">
              <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${getDotClasses(exp.dotTone)}`} />
              <span className="font-mono text-[11px] text-on-surface-variant">{exp.tags}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
