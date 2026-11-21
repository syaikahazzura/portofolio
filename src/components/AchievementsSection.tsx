import { useState } from 'react';
import { ACHIEVEMENTS, AchievementCategory } from '../data/portfolioData';

type AchieveFilter = 'all' | AchievementCategory;

const ACHIEVE_TABS: { value: AchieveFilter; label: string }[] = [
  { value: 'all', label: `All (${ACHIEVEMENTS.length})` },
  { value: 'academic', label: 'Academic & Grants' },
  { value: 'arts', label: 'Arts & Creative' },
  { value: 'sports', label: 'Sports & Athletics' },
  { value: 'certs', label: 'Certifications' },
];

export function AchievementsSection() {
  const [activeCategory, setActiveCategory] = useState<AchieveFilter>('all');

  const filteredAchievements = ACHIEVEMENTS.filter((item) =>
    activeCategory === 'all' ? true : item.category === activeCategory
  );

  const getDotClass = (tone: (typeof ACHIEVEMENTS)[number]['dotTone']) => {
    switch (tone) {
      case 'primary':
        return 'bg-primary';
      case 'secondary':
        return 'bg-secondary';
      case 'primary-container':
        return 'bg-primary-container';
      case 'tertiary':
        return 'bg-tertiary';
      default:
        return 'bg-outline-variant';
    }
  };

  const getYearBadgeClass = (tone: (typeof ACHIEVEMENTS)[number]['badgeTone']) => {
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

  return (
    <section
      id="achievements"
      className="w-full py-20 px-5 md:px-6 lg:px-12 max-w-[1240px] mx-auto scroll-mt-20"
    >
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
        <div>
          <span className="font-mono text-[11px] leading-[14px] text-primary uppercase tracking-[0.1em] font-semibold">
            Milestones
          </span>
          <h2 className="text-[28px] md:text-[36px] leading-[36px] md:leading-[44px] tracking-[-0.02em] text-on-surface font-bold mt-1">
            Achievements &amp; Certifications
          </h2>
        </div>

        {/* Filter Tabs — single row on desktop without orphan wrapping */}
        <div
          role="group"
          aria-label="Filter achievements by category"
          className="inline-flex flex-wrap items-center gap-1 p-1.5 bg-surface-container-lowest rounded-2xl lg:rounded-full shadow-sm border border-on-surface/5 self-start lg:self-auto"
        >
          {ACHIEVE_TABS.map((tab) => {
            const isActive = activeCategory === tab.value;
            return (
              <button
                key={tab.value}
                type="button"
                onClick={() => setActiveCategory(tab.value)}
                aria-pressed={isActive}
                className={`font-mono text-[11px] font-semibold px-3.5 py-1.5 rounded-full transition-all duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                  isActive
                    ? 'bg-inverse-surface text-inverse-on-surface shadow-sm'
                    : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low/60'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Editorial 2-Column List Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredAchievements.map((item) => (
          <div
            key={item.id}
            className="bg-surface-container-lowest p-5 rounded-2xl shadow-sm border border-on-surface/5 flex items-start justify-between gap-4 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start gap-3.5 min-w-0">
              <span
                className={`w-2.5 h-2.5 rounded-full mt-1.5 shrink-0 ${getDotClass(item.dotTone)}`}
              />
              <div className="min-w-0">
                <h4 className="text-[15px] leading-[22px] font-bold text-on-surface">
                  {item.title}
                </h4>
                <p className="text-[13px] leading-[19px] text-on-surface-variant mt-0.5">
                  {item.issuer}
                </p>
              </div>
            </div>
            <span
              className={`font-mono text-[11px] font-semibold px-2.5 py-1 rounded-full shrink-0 tabular-nums whitespace-nowrap ${getYearBadgeClass(
                item.badgeTone
              )}`}
            >
              {item.year}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
