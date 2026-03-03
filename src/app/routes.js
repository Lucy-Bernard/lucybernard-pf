import { createBrowserRouter } from "react-router";
import Root from "./Root";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Dashboard },
      { path: "about", Component: About },
      { path: "projects", Component: Projects },
      { path: "projects/:id", Component: ProjectDetail },
      { path: "resume", Component: Resume },
      { path: "contact", Component: Contact },
    ],
  },
]);
