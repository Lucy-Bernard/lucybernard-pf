import { useParams, Link } from "react-router";
import { projects } from "../data/projects";
import PlantIDShowcase from "./PlantIDShowcase";
import G8Showcase from "./G8Showcase";
import ZenSurfShowcase from "./ZenSurfShowcase";
import FarMartShowcase from "./FarMartShowcase";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="container mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
        <Link to="/projects" className="text-primary hover:underline">
          ← Back to Projects
        </Link>
      </div>
    );
  }

  if (project.id === "plantid") {
    return <PlantIDShowcase />;
  }

  if (project.id === "g8") {
    return <G8Showcase />;
  }

  if (project.id === "zensurf") {
    return <ZenSurfShowcase />;
  }

  if (project.id === "farmart") {
    return <FarMartShowcase />;
  }

  // Fallback for projects without custom showcases
  return (
    <div className="container mx-auto px-6 py-16 text-center">
      <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
      <p className="text-muted-foreground mb-4">Nothing to show here yet.</p>
      <Link to="/projects" className="text-primary hover:underline">
        ← Back to Projects
      </Link>
    </div>
  );
}
