# Lucy Bernard's Portfolio

My portfolio website, built with React and styled through multiple design iterations. A place to document and show my projects and development experience.

## 🎨 Design Journey

### Starting in Figma

I designed this entire portfolio in Figma first. I always have some kind of vision when it comes to how I want a UI to look, but I am not experienced enough in CSS to make these looks a reality, so wireframing is usually my first approach, however this time, I decided to try Figma.

### Actually Building It

Once I finished the Figma files:

1. **I used AI to generate the first pass of CSS** — Fed my designs and component specs to an AI, it spit out stylesheets. Some of it I had to manually modify to get spacing and alignment correct.
2. **I manually fixed everything that looked wrong** — Went through every style, corrected inconsistencies, tweaked colors, adjusted spacing
3. **I spent a lot of time on responsive design** — Multiple passes fixing mobile layouts, typography scaling, tiny touch targets. This is where most of the debugging happened.
4. **Refactor (Pending)** — Working on refactoring repeated styles and fixing any overlap.

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

**CSS Variables for Everything** — Colors, typography sizes, spacing—all defined in `theme.css`.

**Portfolio Layout** — Core pages (About, Contact, Projects, Resume) stay consistent so the site but project pages stay consistent to the project aesthetic/vibe.

**Project Pages** — I didn't want to just clone the same template four times. Each project gets a theme that matches its personality.

## 🎯 Responsive Design

Three breakpoints:

- **Desktop**: 1024px+ (full layout)
- **Tablet**: 768–1023px (compressed but readable)
- **Mobile**: Below 768px (single column, fingers first)

### Minor UI Setbacks

| Problem                              | Solution                                                          |
| ------------------------------------ | ----------------------------------------------------------------- |
| Layouts breaking on smaller screens  | Rewrote the grid so columns stack cleanly instead of squishing    |
| Text too small to read on phones     | Font sizes now scale smoothly based on screen size                |
| Buttons too small to tap comfortably | All buttons meet a minimum size so they're easy to press          |
| Navigation bar not staying in place  | Fixed how the bar behaves on mobile so it actually stays put      |
| Buttons not responding to clicks     | Removed decorative layers that were sitting on top of the buttons |

## 🛠️ Tech Stack

- **React 18** — Components and routing
- **React Router** — Client-side navigation
- **Vite** — Fast dev server and builds
- **Vanilla CSS** — No CSS-in-JS or Sass, just organized stylesheets with CSS variables
- **Formspree** — Contact form that actually sends emails (no backend needed)
- **Font Awesome** — Icons

**Deployed on Vercel** — [Live Here](https://lucybernard-pf.vercel.app/)
