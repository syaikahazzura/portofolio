import { GraduationCap } from 'lucide-react';
import { EDUCATION_TIMELINE } from '../data/portfolioData';

export function AboutSection() {
  return (
    <section
      id="about"
      className="w-full py-20 md:py-28 px-5 md:px-6 lg:px-12 max-w-[1240px] mx-auto scroll-mt-20"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Bio & Core Statistics */}
        <div className="lg:col-span-7 flex flex-col">
          <span className="font-mono text-[11px] leading-[14px] text-primary uppercase tracking-[0.1em] font-semibold mb-3">
            About Me
          </span>
          <h2 className="text-[28px] md:text-[36px] leading-[36px] md:leading-[44px] tracking-[-0.02em] text-on-surface font-bold mb-6 [text-wrap:balance]">
            Driven by discipline, curiosity, and impact.
          </h2>
          <div className="space-y-4 text-on-surface-variant text-[16px] leading-[26px]">
            <p>
              I am an Undergraduate Informatics Engineering student under the prestigious{' '}
              <strong className="text-on-surface font-semibold">Ikatan Kerja PT PLN</strong>{' '}
              program at Institut Teknologi PLN, with a foundational academic grounding in
              Electrical Engineering from Universitas Hasanuddin.
            </p>
            <p>
              Operating seamlessly between Jakarta and Makassar, I focus on the synthesis of modern
              information technology, power generation systems, and agile organizational
              leadership. From monitoring heavy gas turbine operations at PLTG Tello to leading
              high-impact student governance, managing multi-million rupiah event budgets, and
              directing award-winning short films, I build solutions with rigor and artistic
              clarity.
            </p>
          </div>

          {/* Quick Stat Highlights Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
            <div className="bg-surface-container-lowest p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-on-surface/5">
              <span className="font-mono text-[11px] font-semibold text-primary uppercase tracking-wider">
                Institution
              </span>
              <p className="text-[20px] leading-[28px] font-bold text-on-surface mt-1">ITPLN</p>
              <p className="text-[14px] leading-[20px] text-on-surface-variant">
                Ikatan Kerja PT PLN
              </p>
            </div>
            <div className="bg-surface-container-lowest p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-on-surface/5">
              <span className="font-mono text-[11px] font-semibold text-secondary uppercase tracking-wider">
                Memorization
              </span>
              <p className="text-[20px] leading-[28px] font-bold text-on-surface mt-1 tabular-nums">
                15 Juz
              </p>
              <p className="text-[14px] leading-[20px] text-on-surface-variant">
                Syahadah Graduate
              </p>
            </div>
            <div className="bg-surface-container-lowest p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-on-surface/5">
              <span className="font-mono text-[11px] font-semibold text-primary-container uppercase tracking-wider">
                Accolades
              </span>
              <p className="text-[20px] leading-[28px] font-bold text-on-surface mt-1 tabular-nums">
                12+ Awards
              </p>
              <p className="text-[14px] leading-[20px] text-on-surface-variant">
                Academic, Art &amp; Sports
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Education Timeline */}
        <div className="lg:col-span-5 bg-surface-container-lowest p-6 md:p-8 rounded-3xl shadow-sm border border-on-surface/5">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-[24px] leading-[32px] tracking-[-0.015em] font-bold text-on-surface">
              Education
            </h3>
            <GraduationCap className="w-[22px] h-[22px] text-primary" />
          </div>

          <div className="relative pl-6 space-y-7 before:content-[''] before:absolute before:left-2 before:top-2 before:bottom-2 before:w-[2px] before:bg-surface-container-high">
            {EDUCATION_TIMELINE.map((edu) => {
              const dotClass = edu.isCurrent
                ? 'bg-primary ring-4 ring-primary-fixed'
                : edu.isSecondary
                ? 'bg-secondary'
                : 'bg-outline-variant';

              const badgeClass = edu.isCurrent
                ? 'text-primary bg-primary-fixed/50'
                : edu.isSecondary
                ? 'text-secondary bg-secondary-fixed/50'
                : 'text-on-surface-variant bg-surface-container-high';

              return (
                <div key={edu.institution} className="relative">
                  <span
                    className={`absolute -left-[22px] top-1.5 w-3 h-3 rounded-full ${dotClass}`}
                  />
                  <div className="flex items-center flex-wrap gap-2 mb-1">
                    <span
                      className={`font-mono text-[11px] font-semibold px-2.5 py-0.5 rounded-full tabular-nums ${badgeClass}`}
                    >
                      {edu.period}
                    </span>
                    <span className="text-on-surface-variant text-[11px] font-medium">
                      • {edu.location}
                    </span>
                  </div>
                  <p className="text-[16px] leading-[24px] font-bold text-on-surface">
                    {edu.institution}
                  </p>
                  <p className="text-[14px] leading-[20px] text-on-surface-variant">
                    {edu.program}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
