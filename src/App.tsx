import { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ExperienceSection } from './components/ExperienceSection';
import { WorksSection } from './components/WorksSection';
import { SkillsSection } from './components/SkillsSection';
import { AchievementsSection } from './components/AchievementsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { DetailModal, DetailModalItem } from './components/DetailModal';
import { CVModal } from './components/CVModal';

const SECTION_IDS = [
  'home',
  'about',
  'experience',
  'works',
  'skills',
  'achievements',
  'contact',
];

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [detailItem, setDetailItem] = useState<DetailModalItem | null>(null);
  const [isCVOpen, setIsCVOpen] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0 && visible[0].target.id) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: '-25% 0px -55% 0px',
        threshold: [0.1, 0.25, 0.5],
      }
    );

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-surface text-on-surface flex flex-col">
      <Header activeSection={activeSection} onOpenCV={() => setIsCVOpen(true)} />

      <main className="w-full pt-20 bg-surface flex-1 flex flex-col">
        <HeroSection onSelectCard={(card) => setDetailItem({ kind: 'deck', data: card })} />
        <AboutSection />
        <ExperienceSection />
        <WorksSection onSelectProject={(project) => setDetailItem({ kind: 'work', data: project })} />
        <SkillsSection />
        <AchievementsSection />
        <ContactSection onOpenCV={() => setIsCVOpen(true)} />
      </main>

      <Footer />

      <DetailModal item={detailItem} onClose={() => setDetailItem(null)} />
      <CVModal isOpen={isCVOpen} onClose={() => setIsCVOpen(false)} />
    </div>
  );
}
