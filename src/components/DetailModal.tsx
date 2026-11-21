import { useEffect } from 'react';
import { X, CheckCircle2, MapPin, Calendar } from 'lucide-react';
import { HeroDeckCard, WorkProject } from '../data/portfolioData';
import { ResilientImage } from './ResilientImage';

export type DetailModalItem =
  | { kind: 'deck'; data: HeroDeckCard }
  | { kind: 'work'; data: WorkProject };

interface DetailModalProps {
  item: DetailModalItem | null;
  onClose: () => void;
}

export function DetailModal({ item, onClose }: DetailModalProps) {
  useEffect(() => {
    if (!item) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [item, onClose]);

  if (!item) return null;

  const isDeck = item.kind === 'deck';
  const title = item.data.title;
  const badge = item.data.badge;
  const imageUrl = item.data.imageUrl;
  const imageAlt = item.data.imageAlt;
  const fallbackGradient = item.data.fallbackGradient;

  const description = isDeck ? item.data.description : item.data.fullDescription;
  const bullets = isDeck ? item.data.highlights : item.data.deliverables;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="detail-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-on-surface/55 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-surface-container-lowest rounded-3xl shadow-2xl overflow-hidden border border-on-surface/10 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Media Header */}
        <div className="relative h-56 md:h-64 w-full shrink-0 overflow-hidden">
          <ResilientImage
            src={imageUrl}
            alt={imageAlt}
            fallbackGradient={fallbackGradient}
            fallbackLabel={badge}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-on-surface/85 via-on-surface/25 to-transparent" />

          <button
            type="button"
            onClick={onClose}
            aria-label="Close detail dialog"
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-surface-container-lowest/90 hover:bg-surface-container-lowest text-on-surface flex items-center justify-center shadow-md transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="absolute bottom-5 left-6 right-6 text-left">
            <span className="font-mono text-[11px] font-semibold uppercase tracking-wider bg-surface/20 backdrop-blur-md text-surface px-3 py-1 rounded-full inline-block mb-2">
              {badge}
            </span>
            <h3
              id="detail-modal-title"
              className="text-[24px] md:text-[28px] leading-tight font-bold text-surface"
            >
              {title}
            </h3>
          </div>
        </div>

        {/* Body Content */}
        <div className="p-6 md:p-8 overflow-y-auto space-y-6">
          <div className="flex flex-wrap items-center gap-4 text-[13px] font-mono text-on-surface-variant">
            {isDeck ? (
              <>
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-primary" />
                  <span>{item.data.period}</span>
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-primary" />
                  <span>{item.data.location}</span>
                </span>
              </>
            ) : (
              <span className="inline-flex items-center gap-1.5 text-primary font-semibold">
                <span>{item.data.meta}</span>
              </span>
            )}
          </div>

          {isDeck && (
            <p className="text-[15px] font-semibold text-secondary -mt-2">{item.data.subtitle}</p>
          )}

          <p className="text-[15px] leading-[24px] text-on-surface-variant">{description}</p>

          <div>
            <h4 className="font-mono text-[11px] uppercase tracking-wider text-primary font-semibold mb-3">
              {isDeck ? 'Key Highlights' : 'Scope & Deliverables'}
            </h4>
            <ul className="space-y-2.5">
              {bullets.map((point) => (
                <li key={point} className="flex items-start gap-2.5 text-[14px] text-on-surface">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {!isDeck && (
            <div className="p-4 rounded-2xl bg-surface-container-low border border-on-surface/5">
              <span className="font-mono text-[11px] uppercase tracking-wider text-secondary font-semibold block mb-1">
                Recognition &amp; Outcome
              </span>
              <p className="text-[14px] font-semibold text-on-surface">{item.data.outcome}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
