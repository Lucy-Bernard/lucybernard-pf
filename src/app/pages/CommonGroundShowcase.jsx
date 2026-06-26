import { Link } from "react-router";
import { useEffect } from "react";
import "../../styles/commonground.css";

export default function CommonGroundShowcase() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("cg-visible");
        });
      },
      { threshold: 0.08 },
    );
    document.querySelectorAll(".cg-reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="cg-showcase">
      {/* Topbar */}
      <nav className="cg-topbar">
        <Link to="/projects" className="cg-back-link">
          ← Portfolio
        </Link>
        <span className="cg-topbar-tag">Common Ground · Chicago Dance</span>
      </nav>

      {/* Hero */}
      <section className="cg-hero">
        <div className="cg-hero-left">
          <div className="cg-wip-badge">⚡ Work in Progress</div>
          <div className="cg-hero-eyebrow">Full-Stack · Web App · April 2026 – Present</div>
          <h1 className="cg-hero-title">
            Common<br />
            <em>Ground</em>
          </h1>
          <p className="cg-hero-subtitle">
            A curated directory of adult dance studios in Chicago with real
            class schedules, honest reviews, and filters that actually help
            you find a class.
          </p>
          <div className="cg-hero-links">
            <a
              href="https://github.com/Common-Ground-Co/common-ground"
              target="_blank"
              rel="noopener noreferrer"
              className="cg-btn cg-btn-primary"
            >
              View on GitHub ↗
            </a>
            <a
              href="https://common-ground-1-0gsv.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="cg-btn cg-btn-outline"
            >
              Live App ↗
            </a>
          </div>
        </div>

        <div className="cg-hero-right">
          {/* Polaroid tilted at 7 degrees — placeholder for a real app screenshot */}
          <div className="cg-polaroid">
            <div className="cg-polaroid-img">
              <span className="cg-polaroid-placeholder-label">App Screenshot</span>
              <span className="cg-polaroid-placeholder-note">[placeholder]</span>
            </div>
            <div className="cg-polaroid-caption">Chicago, 2026</div>
          </div>
        </div>
      </section>

      {/* WIP Status Strip */}
      <div className="cg-status-strip">
        <div className="cg-status-icon">⚠</div>
        <div className="cg-status-text">
          <div className="cg-status-title">Actively in Development</div>
          <p className="cg-status-desc">
            Common Ground is being built and privately tested with 4 friends from my Chicago dance
            community. I'm currently refactoring the codebase, adding features, and iterating on
            the experience before opening it to the broader dance community in the city.
          </p>
        </div>
        <div className="cg-status-pills">
          <span className="cg-status-pill">4 beta testers</span>
          <span className="cg-status-pill">Refactoring</span>
          <span className="cg-status-pill">Adding Features</span>
        </div>
      </div>

      <div className="cg-divider" />

      {/* Origin */}
      <section className="cg-section cg-origin-section cg-reveal">
        <div className="cg-section-inner">
          <div className="cg-section-eyebrow">The Origin</div>
          <h2 className="cg-section-title">
            Why I built <em>this</em>
          </h2>
          <p className="cg-origin-body">
            It took me a year of dance fitness classes and overpriced studios before I discovered
            that affordable, choreography-focused spaces for adults actually exist in Chicago. They're
            just not the ones that show up when you search. Common Ground is the resource I wish I had
            when I was looking.
          </p>
          <p className="cg-origin-body">
            The goal isn't just a list of studios. It's a curated directory with real class schedules,
            honest reviews, and filters that actually help you find a class that fits your schedule,
            budget, and style, without spending a year figuring it out the hard way. Eventually, I
            want it to be the go-to resource for the Chicago adult dance community.
          </p>
        </div>
      </section>

      <div className="cg-divider" />

      {/* Features */}
      <section className="cg-section cg-reveal">
        <div className="cg-section-inner">
          <div className="cg-section-eyebrow">What it does</div>
          <h2 className="cg-section-title">
            Built around <em>real needs</em>
          </h2>
          <div className="cg-features-grid">
            <div className="cg-feature-card">
              <div className="cg-feature-num">01</div>
              <div className="cg-feature-title">Curated Directory</div>
              <p className="cg-feature-desc">
                Not just a Google Maps dump. A hand-curated list of Chicago adult dance studios
                focused on choreography, with context that actually matters to dancers.
              </p>
            </div>
            <div className="cg-feature-card">
              <div className="cg-feature-num">02</div>
              <div className="cg-feature-title">Live Class Schedules</div>
              <p className="cg-feature-desc">
                Schedules are scraped live from studio websites using Puppeteer, including sites
                built on Wix, Squarespace, and custom Ribbon booking widgets.
              </p>
            </div>
            <div className="cg-feature-card">
              <div className="cg-feature-num">03</div>
              <div className="cg-feature-title">Honest Reviews</div>
              <p className="cg-feature-desc">
                Real feedback from real dancers, not SEO-optimized marketing copy.
                [Review system in active development, placeholder]
              </p>
            </div>
            <div className="cg-feature-card">
              <div className="cg-feature-num">04</div>
              <div className="cg-feature-title">Filters That Work</div>
              <p className="cg-feature-desc">
                Filter by neighborhood, price, style, and schedule so you can actually find
                something that fits your life. [Filter refinements in progress, placeholder]
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="cg-divider" />

      {/* Tech Stack */}
      <section className="cg-section cg-tech-section cg-reveal">
        <div className="cg-section-inner">
          <div className="cg-section-eyebrow">Engineering</div>
          <h2 className="cg-section-title">
            The <em>Stack</em>
          </h2>
          <div className="cg-tech-grid">
            <div className="cg-tech-group">
              <div className="cg-tech-group-label">Frontend</div>
              <div className="cg-tech-pills">
                <span className="cg-tech-pill cg-pill-fe">React 19</span>
                <span className="cg-tech-pill cg-pill-fe">React Router 7</span>
                <span className="cg-tech-pill cg-pill-fe">Vite</span>
              </div>
            </div>
            <div className="cg-tech-group">
              <div className="cg-tech-group-label">Backend</div>
              <div className="cg-tech-pills">
                <span className="cg-tech-pill cg-pill-be">Node.js</span>
                <span className="cg-tech-pill cg-pill-be">Express 5</span>
                <span className="cg-tech-pill cg-pill-be">PostgreSQL</span>
              </div>
            </div>
            <div className="cg-tech-group">
              <div className="cg-tech-group-label">Scraping</div>
              <div className="cg-tech-pills">
                <span className="cg-tech-pill cg-pill-scrape">Puppeteer</span>
                <span className="cg-tech-pill cg-pill-scrape">Headless Chrome</span>
              </div>
            </div>
            <div className="cg-tech-group">
              <div className="cg-tech-group-label">Data</div>
              <div className="cg-tech-pills">
                <span className="cg-tech-pill cg-pill-data">PostgreSQL via pg</span>
                <span className="cg-tech-pill cg-pill-data">studios.json snapshot</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scraper Deep Dive */}
      <section className="cg-section cg-scraper-section cg-reveal">
        <div className="cg-section-inner cg-scraper-inner">
          <div>
            <div className="cg-section-eyebrow">Technical Detail</div>
            <h2 className="cg-section-title">
              The <em>Scraper</em>
            </h2>
            <p className="cg-scraper-body">
              Chicago dance studios don't publish their schedules in a consistent format. Some use
              Wix, some Squarespace, some custom Ribbon booking widgets. Puppeteer runs a headless
              Chrome browser to handle dynamic content, JavaScript-rendered pages, and embedded
              third-party widgets, pulling live schedule data that a standard HTTP fetch would miss
              entirely.
            </p>
            <p className="cg-scraper-body">
              A{" "}
              <code className="cg-code">studios.json</code>{" "}
              snapshot is kept in sync with the PostgreSQL database as a backup and portability
              tool. If the database gets wiped or needs to be migrated, the JSON file holds the
              data outside the database so it can be reloaded. It lives in the repo as a safety
              net, not a performance optimization.
            </p>
          </div>
          <div className="cg-scraper-flow">
            <div className="cg-flow-label">Scrape Flow</div>
            <div className="cg-flow-step cg-flow-step--red">Studio Website</div>
            <span className="cg-flow-arrow">↓</span>
            <div className="cg-flow-step">Puppeteer (Headless Chrome)</div>
            <span className="cg-flow-arrow">↓</span>
            <div className="cg-flow-step">Parse DOM / Widget</div>
            <span className="cg-flow-arrow">↓</span>
            <div className="cg-flow-step">PostgreSQL + JSON Snapshot</div>
            <span className="cg-flow-arrow">↓</span>
            <div className="cg-flow-step cg-flow-step--red">Express API → React</div>
          </div>
        </div>
      </section>

      <div className="cg-divider" />

      {/* Roadmap */}
      <section className="cg-section cg-reveal">
        <div className="cg-section-inner">
          <div className="cg-section-eyebrow">What's Next</div>
          <h2 className="cg-section-title">
            Still <em>Building</em>
          </h2>

          <div className="cg-roadmap-subtitle">Currently Working On</div>
          <div className="cg-roadmap-grid">
            <div className="cg-roadmap-item cg-roadmap-item--wip">
              <span className="cg-roadmap-status">In Progress</span>
              <div className="cg-roadmap-title">Refactor data seeding to use JSON objects instead of JS objects</div>
            </div>
            <div className="cg-roadmap-item cg-roadmap-item--wip">
              <span className="cg-roadmap-status">In Progress</span>
              <div className="cg-roadmap-title">Add authentication for the admin panel CMS</div>
            </div>
            <div className="cg-roadmap-item cg-roadmap-item--wip">
              <span className="cg-roadmap-status">In Progress</span>
              <div className="cg-roadmap-title">Integrate Ollama for AI-assisted scraping</div>
            </div>
            <div className="cg-roadmap-item cg-roadmap-item--wip">
              <span className="cg-roadmap-status">In Progress</span>
              <div className="cg-roadmap-title">Add more dance studios</div>
            </div>
            <div className="cg-roadmap-item cg-roadmap-item--wip">
              <span className="cg-roadmap-status">In Progress</span>
              <div className="cg-roadmap-title">Refactor backend to separate responsibilities across layers</div>
            </div>
            <div className="cg-roadmap-item cg-roadmap-item--wip">
              <span className="cg-roadmap-status">In Progress</span>
              <div className="cg-roadmap-title">Studio details page with payment method pop-up</div>
            </div>
            <div className="cg-roadmap-item cg-roadmap-item--wip">
              <span className="cg-roadmap-status">In Progress</span>
              <div className="cg-roadmap-title">Cron job service for scheduled scraping</div>
            </div>
            <div className="cg-roadmap-item cg-roadmap-item--wip">
              <span className="cg-roadmap-status">In Progress</span>
              <div className="cg-roadmap-title">Decide on final app name placement</div>
            </div>
          </div>

          <div className="cg-roadmap-subtitle cg-roadmap-subtitle--future">Future Improvements</div>
          <div className="cg-roadmap-grid">
            <div className="cg-roadmap-item cg-roadmap-item--planned">
              <span className="cg-roadmap-status">Future</span>
              <div className="cg-roadmap-title">Full CMS for the entire application</div>
            </div>
            <div className="cg-roadmap-item cg-roadmap-item--planned">
              <span className="cg-roadmap-status">Future</span>
              <div className="cg-roadmap-title">IG page re-envisioned</div>
            </div>
            <div className="cg-roadmap-item cg-roadmap-item--planned">
              <span className="cg-roadmap-status">Future</span>
              <div className="cg-roadmap-title">Better display for dance studio payment alternatives</div>
            </div>
            <div className="cg-roadmap-item cg-roadmap-item--planned">
              <span className="cg-roadmap-status">Future</span>
              <div className="cg-roadmap-title">Logging service</div>
            </div>
            <div className="cg-roadmap-item cg-roadmap-item--planned">
              <span className="cg-roadmap-status">Future</span>
              <div className="cg-roadmap-title">Error handling layer</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cg-cta-section cg-reveal">
        <h2 className="cg-cta-title">
          Follow the<br />
          <em>build</em>
        </h2>
        <p className="cg-cta-desc">
          The repo is public. The app is live but still private for now. Come see what's being
          built for the Chicago dance community.
        </p>
        <div className="cg-cta-buttons">
          <a
            href="https://github.com/Common-Ground-Co/common-ground"
            target="_blank"
            rel="noopener noreferrer"
            className="cg-btn cg-btn-primary"
          >
            View on GitHub ↗
          </a>
          <a
            href="https://common-ground-1-0gsv.onrender.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="cg-btn cg-btn-outline"
          >
            Live App ↗
          </a>
          <Link to="/contact" className="cg-btn cg-btn-ghost">
            Get in Touch
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="cg-footer">
        <div className="cg-footer-name">Lucy Bernard</div>
        <div className="cg-footer-meta">Common Ground · Chicago · 2026</div>
      </footer>
    </div>
  );
}
