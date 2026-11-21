import { useEffect } from 'react';
import { X, Printer, Mail, MapPin, Award, Briefcase, GraduationCap } from 'lucide-react';
import {
  EDUCATION_TIMELINE,
  EXPERIENCES,
  ACHIEVEMENTS,
  LANGUAGES,
  TECHNICAL_SKILLS,
} from '../data/portfolioData';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CVModal({ isOpen, onClose }: CVModalProps) {
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="cv-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-on-surface/55 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-surface-container-lowest rounded-3xl shadow-2xl border border-on-surface/10 max-h-[90vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Utility Bar */}
        <div className="no-print flex items-center justify-between px-6 py-4 bg-surface-container-low border-b border-on-surface/8">
          <div className="flex items-center gap-2">
            <span className="font-mono text-[11px] uppercase tracking-wider font-semibold text-primary">
              Curriculum Vitae
            </span>
          </div>
          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex items-center gap-1.5 bg-primary hover:bg-primary-container text-on-primary text-[13px] font-semibold px-4 py-1.5 rounded-full transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <a
              href="mailto:syaikahazzura@gmail.com?subject=Request%20Official%20CV%20-%20Syaikah%20Azzura%20Zahra%20Mustafa"
              className="inline-flex items-center gap-1.5 bg-surface-container-lowest hover:bg-surface-container text-on-surface border border-on-surface/10 text-[13px] font-semibold px-4 py-1.5 rounded-full transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Request Official File</span>
            </a>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close CV dialog"
              className="w-8 h-8 rounded-full bg-surface-container-lowest hover:bg-surface-container text-on-surface flex items-center justify-center border border-on-surface/10 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Printable CV Body */}
        <div className="p-6 md:p-10 overflow-y-auto space-y-8 text-on-surface">
          {/* Header Block */}
          <div className="border-b border-on-surface/10 pb-6">
            <h2 id="cv-modal-title" className="text-[26px] md:text-[30px] font-extrabold tracking-tight">
              Syaikah Azzura Zahra Mustafa
            </h2>
            <p className="text-[15px] text-primary font-semibold mt-1">
              Informatics Engineering Student (Ikatan Kerja PT PLN) · ITPLN
            </p>
            <div className="flex flex-wrap gap-x-5 gap-y-1.5 mt-3 text-[13px] text-on-surface-variant font-mono">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-primary" />
                Makassar · Jakarta Barat
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-primary" />
                syaikahazzura@gmail.com
              </span>
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="flex items-center gap-2 font-mono text-[12px] uppercase tracking-wider font-semibold text-primary mb-4">
              <GraduationCap className="w-4 h-4" />
              <span>Education</span>
            </h3>
            <div className="space-y-3">
              {EDUCATION_TIMELINE.map((edu) => (
                <div
                  key={edu.institution}
                  className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 text-[14px]"
                >
                  <div>
                    <span className="font-bold text-on-surface">{edu.institution}</span>
                    <span className="text-on-surface-variant"> — {edu.program}</span>
                  </div>
                  <span className="font-mono text-[12px] text-on-surface-variant shrink-0 tabular-nums">
                    {edu.period} · {edu.location}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <h3 className="flex items-center gap-2 font-mono text-[12px] uppercase tracking-wider font-semibold text-primary mb-4">
              <Briefcase className="w-4 h-4" />
              <span>Selected Experience &amp; Leadership</span>
            </h3>
            <div className="space-y-4">
              {EXPERIENCES.slice(0, 6).map((exp) => (
                <div key={exp.id} className="text-[14px]">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <span className="font-bold text-on-surface">
                      {exp.role} · <span className="text-secondary">{exp.organization}</span>
                    </span>
                    <span className="font-mono text-[12px] text-on-surface-variant shrink-0 tabular-nums">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-[13px] text-on-surface-variant mt-1 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills & Languages */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2 border-t border-on-surface/10">
            <div>
              <h4 className="font-mono text-[11px] uppercase tracking-wider font-semibold text-primary mb-2.5">
                Core Technical Tools
              </h4>
              <ul className="space-y-1 text-[13px] text-on-surface-variant">
                {TECHNICAL_SKILLS.map((s) => (
                  <li key={s.name} className="flex justify-between">
                    <span>{s.name}</span>
                    <span className="font-mono text-on-surface font-semibold tabular-nums">
                      {s.level}%
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-mono text-[11px] uppercase tracking-wider font-semibold text-primary mb-2.5">
                Languages
              </h4>
              <ul className="space-y-1 text-[13px] text-on-surface-variant">
                {LANGUAGES.map((l) => (
                  <li key={l.language}>
                    <span className="font-semibold text-on-surface">{l.language}:</span>{' '}
                    {l.proficiency}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Top Honors */}
          <div className="pt-2 border-t border-on-surface/10">
            <h3 className="flex items-center gap-2 font-mono text-[12px] uppercase tracking-wider font-semibold text-primary mb-3">
              <Award className="w-4 h-4" />
              <span>Selected Honors &amp; Certifications</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[13px]">
              {ACHIEVEMENTS.slice(0, 8).map((ach) => (
                <div key={ach.id} className="flex items-baseline justify-between gap-2">
                  <span className="text-on-surface font-medium truncate">{ach.title}</span>
                  <span className="font-mono text-[11px] text-on-surface-variant shrink-0 tabular-nums">
                    {ach.year}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
