import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { simulations } from "../data/simulations";
import SimulationRow from "../components/SimulationRow";
import { IconActivity, IconClock, IconPlus, IconSearch, IconUsers } from "../components/icons";
import { DirectionalBanner } from "../components/ui";

export default function SimulationsPage() {
  const [filter, setFilter] = useState("");

  const rows = useMemo(() => {
    const f = filter.toLowerCase().trim();
    if (!f) return simulations;
    return simulations.filter(
      (s) =>
        s.title.toLowerCase().includes(f) ||
        s.market.toLowerCase().includes(f) ||
        (s.preset || s.domainLabel || "").toLowerCase().includes(f) ||
        s.sku.toLowerCase().includes(f)
    );
  }, [filter]);

  return (
    <>
      <div className="mb-md flex items-center justify-between gap-6 flex-wrap">
        <h1 className="text-h1 m-0">Simulations</h1>
        <Link to="/new" className="btn btn-primary">
          <IconPlus size={16} />
          New Simulation
        </Link>
      </div>

      <DirectionalBanner />

      <div className="grid grid-cols-3 gap-gutter mb-lg">
        <KpiCard label="Active Simulations" value="7" meta="5 synthesized · 1 analyzing · 1 fielding" Icon={IconClock} />
        <KpiCard label="Synthetic Audience" value="4,250" meta="across 8 persona archetypes" Icon={IconUsers} />
        <KpiCard label="Recurring Themes" value="12" meta="surfaced across ≥3 simulations" metaClass="text-success" Icon={IconActivity} />
      </div>

      <section className="card overflow-hidden">
        <div className="flex items-center justify-between px-6 py-4 border-b border-outline-variant bg-surface-container-lowest">
          <h3 className="text-h3 m-0">Recent Simulations</h3>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-outline">
              <IconSearch size={16} />
            </span>
            <input
              type="text"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              placeholder="Filter simulations..."
              className="pl-9 pr-4 py-2 border border-outline-variant rounded-full bg-surface-bright text-[13px] outline-none w-60 focus:border-primary-container focus:ring-2 focus:ring-primary-container/20"
            />
          </div>
        </div>

        <div
          className="grid px-6 py-3 bg-surface-container-low border-b border-outline-variant text-label-caps text-on-surface-variant"
          style={{ gridTemplateColumns: "5fr 2fr 2fr 2fr 1fr" }}
        >
          <div>Simulation</div>
          <div>Market</div>
          <div>Audience</div>
          <div>Status</div>
          <div />
        </div>

        <div>
          {rows.map((s) => (
            <SimulationRow key={s.id} simulation={s} />
          ))}
          {rows.length === 0 && (
            <div className="px-6 py-12 text-center text-on-surface-variant text-body-sm">
              No simulations match this filter.
            </div>
          )}
        </div>

        <div className="flex items-center justify-between px-6 py-3.5 bg-surface-container-lowest border-t border-outline-variant">
          <p className="m-0 text-body-sm text-on-surface-variant">
            Showing <strong className="text-on-surface font-semibold">1-{rows.length}</strong> of{" "}
            <strong className="text-on-surface font-semibold">{simulations.length}</strong> simulations
          </p>
          <div className="text-body-sm text-on-surface-variant">Most recent first</div>
        </div>
      </section>
    </>
  );
}

function KpiCard({ label, value, meta, metaClass = "", Icon }) {
  return (
    <div className="card p-5">
      <div className="flex items-center justify-between mb-2">
        <span className="text-body-sm font-medium text-on-surface-variant">{label}</span>
        <span className="text-primary-container">
          <Icon size={18} />
        </span>
      </div>
      <div className="text-h2 text-on-surface tracking-tight">{value}</div>
      <div className={`text-[12px] mt-1 ${metaClass || "text-on-surface-variant"}`}>{meta}</div>
    </div>
  );
}
