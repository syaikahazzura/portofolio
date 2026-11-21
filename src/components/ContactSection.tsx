import { useState } from 'react';
import { Mail, MessageCircle, Link2, Download, Check } from 'lucide-react';

interface ContactSectionProps {
  onOpenCV: () => void;
}

export function ContactSection({ onOpenCV }: ContactSectionProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard?.writeText('syaikahazzura@gmail.com');
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section
      id="contact"
      className="w-full py-24 px-5 md:px-6 lg:px-12 max-w-[1240px] mx-auto scroll-mt-20"
    >
      <div className="w-full max-w-[920px] mx-auto bg-inverse-surface text-inverse-on-surface rounded-[28px] p-8 md:p-14 lg:p-16 text-center shadow-[0_30px_60px_-15px_rgba(33,34,44,0.28)] relative overflow-hidden">
        {/* Decorative radial gradient background glow */}
        <div className="absolute -top-24 -left-24 w-80 h-80 bg-primary/25 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-secondary/25 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center">
          <span className="font-mono text-[11px] leading-[14px] text-inverse-primary uppercase tracking-[0.12em] font-semibold mb-3">
            Let&apos;s Connect
          </span>

          <h2 className="text-[28px] md:text-[38px] lg:text-[44px] font-bold text-inverse-on-surface leading-[1.15] max-w-[640px] mb-4 [text-wrap:balance]">
            Open for internships, collaborations, and tech or energy discussions.
          </h2>

          <p className="text-[16px] leading-[24px] text-surface-dim max-w-[480px] mb-8">
            Available across Jakarta Barat and Makassar. Let&apos;s build meaningful systems
            together.
          </p>

          {/* Action Buttons Row */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 w-full">
            <a
              href="mailto:syaikahazzura@gmail.com"
              className="inline-flex items-center gap-2 bg-surface text-inverse-surface text-[15px] font-bold px-7 py-3 rounded-full hover:bg-surface-container hover:shadow-lg transition-all duration-200 whitespace-nowrap shrink-0"
            >
              <Mail className="w-[18px] h-[18px]" />
              <span>Email Me</span>
            </a>

            <a
              href="https://wa.me/62811444958"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-inverse-on-surface text-[14px] font-semibold px-6 py-3 rounded-full backdrop-blur-sm transition-all duration-200 whitespace-nowrap shrink-0"
            >
              <MessageCircle className="w-[18px] h-[18px]" />
              <span>WhatsApp</span>
            </a>

            <a
              href="https://linkedin.com/in/Syaikah-Azzura-Zahra-Mustafa"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-inverse-on-surface text-[14px] font-semibold px-6 py-3 rounded-full backdrop-blur-sm transition-all duration-200 whitespace-nowrap shrink-0"
            >
              <Link2 className="w-[18px] h-[18px]" />
              <span>LinkedIn</span>
            </a>

            <button
              type="button"
              onClick={onOpenCV}
              className="inline-flex items-center gap-2 bg-transparent hover:bg-white/10 text-inverse-on-surface text-[14px] font-semibold px-6 py-3 rounded-full border border-white/25 transition-all duration-200 whitespace-nowrap shrink-0 cursor-pointer"
            >
              <Download className="w-[18px] h-[18px]" />
              <span>Download CV</span>
            </button>
          </div>

          <button
            type="button"
            onClick={handleCopyEmail}
            className="mt-6 inline-flex items-center gap-1.5 font-mono text-[12px] text-surface-dim/80 hover:text-inverse-on-surface transition-colors cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-inverse-primary" />
                <span>Copied syaikahazzura@gmail.com to clipboard</span>
              </>
            ) : (
              <span>syaikahazzura@gmail.com · Click to copy</span>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
