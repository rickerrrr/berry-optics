# Berry Optics Website — Claude/GPT Visual Generation Prompt

> **Document purpose**: This is a comprehensive instruction for Claude/GPT to generate all visual/UI code for the Berry Optics official website. The project scaffolding, configuration, data files, and API routes are already created. Only the visual layer (components, pages, styles, animations, 3D scenes) needs to be generated.

---

## 1. Project Context & Positioning

- **Project root**: `D:\AI_Workspace\Projects\berry-optics\website\`
- **Framework**: Next.js 14 (App Router) + TypeScript + Tailwind CSS
- **3D**: Three.js via @react-three/fiber + @react-three/drei
- **Animation**: Framer Motion + CSS keyframes (already defined in tailwind.config.ts)
- **i18n**: react-i18next (config + locale files already created)
- **Fonts**: Inter (body) + Sora (display) — already configured in layout.tsx

### Core Positioning

> **一家拥有AI视觉体验的高端光学制造企业官网**
> A high-end optical manufacturing enterprise website with AI visual experience.

AI is a **visual enhancement layer**, NOT the main subject. The main subject is **precision optical manufacturing**. AI animations (light scanning, crystal analysis, optical path tracing) enhance the "intelligent manufacturing" feel but must not overshadow the optical manufacturing identity.

### Visual References
- **ZEISS** — Precision, clean layout, optical authority
- **ASML** — High-end semiconductor manufacturing, technical credibility
- **NVIDIA** — Tech visual polish, data visualization
- **Apple** — Interaction experience, whitespace, product showcase

### Homepage Structure (Final)

```
Navbar (导航栏 — 中文/English切换, 产品中心, 解决方案, 技术研发, 关于我们)
    ↓
Hero (光学科技视觉 + AI光学晶体动画)
    ↓
Enterprise Strength (企业实力 — 数据展示)
    ↓
Products (产品中心 — 分类入口)
    ↓
Core Technology (核心技术 — 能力展示)
    ↓
Applications (应用领域 — 解决方案卡片)
    ↓
Smart Manufacturing (智能制造 — 数字孪生概念)
    ↓
Global Partners (全球合作 — 世界地图)
    ↓
AI Assistant (Berry AI Optical Assistant — 光圈呼吸动画)
    ↓
Contact / Footer (联系我们)
```

### Already Created (DO NOT regenerate)

```
website/
├── package.json              ✅ Dependencies defined
├── next.config.ts            ✅ Next.js config
├── tsconfig.json             ✅ TypeScript config
├── tailwind.config.ts        ✅ Tailwind with Berry Optics color tokens
├── postcss.config.js         ✅ PostCSS
├── .gitignore                ✅
├── .env.example              ✅ Environment variables
├── src/
│   ├── app/
│   │   ├── layout.tsx        ✅ Root layout (metadata, fonts, i18n init)
│   │   └── api/ai/route.ts  ✅ AI assistant backend route
│   ├── styles/
│   │   └── globals.css      ✅ CSS variables, Tailwind directives, reset
│   ├── i18n/
│   │   ├── config.ts         ✅ i18next init
│   │   └── locales/
│   │       ├── en.json      ✅ English content
│   │       └── zh.json      ✅ Chinese content
│   ├── data/
│   │   ├── index.ts          ✅ Barrel export
│   │   ├── company.ts        ✅ Company info
│   │   ├── products.ts       ✅ 7 products with specs
│   │   ├── capabilities.ts   ✅ 4 core capabilities
│   │   └── partners.ts      ✅ 8 global partners
│   └── components/           ⬜ TO BE GENERATED
│   └── lib/                  ⬜ TO BE GENERATED (if needed)
└── public/
    ├── images/               ⬜ Add product/lab images later
    └── models/               ⬜ Add 3D model files later
```

### Files to Generate

```
src/
├── app/
│   └── page.tsx              → Homepage (imports all sections)
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx        → Top navigation with i18n toggle
│   │   └── Footer.tsx       → Footer with company info
│   ├── sections/
│   │   ├── Hero.tsx          → Hero with light-scan animation
│   │   ├── Capabilities.tsx  → 4 glassmorphism capability cards
│   │   ├── Products.tsx      → Apple-style product showcase
│   │   ├── Technology.tsx    → Lab/production/equipment showcase
│   │   └── GlobalPartners.tsx → World map with light effects
│   ├── three/
│   │   ├── LensScene.tsx     → 3D lens rotation scene
│   │   ├── LightPath.tsx     → Light path simulation
│   │   └── CrystalStructure.tsx → Crystal interaction
│   ├── widgets/
│   │   └── AIAssistant.tsx   → Floating glassmorphism chat widget
│   └── ui/
│       ├── GlassCard.tsx     → Reusable glassmorphism card
│       ├── SectionTitle.tsx  → Section title + subtitle pattern
│       └── LanguageToggle.tsx → zh/en language switcher
```

---

## 2. Design System

### Color Tokens (already in tailwind.config.ts and globals.css)

| Token | CSS Variable | Tailwind Class | Hex | Usage |
|-------|-------------|----------------|-----|-------|
| Photon Blue | `--color-photon-blue` | `text-brand-photon` / `bg-brand-photon` | `#0066FF` | Primary brand, CTAs, links |
| Crystal Cyan | `--color-crystal-cyan` | `text-brand-crystal` / `bg-brand-crystal` | `#00C6FF` | Accents, optical effects |
| Deep Navy | `--color-deep-navy` | `text-brand-navy` / `bg-brand-navy` | `#0A1628` | Buttons, strong text, footer |
| Pure White | `--color-pure-white` | `bg-surface-white` | `#FFFFFF` | Main background (70%) |
| Optical Gray | `--color-optical-gray` | `bg-surface-optical` | `#F4F7FB` | Section backgrounds |

### Color Distribution Rule

```
70% White / Light backgrounds
20% Blue (Photon Blue + Crystal Cyan)
10% Dark (Deep Navy for strong emphasis only)
```

### Typography

- **Display font**: Sora (var: `--font-display`) — headings, hero text, section titles
- **Body font**: Inter (var: `--font-inter`) — paragraphs, body text, labels
- **Heading scale**: Use Tailwind's `text-4xl` to `text-7xl` for headings
- **Body**: `text-base` to `text-lg` for paragraphs
- **Line height**: Use `leading-relaxed` for body, `leading-tight` for headings

### Glassmorphism Specification

```css
/* Glass Card */
background: rgba(255, 255, 255, 0.7);
backdrop-filter: blur(20px);
-webkit-backdrop-filter: blur(20px);
border: 1px solid rgba(0, 102, 255, 0.12);
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 102, 255, 0.06);
```

### Spacing

- Container max-width: `1920px` (use `max-w-[1920px] mx-auto`)
- Container padding: `clamp(1rem, 4vw, 6rem)` (use `--container-padding`)
- Section vertical spacing: `py-24` to `py-32` (mobile: `py-16`)
- Card padding: `p-8` (mobile: `p-6`)
- Grid gap: `gap-8` (mobile: `gap-4`)

### Responsive Breakpoints

| Breakpoint | Width | Notes |
|-----------|-------|-------|
| `sm` | 640px | Large phones |
| `md` | 768px | Tablets |
| `lg` | 1024px | Small laptops |
| `xl` | 1280px | Desktops |
| `2xl` | 1536px | Large screens |
| `3xl` | 1920px | Ultra-wide (custom) |

---

## 3. Component Specifications

### 3.1 Navbar (`components/layout/Navbar.tsx`)

**Visual**: Fixed top, white background with subtle bottom border (1px solid `rgba(0,102,255,0.08)`). Height: 72px. Z-index: 100.

**Layout**:
```
[Logo: Berry Optics]  [Home] [Products] [Technology] [About] [Contact]  [EN/中 toggle]
```

**Behavior**:
- Transparent on hero (top of page), becomes white with shadow on scroll (use `useScrollPosition` or IntersectionObserver)
- Mobile: hamburger menu, slide-down panel
- Logo: text-based "Berry Optics" in Sora 600, Photon Blue `#0066FF`
- Nav links: Inter 500, Deep Navy `#0A1628`, hover → Photon Blue
- Language toggle: button with "EN"/"中" text, Photon Blue border

**i18n keys**: `nav.home`, `nav.products`, `nav.technology`, `nav.about`, `nav.contact`, `nav.language`

**Data**: Import from `@i18n/config` (use `useTranslation` hook)

### 3.2 Hero Section (`components/sections/Hero.tsx`)

**Positioning**: AI visual enhancement on top of real optical manufacturing identity. NOT an AI company website.

**Visual**: Full viewport height (`h-screen`), white to Optical Silver gradient background.

**Layout**: Split — left text (40%), right 3D animation (60%).

**Left side**:
```
成都贝瑞光电科技股份有限公司                    (Sora 500, text-sm, Optical Silver text)

超精密光学元件                                  (Sora 700, text-6xl to text-7xl, Deep Navy)
与特种光电技术创新者                             (Sora 700, text-6xl to text-7xl, Photon Blue)

─                                                    (Photon Blue underline, 80px, 4px)

成立于2001年，国家高新技术企业，                  (Inter 400, text-lg, gray)
13项专利，服务航空航天、国防军工、
工业、医疗、安全领域。

[了解贝瑞]  [探索产品]                           (Primary: Photon Blue filled, Secondary: outline)
```

**Right side — AI Optical Crystal Animation**:
- A transparent optical lens (biconvex shape) slowly rotating on Y-axis (0.5 rad/s)
- A light beam (Crystal Cyan gradient) sweeps through the lens periodically
- Light refraction effect visible as beam passes through
- Floating parameter labels appear around the lens:
  - `λ 632nm`
  - `Surface RMS 0.5Å`
  - `Precision 0.01μm`
- Subtle floating animation (Y position sin wave, amplitude 0.2)
- Background: transparent, lets the white gradient show through

**Load sequence**:
1. 0ms: White screen
2. 300ms: Light beam sweeps left→right (Crystal Cyan, 2s ease-out)
3. 800ms: Company name fades in
4. 1200ms: Tagline fades up (two lines staggered)
5. 1600ms: Subtitle fades in
6. 2000ms: CTA buttons slide up
7. 2400ms: 3D lens scene appears (opacity 0→1, 1s)

**i18n keys**: `hero.company`, `hero.tagline`, `hero.subtitle`, `hero.cta1`, `hero.cta2`, `hero.scrollHint`

### 3.3 Capabilities Section (`components/sections/Capabilities.tsx`)

**Visual**: Optical Gray `#F4F7FB` background section, `py-32`.

**Layout**: 4 glassmorphism cards in a 2×2 grid (desktop) or 1-column (mobile).

```
                    Core Capabilities                    (Sora 600, text-4xl)
                    Four pillars of precision...         (Inter 400, text-lg, gray)

  ┌──────────────────┐  ┌──────────────────┐
  │  [Icon: Gear]     │  │  [Icon: Lens]     │
  │  Precision        │  │  Optical Design   │
  │  Machining        │  │                   │
  │  Sub-micron...    │  │  Zemax, Code V... │
  │                   │  │                   │
  │  < 0.1μm          │  │  UV-IR            │
  │  Glass, Crystal   │  │  193nm-12μm       │
  └──────────────────┘  └──────────────────┘
  ┌──────────────────┐  ┌──────────────────┐
  │  [Icon: Layers]   │  │  [Icon: Check]    │
  │  Coating          │  │  Quality Control  │
  │  Technology       │  │                   │
  │  IAD, IBS...      │  │  ISO 9001...      │
  │                   │  │                   │
  │  80+ layers       │  │  MIL-PRF-13830B   │
  └──────────────────┘  └──────────────────┘
```

**Card spec**: Glass card (see Section 2 Glassmorphism), `p-8`, hover → border becomes `rgba(0,102,255,0.3)`, slight lift `translateY(-4px)`.

**Icons**: Use inline SVG, Photon Blue `#0066FF` stroke, 48×48px. DO NOT use external icon libraries.

**Data**: Import `capabilities` from `@data/index`. Each card uses `i18nKey` for title/desc and `metrics` array for stats display.

**i18n keys**: `capabilities.title`, `capabilities.subtitle`, `capabilities.items.{machining|design|coating|quality}.{title|desc}`

### 3.4 Products Section (`components/sections/Products.tsx`)

**Visual**: Pure White `#FFFFFF` background, Apple-style product showcase with generous whitespace.

**Layout**:
```
                    Product Center                     (Sora 600, text-4xl)
                    Precision optics catalog           (Inter 400, text-lg, gray)

  [Lenses] [Mirrors] [Prisms] [Windows] [Filters] [Coatings]  ← Tab bar (Crystal Cyan underline)

  ┌──────────────────────────────────────────────────────┐
  │                                                        │
  │   [Product 3D Model / Image]     Product Name         │
  │                                   ────────────        │
  │                                   Description text... │
  │                                                        │
  │                                   Material: N-BK7...   │
  │                                   Diameter: 6-200mm   │
  │                                   Surface: 10-5 S/D   │
  │                                                        │
  │                                   [Download Spec]     │
  │                                   [Request Quote]     │
  │                                                        │
  └──────────────────────────────────────────────────────┘
```

**Behavior**: Tab switching with smooth fade transition. Product display alternates left/right image position.

**Data**: Import `products` from `@data/index`. Filter by `category` on tab click. Display `specs` as key-value pairs.

**i18n keys**: `products.title`, `products.subtitle`, `products.categories.*`, `products.cta`, `products.inquire`

### 3.5 Technology Section (`components/sections/Technology.tsx`)

**Visual**: Optical Gray background, 3-column gallery.

**Layout**:
```
                    Technology Center
                    Manufacturing excellence...

  ┌──────────┐  ┌──────────┐  ┌──────────┐
  │ [Lab img] │  │ [Prod img]│  │ [Equip]   │
  │           │  │           │  │           │
  │ Laboratory│  │ Production│  │ Equipment │
  │ & Testing │  │ Line      │  │ Showcase  │
  └──────────┘  └──────────┘  └──────────┘
```

**Images**: Use placeholder `<div>` with Optical Gray background and icon initially. Real images will be added to `/public/images/` later.

**i18n keys**: `technology.title`, `technology.subtitle`, `technology.sections.*`

### 3.6 Global Partners (`components/sections/GlobalPartners.tsx`)

**Visual**: Deep Navy `#0A1628` background (this is the 10% dark emphasis section). World map with light dots.

**Layout**:
```
  [World Map SVG]                                          (Crystal Cyan dots for each partner)

                    Global Partners                        (Sora 600, text-4xl, white)
                    Trusted by industry leaders...        (Inter 400, text-lg, Crystal Cyan)

  ● Semiconductor    ● Research    ● Medical    ● Industrial   (legend with colored dots)
```

**Map**: Use inline SVG world map. Partner locations as pulsing dots (Crystal Cyan glow, `animate-pulse`).

**Data**: Import `partners` from `@data/index`. Each has `coordinates` (lat/lng) and `category`.

**i18n keys**: `partners.title`, `partners.subtitle`

### 3.7 AI Assistant Widget (`components/widgets/AIAssistant.tsx`)

**Visual**: Fixed bottom-right, glassmorphism floating card. Default: collapsed (just an icon button). Expanded: chat window.

**Collapsed state**:
```
  ┌───┐
  │ 💬 │  (Photon Blue circle, 56×56, white icon, glassmorphism shadow)
  └───┘
```

**Expanded state**:
```
  ┌──────────────────────────────┐
  │ Berry AI Assistant        ✕  │  (header: Photon Blue text, close button)
  ├──────────────────────────────┤
  │                              │
  │  Hello! I'm the Berry AI...   │  (greeting message from i18n)
  │                              │
  │  [User]: What lenses...      │
  │  [AI]: Our precision...      │
  │                              │
  ├──────────────────────────────┤
  │ [How can we help?]    [Send] │  (input + send button)
  └──────────────────────────────┘
```

**Behavior**:
- POST to `/api/ai` with `{ message, lang }`
- Loading state: animated dots in AI message
- Auto-scroll to bottom on new message
- `max-height: 500px`, `width: 380px` (mobile: `width: calc(100vw - 2rem)`)
- Z-index: 90

**i18n keys**: `ai.title`, `ai.placeholder`, `ai.greeting`

### 3.8 Footer (`components/layout/Footer.tsx`)

**Visual**: Deep Navy `#0A1628` background, white text, `py-12`.

**Layout**:
```
  Berry Optics Co., Ltd.          Privacy Policy | Terms of Service | Sitemap
  © 2025 All rights reserved.
```

**Data**: Import `company` from `@data/index` for address and contact info.

**i18n keys**: `footer.rights`, `footer.address`, `footer.links.*`

---

## 4. Three.js 3D Specifications

### 4.1 Lens Scene (`components/three/LensScene.tsx`)

Used in Hero section as background element.

**Geometry**: A biconvex lens shape (two spherical caps joined at equator).

**Material**: `MeshPhysicalMaterial` with:
- `transmission: 0.9` (glass-like transparency)
- `roughness: 0.05`
- `metalness: 0`
- `ior: 1.5` (glass refraction)
- `clearcoat: 1.0`
- `thickness: 0.5`

**Lighting**:
- Ambient light: intensity 0.5
- Directional light: white, position [5, 5, 5], intensity 1
- Point light: Crystal Cyan `#00C6FF`, position [-5, 3, 2], intensity 0.8

**Animation**: Slow Y-axis rotation, 0.5 rad/s. Subtle float (Y position sin wave, amplitude 0.2).

**Performance**: `dpr={[1, 2]}`, `gl={{ antialias: true, alpha: true }}`. Canvas should have `alpha: true` for transparent background.

### 4.2 Light Path Simulation (`components/three/LightPath.tsx`)

Optional: Used in Technology or Hero section.

**Visual**: Parallel light rays passing through a prism, refracting into spectrum colors.

**Implementation**: Use `Line` segments from drei, or custom `BufferGeometry` with vertex colors (red→violet gradient).

### 4.3 Crystal Structure (`components/three/CrystalStructure.tsx`)

Optional: Interactive element.

**Visual**: Octahedral crystal lattice, wireframe + transparent faces. Hover → crystal rotates and glows.

---

## 5. Animation Guidelines

### 5.1 Scroll-triggered Reveal

Use Framer Motion's `whileInView`:
```tsx
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 0.8, ease: "easeOut" }}
>
```

### 5.2 Hover Effects

- Cards: `translateY(-4px)` + border color change
- Buttons: `brightness(1.1)` + slight scale `1.02`
- Links: color transition to Photon Blue

### 5.3 Light Scan (Hero)

CSS keyframe `lightScan` already defined in tailwind.config.ts:
```tsx
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-crystal/30 to-transparent animate-light-scan" />
```

### 5.4 Page Load Sequence

Use `framer-motion` `AnimatePresence` and staggered children:
- 0ms: Light beam sweep
- 500ms: Hero tagline fades up
- 900ms: Hero subtitle fades in
- 1300ms: CTA button slides up
- 1700ms: 3D scene appears (opacity)

---

## 6. Data Interface

All components should import data from `@data/index`:

```tsx
import { products, capabilities, company, partners } from '@data/index';
import { useTranslation } from 'react-i18next';
```

### Product data shape:
```ts
interface Product {
  id: string;
  category: 'lenses' | 'mirrors' | 'prisms' | 'windows' | 'filters' | 'coatings';
  name: { zh: string; en: string };
  description: { zh: string; en: string };
  specs: { label: string; value: string; unit?: string }[];
  applications: string[];
}
```

### i18n usage:
```tsx
const { t, i18n } = useTranslation();
// In component:
<h2>{t('hero.tagline')}</h2>
// Switch language:
i18n.changeLanguage('en');
```

---

## 7. Critical Rules (DO NOT VIOLATE)

1. **Reference real business**: Product categories, application areas, and company info MUST match zzoptic.com.cn. Do NOT invent products, customers, or business areas.
2. **NO dark themes**: Backgrounds must be white or Optical Silver. The only dark section is Footer (Deep Navy background).
3. **NO neon glow**: Colors are crisp and professional, not gaming/cyberpunk aesthetic.
4. **NO ChatGPT-style dark UI**: The AI assistant is "Berry AI Optical Assistant" — a LIGHT glassmorphism card with optical-themed animation (light ring breathing, light point flow), NOT a dark chat box.
5. **NO fabricated data**: Do NOT create fake partner company names, fake news, or fake case studies. Use the real cooperation areas from `@data/index`.
6. **Use inline SVG icons**: Do NOT import icon libraries. All icons should be custom SVG with Photon Blue stroke.
7. **Images**: Use placeholder divs with Optical Silver background initially. Real images will be added later.
8. **Responsive**: Every section must work on mobile (375px) to ultra-wide (1920px+).
9. **Accessibility**: Semantic HTML, alt text, ARIA labels, keyboard navigation for AI widget.
10. **Performance**: Lazy-load Three.js scenes, use `dynamic(() => import(...), { ssr: false })` for 3D components. Images use Next.js `<Image>` component.
11. **AI is enhancement layer**: Optical animations (lens rotation, light path, scanning) enhance the "intelligent manufacturing" feel. The main subject is ALWAYS precision optical manufacturing.

---

## 8. Generation Instruction

When generating the visual code for Berry Optics website, follow these steps:

### Step 1: Generate UI primitives
Create `src/components/ui/GlassCard.tsx`, `SectionTitle.tsx`, `LanguageToggle.tsx`.

### Step 2: Generate layout components
Create `src/components/layout/Navbar.tsx`, `Footer.tsx`.

### Step 3: Generate section components
Create all files in `src/components/sections/` and `src/components/widgets/`.

### Step 4: Generate Three.js components
Create all files in `src/components/three/`. Use `dynamic` import in pages to skip SSR.

### Step 5: Assemble homepage
Create `src/app/page.tsx` that imports and arranges all sections:
```tsx
import Navbar from '@components/layout/Navbar';
import Hero from '@components/sections/Hero';
import Capabilities from '@components/sections/Capabilities';
import Products from '@components/sections/Products';
import Technology from '@components/sections/Technology';
import GlobalPartners from '@components/sections/GlobalPartners';
import AIAssistant from '@components/widgets/AIAssistant';
import Footer from '@components/layout/Footer';
```

### Generation directive:

> 严格参考成都贝瑞光电原官网 zzoptic.com.cn 的真实业务结构。不要创造新业务。产品分类：超光滑元件/红外元件/可见光元件/紫外元件/定制光学组件。应用领域：航空航天/国防军工/工业/医疗/安全。视觉风格：明亮科技风，白色/银灰背景，Photon Blue #0B6CFF + Crystal Cyan #00D9FF。Glassmorphism + 光学折射 + 超精密制造质感。3D：透明光学透镜旋转 + 光束折射 + AI扫描动画。禁止：暗黑赛博朋克、虚构客户、虚构产品。定位：传统光学制造企业升级为现代科技官网，AI作为视觉增强层不改变企业内容。参考：ZEISS + Apple + ASML 工业感。
