import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { Toast } from "./ui";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-surface">
      <Topbar />
      <div className="flex flex-1 min-h-0">
        <Sidebar />
        <main className="flex-1 min-w-0">
          <div className="max-w-content w-full mx-auto px-8 pt-6 pb-xl">
            <Outlet />
          </div>
        </main>
      </div>
      <Toast />
    </div>
  );
}
