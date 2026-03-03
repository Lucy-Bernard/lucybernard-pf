import { Link, useLocation } from "react-router";
import { useState, useEffect } from "react";

export function DashboardNavbar() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Scroll shadow effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on link click (mobile)
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  // Determine if a link is active
  const isActive = (path) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <nav
      className={`lb-nav ${isScrolled ? "scrolled" : ""} ${isMenuOpen ? "open" : ""}`}
    >
      <Link to="/" className="lb-nav__logo">
        Lucy<span>Bernard</span>
        <div className="lb-nav__logo-dot"></div>
      </Link>

      <ul className="lb-nav__links">
        <li>
          <Link
            to="/"
            className={isActive("/") ? "active" : ""}
            onClick={handleLinkClick}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className={isActive("/about") ? "active" : ""}
            onClick={handleLinkClick}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/projects"
            className={isActive("/projects") ? "active" : ""}
            onClick={handleLinkClick}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="/resume"
            className={isActive("/resume") ? "active" : ""}
            onClick={handleLinkClick}
          >
            Resume
          </Link>
        </li>
      </ul>

      <div className="lb-nav__sep"></div>
      <Link to="/contact" className="lb-nav__cta">
        Get in Touch
      </Link>

      <button
        className="lb-nav__toggle"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
}
