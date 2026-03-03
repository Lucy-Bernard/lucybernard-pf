import { Link } from "react-router";
import { useEffect } from "react";

export default function PlantIDShowcase() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 },
    );

    document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="plantid-showcase">
      {/* Hero Section */}
      <section className="plantid-hero">
        <div className="plantid-hero-left">
          <Link to="/projects" className="plantid-back-link">
            Back to Portfolio
          </Link>
          <div>
            <div className="plantid-hero-tag">
              Case Study · Full-Stack Application
            </div>
            <h1 className="plantid-hero-title">
              Plant<em>ID</em>
            </h1>
            <p className="plantid-hero-subtitle">
              An AI-powered plant diagnostic platform featuring an autonomous
              Diagnostic Kernel — an agent that generates and executes code to
              diagnose plant health.
            </p>
            <div className="plantid-hero-meta">
              <div>
                <span className="plantid-hero-stat-value">2</span>
                <span className="plantid-hero-stat-label">Services</span>
              </div>
              <div>
                <span className="plantid-hero-stat-value">20+</span>
                <span className="plantid-hero-stat-label">Endpoints</span>
              </div>
              <div>
                <span className="plantid-hero-stat-value">Hex</span>
                <span className="plantid-hero-stat-label">Architecture</span>
              </div>
            </div>
          </div>
        </div>

        <div className="plantid-hero-right">
          <div>
            <div className="plantid-stack-group-label">Backend</div>
            <div className="plantid-stack-group">
              <span className="plantid-stack-pill python">
                <span className="plantid-stack-dot"></span>Python 3.13
              </span>
              <span className="plantid-stack-pill python">
                <span className="plantid-stack-dot"></span>FastAPI
              </span>
              <span className="plantid-stack-pill python">
                <span className="plantid-stack-dot"></span>SQLAlchemy
              </span>
              <span className="plantid-stack-pill python">
                <span className="plantid-stack-dot"></span>RestrictedPython
              </span>
            </div>
          </div>

          <div>
            <div className="plantid-stack-group-label">Frontend</div>
            <div className="plantid-stack-group">
              <span className="plantid-stack-pill react">
                <span className="plantid-stack-dot"></span>Next.js
              </span>
              <span className="plantid-stack-pill react">
                <span className="plantid-stack-dot"></span>React 19
              </span>
              <span className="plantid-stack-pill react">
                <span className="plantid-stack-dot"></span>TypeScript
              </span>
              <span className="plantid-stack-pill react">
                <span className="plantid-stack-dot"></span>Zustand
              </span>
            </div>
          </div>

          <div>
            <div className="plantid-stack-group-label">Infrastructure</div>
            <div className="plantid-stack-group">
              <span className="plantid-stack-pill db">
                <span className="plantid-stack-dot"></span>PostgreSQL
              </span>
              <span className="plantid-stack-pill db">
                <span className="plantid-stack-dot"></span>Supabase
              </span>
              <span className="plantid-stack-pill cloud">
                <span className="plantid-stack-dot"></span>Heroku
              </span>
              <span className="plantid-stack-pill cloud">
                <span className="plantid-stack-dot"></span>OpenRouter LLM
              </span>
            </div>
          </div>

          <div>
            <div className="plantid-stack-group-label">
              Validation & Quality
            </div>
            <div className="plantid-stack-group">
              <span className="plantid-stack-pill db">
                <span className="plantid-stack-dot"></span>Zod 4.1
              </span>
              <span className="plantid-stack-pill python">
                <span className="plantid-stack-dot"></span>Ruff
              </span>
              <span className="plantid-stack-pill react">
                <span className="plantid-stack-dot"></span>Radix UI + ShadCN
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Strip */}
      <div className="plantid-impact-strip">
        <div className="plantid-impact-stat">
          <span className="plantid-impact-value">5</span>
          <span className="plantid-impact-label">Architectural Layers</span>
        </div>
        <div className="plantid-impact-stat">
          <span className="plantid-impact-value">20</span>
          <span className="plantid-impact-label">Max Kernel Cycles</span>
        </div>
        <div className="plantid-impact-stat">
          <span className="plantid-impact-value">4</span>
          <span className="plantid-impact-label">Kernel Actions</span>
        </div>
        <div className="plantid-impact-stat">
          <span className="plantid-impact-value">100%</span>
          <span className="plantid-impact-label">Sandboxed Execution</span>
        </div>
      </div>

      <div className="plantid-divider"></div>

      {/* Kernel Section */}
      <section className="plantid-kernel-section">
        <div className="plantid-section">
          <div className="plantid-section-label fade-up">Core Innovation</div>
          <h2 className="plantid-section-title fade-up">
            The <em>Diagnostic</em> Kernel
          </h2>
          <p className="plantid-kernel-intro fade-up">
            Unlike traditional chatbots, the Diagnostic Kernel is an autonomous
            agent. It generates Python code on every cycle to determine its next
            action — fetching data, forming hypotheses, asking questions, or
            concluding a diagnosis.
          </p>

          <div className="plantid-cycle-steps fade-up">
            <div className="plantid-cycle-step">
              <div className="plantid-step-num">01</div>
              <div className="plantid-step-title">Analyze Context</div>
              <div className="plantid-step-desc">
                AI reads full diagnosis context: plant data, conversation
                history, internal state.
              </div>
            </div>
            <div className="plantid-cycle-step">
              <div className="plantid-step-num">02</div>
              <div className="plantid-step-title">Generate Code</div>
              <div className="plantid-step-desc">
                LLM generates executable Python determining the next logical
                action.
              </div>
            </div>
            <div className="plantid-cycle-step">
              <div className="plantid-step-num">03</div>
              <div className="plantid-step-title">Sandbox Execute</div>
              <div className="plantid-step-desc">
                Code runs in RestrictedPython — no file I/O, no network,
                whitelist only.
              </div>
            </div>
            <div className="plantid-cycle-step">
              <div className="plantid-step-num">04</div>
              <div className="plantid-step-title">Dispatch Action</div>
              <div className="plantid-step-desc">
                Result triggers GET_PLANT_VITALS, LOG_STATE, ASK_USER, or
                CONCLUDE.
              </div>
            </div>
            <div className="plantid-cycle-step">
              <div className="plantid-step-num">05</div>
              <div className="plantid-step-title">Loop or Pause</div>
              <div className="plantid-step-desc">
                Continues cycling autonomously, or exits to wait for user input.
              </div>
            </div>
          </div>

          <div className="plantid-code-showcase fade-up">
            <div className="plantid-code-card">
              <div className="plantid-code-card-header">
                <div className="plantid-code-dots">
                  <div className="plantid-code-dot"></div>
                  <div className="plantid-code-dot"></div>
                  <div className="plantid-code-dot"></div>
                </div>
                <span className="plantid-code-card-title">
                  kernel_cycle.py — Hypothesis Formation
                </span>
              </div>
              <div className="plantid-code-body">
                <span className="comment"># AI-generated code — cycle 2</span>
                {"\n"}diagnosis_context = params[
                <span className="str">"diagnosis_context"</span>]{"\n"}
                conversation = diagnosis_context.get(
                {"\n"} <span className="str">"conversation_history"</span>, []
                {"\n"}){"\n\n"}
                <span className="comment">
                  # Evidence: brown spots + direct sun
                </span>
                {"\n"}result = {"{"}
                {"\n"} <span className="str">"action"</span>:{" "}
                <span className="str">"LOG_STATE"</span>,{"\n"}{" "}
                <span className="str">"payload"</span>: {"{"}
                {"\n"} <span className="str">"hypothesis"</span>:{" "}
                <span className="str">"sun_scorch"</span>,{"\n"}{" "}
                <span className="str">"confidence"</span>:{" "}
                <span className="num">0.7</span>,{"\n"}{" "}
                <span className="str">"evidence"</span>: [{"\n"}{" "}
                <span className="str">"brown_spots"</span>,{"\n"}{" "}
                <span className="str">"direct_sun_exposure"</span>
                {"\n"} ]{"\n"} {"}"}
                {"\n"}
                {"}"}
              </div>
            </div>

            <div className="plantid-code-card">
              <div className="plantid-code-card-header">
                <div className="plantid-code-dots">
                  <div className="plantid-code-dot"></div>
                  <div className="plantid-code-dot"></div>
                  <div className="plantid-code-dot"></div>
                </div>
                <span className="plantid-code-card-title">
                  kernel_cycle.py — Final Conclusion
                </span>
              </div>
              <div className="plantid-code-body">
                <span className="comment"># AI-generated code — cycle 5</span>
                {"\n"}diagnosis_context = params[
                <span className="str">"diagnosis_context"</span>]{"\n"}state =
                diagnosis_context.get(<span className="str">"state"</span>,{" "}
                {"{}"}){"\n\n"}
                <span className="kw">if</span> state.get(
                <span className="str">"confidence"</span>,{" "}
                <span className="num">0</span>) &gt;{" "}
                <span className="num">0.8</span>:{"\n"} result = {"{"}
                {"\n"} <span className="str">"action"</span>:{" "}
                <span className="str">"CONCLUDE"</span>,{"\n"}{" "}
                <span className="str">"payload"</span>: {"{"}
                {"\n"} <span className="str">"finding"</span>:{" "}
                <span className="str">"Sun Scorch"</span>,{"\n"}{" "}
                <span className="str">"recommendation"</span>:{"\n"}{" "}
                <span className="str">"Move to bright, indirect light."</span>
                {"\n"} <span className="str">" Water when top 2\" dry."</span>
                {"\n"} {"}"}
                {"\n"} {"}"}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="plantid-divider"></div>

      {/* Architecture Section */}
      <section className="plantid-features-section">
        <div className="plantid-section">
          <div className="plantid-section-label fade-up">Engineering</div>
          <h2 className="plantid-section-title fade-up">
            Built on <em>Hexagonal</em> Architecture
          </h2>
          <div className="plantid-arch-grid">
            <div className="plantid-arch-card fade-up">
              <span className="plantid-arch-icon">⬡</span>
              <div className="plantid-arch-card-title">Domain Core</div>
              <p className="plantid-arch-card-desc">
                Zero knowledge of external technologies. All business logic
                lives in framework-agnostic domain models and service
                implementations.
              </p>
              <div className="plantid-arch-tags">
                <span className="plantid-arch-tag">Pydantic Models</span>
                <span className="plantid-arch-tag">Pure Python</span>
                <span className="plantid-arch-tag">Dependency Inversion</span>
              </div>
            </div>

            <div
              className="plantid-arch-card fade-up"
              style={{ animationDelay: "0.1s" }}
            >
              <span className="plantid-arch-icon">⇄</span>
              <div className="plantid-arch-card-title">Ports & Adapters</div>
              <p className="plantid-arch-card-desc">
                Interfaces define contracts. Implementations are injected via
                constructors. Swap any adapter — database, LLM, storage —
                without touching core logic.
              </p>
              <div className="plantid-arch-tags">
                <span className="plantid-arch-tag">Constructor Injection</span>
                <span className="plantid-arch-tag">Interface Contracts</span>
                <span className="plantid-arch-tag">DI Container</span>
              </div>
            </div>

            <div
              className="plantid-arch-card fade-up"
              style={{ animationDelay: "0.2s" }}
            >
              <span className="plantid-arch-icon">≋</span>
              <div className="plantid-arch-card-title">Frontend Mirroring</div>
              <p className="plantid-arch-card-desc">
                Next.js frontend follows the same separation — components are
                dumb, hooks orchestrate logic, Zod validates all API boundaries
                at runtime.
              </p>
              <div className="plantid-arch-tags">
                <span className="plantid-arch-tag">Zustand Store</span>
                <span className="plantid-arch-tag">Zod Schemas</span>
                <span className="plantid-arch-tag">Custom Hooks</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="plantid-security-section">
        <div className="plantid-section">
          <div className="plantid-section-label fade-up">Security</div>
          <h2 className="plantid-section-title fade-up">
            The <em>Sandbox</em> Executor
          </h2>
          <div className="plantid-security-grid">
            <div>
              <p className="plantid-security-intro">
                Since the Diagnostic Kernel executes AI-generated code, security
                is critical. The RestrictedPython sandbox uses a strict
                whitelist approach — dangerous operations are blocked at compile
                time, not runtime.
              </p>
              <ul className="plantid-security-list">
                <li className="plantid-security-item">
                  <div className="plantid-security-check">✓</div>
                  <div>
                    <div className="plantid-security-item-title">
                      Compile-time blocking
                    </div>
                    <div className="plantid-security-item-desc">
                      RestrictedPython prevents dangerous operations before any
                      execution occurs.
                    </div>
                  </div>
                </li>
                <li className="plantid-security-item">
                  <div className="plantid-security-check">✓</div>
                  <div>
                    <div className="plantid-security-item-title">
                      No file or network access
                    </div>
                    <div className="plantid-security-item-desc">
                      open(), os, sys, subprocess, and socket are completely
                      unavailable.
                    </div>
                  </div>
                </li>
                <li className="plantid-security-item">
                  <div className="plantid-security-check">✓</div>
                  <div>
                    <div className="plantid-security-item-title">
                      Whitelisted builtins only
                    </div>
                    <div className="plantid-security-item-desc">
                      Only str, int, dict, list, len, and json — nothing else
                      can be called.
                    </div>
                  </div>
                </li>
                <li className="plantid-security-item">
                  <div className="plantid-security-check">✓</div>
                  <div>
                    <div className="plantid-security-item-title">
                      Memory isolation
                    </div>
                    <div className="plantid-security-item-desc">
                      Code executes with access only to the params dict — no
                      server state.
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <div className="plantid-flow-container">
                <div className="plantid-flow-label">Execution Flow</div>
                <div className="plantid-flow-diagram">
                  <div className="plantid-flow-row">
                    <div className="plantid-flow-box primary">
                      AI-Generated Code
                    </div>
                  </div>
                  <div className="plantid-flow-row">
                    <span className="plantid-flow-arrow">↓</span>
                  </div>
                  <div className="plantid-flow-row">
                    <div className="plantid-flow-box secondary">
                      AST Syntax Validation
                    </div>
                  </div>
                  <div className="plantid-flow-row">
                    <span className="plantid-flow-arrow">↓</span>
                  </div>
                  <div className="plantid-flow-row">
                    <div className="plantid-flow-box secondary">
                      RestrictedPython Compile
                    </div>
                  </div>
                  <div className="plantid-flow-row">
                    <span className="plantid-flow-arrow">↓</span>
                  </div>
                  <div className="plantid-flow-row">
                    <div className="plantid-flow-box tertiary">
                      Isolated exec() Environment
                    </div>
                  </div>
                  <div className="plantid-flow-row">
                    <span className="plantid-flow-arrow">↓</span>
                  </div>
                  <div className="plantid-flow-row">
                    <div className="plantid-flow-box primary">
                      result dict → Kernel Action
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="plantid-divider"></div>

      {/* Features Section */}
      <section className="plantid-features-section">
        <div className="plantid-section">
          <div className="plantid-section-label fade-up">Features</div>
          <h2 className="plantid-section-title fade-up">
            What the app <em>does</em>
          </h2>
          <div className="plantid-features-grid">
            <div className="plantid-feature-cell">
              <div className="plantid-feature-num">01 —</div>
              <div className="plantid-feature-title">Plant Identification</div>
              <p className="plantid-feature-desc">
                Upload a photo. Plant.id API identifies the species. An LLM
                generates a personalized care schedule — watering, light,
                humidity, soil — stored as JSONB in PostgreSQL.
              </p>
            </div>
            <div className="plantid-feature-cell">
              <div className="plantid-feature-num">02 —</div>
              <div className="plantid-feature-title">Autonomous Diagnosis</div>
              <p className="plantid-feature-desc">
                The Diagnostic Kernel autonomously cycles through up to 20
                iterations, dynamically forming hypotheses and gathering
                evidence before surfacing a finding and recommendation.
              </p>
            </div>
            <div className="plantid-feature-cell">
              <div className="plantid-feature-num">03 —</div>
              <div className="plantid-feature-title">General Plant Chat</div>
              <p className="plantid-feature-desc">
                Simple, persistent LLM-powered chat sessions for plant care
                questions. Conversation history saved per session. Multiple
                sessions supported per user.
              </p>
            </div>
            <div className="plantid-feature-cell">
              <div className="plantid-feature-num">04 —</div>
              <div className="plantid-feature-title">Auth & Data Isolation</div>
              <p className="plantid-feature-desc">
                JWT-based auth via Supabase. All queries are user-scoped — users
                can only access their own plants and diagnoses. Middleware
                validates every request.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="plantid-cta-section fade-up">
        <h2 className="plantid-cta-title">
          Want to see
          <br />
          <em>the code?</em>
        </h2>
        <p className="plantid-cta-desc">
          Full source available on GitHub. Happy to walk through the Diagnostic
          Kernel architecture in detail.
        </p>
        <div className="plantid-cta-buttons">
          <a
            href="https://github.com/Lucy-Bernard/plantId"
            className="plantid-btn plantid-btn-primary"
          >
            View on GitHub ↗
          </a>
          <Link to="/contact" className="plantid-btn plantid-btn-outline">
            Get in Touch
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="plantid-footer">
        <div className="plantid-footer-name">Lucy Bernard</div>
        <div className="plantid-footer-meta">PLANTID · FULL-STACK · 2025</div>
      </footer>
    </div>
  );
}
