export type ExperienceCategory = 'energy' | 'leadership' | 'creative';
export type AchievementCategory = 'academic' | 'arts' | 'sports' | 'certs';

export interface HeroDeckCard {
  id: string;
  number: string;
  badge: string;
  title: string;
  subtitle: string;
  period: string;
  location: string;
  imageUrl: string;
  imageAlt: string;
  fallbackGradient: string;
  description: string;
  highlights: string[];
}

export interface EducationItem {
  period: string;
  location: string;
  institution: string;
  program: string;
  isCurrent?: boolean;
  isSecondary?: boolean;
}

export interface ExperienceItem {
  id: string;
  categoryLabel: string;
  categories: ExperienceCategory[];
  badgeTone: 'primary' | 'secondary' | 'neutral' | 'primary-fixed';
  dotTone: 'primary' | 'secondary' | 'tertiary' | 'primary-container';
  period: string;
  role: string;
  organization: string;
  description: string;
  tags: string;
}

export interface WorkProject {
  id: string;
  badge: string;
  title: string;
  summary: string;
  fullDescription: string;
  tags: string[];
  meta: string;
  icon: 'movie' | 'article' | 'bolt';
  imageUrl: string;
  imageAlt: string;
  fallbackGradient: string;
  deliverables: string[];
  outcome: string;
}

export interface TechnicalSkill {
  name: string;
  level: number;
}

export interface LeadershipSkill {
  title: string;
  subtitle: string;
}

export interface LanguageItem {
  language: string;
  proficiency: string;
  tone: 'primary' | 'secondary' | 'neutral';
  credential: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  issuer: string;
  year: string;
  category: AchievementCategory;
  dotTone: 'primary' | 'secondary' | 'primary-container' | 'tertiary' | 'outline';
  badgeTone: 'primary' | 'secondary' | 'primary-fixed' | 'neutral';
}

export const HERO_DECK_CARDS: HeroDeckCard[] = [
  {
    id: 'pltg-tello',
    number: '01',
    badge: 'Internship',
    title: '01 · PLTG Tello',
    subtitle: 'PT PLN (Persero) Pembangkitan PLTG Tello',
    period: 'Juli 2026',
    location: 'Makassar, Sulawesi Selatan',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBS6YG-77MwKLYyIle68vi2PGburH_HBUdBNTemPp_mSBkpu0H5ZbojzotdvCSDnWlccsDUcaa_FWbRm2ApcpRsqZNyoX4J3I_kKimER_pewVo-l2VuFnAQNlUjAg609ptH0oiMnZsFxS5ZSxRqR4Wn0mv1-MynOPTA944ZbFAHATarBkYasMMyC_JRy3ewoV5zStLW1tEA2zBXglg-ftO7aS_FoZ_0bx6LEBhZnZo',
    imageAlt:
      'A cinematic coastal power plant turbine facility with soft pastel sunset sky, crisp warm industrial machinery, calm sea harbor waters, coastal energy aesthetic.',
    fallbackGradient: 'from-[#00567c] via-[#2a6f97] to-[#1a1b25]',
    description:
      'Independent field internship at PT PLN (Persero) PLTG Tello focusing on gas turbine generation systems, auxiliary excitation systems, and power distribution safety procedures.',
    highlights: [
      'Observed gas turbine thermodynamic operational cycles and control room telemetry',
      'Reviewed single-line operational switchyard schematics and protective relay coordination',
      'Documented generator excitation auxiliary transformer workflows and K3 safety SOPs',
    ],
  },
  {
    id: 'itpln-informatics',
    number: '02',
    badge: 'Academic',
    title: '02 · ITPLN Informatics',
    subtitle: 'Institut Teknologi PLN — Ikatan Kerja PT PLN',
    period: '2026 – Present',
    location: 'Jakarta Barat',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBE6idbAA1LG16JKUe5xEzPEhC3E4cbasRvJeuwHJ3ESDCaEb5NglvfPMVvC-9Wft7Bv_2Ao50gLSA9UN8PCAN2hUrhO16Ah7PTYbR8luSlc-Sg0CrPcPJSZByqXvzxkZ5FGJXSRgXnH2i4q0ylDUzlBdDgEicNHrGvKKF8N5lIXq0lqhBXUaB3-YvsIuf7jw81AWilj78fuS9hrmRQueJJ7NCriPHfew7J2iXRRlo',
    imageAlt:
      'A modern software engineering terminal interface on a sleek laptop display in a minimalist architectural studio bathed in gentle warm morning light.',
    fallbackGradient: 'from-[#156681] via-[#2a6f97] to-[#2f303a]',
    description:
      'Pursuing S1 Informatics Engineering under the competitive Ikatan Kerja PT PLN track, synthesizing software engineering fundamentals with prior Electrical Engineering grounding from Universitas Hasanuddin.',
    highlights: [
      'Bridging modern software architecture with power grid digitalization and energy data systems',
      'Active member of Society of Renewable Energy (SRE) ITPLN Creative Media division',
      'Foundation in Electrical Engineering from Universitas Hasanuddin (2025 – 2026)',
    ],
  },
  {
    id: 'fls2n-film',
    number: '03',
    badge: 'Direction',
    title: '03 · FLS2N Film',
    subtitle: '1st Place FLS2N Short Film Competition',
    period: '2024',
    location: 'Kab. Pangkep, Sulawesi Selatan',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBFzpS3XOBFfyPd-MoPyJ5gc4CFW1p2lLKe4G6LPGPdfwrQgQZqbioHV3IEp91VppIU28dBZHjK_GgxtDzOnEuwR1pxqMWxnQqiu-axx3s-emuxsaxyXBUxzV4d8lxWiWXScBexZvy58alZhU_hSVnWRc7GGyUePD8Jb_WZB-IImBL2YGe6g9rWHnZp1UZjHq8W43HTjXHFMiUPR_9d0MmxpVTAtSJux_mmquUw4wQ',
    imageAlt:
      'Cinematic production still of a coastal film shoot with an artful seashell on a sandy shore under twilight purple and indigo sky, editorial camera aesthetic.',
    fallbackGradient: 'from-[#2a6f97] via-[#40484e] to-[#1a1b25]',
    description:
      'Directed, edited, and color-graded the 1st-place winning short film at the Pangkep Regency FLS2N Arts Festival, combining coastal visual storytelling with disciplined post-production.',
    highlights: [
      'Led end-to-end storyboarding, shot composition, and on-set creative direction',
      'Executed non-linear editing, sound design balancing, and atmospheric color grading',
      'Awarded Juara 1 FLS2N Bidang Film Pendek Tingkat SMA Se-Kabupaten Pangkep',
    ],
  },
  {
    id: 'op3misi-leader',
    number: '04',
    badge: 'Leadership',
    title: '04 · OP3MISI Leader',
    subtitle: 'Wakil Ketua Organisasi Pelajar (OP3MISI)',
    period: '2023 – 2024',
    location: 'SMA IT Shohwatul Is’ad',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAlFhmO1dFvPkNo1xGonJgZjm_-BQk1g8RbOTF4GkUf9RWOgrUrZAoldbIZDtxnMQeWd4dAsJo4_nj93RYiyKkrrri7O81BMqWosuDjrziv2KBAq0cK-9rorsAmea2TGPF7aeHVmrd6y7m5bzA5vjeEdJIkKre_NerQX5iFpSjOQBdud9Lqiep-np7HDb0qMdpbsLaPm_cDXdVGsmRGkCIg3vBEM4XWvMrDe3ShGQY',
    imageAlt:
      'Inspiring student conference hall with warm ambient stage light, public speech podium, and confident youthful leadership atmosphere in soft warm pastel tones.',
    fallbackGradient: 'from-[#004c6e] via-[#156681] to-[#2f303a]',
    description:
      'Served as Vice Chairperson of OP3MISI, overseeing student governance, cross-department coordination, and daily leadership operations for a campus community of 500+ students.',
    highlights: [
      'Co-directed executive council strategy and multi-division student committees',
      'Supervised campus-wide discipline, academic mentorship, and student welfare programs',
      'Previously served as Wakil Ketua OSIS SMP IT Shohwatul Is’ad (2021 – 2022)',
    ],
  },
  {
    id: 'santri-digitalpreneur',
    number: '05',
    badge: 'Innovation',
    title: '05 · Digitalpreneur',
    subtitle: 'Santri Digitalpreneur Indonesia · Kemenparekraf RI',
    period: 'Juli 2023',
    location: 'Ministry of Tourism & Creative Economy',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCsXUn4AHwK3wS8vpfKFVUCnAc_pXh8RZKcLkbPPEHd2Njg_CRwn6YEPaFtTIHBDJHc4GvQ4ZmhyiXrVUFZ2LNJjsLovv1qPckYlhatWMF_6Cgpcwg2BlfUdK_pdARguY_RKZHCdviIRKvtKAAz2KKGLZ9v93IrhTxEkfQnweXT6ibrHc60j2b38TlRqs8HYFb8X7pNhfvvMbR7U6z4EhiSkMPgo7OyTB5JwZDkaoo',
    imageAlt:
      'A bright creative entrepreneurship workshop with youth designing digital products on tablets with sticky note brainstorming walls in warm neutral lighting.',
    fallbackGradient: 'from-[#1a648c] via-[#53514e] to-[#2f303a]',
    description:
      'Selected participant in the national Santri Digitalpreneur Indonesia program organized by Kemenparekraf RI, sharpening creative media production, digital marketing, and IP commercialization.',
    highlights: [
      'Developed structured digital content strategies and creative campaign concepts',
      'Applied entrepreneurial feasibility planning honed as OSIS Agrobisnis Coordinator',
      'Integrated design tools and visual communication for youth community initiatives',
    ],
  },
  {
    id: 'national-swimmer',
    number: '06',
    badge: 'Athletics',
    title: "06 · Nat'l Swimmer",
    subtitle: 'Competitive Swimming & Best Sport Award',
    period: '2022 – 2026',
    location: 'National & Regional Meets',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB1pE_UBufMDP1E53b_Qvg_GAFXt1CjlIJzybCzJ97-Q7vZHhC9nyaPbfaU2_24L521PBvu0bH5rAqPs10WeZUdfJ8mlM57jAljlzewm-VYXGxph2zQEdTt2IWZrvH6JOj88vD1s3CjTdlKvoz4_AJWNSxKdn5hm0C9gV00CRa5eBser8jlZ_Q_Dpshidp_dJOtRFmgj-RranTZ71UORL1otthVNMbZQnCyS8ZHDIw',
    imageAlt:
      'Crystal clear turquoise competition swimming pool with dynamic water splashes and sun-dappled lanes capturing athletic determination and energy.',
    fallbackGradient: 'from-[#0f637e] via-[#2a6f97] to-[#001e2f]',
    description:
      'Multi-discipline student athlete winning national and regional championships in swimming, badminton, and middle-distance track, culminating in the 2026 Best Sport Award.',
    highlights: [
      '1st Place Swimming — Aqsha Competition National High School Level (2022)',
      '1st Place Breaststroke Swimming — O2SN Kab. Pangkep (2024)',
      'Podium finisher in POSPEDA IX Badminton & 800m Track, plus Best Sport Award (2026)',
    ],
  },
];

export const EDUCATION_TIMELINE: EducationItem[] = [
  {
    period: '2026 – Present',
    location: 'Jakarta Barat',
    institution: 'Institut Teknologi PLN (ITPLN)',
    program: 'S1 Ikatan Kerja — Teknik Informatika',
    isCurrent: true,
  },
  {
    period: '2025 – 2026',
    location: 'Gowa, Sulsel',
    institution: 'Universitas Hasanuddin (UNHAS)',
    program: 'S1 Teknik Elektro',
    isSecondary: true,
  },
  {
    period: '2022 – 2025',
    location: 'Pangkep',
    institution: "SMA IT Shohwatul Is'ad",
    program: 'MIPA • Student Leader & Syahadah 15 Juz',
  },
  {
    period: '2019 – 2022',
    location: 'Pangkep',
    institution: "SMP IT Shohwatul Is'ad",
    program: 'Wakil Ketua OSIS • Tahfidz Program',
  },
  {
    period: '2013 – 2019',
    location: 'Makassar',
    institution: 'SD Negeri Pai',
    program: 'Pondasi Pendidikan Dasar',
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'magang-pltg-tello',
    categoryLabel: 'Energy & Tech',
    categories: ['energy'],
    badgeTone: 'primary',
    dotTone: 'primary',
    period: 'Juli 2026',
    role: 'Peserta Magang Mandiri',
    organization: 'PT PLN (Persero) PLTG Tello',
    description:
      'Conducted on-site operational observations of gas turbine generation units, generator excitation auxiliary circuits, and single-line operational switchyard schematics.',
    tags: 'Generation • Maintenance • Safety SOP',
  },
  {
    id: 'sre-itpln',
    categoryLabel: 'Energy & Creative',
    categories: ['energy', 'creative'],
    badgeTone: 'secondary',
    dotTone: 'secondary',
    period: '2026 – Sekarang',
    role: 'Staff Media Creative',
    organization: 'Society of Renewable Energy (SRE) ITPLN',
    description:
      'Crafting strategic visual narratives, infographic media, and high-impact editorial digital campaigns for renewable energy acceleration and sustainability summits.',
    tags: 'Visual Design • Clean Energy Advocacy',
  },
  {
    id: 'op3misi',
    categoryLabel: 'Leadership',
    categories: ['leadership'],
    badgeTone: 'neutral',
    dotTone: 'tertiary',
    period: '2023 – 2024',
    role: 'Wakil Ketua',
    organization: 'OP3MISI (Organisasi Pelajar)',
    description:
      'Co-led the comprehensive student government council governing 500+ student body members, directing cross-department synergy, daily discipline, and campus governance.',
    tags: 'Council Governance • 500+ Members',
  },
  {
    id: 'osis-sma',
    categoryLabel: 'Leadership',
    categories: ['leadership'],
    badgeTone: 'neutral',
    dotTone: 'tertiary',
    period: '2022 – 2024',
    role: 'Koordinator Kewirausahaan & Agrobisnis',
    organization: "OSIS SMA IT Shohwatul Is'ad",
    description:
      'Pioneered student entrepreneurial initiatives, supervised internal cooperative cash flows, and trained peers in small-scale business feasibility models.',
    tags: 'Business Planning • Financial Ops',
  },
  {
    id: 'osis-smp',
    categoryLabel: 'Leadership',
    categories: ['leadership'],
    badgeTone: 'neutral',
    dotTone: 'tertiary',
    period: '2021 – 2022',
    role: 'Wakil Ketua OSIS',
    organization: "OSIS SMP IT Shohwatul Is'ad",
    description:
      'Coordinated student council operations, organized campus competitions, and spearheaded student engagement initiatives across academic and extra-curricular streams.',
    tags: 'Student Representation • Project Coordination',
  },
  {
    id: 'fisit-bendahara',
    categoryLabel: 'Event & Creative',
    categories: ['creative'],
    badgeTone: 'primary-fixed',
    dotTone: 'primary-container',
    period: 'November 2023',
    role: 'Bendahara Inti',
    organization: "FISIT (Festival Islam Shohwatul Is'ad)",
    description:
      'Audited and disbursed the central operational budget for a major regional festival, drafting RAB forecasts, tracking live vendor balances, and authoring the final financial report.',
    tags: 'Budget Auditing • RAB Forecasts • Procurement',
  },
  {
    id: 'sic-humas',
    categoryLabel: 'Event & Creative',
    categories: ['creative'],
    badgeTone: 'primary-fixed',
    dotTone: 'primary-container',
    period: 'Februari 2024',
    role: 'Staff Humas & Sponsorship',
    organization: "Shohwatul Is'ad Competition Se-Sulsel",
    description:
      'Engineered sponsor proposal decks, pitched local business partners to secure funding packages, and established press channels for regional participants across South Sulawesi.',
    tags: 'Pitch Decks • Sponsor Relations • Outreach',
  },
  {
    id: 'santri-digitalpreneur',
    categoryLabel: 'Creative Acceleration',
    categories: ['creative', 'energy'],
    badgeTone: 'secondary',
    dotTone: 'secondary',
    period: 'Juli 2023',
    role: 'Peserta Pelatihan Digitalpreneur',
    organization: 'Santri Digitalpreneur Indonesia • Kemenparekraf RI',
    description:
      'Selected for intensive creative economy training by the Ministry of Tourism & Creative Economy, focusing on digital media production, IP commercialization, and visual storytelling.',
    tags: 'Kemenparekraf RI • Digital Content Strategy',
  },
];

export const SELECTED_WORKS: WorkProject[] = [
  {
    id: 'short-film',
    badge: 'FLS2N Winner',
    title: 'Short Film Production',
    summary:
      'Awarded 1st Place at FLS2N Kab. Pangkep (2024). Spearheaded storyboarding, principal directing, and color grading for a poignant youth cultural narrative.',
    fullDescription:
      'Served as director, editor, and visual colorist for a regional competition short film examining youth identity and coastal heritage. Coordinated pre-production storyboarding, location scouting, audio-visual synchronization, and final theatrical mastering.',
    tags: ['Video Editing', 'Creative Direction', 'Narrative'],
    meta: 'Kab. Pangkep • 2024',
    icon: 'movie',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA3TxL1fvfAoWtZ5TpXpLPCvAJzs0FTgFL8VVkBCert3rSONIPkvN9Xpm5wP9TRaVGqKBu41a3V0LHbFnSRjZQnahA7S8gyz_vBniOAkB1u0s0B-78RW6I3711fUftMEC4_NVapS0lTJHQix2X3-eDMaIharFGyjbEfx0DykrQGcBbg0iQC5XM5s55W3ca0aEuPiA9lq2fFHSr-WYq9anJCWdKXV6kssAQQ0A0DG7Y',
    imageAlt:
      'Cinematic frame capture from an award-winning short film depicting a thoughtful youth reflecting on a coastal pier during soft golden sunset, dramatic mood and artistic cinematography.',
    fallbackGradient: 'from-[#00567c] via-[#156681] to-[#1a1b25]',
    deliverables: [
      'Script breakdown & visual storyboard',
      'Principal photography & on-set direction',
      'Full timeline editing, foley balance, & color grade',
    ],
    outcome: '1st Place (Juara 1) FLS2N Short Film Category — Kab. Pangkep 2024',
  },
  {
    id: 'scientific-writing',
    badge: 'Best Paper 2026',
    title: 'Scientific Writing (KTI)',
    summary:
      "Recipient of Best Karya Tulis Ilmiah (2026). Executed thorough research methodology, empirical data collection, and formal thesis presentation defending systemic findings.",
    fullDescription:
      'Authored and defended an empirical scientific paper recognized with the Best Karya Tulis Ilmiah (KTI) distinction. Applied structured literature synthesis, quantitative validation in Microsoft Excel, and clear academic communication.',
    tags: ['Research', 'Academic Writing', 'Data Analysis'],
    meta: "Shohwatul Is'ad • 2026",
    icon: 'article',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCRn46QLMr4cxu9NkflN4Uo6SY1ooWbvKY_buUJ2m5qodivukQlptRpAjQmJBWsjnQB_HJ846jpPVtxrear9vz3tBWLflnDdjCicls5b7FVwm_bk3WyTiPZ1gVoZ-hN68Njk4Ivu_Pe3D2ETHxZOamx_dPVwT_dyVtgJw2Q3b68Pxc_Q3iYC_OjHnAWpm9BqxCsT2wik3WLwfkvk_1zNNCKN3QctB9fqL-41E17iGOReelX3EMFVNhY',
    imageAlt:
      'An open academic research report binder alongside technical analytical charts, modern laptop with clean data visualizations and a warm ceramic coffee cup.',
    fallbackGradient: 'from-[#2a6f97] via-[#40484e] to-[#2f303a]',
    deliverables: [
      'Empirical research design & hypothesis framing',
      'Quantitative dataset structuring & visual charting',
      'Formal oral defense & academic manuscript publication',
    ],
    outcome: "Best Karya Tulis Ilmiah (KTI) Award — Shohwatul Is'ad 2026",
  },
  {
    id: 'pltg-synthesis',
    badge: 'PLN Field Study',
    title: 'PLTG Operational Synthesis',
    summary:
      'Technical documentation and operational analysis of thermodynamic Brayton gas cycles, excitation auxiliary transformers, and electrical dispatch safety at PLTG Tello.',
    fullDescription:
      'Compiled a comprehensive field engineering synthesis during independent internship observations at PT PLN (Persero) PLTG Tello. Mapped out turbine startup sequencing, auxiliary excitation circuits, and high-voltage switchyard safety protocols.',
    tags: ['PLTG Monitoring', 'Power Engineering', 'Field Analysis'],
    meta: 'PT PLN (Persero) • 2026',
    icon: 'bolt',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD-DhqGzLzd6y6iLVjzPoBh0KC5xg1uRK8rLay2PvRyBLyRF4P4C8QqZY9JvOefF_Np4HtpKFb7fmm7GqCGYWBi4yX_oJWqr1CgqEiT6RPRekn1uyzzJml_b0r3_nuuLfya5teZKAIzlQE2R8G4-e_WOGGDqtO8o7qwhnfuKK4Is8wD_h4xBk93fTiZu61eZjGQcX-anZcd19taeLJ52O07jtGyrUGNeeejLNn0QLZ8JjBVbUSJME8n',
    imageAlt:
      'Technical power plant monitoring center displaying SCADA screen diagrams and high-voltage electricity transmission grids under bright, organized engineering lights.',
    fallbackGradient: 'from-[#004c6e] via-[#00567c] to-[#1a1b25]',
    deliverables: [
      'Brayton gas turbine operational flow documentation',
      'Excitation & auxiliary transformer inspection notes',
      'Single-line switchyard diagram & K3 compliance review',
    ],
    outcome: 'Completed Independent Internship Field Report at PT PLN (Persero) PLTG Tello',
  },
];

export const TECHNICAL_SKILLS: TechnicalSkill[] = [
  { name: 'MS Excel (RAB & Financials)', level: 92 },
  { name: 'Video Editing & Film Grading', level: 88 },
  { name: 'Graphic & Editorial Design', level: 85 },
  { name: 'Informatics & Electrical Basics', level: 80 },
];

export const TOOL_TAGS: string[] = ['MS Word', 'PowerPoint', 'Digital Marketing'];

export const LEADERSHIP_COMPETENCIES: LeadershipSkill[] = [
  {
    title: 'Student Governance & Council Lead',
    subtitle: 'Direction of multi-tier student committees',
  },
  {
    title: 'Public Relations & Sponsorship',
    subtitle: 'Commercial pitch development & negotiations',
  },
  {
    title: 'Time & High-Pressure Management',
    subtitle: 'Athletic discipline combined with academic rigor',
  },
  {
    title: 'Emotional Intelligence & Team Synergies',
    subtitle: 'Active listening, mediation, and consensus',
  },
];

export const LANGUAGES: LanguageItem[] = [
  {
    language: 'Bahasa Indonesia',
    proficiency: 'Native',
    tone: 'primary',
    credential: 'Certified UKBI • Badan Bahasa Kemendikdasmen RI (2025)',
  },
  {
    language: 'English',
    proficiency: 'Proficient',
    tone: 'secondary',
    credential: 'Certified TOEFL • UPT Pusat Bahasa Universitas Hasanuddin (2025)',
  },
  {
    language: 'Arabic',
    proficiency: 'Conversational',
    tone: 'neutral',
    credential: "Syahadah 15 Juz Al-Qur'an • Shohwatul Is'ad",
  },
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    id: 'ach-1',
    title: 'Penerima Beasiswa Prestasi Tingkat SLTA',
    issuer: 'YPK PT Indonesia Power',
    year: '2024',
    category: 'academic',
    dotTone: 'primary',
    badgeTone: 'primary',
  },
  {
    id: 'ach-2',
    title: "Lulusan Program Syahadah 15 Juz Al-Qur'an",
    issuer: "Shohwatul Is'ad Tahfidz Honors",
    year: 'Honor',
    category: 'academic',
    dotTone: 'secondary',
    badgeTone: 'secondary',
  },
  {
    id: 'ach-3',
    title: 'Best Karya Tulis Ilmiah (KTI)',
    issuer: "Shohwatul Is'ad Academic Award",
    year: '2026',
    category: 'academic',
    dotTone: 'primary',
    badgeTone: 'primary',
  },
  {
    id: 'ach-4',
    title: 'Best Sport Award',
    issuer: "Shohwatul Is'ad Annual Athletic Honors",
    year: '2026',
    category: 'sports',
    dotTone: 'secondary',
    badgeTone: 'secondary',
  },
  {
    id: 'ach-5',
    title: 'Peserta OSN Bidang Informatika',
    issuer: 'Olimpiade Sains Nasional Tingkat Kabupaten',
    year: '2024',
    category: 'academic',
    dotTone: 'primary',
    badgeTone: 'neutral',
  },
  {
    id: 'ach-6',
    title: 'Juara 1 FLS2N Bidang Film Pendek',
    issuer: 'Tingkat SMA Se-Kabupaten Pangkep',
    year: '2024',
    category: 'arts',
    dotTone: 'primary-container',
    badgeTone: 'primary-fixed',
  },
  {
    id: 'ach-7',
    title: 'Juara 1 Lomba Berenang Aqsha Competition',
    issuer: 'Tingkat SMA Se-Nasional',
    year: '2022',
    category: 'sports',
    dotTone: 'primary',
    badgeTone: 'primary',
  },
  {
    id: 'ach-8',
    title: 'Juara 1 O2SN Cabang Berenang Gaya Dada',
    issuer: 'Tingkat Kabupaten Pangkep',
    year: '2024',
    category: 'sports',
    dotTone: 'primary',
    badgeTone: 'primary',
  },
  {
    id: 'ach-9',
    title: 'Juara 1 POSPEDA IX Bulu Tangkis Ganda Putri',
    issuer: 'Tingkat Kabupaten Pangkep',
    year: '2022',
    category: 'sports',
    dotTone: 'secondary',
    badgeTone: 'secondary',
  },
  {
    id: 'ach-10',
    title: 'Juara 2 POSPEDA IX Lari 800 Meter Putri',
    issuer: 'Tingkat Kabupaten Pangkep',
    year: '2022',
    category: 'sports',
    dotTone: 'secondary',
    badgeTone: 'neutral',
  },
  {
    id: 'ach-11',
    title: 'Juara 3 Bulu Tangkis Ganda Putri SIC',
    issuer: 'Tingkat SMA Se-Sulselbar',
    year: '2024',
    category: 'sports',
    dotTone: 'secondary',
    badgeTone: 'neutral',
  },
  {
    id: 'ach-12',
    title: 'Peserta Tenis Meja Hardiknas Cup',
    issuer: 'Kejuaraan Pelajar Se-Kabupaten Pangkep',
    year: '2023',
    category: 'sports',
    dotTone: 'outline',
    badgeTone: 'neutral',
  },
  {
    id: 'ach-13',
    title: 'Peserta Pekan Kemah Merdeka Lintas Agama',
    issuer: 'Kabupaten Pangkep Youth Interfaith Harmony',
    year: '2023',
    category: 'arts',
    dotTone: 'tertiary',
    badgeTone: 'neutral',
  },
  {
    id: 'ach-14',
    title: 'LKMM-TD Fakultas Teknik',
    issuer: 'Universitas Hasanuddin Student Leadership',
    year: '2026',
    category: 'certs',
    dotTone: 'primary',
    badgeTone: 'primary',
  },
  {
    id: 'ach-15',
    title: 'Sertifikasi UKBI Kemendikdasmen',
    issuer: 'Badan Pengembangan dan Pembinaan Bahasa RI',
    year: '2025',
    category: 'certs',
    dotTone: 'secondary',
    badgeTone: 'secondary',
  },
  {
    id: 'ach-16',
    title: 'Sertifikasi TOEFL UPT Bahasa UNHAS',
    issuer: 'Pusat Bahasa Universitas Hasanuddin',
    year: '2025',
    category: 'certs',
    dotTone: 'secondary',
    badgeTone: 'secondary',
  },
  {
    id: 'ach-17',
    title: 'Program BALANCE Universitas Hasanuddin',
    issuer: 'Basic Learning Skills, Character, and Creativity',
    year: '2025',
    category: 'certs',
    dotTone: 'tertiary',
    badgeTone: 'neutral',
  },
  {
    id: 'ach-18',
    title: 'Participant: Xpertise Talks "Re-Power"',
    issuer: 'Low-Carbon Energy & Climate Solutions • UNHAS',
    year: '2025',
    category: 'certs',
    dotTone: 'primary',
    badgeTone: 'primary',
  },
];
