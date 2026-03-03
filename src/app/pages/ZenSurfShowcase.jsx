import { useEffect } from "react";
import { Link } from "react-router";
import "../../styles/zensurf.css";
import zensurfLogo from "../../assets/zensurflogo.png";
export default function ZenSurfShowcase() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("zf-visible");
        });
      },
      { threshold: 0.08 },
    );
    document
      .querySelectorAll(".zf-reveal")
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="zf-zensurf-showcase-body">
        {/* Ocean background */}
        <div className="zf-ocean-bg">
          <div className="zf-wave-layer">
            <svg
              viewBox="0 0 1200 180"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0,90 C150,30 350,150 600,90 C850,30 1050,150 1200,90 L1200,180 L0,180 Z"
                fill="#5a9bbf"
              />
            </svg>
          </div>
          <div className="zf-wave-layer">
            <svg
              viewBox="0 0 1200 180"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0,110 C200,50 400,160 600,110 C800,50 1000,160 1200,110 L1200,180 L0,180 Z"
                fill="#2a6090"
              />
            </svg>
          </div>
          <div className="zf-wave-layer">
            <svg
              viewBox="0 0 1200 180"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0,70 C100,20 300,140 600,70 C900,0 1100,130 1200,70 L1200,180 L0,180 Z"
                fill="#1a3a5c"
              />
            </svg>
          </div>
        </div>

        {/* Topbar */}
        <nav className="zf-topbar">
          <Link to="/projects" className="zf-back-link">
            ← Portfolio
          </Link>
          <span className="zf-topbar-right">ZenSurf · Chrome Extension</span>
        </nav>

        {/* Hero */}
        <section className="zf-hero">
          <div className="zf-hero-tag">Chrome Extension · Mindfulness</div>
          <h1 className="zf-hero-title">
            Zen<em>Surf</em>
          </h1>
          <p className="zf-hero-subtitle">Breathe in. Let Go.</p>
          <p className="zf-hero-desc">
            An anxiety-reducing Chrome extension that provides quick access to
            breathing exercises, meditation timers, and ambient sound — without
            ever leaving your current tab.
          </p>
          <div className="zf-hero-pills">
            <span className="zf-pill zf-pill-ocean">Chrome MV3</span>
            <span className="zf-pill zf-pill-ocean">JavaScript</span>
            <span className="zf-pill zf-pill-ocean">HTML / CSS</span>
            <span className="zf-pill zf-pill-sand">UI/UX Focus</span>
            <span className="zf-pill zf-pill-sand">Accessibility</span>
            <span className="zf-pill zf-pill-sand">
              © 2023 The Struggle Bus
            </span>
          </div>
          <img src={zensurfLogo} alt="ZenSurf Logo" className="zf-hero-logo" />
        </section>

        {/* Context band */}
        <div className="zf-context-band">
          <div className="zf-context-inner">
            <div className="zf-context-quote">
              "Listen.
              <br />
              Peace begins
              <br />
              within."
              <span>— Dalai Lama</span>
            </div>
            <p className="zf-context-desc">
              ZenSurf started from a <strong>real observation</strong>: students
              and remote workers deal with <strong>daily stress</strong> from
              deadlines and meetings, but reaching for your phone to open Calm
              or Headspace breaks your focus entirely.
              <br />
              <br />
              We built ZenSurf as a browser-first solution — and then formally
              evaluated it. In a within-subjects user study comparing ZenSurf to
              the Calm App, ZenSurf required 3 fewer clicks to start meditating
              and received 75% positive satisfaction ratings, compared to Calm's
              neutral and negative majority.
            </p>
          </div>
        </div>

        {/* UX/UI Focus section */}
        <section className="zf-uxui-section">
          <div className="zf-section zf-reveal">
            <div className="zf-section-eyebrow">Design Philosophy</div>
            <h2 className="zf-section-title">
              Built around <em>principles</em>
            </h2>
            <div className="zf-uxui-grid">
              <div className="zf-uxui-card zf-reveal zf-reveal-delay-1">
                <span className="zf-uxui-icon">
                  <i className="fa-solid fa-eye"></i>
                </span>
                <div className="zf-uxui-title">Readability First</div>
                <p className="zf-uxui-body">
                  Clear visual hierarchy, generous whitespace, and legible
                  typography ensure users can navigate the extension without
                  cognitive effort — especially important when anxious.
                </p>
              </div>
              <div className="zf-uxui-card zf-reveal zf-reveal-delay-2">
                <span className="zf-uxui-icon">
                  <i className="fa-brands fa-accessible-icon"></i>
                </span>
                <div className="zf-uxui-title">Accessibility</div>
                <p className="zf-uxui-body">
                  As a prototype, accessibility features are planned for future
                  development, including contrast ratios, touch-friendly tap
                  targets, and ARIA labels.
                </p>
              </div>
              <div className="zf-uxui-card zf-reveal zf-reveal-delay-3">
                <span className="zf-uxui-icon">✦</span>
                <div className="zf-uxui-title">Minimal Friction</div>
                <p className="zf-uxui-body">
                  One click opens the popup. Core features are immediately
                  visible. The extension lives in your toolbar — no new tabs, no
                  context switching, no barrier to calm.
                </p>
              </div>
              <div className="zf-uxui-card zf-reveal zf-reveal-delay-1">
                <span className="zf-uxui-icon">
                  <i className="fa-solid fa-palette"></i>
                </span>
                <div className="zf-uxui-title">Visual Consistency</div>
                <p className="zf-uxui-body">
                  Cohesive ocean-blue palette, consistent iconography, and
                  uniform spacing create a calm, predictable interface that
                  never surprises the user in a jarring way.
                </p>
              </div>
              <div className="zf-uxui-card reveal reveal-delay-2">
                <span className="zf-uxui-icon">
                  <i className="fa-solid fa-screwdriver-wrench"></i>
                </span>
                <div className="zf-uxui-title">User Control</div>
                <p className="zf-uxui-body">
                  The drag-and-drop customize page lets users arrange features
                  to match their own workflow — giving a sense of ownership and
                  personalization without overwhelming options.
                </p>
              </div>
              <div className="zf-uxui-card reveal reveal-delay-3">
                <span className="zf-uxui-icon">
                  <i className="fa-solid fa-water"></i>
                </span>
                <div className="zf-uxui-title">Emotional Design</div>
                <p className="zf-uxui-body">
                  Colors, motion, and sound work together intentionally. The
                  hover-activated breathing animation, for instance, is designed
                  to slow you down, not just entertain.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Wave divider */}
        <div className="zf-wave-divider">
          <svg
            viewBox="0 0 1440 60"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              d="M0,30 C360,60 720,0 1080,30 C1260,45 1380,20 1440,30 L1440,60 L0,60 Z"
              fill="#eef7fc"
            />
            <path
              d="M0,60 L1440,60 L1440,30 C1380,20 1260,45 1080,30 C720,0 360,60 0,30 Z"
              fill="#d4ecf7"
            />
          </svg>
        </div>

        {/* Features */}
        <section className="zf-features-band">
          <div className="zf-features-outer zf-reveal">
            <div className="zf-section-eyebrow">Feature Set</div>
            <h2 className="zf-section-title">
              Everything you <em>need, nothing more</em>
            </h2>
            <div className="zf-features-layout">
              <div className="zf-feature-group">
                <div className="zf-feature-group-label">Core · Main Popup</div>
                <div className="zf-feature-item">
                  <span className="zf-feature-emoji">
                    <i class="fa-solid fa-wind"></i>
                  </span>
                  <div>
                    <div className="zf-feature-name">Breathe</div>
                    <div className="zf-feature-desc">
                      Hover-activated breathing guide with visual animation to
                      pace your inhale and exhale rhythm.
                    </div>
                  </div>
                </div>
                <div className="zf-feature-item">
                  <span className="feature-emoji">
                    <i class="fa-solid fa-hands-praying"></i>
                  </span>
                  <div>
                    <div className="zf-feature-name">Meditation Timer</div>
                    <div className="zf-feature-desc">
                      Customizable countdown with audio notification. Adjustable
                      in 15-second increments, up to 2 minutes.
                    </div>
                  </div>
                </div>
                <div className="zf-feature-item">
                  <span className="feature-emoji">
                    <i class="fa-brands fa-deezer"></i>
                  </span>
                  <div>
                    <div className="zf-feature-name">Ambient Sound</div>
                    <div className="zf-feature-desc">
                      Play/pause looping ambient audio for background relaxation
                      and focus without distraction.
                    </div>
                  </div>
                </div>
              </div>
              <div className="zf-feature-group">
                <div className="zf-feature-group-label">
                  Extended · Expand Panel
                </div>
                <div className="zf-feature-item">
                  <span className="zf-feature-emoji">
                    <i class="fa-solid fa-panorama"></i>
                  </span>
                  <div>
                    <div className="zf-feature-name">Visuals</div>
                    <div className="zf-feature-desc">
                      Slideshow of 5 calming images with previous/next
                      navigation.
                    </div>
                  </div>
                </div>
                <div className="zf-feature-item">
                  <span className="feature-emoji">
                    <i class="fa-solid fa-person-running"></i>
                  </span>
                  <div>
                    <div className="zf-feature-name">Movement Exercises</div>
                    <div className="zf-feature-desc">
                      4 guided desk exercises with visual instructions — no gym
                      required.
                    </div>
                  </div>
                </div>
                <div className="zf-feature-item">
                  <span className="feature-emoji">
                    <i class="fa-solid fa-podcast"></i>
                  </span>
                  <div>
                    <div className="zf-feature-name">Podcast Player</div>
                    <div className="zf-feature-desc">
                      Built-in audio player with play/pause for relaxing podcast
                      content.
                    </div>
                  </div>
                </div>
                <div className="zf-feature-item">
                  <span className="feature-emoji">
                    <i class="fa-solid fa-comment"></i>
                  </span>
                  <div>
                    <div className="zf-feature-name">Quotes</div>
                    <div className="zf-feature-desc">
                      Tap for a calming, inspirational quote when you need a
                      moment of perspective.
                    </div>
                  </div>
                </div>
                <div className="zf-feature-item">
                  <span className="zf-feature-emoji">✦</span>
                  <div>
                    <div className="zf-feature-name">Customize Layout</div>
                    <div className="zf-feature-desc">
                      Drag-and-drop interface to choose which features appear in
                      your main popup.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tech strip */}
        <div className="zf-tech-strip zf-reveal">
          <div className="zf-tech-item">
            <span className="zf-tech-value">MV3</span>
            <span className="zf-tech-label">Manifest Version</span>
          </div>
          <div className="zf-tech-sep"></div>
          <div className="zf-tech-item">
            <span className="zf-tech-value">1.0.0</span>
            <span className="zf-tech-label">Version</span>
          </div>
          <div className="zf-tech-sep"></div>
          <div className="zf-tech-item">
            <span className="zf-tech-value">Tabs</span>
            <span className="zf-tech-label">Permission</span>
          </div>
          <div className="zf-tech-sep"></div>
          <div className="zf-tech-item">
            <span className="zf-tech-value">7</span>
            <span className="zf-tech-label">Features</span>
          </div>
          <div className="zf-tech-sep"></div>
          <div className="zf-tech-item">
            <span className="zf-tech-value">0</span>
            <span className="zf-tech-label">Tab Switches Required</span>
          </div>
        </div>

        {/* Install */}
        <section className="zf-install-section">
          <div className="zf-section zf-reveal">
            <div className="zf-section-eyebrow">Installation</div>
            <h2 className="zf-section-title">
              Up and running in <em>60 seconds</em>
            </h2>
            <div className="zf-install-steps">
              <div className="zf-install-step">
                <span className="zf-install-num">1</span>
                <span className="zf-install-text">
                  Clone or download the repository from GitHub
                </span>
              </div>
              <div className="zf-install-step">
                <span className="zf-install-num">2</span>
                <span className="zf-install-text">
                  Open Chrome and navigate to <code>chrome://extensions/</code>
                </span>
              </div>
              <div className="zf-install-step">
                <span className="zf-install-num">3</span>
                <span className="zf-install-text">
                  Enable <strong>Developer mode</strong> in the top right corner
                </span>
              </div>
              <div className="zf-install-step">
                <span className="zf-install-num">4</span>
                <span className="zf-install-text">
                  Click <strong>Load unpacked</strong> and select the ZenSurf
                  folder
                </span>
              </div>
              <div className="zf-install-step">
                <span className="zf-install-num">5</span>
                <span className="zf-install-text">
                  Click the ZenSurf icon in your toolbar — and breathe.
                </span>
              </div>
            </div>
            <p
              style={{
                marginTop: "24px",
                fontSize: "13px",
                color: "var(--text-muted)",
                fontStyle: "italic",
              }}
            >
              Also works with Edge, Brave, and Opera — any Chromium-based
              browser.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="zf-cta-section zf-reveal">
          <h2 className="zf-cta-title">
            Want to see
            <br />
            the <em>code?</em>
          </h2>
          <p className="zf-cta-tagline">Have Questions?</p>
          <div className="zf-cta-buttons">
            <a href="https://github.com" className="zf-btn zf-btn-primary">
              View on GitHub ↗
            </a>
            <Link to="/contact" className="zf-btn zf-btn-outline">
              Get in Touch
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer>
          <div className="zf-footer-name">Lucy Bernard · Joey Ng</div>
          <div className="zf-footer-copy">ZENSURF · 2023</div>
        </footer>
      </div>
    </>
  );
}
