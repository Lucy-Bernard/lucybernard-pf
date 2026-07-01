import { Link } from "react-router";
import profileImage from "../../assets/lucy.png";
import { skills } from "../data/skills";

export default function Dashboard() {
  const featuredProjects = [
    {
      id: "commonground",
      index: "01 — Full-Stack / Web App",
      title: "Common Ground",
      subtitle: "Chicago dance studio directory",
      description:
        "A curated directory of adult dance studios in Chicago with live class schedules scraped daily via Puppeteer, anonymous reviews, and filters that actually help you find a class.",
      tags: ["React", "Express.js", "PostgreSQL", "Puppeteer"],
    },
    {
      id: "plantid",
      index: "02 — AI / Full-Stack",
      title: "LeafLine",
      subtitle: "Autonomous plant diagnostic app",
      description:
        "An AI-powered plant health platform with an autonomous Diagnostic Kernel that generates and executes Python code within a sandboxed environment to diagnose plant health.",
      tags: ["Python", "FastAPI", "Next.js", "AI Agent"],
    },
  ];

  return (
    <>
      {/* HERO */}
      <section className="dashboard-hero">
        <div className="dashboard-hero-content">
          <div className="dashboard-hero-text">
            <div className="dashboard-hero-subtitle">UI Enthusiast</div>
            <h1>
              Hel <em>lo.</em>
            </h1>
            <p className="dashboard-hero-desc w-60">
              My name is Lucy. I like to build things. And then I spend 4000
              hours tweaking the style.
            </p>
            <Link to="/projects" className="dashboard-hero-cta">
              View My Work <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
          <div className="dashboard-hero-image">
            <img src={profileImage} alt="Lucy Bernard" />
            <div className="dashboard-hero-badge">Based in Chicago</div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="dashboard-skills">
        <div className="dashboard-skills-inner">
          <div className="dashboard-skills-container">
            {[
              { label: "Frontend", key: "frontend" },
              { label: "Backend", key: "backend" },
              { label: "Data", key: "data" },
              { label: "Tools", key: "tools" },
            ].map(({ label, key }) => (
              <div key={key} className="dashboard-skills-group">
                <div className="dashboard-skills-heading">
                  <em>{label}</em>
                </div>
                <div className="dashboard-skills-chips">
                  {skills[key].map((skill) => (
                    <span key={skill} className="dashboard-skill-chip">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="dashboard-featured">
        <div className="dashboard-section-header">
          <div className="dashboard-section-eyebrow">Featured Work</div>
          <h2 className="dashboard-section-title">
            Recent <em>projects</em>
          </h2>
        </div>
        <div className="dashboard-projects-grid">
          {featuredProjects.map((project) => (
            <Link
              key={project.id}
              to={`/projects/${project.id}`}
              className="dashboard-project-card"
            >
              <div className="dashboard-project-index">{project.index}</div>
              <h3 className="dashboard-project-title">{project.title}</h3>
              <div className="dashboard-project-subtitle">
                {project.subtitle}
              </div>
              <p className="dashboard-project-desc">{project.description}</p>
              <div className="dashboard-project-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="dashboard-project-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
        <Link to="/projects" className="dashboard-view-all">
          View All Projects <i className="fa-solid fa-arrow-right"></i>
        </Link>
      </section>

      {/* EXPERIENCE */}
      <section className="dashboard-experience">
        <div className="dashboard-experience-content">
          <div className="dashboard-section-header">
            <div className="dashboard-section-eyebrow">Background</div>
            <h2 className="dashboard-section-title">
              Professional <em>experience</em>
            </h2>
          </div>
          <div className="dashboard-experience-grid">
            <div className="dashboard-experience-card">
              <div className="dashboard-experience-company">K1X</div>
              <h3 className="dashboard-experience-title">
                Software Engineer Intern
              </h3>
              <p className="dashboard-experience-desc">
                Developed full-stack features and collaborated on product
                development in a fast-paced startup environment.
              </p>
            </div>
            <div className="dashboard-experience-card">
              <div className="dashboard-experience-company">
                University of Nebraska
              </div>
              <h3 className="dashboard-experience-title">Teaching Assistant</h3>
              <p className="dashboard-experience-desc">
                Assisted students with programming concepts, graded assignments,
                and held office hours for computer science courses.
              </p>
            </div>
            <div className="dashboard-experience-card">
              <div className="dashboard-experience-company">Nelnet</div>
              <h3 className="dashboard-experience-title">
                Help Desk Representative
              </h3>
              <p className="dashboard-experience-desc">
                Provided technical support and troubleshooting assistance to
                users, resolving software and hardware issues.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
