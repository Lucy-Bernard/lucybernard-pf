import { Outlet, useLocation } from "react-router";
import { DashboardNavbar } from "./components/DashboardNavbar";

export default function Root() {
  const location = useLocation();

  // Hide navbar on project detail pages
  const hideNavbar = location.pathname.startsWith("/projects/");

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ background: "var(--paper)" }}
    >
      {!hideNavbar && <DashboardNavbar />}
      <div className={hideNavbar ? "flex-1" : "lb-page-offset flex-1"}>
        <Outlet />
      </div>
    </div>
  );
}
