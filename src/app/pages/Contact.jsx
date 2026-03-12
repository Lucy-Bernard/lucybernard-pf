import { useState } from "react";

const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT;

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      {/* HERO */}
      <section className="contact-hero">
        <div className="contact-hero-content">
          <div className="contact-hero-subtitle">Let's Connect</div>
          <h1 className="contact-hero-title">
            Get in <em>Touch</em>
          </h1>
          <p className="contact-hero-desc">
            Have a project in mind or just want to chat? I'd love to hear from
            you. Drop me a message and I'll get back to you as soon as possible.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="contact-section">
        <div className="contact-grid">
          {/* FORM */}
          <div>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="contact-form-group">
                <label htmlFor="name" className="contact-form-label">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="contact-form-input"
                  placeholder="Jane Doe"
                />
              </div>

              <div className="contact-form-group">
                <label htmlFor="email" className="contact-form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="contact-form-input"
                  placeholder="jane@example.com"
                />
              </div>

              <div className="contact-form-group">
                <label htmlFor="message" className="contact-form-label">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="contact-form-textarea"
                  placeholder="Tell me about your project..."
                />
              </div>

              {status === "success" && (
                <p className="contact-form-success">
                  Message sent! I'll get back to you soon.
                </p>
              )}
              {status === "error" && (
                <p className="contact-form-error">
                  Something went wrong. Please try emailing me directly.
                </p>
              )}

              <button
                type="submit"
                className="contact-form-submit"
                disabled={status === "loading"}
              >
                <i
                  className={`fa-solid ${status === "loading" ? "fa-spinner fa-spin" : "fa-paper-plane"}`}
                ></i>
                {status === "loading" ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* INFO CARDS */}
          <div className="contact-info">
            {/* Email */}
            <div className="contact-card">
              <i className="fa-solid fa-envelope contact-card-icon"></i>
              <div className="contact-card-title">Email</div>
              <div className="contact-card-value">
                <a href="mailto:lucybernardvalentin@gmail.com">
                  lucybernardvalentin@gmail.com
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="contact-card">
              <i className="fa-solid fa-location-dot contact-card-icon"></i>
              <div className="contact-card-title">Location</div>
              <div className="contact-card-value">Chicago, IL</div>
            </div>

            {/* Social Links */}
            <div className="contact-social-card">
              <h3 className="contact-social-title">Connect with me</h3>
              <div className="contact-social-links">
                <a
                  href="https://github.com/Lucy-Bernard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-social-link"
                  aria-label="GitHub"
                >
                  <i className="fa-brands fa-github"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/lucy-bernard-v/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-social-link"
                  aria-label="LinkedIn"
                >
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
                <a
                  href="https://www.instagram.com/lucybernardv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-social-link"
                  aria-label="Instagram"
                >
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
