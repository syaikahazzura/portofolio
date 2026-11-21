import { ArrowDown } from 'lucide-react';
import { HERO_DECK_CARDS, HeroDeckCard } from '../data/portfolioData';
import { ResilientImage } from './ResilientImage';

interface HeroSectionProps {
  onSelectCard: (card: HeroDeckCard) => void;
}

const FAN_TRANSFORMS = [
  'translateX(calc(-50% - 375px)) translateY(52px) rotate(-14deg)',
  'translateX(calc(-50% - 225px)) translateY(22px) rotate(-8deg)',
  'translateX(calc(-50% - 75px)) translateY(4px) rotate(-2.5deg)',
  'translateX(calc(-50% + 75px)) translateY(4px) rotate(2.5deg)',
  'translateX(calc(-50% + 225px)) translateY(22px) rotate(8deg)',
  'translateX(calc(-50% + 375px)) translateY(52px) rotate(14deg)',
];

const FAN_Z_INDEX = ['z-[5]', 'z-[7]', 'z-[9]', 'z-[9]', 'z-[7]', 'z-[5]'];

export function HeroSection({ onSelectCard }: HeroSectionProps) {
  const scrollToAbout = () => {
    const el = document.getElementById('about');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="home"
      className="relative w-full min-h-[calc(100vh-5rem)] flex flex-col justify-between overflow-hidden bg-background pt-6 md:pt-12 pb-6"
    >
      {/* Ambient subtle background aura */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-primary-fixed/35 via-secondary-fixed/25 to-transparent blur-3xl pointer-events-none rounded-full" />

      {/* Centered Typography & Intro */}
      <div className="relative z-10 text-center px-5 md:px-6 max-w-4xl mx-auto flex flex-col items-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 font-mono text-[11px] font-semibold bg-surface-container-high text-on-surface-variant uppercase px-4 py-1.5 rounded-full shadow-sm tracking-[0.08em] mb-5">
          <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block shrink-0" />
          <span>ITPLN IKATAN KERJA · ENERGY &amp; TECH · CREATIVE</span>
        </div>

        {/* Main Display Headline */}
        <h1 className="text-[clamp(38px,6.4vw,76px)] leading-[1.05] text-on-surface font-extrabold tracking-[-0.035em] [text-wrap:balance]">
          Syaikah Azzura Zahra
        </h1>

        {/* Editorial Subtitle */}
        <p className="text-[16px] md:text-[18px] leading-[28px] text-on-surface-variant max-w-[590px] mt-4">
          Informatics Engineering Student at ITPLN, Power Plant Intern, &amp; Student Leader
          bridging electrical energy, digital technology, and visual storytelling.
        </p>

        {/* Quick Action Jump Button */}
        <div className="mt-6 flex items-center justify-center">
          <button
            type="button"
            onClick={scrollToAbout}
            className="inline-flex items-center gap-2 text-primary text-[14px] font-semibold hover:text-primary-container transition-colors py-2 px-4 rounded-full hover:bg-primary-fixed/30 cursor-pointer"
          >
            <span>Explore Biography &amp; Work</span>
            <ArrowDown className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Desktop Fanned Cards Deck (Rainbow Arc) */}
      <div className="hidden md:block relative w-full h-[350px] lg:h-[390px] mt-8 overflow-visible select-none">
        <div className="relative w-full max-w-[1240px] h-full mx-auto flex items-end justify-center pb-4">
          {HERO_DECK_CARDS.map((card, idx) => (
            <button
              key={card.id}
              type="button"
              onClick={() => onSelectCard(card)}
              style={{ transform: FAN_TRANSFORMS[idx] }}
              className={`group absolute bottom-3 left-1/2 w-[clamp(165px,16.5vw,220px)] aspect-[3/4] rounded-2xl bg-surface-container-lowest shadow-[0_20px_40px_-15px_rgba(33,34,44,0.16)] p-1.5 cursor-pointer origin-bottom transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:!scale-105 hover:!-translate-y-7 hover:!rotate-0 hover:z-40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${FAN_Z_INDEX[idx]}`}
            >
              <div className="relative w-full h-full rounded-xl overflow-hidden shadow-inner">
                <div className="w-full h-full transition-transform duration-500 group-hover:scale-105">
                  <ResilientImage
                    src={card.imageUrl}
                    alt={card.imageAlt}
                    fallbackGradient={card.fallbackGradient}
                    fallbackLabel={card.badge}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-on-surface/90 via-on-surface/35 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-left">
                  <span className="font-mono bg-surface/20 backdrop-blur-md text-surface text-[10px] font-semibold px-2 py-0.5 rounded-full uppercase tracking-wider inline-block mb-1">
                    {card.badge}
                  </span>
                  <p className="text-[15px] leading-tight font-bold text-surface">
                    {card.title}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Mobile / Small-Screen Horizontal Swipeable Deck */}
      <div className="md:hidden mt-8 w-full overflow-x-auto snap-x snap-mandatory flex gap-4 px-5 pb-4">
        {HERO_DECK_CARDS.map((card) => (
          <button
            key={card.id}
            type="button"
            onClick={() => onSelectCard(card)}
            className="snap-center shrink-0 w-[210px] aspect-[3/4] rounded-2xl bg-surface-container-lowest shadow-[0_14px_28px_-10px_rgba(33,34,44,0.16)] p-1.5 cursor-pointer text-left"
          >
            <div className="relative w-full h-full rounded-xl overflow-hidden">
              <ResilientImage
                src={card.imageUrl}
                alt={card.imageAlt}
                fallbackGradient={card.fallbackGradient}
                fallbackLabel={card.badge}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-on-surface/90 via-on-surface/35 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3">
                <span className="font-mono bg-surface/20 backdrop-blur-md text-surface text-[10px] font-semibold px-2 py-0.5 rounded-full uppercase tracking-wider inline-block mb-1">
                  {card.badge}
                </span>
                <p className="text-[15px] leading-tight font-bold text-surface">{card.title}</p>
              </div>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}
