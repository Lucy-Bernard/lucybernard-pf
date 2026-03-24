import { Link } from "react-router";
import profileImage from "../../assets/lucy.png";

export default function Dashboard() {
  const featuredProjects = [
    {
      id: "plantid",
      index: "01 — AI / Full-Stack",
      title: "LeafLine",
      subtitle: "Autonomous plant diagnostic app",
      description:
        "An AI-powered plant health platform built around a self-generating Diagnostic Kernel — an autonomous agent that cyclically produces Python code within a sandboxed environment.",
      tags: ["Python", "FastAPI", "Next.js", "AI Agent"],
    },
    {
      id: "g8",
      index: "02 — Full-Stack / E-Commerce",
      title: "G8",
      subtitle: "E-commerce platform",
      description:
        "A full-stack e-commerce application built with C#, ASP.NET, and React following strict MVC architecture. Features cart management, user authentication, and checkout.",
      tags: ["C#", "ASP.NET", "React", "Docker"],
    },
  ];

  return (
    <>
      {/* HERO */}
      <section className="dashboard-hero">
        <div className="dashboard-hero-content">
          <div className="dashboard-hero-text">
            <div className="dashboard-hero-subtitle">Software Engineer</div>
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
            <div className="dashboard-skills-group">
              <div className="dashboard-skills-heading">
                <em>Frontend</em>
              </div>
              <div className="dashboard-skills-chips">
                {[
                  "React",
                  "Next.js",
                  "Angular",
                  "TypeScript",
                  "JavaScript",
                  "Tailwind CSS",
                ].map((skill) => (
                  <span key={skill} className="dashboard-skill-chip">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="dashboard-skills-group">
              <div className="dashboard-skills-heading">
                <em>Backend</em>
              </div>
              <div className="dashboard-skills-chips">
                {["Python", "FastAPI", "C#", "ASP.NET", "Node.js", "Java"].map(
                  (skill) => (
                    <span key={skill} className="dashboard-skill-chip">
                      {skill}
                    </span>
                  ),
                )}
              </div>
            </div>
            <div className="dashboard-skills-group">
              <div className="dashboard-skills-heading">
                <em>Data</em>
              </div>
              <div className="dashboard-skills-chips">
                {["PostgreSQL", "SQL", "T-SQL", "REST APIs"].map((skill) => (
                  <span key={skill} className="dashboard-skill-chip">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="dashboard-skills-group">
              <div className="dashboard-skills-heading">
                <em>Tools</em>
              </div>
              <div className="dashboard-skills-chips">
                {["Git", "Docker", "Azure DevOps", "Vercel", "CI/CD"].map(
                  (skill) => (
                    <span key={skill} className="dashboard-skill-chip">
                      {skill}
                    </span>
                  ),
                )}
              </div>
            </div>
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
