# Portfolio Rebuild — Setup Guide

## Files to replace in your project

| New file (from this rebuild)                        | Replaces in your project                          |
|-----------------------------------------------------|---------------------------------------------------|
| `src/index.css`                                     | `src/index.css`                                   |
| `tailwind.config.js`                                | `tailwind.config.js`                              |
| `src/App.tsx`                                       | `src/App.tsx`                                     |
| `src/main.tsx`                                      | `src/main.tsx`                                    |
| `src/layout/Layout.tsx`                             | `src/layout/Layout.tsx`                           |
| `src/pages/index.tsx`                               | `src/pages/index.tsx`                             |
| `src/context/TypeWriterContext.tsx`                 | `src/context/TypeWriterContext.tsx`               |
| `src/hooks/useTypeWriter.tsx`                       | `src/hooks/useTypeWriter.tsx`                     |
| `src/components/navigation/navigation.tsx`          | `src/components/navigation/navigation.tsx`        |
| `src/components/loading-screen/LoadingScreen.tsx`   | `src/components/loading-screen/LoadingScreen.tsx` |
| `src/components/hero/Hero.tsx`                      | replaces `src/components/about/about.tsx`         |
| `src/components/skills/Skills.tsx`                  | `src/components/skills/skills.tsx`                |
| `src/components/projects/Projects.tsx`              | `src/components/projects/projects.tsx`            |
| `src/components/contact/Contact.tsx`                | `src/components/contact/contact.tsx`              |

## New section IDs (update scroll targets if needed)

- Hero → `id="hero"` (was `id="about"`)
- Skills → `id="skills"` ✓
- Projects → `id="projects"` ✓
- Contact → `id="contact"` ✓

## Install one new dependency (Google Fonts already loaded via CSS @import)

No new npm packages needed — everything uses your existing stack:
- `react` + `react-dom`
- `framer-motion`
- `tailwindcss`
- `react-router-dom`

## Google Fonts

The CSS imports **DM Sans** and **DM Mono** from Google Fonts. Make sure your app has
internet access during development. For production, you can self-host these fonts by
downloading them from fonts.google.com and placing them in `src/font/`.

## Design system at a glance

### Colors
| Token         | Value               | Usage                         |
|---------------|---------------------|-------------------------------|
| `bg-deep`     | `#04040a`           | Page background               |
| `bg-surface`  | `#0a0a14`           | Card surfaces                 |
| `violet-600`  | `#7c3aed`           | Primary accent (buttons, CTA) |
| `cyan-500`    | `#06b6d4`           | Secondary accent              |
| `amber-500`   | `#f59e0b`           | Tertiary / warning            |

### Typography
| Font       | Use case                      |
|------------|-------------------------------|
| DM Sans    | All body copy, headings       |
| DM Mono    | Labels, code, monospaced text |

### Key CSS classes
| Class              | Purpose                                        |
|--------------------|------------------------------------------------|
| `.glass-card`      | Frosted glass surface (bg + backdrop-blur)     |
| `.grad-text`       | Animated violet→cyan gradient text             |
| `.section-label`   | Small monospace pill labels (e.g. "01 About") |
| `.skill-pill`      | Hover-animated skill badges                    |
| `.tech-tag`        | Monospace tech stack chips on project cards   |
| `.btn-primary`     | Violet gradient CTA button                    |
| `.btn-ghost`       | Subtle outlined button                        |
| `.pulse-dot`       | Animated green availability indicator         |
| `.noise-overlay`   | Subtle film-grain texture (in Layout)         |

## Customization

### Change accent color
In `src/index.css`, update `--accent-1` and replace `#7c3aed` / `rgba(124, 58, 237, ...)` 
with your preferred hue throughout the file.

### Add more projects
Edit `src/data/data.json` — the Projects component reads directly from it.

### Update typewriter words
In `src/context/TypeWriterContext.tsx`, edit the `words` array:
```ts
const words = useMemo(() => ["Experiences.", "Interfaces.", "Products.", "Solutions."], []);
```

### Update stats in Hero
In `src/components/hero/Hero.tsx`, edit the `stats` array:
```ts
const stats = [
  { value: "3+", label: "Years of experience" },
  { value: "15+", label: "Projects shipped" },
  { value: "10+", label: "Technologies" },
];
```