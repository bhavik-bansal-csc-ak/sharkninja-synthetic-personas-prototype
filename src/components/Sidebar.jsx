import { NavLink } from "react-router-dom";
import { IconGrid, IconPlay, IconUsers, IconStar } from "./icons";

const navItem = ({ isActive }) =>
  [
    "flex items-center gap-3 px-3 py-2.5 rounded-md text-[14px] font-medium transition-colors",
    isActive
      ? "bg-[#1b3052] text-white font-semibold"
      : "text-white/65 hover:bg-white/5 hover:text-white",
  ].join(" ");

const Count = ({ active, n }) => (
  <span
    className={[
      "ml-auto text-[11px] font-semibold px-2 py-0.5 rounded-full",
      active ? "bg-[#4f86f7] text-white" : "bg-white/10 text-white/60",
    ].join(" ")}
  >
    {n}
  </span>
);

export default function Sidebar() {
  return (
    <aside
      className="sticky self-start bg-[#0F1C2E] px-3 pt-4 pb-6"
      style={{ top: 0, minHeight: "calc(100vh - 56px)", width: "240px", flexShrink: 0 }}
    >
      <nav className="flex flex-col gap-0.5">
        <div className="text-label-caps text-white/35 px-3 pb-1.5">Research</div>
        <NavLink to="/simulations" className={navItem}>
          {({ isActive }) => (
            <>
              <IconGrid size={20} />
              <span>Simulations</span>
              <Count active={isActive} n={7} />
            </>
          )}
        </NavLink>
        <NavLink to="/new" className={navItem}>
          <IconPlay size={20} />
          <span>Run Simulation</span>
        </NavLink>

        <div className="text-label-caps text-white/35 px-3 pt-5 pb-1.5">Library</div>
        <NavLink to="/personas" className={navItem}>
          {({ isActive }) => (
            <>
              <IconUsers size={20} />
              <span>Personas</span>
              <Count active={isActive} n={8} />
            </>
          )}
        </NavLink>
        <NavLink to="/insights" className={navItem}>
          <IconStar size={20} />
          <span>Cross-Simulation</span>
        </NavLink>
      </nav>
    </aside>
  );
}
