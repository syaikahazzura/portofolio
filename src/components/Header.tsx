import { useState } from 'react';
import { User, Menu, X } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  onOpenCV: () => void;
}

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'works', label: 'Works' },
  { id: 'skills', label: 'Skills' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
];

export function Header({ activeSection, onOpenCV }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = (id: string) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-surface/85 backdrop-blur-md shadow-[0_1px_8px_rgba(33,34,44,0.04)]">
      <div className="h-20 max-w-[1360px] mx-auto px-5 md:px-6 lg:px-12 flex items-center justify-between gap-4">
        {/* Brand Wordmark */}
        <div className="flex items-center shrink-0">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('home');
            }}
            className="text-[20px] leading-[28px] text-on-surface hover:text-primary transition-colors tracking-tight font-bold whitespace-nowrap shrink-0"
          >
            Syaikah<span className="text-primary-container">.</span>
          </a>
        </div>

        {/* Centered Floating Pill Nav (Desktop) */}
        <nav
          aria-label="Primary Navigation"
          className="hidden lg:flex items-center gap-2 bg-surface-container-lowest/80 px-3 py-1.5 rounded-full shadow-[0_1px_4px_rgba(33,34,44,0.04)] border border-on-surface/5"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.id);
                }}
                aria-current={isActive ? 'page' : undefined}
                className={`text-[14px] leading-[20px] transition-all duration-150 rounded-full px-3.5 py-1.5 whitespace-nowrap shrink-0 ${
                  isActive
                    ? 'text-on-surface font-semibold bg-surface-container-high'
                    : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low/60 font-medium'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Primary Action & Profile Trigger */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('contact');
            }}
            className="inline-flex items-center justify-center bg-inverse-surface text-inverse-on-surface hover:bg-on-surface hover:text-surface text-[13px] md:text-[14px] font-semibold rounded-full px-4 md:px-6 py-2 shadow-[0_2px_8px_rgba(33,34,44,0.12)] hover:shadow-[0_4px_14px_rgba(42,111,151,0.24)] transition-all duration-200 whitespace-nowrap shrink-0"
          >
            Get in Touch →
          </a>

          <button
            type="button"
            onClick={onOpenCV}
            title="View Curriculum Vitae"
            aria-label="Open Curriculum Vitae summary"
            className="w-9 h-9 rounded-full bg-primary hover:bg-primary-container text-on-primary flex items-center justify-center shadow-sm transition-colors shrink-0 cursor-pointer"
          >
            <User className="w-[17px] h-[17px]" />
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            className="lg:hidden w-9 h-9 rounded-full bg-surface-container-lowest border border-on-surface/10 text-on-surface flex items-center justify-center shrink-0 cursor-pointer"
          >
            {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-surface-container-lowest border-t border-on-surface/8 px-5 py-4 shadow-lg">
          <div className="flex flex-wrap gap-2">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.id);
                  }}
                  className={`text-[14px] rounded-full px-4 py-2 transition-colors whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'bg-inverse-surface text-inverse-on-surface font-semibold'
                      : 'bg-surface-container-low text-on-surface-variant hover:text-on-surface font-medium'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
