# Lucy Bernard's Portfolio — How I Built This

My portfolio website, built with React and styled obsessively through multiple design iterations. It's a place to show off projects I'm proud of, with a different visual theme for each one because I love designing interfaces.

## 🎨 Design Journey

### Starting in Figma

I designed this entire portfolio in Figma first, before writing a single line of code. Sounds tedious, but it actually saved me a ton of headaches later. I could mess with spacing, typography, and breakpoints without worrying about CSS quirks creeping in. And I got to prototype the project showcase pages as interactive demos—way better than trying to figure out layout issues in the browser.

### Actually Building It

Once I was happy with the Figma files, here's what actually happened:

1. **I used AI to generate the first pass of CSS** — Fed my designs and component specs to an AI, it spit out stylesheets. Some of it I had to manually modify to get spacing and alignment correct.
2. **I manually fixed everything that looked wrong** — Went through every style, corrected inconsistencies, tweaked colors, adjusted spacing
3. **I spent way too much time on responsive design** — Multiple passes fixing mobile layouts, typography scaling, tiny touch targets. This is where most of the debugging happened.
4. **I refactored to stay sane** — Extracted repeated styles, organized CSS variables properly, made sure each page's styles didn't overlap

## 🏗️ Architecture & Modularity

### File Structure

```
src/
├── app/
│   ├── components/
│   │   └── DashboardNavbar.jsx    # Reusable navigation component
│   ├── pages/
│   │   ├── About.jsx
│   │   ├── Contact.jsx            # Form submission via Formspree
│   │   ├── Dashboard.jsx
│   │   ├── Projects.jsx
│   │   ├── Resume.jsx
│   │   └── [Project]Showcase.jsx  # Individual project detail pages
│   ├── data/
│   │   └── projects.js            # Centralized project metadata
│   └── routes.js                  # React Router configuration
└── styles/
    ├── index.css                  # Global resets
    ├── theme.css                  # CSS variables & color system
    ├── [page].css                 # Page-specific styles
    └── fonts.css                  # Typography system
```

### Key Decisions I Made

**Centralized Project Data** — All projects live in `projects.js` so I don't have to hardcode titles, links, and descriptions everywhere.

**CSS Variables for Everything** — Colors, typography sizes, spacing—all defined in `theme.css` so I can change the entire vibe without hunting through a bunch of files. Plus it's faster to load. There are still come overlapping css that I have to fix.

**Each Page Has Its Own Style** — Core pages (About, Contact, Projects, Resume) stay consistent so the site doesn't feel chaotic. But the project showcase pages? Each one gets a completely different design.

**The Showcase Pages Are the Fun Part** — I didn't want to just clone the same template four times. Each project gets a theme that matches its personality:

- **FarMart** → Warm, earthy colors (it's an agriculture app)
- **G8** → Bold and energetic
- **PlantID** → Natural, botanical vibes
- **ZenSurf** → Calm ocean blues (mindfulness extension)

It makes finishing a project exciting. I get to design a whole new theme.

## 🎯 Responsive Design

Three breakpoints:

- **Desktop**: 1024px+ (full layout)
- **Tablet**: 768–1023px (compressed but readable)
- **Mobile**: Below 768px (single column, fingers first)

### What Broke and How I Fixed It

| Problem                            | Solution                                                                  |
| ---------------------------------- | ------------------------------------------------------------------------- |
| Grids collapsing weirdly on mobile | `repeat(auto-fit, minmax(...))` or media queries that actually make sense |
| Text unreadable on phones          | `clamp()` for typography that scales fluidly instead of snapping          |
| Buttons too small to tap           | Minimum 44px targets because I'm not trying to frustrate anyone           |
| Sticky stuff not sticky on mobile  | `position: fixed` needs special handling below 768px                      |
| Invisible clickable areas          | Added `pointer-events: none` to decorative overlays so buttons work       |

## 🛠️ Tech Stack

- **React 18** — Components and routing
- **React Router** — Client-side navigation
- **Vite** — Fast dev server and builds
- **Vanilla CSS** — No CSS-in-JS or Sass, just organized stylesheets with CSS variables
- **Formspree** — Contact form that actually sends emails (no backend needed)
- **Font Awesome** — Icons

## 🚀 Running It

### Setup

```bash
npm install
npm run dev
```

Then go to `localhost:5173`.

### Building for Production

```bash
npm run build
```

Spits out the optimized site in `dist/`. I deploy to Vercel.

## 📝 Environment Setup

The contact form needs a Formspree ID. Create `.env.local`:

```env
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
```

On Vercel, just add the same variable in **Settings > Environment Variables**.

## 🔄 How I Actually Work

1. Design it in Figma first
2. Build it, break it, fix it across all screen sizes
3. Make sure it's accessible and doesn't look terrible
4. Deploy and move on to the next project (and next showcase theme)

No overthinking, just iteration.

## 📚 Features To Note

- **Each project showcase is its own design** — Not a template, not clone-paste. Every project gets a theme that matches what it is. This is intentional and honestly the most fun part of maintaining this site.
- **Responsive from the ground up** — Not a mobile afterthought. Mobile-first thinking everywhere.
- **Accessible** — Links open new tabs properly, buttons have proper padding, nothing invisible or weird
- **Real contact form** — Actually sends emails. No bounce-backs, no spam wells
- **No component library bloat** — Just vanilla CSS that's organized well enough that I can find it again in 6 months

---

**Deployed on Vercel** — [Live Here](https://lucybernard-pf.vercel.app/)
