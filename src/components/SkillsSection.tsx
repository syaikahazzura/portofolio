import { Terminal, Users, Languages as LanguagesIcon, CheckCircle2 } from 'lucide-react';
import {
  TECHNICAL_SKILLS,
  TOOL_TAGS,
  LEADERSHIP_COMPETENCIES,
  LANGUAGES,
} from '../data/portfolioData';

export function SkillsSection() {
  const getLanguageBadgeClass = (tone: (typeof LANGUAGES)[number]['tone']) => {
    switch (tone) {
      case 'primary':
        return 'text-primary bg-primary-fixed/60';
      case 'secondary':
        return 'text-secondary bg-secondary-fixed/60';
      default:
        return 'text-on-surface-variant bg-surface-container-high';
    }
  };

  return (
    <section
      id="skills"
      className="w-full py-20 px-5 md:px-6 lg:px-12 max-w-[1240px] mx-auto scroll-mt-20"
    >
      <div className="text-left mb-12">
        <span className="font-mono text-[11px] leading-[14px] text-primary uppercase tracking-[0.1em] font-semibold">
          Capabilities
        </span>
        <h2 className="text-[28px] md:text-[36px] leading-[36px] md:leading-[44px] tracking-[-0.02em] text-on-surface font-bold mt-1">
          Skills &amp; Languages
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Panel 1: Technical & Digital */}
        <div className="bg-surface-container-lowest p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow border border-on-surface/5 flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-2xl bg-primary-fixed flex items-center justify-center text-primary mb-6">
              <Terminal className="w-5 h-5" />
            </div>
            <h3 className="text-[20px] leading-[28px] tracking-[-0.01em] font-bold text-on-surface mb-2">
              Technical &amp; Digital
            </h3>
            <p className="text-[14px] leading-[20px] text-on-surface-variant mb-6">
              Foundational computing, data handling, and creative toolkits.
            </p>

            <div className="space-y-4">
              {TECHNICAL_SKILLS.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between font-mono text-[13px] mb-1.5 gap-2">
                    <span className="font-medium text-on-surface truncate">{skill.name}</span>
                    <span className="text-primary font-semibold tabular-nums shrink-0">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-surface-container-high h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-primary h-full rounded-full transition-all duration-500"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 pt-5 border-t border-on-surface/5 flex flex-wrap gap-2">
            {TOOL_TAGS.map((tag) => (
              <span
                key={tag}
                className="font-mono text-[11px] font-medium bg-surface-container text-on-surface px-3 py-1 rounded-full whitespace-nowrap"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Panel 2: Leadership & Human */}
        <div className="bg-surface-container-lowest p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow border border-on-surface/5">
          <div className="w-10 h-10 rounded-2xl bg-secondary-fixed flex items-center justify-center text-secondary mb-6">
            <Users className="w-5 h-5" />
          </div>
          <h3 className="text-[20px] leading-[28px] tracking-[-0.01em] font-bold text-on-surface mb-2">
            Leadership &amp; Human
          </h3>
          <p className="text-[14px] leading-[20px] text-on-surface-variant mb-6">
            Proven student organization leadership and executive empathy.
          </p>

          <div className="space-y-3">
            {LEADERSHIP_COMPETENCIES.map((item) => (
              <div
                key={item.title}
                className="p-3.5 rounded-xl bg-surface-container flex items-center gap-3"
              >
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                <div className="min-w-0">
                  <p className="text-[14px] leading-[20px] font-bold text-on-surface truncate">
                    {item.title}
                  </p>
                  <p className="text-[12px] leading-[18px] text-on-surface-variant">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Panel 3: Languages & Mastery */}
        <div className="bg-surface-container-lowest p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow border border-on-surface/5">
          <div className="w-10 h-10 rounded-2xl bg-tertiary-fixed flex items-center justify-center text-tertiary mb-6">
            <LanguagesIcon className="w-5 h-5" />
          </div>
          <h3 className="text-[20px] leading-[28px] tracking-[-0.01em] font-bold text-on-surface mb-2">
            Languages &amp; Mastery
          </h3>
          <p className="text-[14px] leading-[20px] text-on-surface-variant mb-6">
            Certified language proficiency and sacred memorization credentials.
          </p>

          <div className="space-y-4">
            {LANGUAGES.map((lang) => (
              <div
                key={lang.language}
                className="p-4 rounded-2xl bg-surface-container flex flex-col gap-1"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[15px] leading-[22px] font-bold text-on-surface">
                    {lang.language}
                  </span>
                  <span
                    className={`font-mono text-[11px] font-semibold px-2.5 py-0.5 rounded-full whitespace-nowrap shrink-0 ${getLanguageBadgeClass(
                      lang.tone
                    )}`}
                  >
                    {lang.proficiency}
                  </span>
                </div>
                <p className="text-[13px] leading-[19px] text-on-surface-variant">
                  {lang.credential}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
