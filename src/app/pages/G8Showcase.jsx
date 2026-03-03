import { useEffect } from "react";
import { Link } from "react-router";
import "../../styles/g8.css";

export default function G8Showcase() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.08 },
    );
    document
      .querySelectorAll(".g8-reveal")
      .forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div className="g8-showcase-body">
        <div className="g8-cursor" id="cursor"></div>
        <div className="g8-cursor-ring" id="cursor-ring"></div>

        {/* ── NAVBAR ── */}
        <nav className="g8-navbar">
          <div className="g8-navbar-left">
            <a href="/projects" className="g8-back-link">
              ← Portfolio
            </a>
            <div className="g8-navbar-divider"></div>
            <span className="g8-navbar-title">G8 / E-Commerce</span>
          </div>
        </nav>

        {/* ── INTRO ── */}
        <section className="g8-intro">
          <div>
            <div className="g8-intro-tag">
              <div className="g8-tag-line"></div>
              <span className="g8-tag-text">Full-Stack · MVC · E-Commerce</span>
            </div>
            <h1 className="g8-intro-title">
              <span>G8</span>
              <span className="sub">E-Commerce Platform</span>
            </h1>
            <p className="g8-intro-desc">
              A full-stack e-commerce application with cart management, secure
              authentication, real-time search, and checkout — built on ASP.NET,
              MSSQL, and Next.js.
            </p>
          </div>
          <div className="g8-intro-specs g8-reveal">
            <div className="g8-spec-table">
              <div className="g8-spec-row">
                <div className="g8-spec-label">Pattern</div>
                <div className="g8-spec-value">
                  <span className="g8-spec-chip red">MVC</span>
                </div>
              </div>
              <div className="g8-spec-row">
                <div className="g8-spec-label">Backend</div>
                <div className="g8-spec-value">
                  <span className="g8-spec-chip">C#</span>
                  <span className="g8-spec-chip">ASP.NET</span>
                  <span className="g8-spec-chip">Dotnet 7</span>
                </div>
              </div>
              <div className="g8-spec-row">
                <div className="g8-spec-label">Database</div>
                <div className="g8-spec-value">
                  <span className="g8-spec-chip">MSSQL</span>
                  <span className="g8-spec-chip">Azure Data Studio</span>
                  <span className="g8-spec-chip">Docker</span>
                </div>
              </div>
              <div className="g8-spec-row">
                <div className="g8-spec-label">Frontend</div>
                <div className="g8-spec-value">
                  <span className="g8-spec-chip">React</span>
                  <span className="g8-spec-chip">Next.js</span>
                </div>
              </div>
              <div className="g8-spec-row">
                <div className="g8-spec-label">Testing</div>
                <div className="g8-spec-value">
                  <span className="g8-spec-chip">Jest</span>
                </div>
              </div>
              <div className="g8-spec-row">
                <div className="g8-spec-label">Security</div>
                <div className="g8-spec-value">
                  <span className="g8-spec-chip red">
                    SQL Injection Prevention
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── NUMBERS BAR ── */}
        <div className="g8-numbers-bar g8-reveal">
          <div className="g8-number-cell">
            <div className="g8-number-value">4</div>
            <div className="g8-number-label">Core Features</div>
          </div>
          <div className="g8-number-cell">
            <div className="g8-number-value">3</div>
            <div className="g8-number-label">MVC Layers</div>
          </div>
          <div className="g8-number-cell">
            <div className="g8-number-value">3</div>
            <div className="g8-number-label">API Controllers</div>
          </div>
          <div className="g8-number-cell">
            <div className="g8-number-value">8+</div>
            <div className="g8-number-label">Components</div>
          </div>
        </div>

        {/* ── FEATURES ── */}
        <div style={{ borderBottom: "1px solid var(--border)" }}>
          <div className="g8-content-block g8-full-width g8-reveal">
            <div className="g8-block-header">
              <span className="g8-block-num">01 —</span>
              <h2 className="g8-block-title">Features</h2>
            </div>
            <div className="g8-features-grid">
              <div className="g8-feature-card">
                <span className="g8-feature-icon">🛒</span>
                <div className="g8-feature-title">Cart Management</div>
                <p className="g8-feature-desc">
                  Per-user cart persistence via database. Real-time quantity
                  updates, item removal, and price calculation sync with backend
                  on every action.
                </p>
              </div>
              <div className="g8-feature-card">
                <span className="g8-feature-icon">🔐</span>
                <div className="g8-feature-title">Auth & Login</div>
                <p className="g8-feature-desc">
                  Email/password auth with SQL injection prevention using string
                  parameterization. Users are scoped to their own cart and
                  session data.
                </p>
              </div>
              <div className="g8-feature-card">
                <span className="g8-feature-icon">💳</span>
                <div className="g8-feature-title">Checkout Flow</div>
                <p className="g8-feature-desc">
                  Card validation via regular expressions. Order summary with
                  tax calculation. Cart controller aggregates items for final
                  pricing.
                </p>
              </div>
              <div className="g8-feature-card">
                <span className="g8-feature-icon">🔍</span>
                <div className="g8-feature-title">Product Search</div>
                <p className="g8-feature-desc">
                  Live search across the product catalog. Product controller
                  returns filtered result sets by SKU, name, and other
                  attributes.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── ARCHITECTURE ── */}
        <div style={{ borderBottom: "1px solid var(--border)" }}>
          <div className="g8-content-block g8-reveal">
            <div className="g8-block-header">
              <span className="g8-block-num">02 —</span>
              <h2 className="g8-block-title">MVC Architecture</h2>
            </div>
            <div className="g8-arch-layout">
              <div className="g8-arch-diagram">
                <div className="g8-arch-layer">
                  <div className="g8-arch-layer-label">View</div>
                  <div className="g8-arch-layer-items">
                    <span className="g8-arch-item highlight">React Pages</span>
                    <span className="g8-arch-item">Login</span>
                    <span className="g8-arch-item">Home</span>
                    <span className="g8-arch-item">Cart</span>
                    <span className="g8-arch-item">Checkout</span>
                  </div>
                </div>
                <div
                  className="g8-arch-connector"
                  style={{ marginLeft: "85px" }}
                ></div>
                <div className="g8-arch-layer">
                  <div className="g8-arch-layer-label">Controller</div>
                  <div className="g8-arch-layer-items">
                    <span className="g8-arch-item highlight">ASP.NET</span>
                    <span className="g8-arch-item">UserController</span>
                    <span className="g8-arch-item">ProductController</span>
                    <span className="g8-arch-item">CartController</span>
                  </div>
                </div>
                <div
                  className="g8-arch-connector"
                  style={{ marginLeft: "85px" }}
                ></div>
                <div className="g8-arch-layer">
                  <div className="g8-arch-layer-label">Model</div>
                  <div className="g8-arch-layer-items">
                    <span className="g8-arch-item highlight">MSSQL</span>
                    <span className="g8-arch-item">Users</span>
                    <span className="g8-arch-item">Products</span>
                    <span className="g8-arch-item">Carts</span>
                    <span className="g8-arch-item">Orders</span>
                  </div>
                </div>
              </div>
              <div className="g8-arch-prose">
                <h3>Clean Separation of Concerns</h3>
                <p>
                  Each layer has a single responsibility. The View never touches
                  the database. Controllers handle business logic and data
                  transformation. Models own persistence.
                </p>
                <ul>
                  <li>
                    React pages consume JSON from API endpoints — no direct DB
                    access ever
                  </li>
                  <li>
                    Controllers convert SQL result sets to JSON, then React
                    converts JSON to JS objects
                  </li>
                  <li>
                    State is managed at the page level — cartItems array
                    persists across component renders
                  </li>
                  <li>
                    MSSQL runs in a Docker container using Microsoft's official
                    linux image, making it environment-agnostic
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* ── TECHNICAL DETAILS ── */}
        <div style={{ borderBottom: "1px solid var(--border)" }}>
          <div className="g8-content-block g8-reveal">
            <div className="g8-block-header">
              <span className="g8-block-num">03 —</span>
              <h2 className="g8-block-title">Technical Details</h2>
            </div>
            <div className="g8-tech-grid">
              <div className="g8-tech-cell">
                <div className="g8-tech-label">Security</div>
                <div className="g8-tech-title">SQL Injection Prevention</div>
                <p className="g8-tech-desc">
                  User inputs are stored as typed string parameters before
                  hitting the SQL layer. Even a malicious payload is treated as
                  a literal string value — not a command.
                </p>
                <div className="g8-code-block">
                  <span className="comment">
                    // Input never interpreted as SQL
                  </span>
                  <br />
                  <span className="kw">var</span> cmd ={" "}
                  <span className="kw">new</span> SqlCommand(
                  <br />
                  &nbsp;&nbsp;
                  <span className="str">
                    "SELECT * FROM Users WHERE email=@e AND pw=@p"
                  </span>
                  <br />
                  );
                  <br />
                  cmd.Parameters.AddWithValue(<span className="str">"@e"</span>,
                  email);
                  <br />
                  cmd.Parameters.AddWithValue(<span className="str">"@p"</span>,
                  password);
                  <br />
                  <span className="comment">
                    // "IgoB00m; DROP TABLE User;" → treated as string
                  </span>
                </div>
              </div>
              <div className="g8-tech-cell">
                <div className="g8-tech-label">Validation</div>
                <div className="g8-tech-title">Card Number Regex</div>
                <p className="g8-tech-desc">
                  Checkout validates card input client-side using regular
                  expressions before any API call is made — providing instant
                  feedback without a server round-trip.
                </p>
                <div className="g8-code-block">
                  <span className="comment">
                    // Visa/MC/Amex pattern matching
                  </span>
                  <br />
                  <span className="kw">const</span> cardRegex ={" "}
                  <span className="red">/^[0-9]&#123;13,19&#125;$/</span>;<br />
                  <span className="kw">const</span> cvvRegex ={" "}
                  <span className="red">/^[0-9]&#123;3,4&#125;$/</span>;<br />
                  <span className="kw">const</span> expRegex ={" "}
                  <span className="red">
                    /^(0[1-9]|1[0-2])\/[0-9]&#123;2&#125;$/
                  </span>
                  ;<br />
                  <br />
                  <span className="kw">const</span> isValid =
                  cardRegex.test(cardNum)
                  <br />
                  &nbsp;&nbsp;&amp;&amp; cvvRegex.test(cvv)
                  <br />
                  &nbsp;&nbsp;&amp;&amp; expRegex.test(expiry);
                </div>
              </div>
              <div className="g8-tech-cell">
                <div className="g8-tech-label">Infrastructure</div>
                <div className="g8-tech-title">Docker + MSSQL</div>
                <p className="g8-tech-desc">
                  Microsoft SQL Server isn't native to Linux/macOS. A Docker
                  container running Microsoft's official image simulates the
                  Windows environment MSSQL requires — making the setup fully
                  portable.
                </p>
                <div className="g8-code-block">
                  <span className="comment">
                    # Pull Microsoft's official image
                  </span>
                  <br />
                  docker pull mcr.microsoft.com/mssql/server
                  <br />
                  <br />
                  <span className="comment"># Run with SA password + port</span>
                  <br />
                  docker run -e <span className="str">"ACCEPT_EULA=Y"</span> \
                  <br />
                  &nbsp;&nbsp;-e{" "}
                  <span className="str">"SA_PASSWORD=YourPass"</span> \<br />
                  &nbsp;&nbsp;-p 1433:1433 \<br />
                  &nbsp;&nbsp;mcr.microsoft.com/mssql/server
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── DATA FLOWS ── */}
        <section
          className="g8-flows-section"
          style={{ borderBottom: "1px solid var(--border)" }}
        >
          <div className="g8-content-block g8-reveal">
            <div className="g8-block-header">
              <span className="g8-block-num">04 —</span>
              <h2 className="g8-block-title">Page Data Flows</h2>
            </div>
            <div className="g8-flows-grid">
              <div className="g8-flow-col">
                <div className="g8-flow-col-title">Login</div>
                <div className="g8-flow-step">
                  <span className="g8-flow-step-num">01</span>
                  <span className="g8-flow-step-text">
                    User submits email + password form
                  </span>
                </div>
                <div className="g8-flow-arrow">↓</div>
                <div className="g8-flow-step">
                  <span className="g8-flow-step-num">02</span>
                  <span className="g8-flow-step-text">
                    JS converts to JSON object with typed string fields
                  </span>
                </div>
                <div className="g8-flow-arrow">↓</div>
                <div className="g8-flow-step">
                  <span className="g8-flow-step-num">03</span>
                  <span className="g8-flow-step-text">
                    UserController queries DB with parameterized SQL
                  </span>
                </div>
                <div className="g8-flow-arrow">↓</div>
                <div className="g8-flow-step">
                  <span className="g8-flow-step-num">04</span>
                  <span className="g8-flow-step-text">
                    Match found → redirect to /home/:userId
                  </span>
                </div>
              </div>
              <div className="g8-flow-col">
                <div className="g8-flow-col-title">Cart</div>
                <div className="g8-flow-step">
                  <span className="g8-flow-step-num">01</span>
                  <span className="g8-flow-step-text">
                    CartController fetches cart for current userId
                  </span>
                </div>
                <div className="g8-flow-arrow">↓</div>
                <div className="g8-flow-step">
                  <span className="g8-flow-step-num">02</span>
                  <span className="g8-flow-step-text">
                    JSON → JS objects stored in cartItems state array
                  </span>
                </div>
                <div className="g8-flow-arrow">↓</div>
                <div className="g8-flow-step">
                  <span className="g8-flow-step-num">03</span>
                  <span className="g8-flow-step-text">
                    Quantity/price changes update DB via second endpoint
                  </span>
                </div>
                <div className="g8-flow-arrow">↓</div>
                <div className="g8-flow-step">
                  <span className="g8-flow-step-num">04</span>
                  <span className="g8-flow-step-text">
                    New result set returned and UI re-renders
                  </span>
                </div>
              </div>
              <div className="g8-flow-col">
                <div className="g8-flow-col-title">Checkout</div>
                <div className="g8-flow-step">
                  <span className="g8-flow-step-num">01</span>
                  <span className="g8-flow-step-text">
                    Order Summary fetches all cart items via CartController
                  </span>
                </div>
                <div className="g8-flow-arrow">↓</div>
                <div className="g8-flow-step">
                  <span className="g8-flow-step-num">02</span>
                  <span className="g8-flow-step-text">
                    Subtotal, tax, and total computed from cartItems array
                  </span>
                </div>
                <div className="g8-flow-arrow">↓</div>
                <div className="g8-flow-step">
                  <span className="g8-flow-step-num">03</span>
                  <span className="g8-flow-step-text">
                    Card details validated client-side via regex
                  </span>
                </div>
                <div className="g8-flow-arrow">↓</div>
                <div className="g8-flow-step">
                  <span className="g8-flow-step-num">04</span>
                  <span className="g8-flow-step-text">
                    Order submitted on valid input only
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── TESTING ── */}
        <div style={{ borderBottom: "1px solid var(--border)" }}>
          <div className="g8-content-block g8-reveal">
            <div className="g8-block-header">
              <span className="g8-block-num">05 —</span>
              <h2 className="g8-block-title">Testing</h2>
            </div>
            <div className="g8-testing-banner">
              <div className="g8-testing-badge">
                Jest
                <span>Test Framework</span>
              </div>
              <div
                style={{
                  width: "1px",
                  height: "80px",
                  background: "var(--border)",
                  flexShrink: 0,
                }}
              ></div>
              <div className="g8-testing-body">
                <div className="g8-testing-title">
                  Frontend Component Testing
                </div>
                <p className="g8-testing-desc">
                  Used Jest to verify that data retrieved from the backend was
                  correctly transformed and passed to React components. Tests
                  confirm that product arrays, cart items, and user state
                  reflect the expected API responses — catching data-mapping
                  bugs before they reach the UI.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── CTA ── */}
        <section className="g8-cta-section g8-reveal">
          <h2 className="g8-cta-title">
            <span className="outline">View</span> the
            <br />
            <em>Source</em>
          </h2>
          <p className="g8-cta-desc">
            Full codebase on GitHub. Happy to walk through the architecture or
            any implementation detail.
          </p>
          <div className="g8-cta-buttons">
            <a
              href="https://github.com/Lucy-Bernard/G8"
              target="_blank"
              rel="noopener noreferrer"
              className="g8-btn g8-btn-primary"
            >
              GitHub ↗
            </a>
            <Link to="/contact" className="g8-btn g8-btn-ghost">
              Contact
            </Link>
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer className="g8-footer">
          <div className="g8-footer-name">Lucy Bernard</div>
          <div className="g8-footer-meta">
            G8 · E-Commerce · MVC · Full-Stack
          </div>
        </footer>
      </div>
    </>
  );
}
