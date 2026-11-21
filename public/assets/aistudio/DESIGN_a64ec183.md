---
name: Coastal Editorial Portfolio
colors:
  surface: '#fbf8ff'
  surface-dim: '#dad9e6'
  surface-bright: '#fbf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f2ff'
  surface-container: '#eeecfb'
  surface-container-high: '#e8e7f5'
  surface-container-highest: '#e2e1ef'
  on-surface: '#1a1b25'
  on-surface-variant: '#40484e'
  inverse-surface: '#2f303a'
  inverse-on-surface: '#f1effd'
  outline: '#71787f'
  outline-variant: '#c0c7cf'
  surface-tint: '#1a648c'
  primary: '#00567c'
  on-primary: '#ffffff'
  primary-container: '#2a6f97'
  on-primary-container: '#d7ecff'
  inverse-primary: '#8fcefa'
  secondary: '#156681'
  on-secondary: '#ffffff'
  secondary-container: '#9adefc'
  on-secondary-container: '#0f637e'
  tertiary: '#53514e'
  on-tertiary: '#ffffff'
  tertiary-container: '#6c6966'
  on-tertiary-container: '#eee9e5'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#c8e6ff'
  primary-fixed-dim: '#8fcefa'
  on-primary-fixed: '#001e2f'
  on-primary-fixed-variant: '#004c6e'
  secondary-fixed: '#bde9ff'
  secondary-fixed-dim: '#8cd0ee'
  on-secondary-fixed: '#001f2a'
  on-secondary-fixed-variant: '#004d64'
  tertiary-fixed: '#e6e2de'
  tertiary-fixed-dim: '#cac6c2'
  on-tertiary-fixed: '#1d1b19'
  on-tertiary-fixed-variant: '#484644'
  background: '#fbf8ff'
  on-background: '#1a1b25'
  surface-variant: '#e2e1ef'
typography:
  display-hero:
    fontFamily: Plus Jakarta Sans
    fontSize: 56px
    fontWeight: '800'
    lineHeight: 64px
    letterSpacing: -0.03em
  display-hero-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 38px
    fontWeight: '800'
    lineHeight: 44px
    letterSpacing: -0.025em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.015em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.015em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-code:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
    letterSpacing: 0.02em
  label-badge:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 3rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system expresses a serene, tactile, and coastal editorial aesthetic curated for the personal portfolio of Syaikah Azzura Zahra Mustafa. 

Drawing from modern warm-minimalism and elevated editorial design, the interface balances natural sand tones, crisp maritime indigos, and architectural slate typography. It avoids harsh digital starkness in favor of sunlit organic warmth, physical tactile depth, and refined portfolio curation.

The visual language communicates composure, intellectual curiosity, and rigorous craft. Key spatial motifs include fanned-deck card compositions, breathable alabaster white space, and sharp monospaced metatags paired against fluid, humanist display typography.

## Colors

The palette draws inspiration from coastal geology and clean architectural paper stocks:

- **Canvas & Containers**:
  - Base canvas: `#F9F5F2` (Warm alabaster soft cream), offering a soothing, non-fatiguing backdrop.
  - Card & sheet surfaces: `#FFFFFF` (Pure white), floating effortlessly over the base ground.
  - Neutral tint / hover background: `#F1ECE8` (Warm sand tint) for recessed trays, subtle structural segment controls, and inactive hover states.

- **Typography & Structure**:
  - Ink primary: `#21222C` (Deep slate charcoal) delivers high-contrast legibility without the deadening severity of pure `#000000`.
  - Ink secondary: `#686A78` (Muted slate gray) for supporting editorial text, subheadings, and field labels.
  - Architectural borders: `rgba(33, 34, 44, 0.08)` hairline dividers providing structure without visual clutter.

- **Accents & Highlights**:
  - Coastal PLN Blue: `#2A6F97` anchor primary accent for primary CTAs, active indicators, and prominent links.
  - Soft Sky Blue: `#61A5C2` secondary accent for contextual tag highlights, glow accents, and subtle status metrics.

## Typography

The typographical treatment uses a dual-engine scheme:
1. **Plus Jakarta Sans** acts as the primary voice across editorial headings and standard body prose, imparting an open, optimistic, yet authoritative rhythm with tight display kerning (`-0.02em` to `-0.03em`).
2. **JetBrains Mono** introduces a precise, archival counterweight strictly reserved for metadata, date ranges, project numbers, tag labels, and status badges.

All body copy defaults to optical line heights (1.5x) to maintain effortless readability over alabaster backgrounds.

## Layout & Spacing

The layout is structured around an adaptive 12-column fluid grid system bounded by a maximum width of `1280px` for optimal reading comfort.

- **Desktop (>= 1024px)**: 12-column layout with `1.5rem` (`24px`) gutters and generous `3rem` (`48px`) canvas margins. Fanned cards display as overlapping multi-axis arc clusters.
- **Tablet (768px - 1023px)**: 8-column layout with `1.25rem` (`20px`) gutters and `2rem` (`32px`) margins. Fanned structures gently compress into staggered 2-column cascades.
- **Mobile (< 768px)**: 4-column layout with `1rem` (`16px`) gutters and `1.25rem` (`20px`) outer edge padding. Overlapping deck cards transition to a smooth horizontal swipe track or sequential vertical stacked cards.

## Elevation & Depth

Visual hierarchy uses tactile card elevations, translucent border containment, and soft ambient shadow drops rather than harsh boundaries.

- **Resting Layer (Level 0)**: Warm alabaster ground (`#F9F5F2`) without elevation.
- **Base Cards (Level 1)**: Pure white (`#FFFFFF`) with a hairline outline `1px solid rgba(33, 34, 44, 0.08)` and subtle dual shadow:
  - `0 1px 2px rgba(33, 34, 44, 0.04), 0 8px 24px -4px rgba(33, 34, 44, 0.06)`
- **Hover & Focused Cards (Level 2)**: Slightly lifted via a smooth 250ms spring transition (`transform: translateY(-4px)`):
  - `0 2px 4px rgba(33, 34, 44, 0.04), 0 16px 36px -6px rgba(42, 111, 151, 0.12)`
- **Fanned Arc Overlays (Level 3)**: Overlapping portfolio deck items feature directional casting:
  - `-6px 12px 28px -2px rgba(33, 34, 44, 0.08)`

## Shapes

The shape system utilizes a dual-tier geometry:
- **Card and Modal Curvature**: Calibrated to an editorial `18px` (`1.125rem`) radius, balancing crisp structure with soft, organic touch points.
- **Capsule & Pill Elements**: Fixed at `9999px` (`pill-shaped`) for interactive pill tags, button containers, filter chips, and floating navigation pills.

## Components

### Buttons
- **Primary**: Solid Coastal PLN Blue (`#2A6F97`), text in `#FFFFFF`, `9999px` pill radius, padding `0.75rem 1.5rem`. On hover: background shifts to `#215877` with an ambient glow (`box-shadow: 0 4px 14px rgba(42, 111, 151, 0.28)`).
- **Secondary / Ghost**: Pure white background (`#FFFFFF`), `1px solid rgba(33, 34, 44, 0.12)`, text `#21222C`. On hover: warm sand background (`#F1ECE8`).

### Editorial Cards & Arc Deck
- **Card Frame**: `#FFFFFF` background, `18px` rounded corners, `1px solid rgba(33, 34, 44, 0.08)`, internal padding `1.75rem`.
- **Fanned Arc Card Deck**: Interactive showcase component where portfolio items rotate slightly (`rotate(-3deg)`, `rotate(0deg)`, `rotate(4deg)`) and overlap horizontally. On hover of an individual card, it straightens (`rotate(0deg)`), elevates to Level 3, and spreads siblings laterally.

### Chips & Badges
- **Pill Tags**: Built using `label-badge` font (`JetBrains Mono`). Height `28px`, padding `0 12px`, radius `9999px`.
- **Category Badge**: Warm sand tint background (`#F1ECE8`), slate charcoal text (`#21222C`), subtle border `1px solid rgba(33, 34, 44, 0.06)`.
- **Active / Accent Badge**: Soft sky blue tint (`rgba(97, 165, 194, 0.15)`), text `#2A6F97`.

### Input Fields & Controls
- **Form Fields**: Base surface `#FFFFFF`, border `1px solid rgba(33, 34, 44, 0.12)`, radius `12px`, padding `0.75rem 1rem`. Focus state rings with `2px solid #2A6F97` and an offset of `2px`.
- **Checkboxes & Radios**: Custom circular or soft-square boxes with `#2A6F97` active fills, inset white checkmarks, and `2px` focus rings.

### Lists & Timeline Metas
- Unordered project milestones and education lists feature `JetBrains Mono` date trackers aligned left with a vertical hairline divider in `rgba(33, 34, 44, 0.08)`, anchored by small `6px` solid coastal blue node dots.