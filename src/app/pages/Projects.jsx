import { Link } from "react-router";
import { useState } from "react";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");

  const handleFilter = (filter) => {
    setActiveFilter(filter);
  };

  const projectsData = [
    {
      id: "plantid",
      featured: true,
      index: "01 — AI / Full-Stack",
      title: "PlantID",
      subtitle: "Autonomous plant diagnostic app",
      description:
        "An AI-powered plant health platform built around a self-generating Diagnostic Kernel — an autonomous agent that cyclically produces Python code within a sandboxed environment to identify root causes across up to 20 diagnostic cycles. Hexagonal architecture, FastAPI backend, Next.js frontend.",
      tags: [
        { label: "Python", type: "t-primary" },
        { label: "FastAPI", type: "t-primary" },
        { label: "Next.js", type: "t-primary" },
        { label: "PostgreSQL", type: "t-secondary" },
        { label: "RestrictedPython", type: "t-secondary" },
        { label: "AI Agent", type: "t-accent" },
        { label: "Hexagonal Architecture", type: "t-accent" },
      ],
      metrics: [
        { value: "20", label: "Max Cycles" },
        { value: "5", label: "Arch Layers" },
        { value: "100%", label: "Sandboxed" },
        { value: "AI", label: "Code Gen" },
      ],
      footer: "Lucy Bernard · 2024",
      dataTags: "python javascript sql ai",
      className: "card--plantid",
    },
    {
      id: "g8",
      index: "02 — Full-Stack / E-Commerce",
      title: "G8",
      subtitle: "E-commerce platform",
      description:
        "A full-stack e-commerce application built with C#, ASP.NET, and React following strict MVC architecture. Features cart management, user authentication, checkout with regex card validation, and SQL injection–resistant parameterized queries. Dockerized for cross-platform MSSQL compatibility.",
      tags: [
        { label: "C#", type: "t-primary" },
        { label: "ASP.NET", type: "t-primary" },
        { label: "React", type: "t-primary" },
        { label: "MSSQL", type: "t-secondary" },
        { label: "Docker", type: "t-secondary" },
        { label: "MVC", type: "t-accent" },
      ],
      footer: "Lucy Bernard · 2024",
      dataTags: "javascript sql",
      className: "card--g8",
    },
    {
      id: "farmart",
      index: "03 — Java / Databases",
      title: "FarMarT",
      subtitle: "Sales system design",
      description:
        "A database-backed sales subsystem for a regional farm equipment chain, built in 6 phases from CSV parsing to JDBC integration. Features a custom generic Linked List data structure with Comparator-based sorting, a 3NF-normalized SQL schema, and formatted terminal sales reports.",
      tags: [
        { label: "Java", type: "t-primary" },
        { label: "SQL / JDBC", type: "t-primary" },
        { label: "JSON / Gson", type: "t-secondary" },
        { label: "OOP Design", type: "t-secondary" },
        { label: "UNL · 2023", type: "t-accent" },
      ],
      footer: "Lucy Bernard · 2023",
      dataTags: "java sql",
      className: "card--farmart",
    },
    {
      id: "zensurf",
      index: "04 — Chrome Extension / UI-UX",
      title: "ZenSurf",
      subtitle: "Anxiety-reducing browser extension",
      description:
        "A Chrome Manifest V3 extension providing quick access to breathing exercises, meditation timers, and ambient sound — all without leaving your current tab. A focused exploration of UI/UX principles: readability, accessibility, emotional design, and drag-and-drop customization.",
      tags: [
        { label: "JavaScript", type: "t-primary" },
        { label: "HTML / CSS", type: "t-primary" },
        { label: "Chrome MV3", type: "t-secondary" },
        { label: "UI/UX Focus", type: "t-accent" },
        { label: "Accessibility", type: "t-accent" },
      ],
      footer: "Lucy Bernard · Joey Ng · 2023",
      dataTags: "javascript ux",
      className: "card--zensurf",
    },
  ];

  const filterOptions = [
    { label: "All", value: "all" },
    { label: "Python", value: "python" },
    { label: "Java", value: "java" },
    { label: "JavaScript", value: "javascript" },
    { label: "SQL / DB", value: "sql" },
    { label: "UI / UX", value: "ux" },
  ];

  const filteredProjects = projectsData.filter((project) => {
    if (activeFilter === "all") return true;
    return project.dataTags.includes(activeFilter);
  });

  return (
    <>
      {/* HERO */}
      <header className="hero">
        <div>
          <div className="hero-eyebrow">
            <div className="eyebrow-line"></div>
            <span className="eyebrow-text">
              Software Engineering · React · Java · Python · JavaScript · SQL
            </span>
          </div>
          <h1 className="hero-title">
            Selected
            <br />
            <em>Work</em>
          </h1>
          <p className="hero-desc">
            A collection of projects I built during my Computer Science degree
            at DePaul University and beyond featuring AI systems, full-stack
            apps, databases, and browser tooling.
          </p>
        </div>
        <div className="hero-count">
          <div className="hero-count-num">04</div>
          <div className="hero-count-label">Projects</div>
        </div>
      </header>

      {/* FILTER BAR */}
      <div className="filter-bar">
        <span className="filter-label">Filter</span>
        {filterOptions.map((filter) => (
          <button
            key={filter.value}
            className={`filter-btn ${activeFilter === filter.value ? "active" : ""}`}
            onClick={() => handleFilter(filter.value)}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* PROJECTS GRID */}
      <div className="projects-wrapper">
        <div className="projects-grid" id="projects-grid">
          {filteredProjects.map((project, index) => (
            <Link
              key={project.id}
              to={`/projects/${project.id}`}
              className={`project-card ${project.featured ? "featured" : ""} ${project.className} ${filteredProjects.includes(project) ? "" : "hidden"}`}
              data-tags={project.dataTags}
            >
              {project.featured ? (
                // Featured card layout
                <>
                  <div className="card-body">
                    <div className="featured-left">
                      <div className="featured-badge">Featured Project</div>
                      <div className="card-index">{project.index}</div>
                      <div className="card-title">{project.title}</div>
                      <div className="card-subtitle">{project.subtitle}</div>
                      <p className="card-desc">{project.description}</p>
                      <div className="card-tags">
                        {project.tags.map((tag, i) => (
                          <span key={i} className={`card-tag ${tag.type}`}>
                            {tag.label}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="featured-right">
                      <div className="featured-metrics">
                        {project.metrics.map((metric, i) => (
                          <div key={i} className="feat-metric">
                            <div className="feat-metric-val">
                              {metric.value}
                            </div>
                            <div className="feat-metric-label">
                              {metric.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="card-footer">
                    <span className="card-footer-label">{project.footer}</span>
                    <span className="card-view-link">View Project →</span>
                  </div>
                  <div className="card-arrow">
                    <svg viewBox="0 0 16 16">
                      <path d="M3 13L13 3M13 3H6M13 3v7" />
                    </svg>
                  </div>
                </>
              ) : (
                // Regular card layout
                <>
                  <div className="card-body">
                    <div className="card-index">{project.index}</div>
                    <div className="card-title">{project.title}</div>
                    <div className="card-subtitle">{project.subtitle}</div>
                    <p className="card-desc">{project.description}</p>
                    <div className="card-tags">
                      {project.tags.map((tag, i) => (
                        <span key={i} className={`card-tag ${tag.type}`}>
                          {tag.label}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="card-footer">
                    <span className="card-footer-label">{project.footer}</span>
                    <span className="card-view-link">View Project →</span>
                  </div>
                  <div className="card-arrow">
                    <svg viewBox="0 0 16 16">
                      <path d="M3 13L13 3M13 3H6M13 3v7" />
                    </svg>
                  </div>
                </>
              )}
            </Link>
          ))}
        </div>

        {/* No results message */}
        {filteredProjects.length === 0 && (
          <div className="no-results">
            <p className="no-results-text">No projects match this filter</p>
          </div>
        )}
      </div>

      {/* ALSO SECTION */}
      <div className="also-section">
        <div className="also-title">Also available</div>
        <div className="also-grid">
          <a
            className="also-card"
            href="https://github.com/Lucy-Bernard"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="also-card-label">GitHub</div>
            <div className="also-card-title">All Repositories ↗</div>
            <p className="also-card-desc">
              Browse the full source code for all projects, including
              coursework, experiments, and smaller utilities.
            </p>
          </a>
          <a
            className="also-card"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="also-card-label">Academic</div>
            <div className="also-card-title">Design Docs (Coming Soon) ↗</div>
            <p className="also-card-desc">Placeholder</p>
          </a>
          <Link className="also-card" to="/contact">
            <div className="also-card-label">Collaboration</div>
            <div className="also-card-title">Get in Touch</div>
            <p className="also-card-desc">
              Happy to walk through any project in more detail.
            </p>
          </Link>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="projects-footer">
        <div className="footer-name">Lucy Bernard</div>
        <div className="footer-meta">DePaul University CS · 2025 Graduate</div>
      </footer>
    </>
  );
}
