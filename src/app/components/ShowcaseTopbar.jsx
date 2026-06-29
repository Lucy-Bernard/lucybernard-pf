import { Link } from "react-router";
import "../../styles/showcase-topbar.css";

export default function ShowcaseTopbar({ label }) {
  return (
    <nav className="sc-topbar">
      <Link to="/projects" className="sc-back-link">← Portfolio</Link>
      {label && <span className="sc-label">{label}</span>}
    </nav>
  );
}
