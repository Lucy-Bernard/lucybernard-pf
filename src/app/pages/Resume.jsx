export default function Resume() {
  return (
    <>
      {/* HERO */}
      <section className="resume-hero">
        <div className="resume-hero-content">
          <div className="resume-hero-text">
            <div className="resume-hero-subtitle">Professional Background</div>
            <h1>
              My <em>Resume</em>
            </h1>
          </div>
          <a
            href="https://drive.google.com/uc?export=download&id=1Nr3aH6rG5itvIyDVLx-48TSyLdsjeZLI"
            className="resume-download-btn"
          >
            <i className="fa-solid fa-download"></i>
            Download PDF
          </a>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="resume-section">
        <div className="resume-section-eyebrow">Work History</div>
        <h2 className="resume-section-title">
          Professional <em>experience</em>
        </h2>
        <div className="resume-experience-list">
          <div className="resume-experience-card">
            <div className="resume-experience-header">
              <div>
                <h3 className="resume-experience-title">
                  Software Engineer Intern
                </h3>
                <div className="resume-experience-company">K1x · Remote</div>
              </div>
              <div className="resume-experience-date">
                June 2024 - December 2024
              </div>
            </div>
            <ul className="resume-experience-list-items">
              <li>
                Designed and built full-stack data visibility feature including backend API endpoints and frontend Angular components reducing user navigation time.
              </li>
              <li>
                Developed RESTful APIs and optimized backend services, improving application performance and response times.
              </li>
              <li>
                Enhanced product reliability by fixing critical bugs and implementing improved error handling across distributed system components.
              </li>
              <li>
                Collaborated with cross-functional Agile development team through code reviews, daily standups, and sprint planning, and contributed to CI/CD workflows by deploying code through automated build and release pipelines in Azure DevOps.
              </li>
            </ul>
          </div>

          <div className="resume-experience-card">
            <div className="resume-experience-header">
              <div>
                <h3 className="resume-experience-title">
                  Undergraduate Teaching Assistant
                </h3>
                <div className="resume-experience-company">
                  University of Nebraska · Lincoln, NE
                </div>
              </div>
              <div className="resume-experience-date">
                August 2023 - December 2023
              </div>
            </div>
            <p className="resume-experience-desc">
              Help students in Computer Science understand the fundamentals of
              programming, and answer questions related to coursework, CS
              principles, and python programming, developing strong
              communication skills with technical concepts.
            </p>
          </div>
        </div>
      </section>

      {/* EDUCATION & COURSEWORK */}
      <section className="resume-section resume-section-alt">
        <div className="resume-section-eyebrow">Academic Background</div>
        <h2 className="resume-section-title">
          Education & <em>coursework</em>
        </h2>
        <div className="resume-grid">
          <div>
            <div className="resume-education-item">
              <h3 className="resume-education-school">DePaul University</h3>
              <div className="resume-education-degree">
                Bachelor of Science in Computer Science
              </div>
              <div className="resume-education-meta">Chicago, IL</div>
              <div className="resume-education-meta">
                Graduated: December 2025
              </div>
              <div className="resume-education-meta">GPA: 3.9/4.00</div>
            </div>

            <div className="resume-education-item">
              <h3 className="resume-education-school">
                University of Nebraska
              </h3>
              <div className="resume-education-degree">
                Bachelor of Science in Computer Science
              </div>
              <div className="resume-education-meta">Lincoln, NE</div>
            </div>
          </div>

          <div>
            <div className="resume-coursework">
              <h4 className="resume-coursework-title">Relevant Coursework</h4>
              <p className="resume-coursework-list">
                Human Computer Interaction, Object-Oriented Development, Data
                Structures & Algorithms, Database Systems, Computer Systems
                Engineering, Software Engineering, Data Analysis, Design &
                Analysis of Algorithms, Distributed Systems
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TECHNICAL SKILLS */}
      <section className="resume-section">
        <div className="resume-section-eyebrow">Technical Proficiency</div>
        <h2 className="resume-section-title">
          Skills & <em>technologies</em>
        </h2>
        <div className="resume-skills-grid">
          <div className="resume-skill-card">
            <h3 className="resume-skill-title">Frontend</h3>
            <div className="resume-skill-tags">
              {[
                "React",
                "Next.js",
                "Angular",
                "JavaScript",
                "HTML",
                "CSS",
                "Tailwind CSS",
              ].map((skill) => (
                <span key={skill} className="resume-skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="resume-skill-card">
            <h3 className="resume-skill-title">Backend</h3>
            <div className="resume-skill-tags">
              {[
                "Python",
                "C#",
                "Node.js",
                "FastAPI",
                "ASP.NET",
                "PostgreSQL",
                "T-SQL",
                "SQL",
              ].map((skill) => (
                <span key={skill} className="resume-skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="resume-skill-card">
            <h3 className="resume-skill-title">Other Skills</h3>
            <div className="resume-skill-tags">
              {[
                "Git",
                "Docker",
                "RESTful APIs",
                "Responsive Design",
                "UI/UX",
                "Agile",
                "Azure",
                "DevOps",
              ].map((skill) => (
                <span key={skill} className="resume-skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="resume-additional" style={{ marginTop: "40px" }}>
          <h3 className="resume-additional-title">Additional Technologies</h3>
          <p className="resume-additional-content">
            Docker, MVC, CI/CD Pipelines, Microservices, Infrastructure, Agile
            Scrum Methodologies, Hexagonal Architectures, ORMs
          </p>
        </div>
      </section>
    </>
  );
}
