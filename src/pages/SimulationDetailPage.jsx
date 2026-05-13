import { useState } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { findSimulation } from "../data/simulations";
import { DirectionalBanner, Pill, Stepper } from "../components/ui";
import { IconChevronLeft } from "../components/icons";
import ReadoutTab from "../components/ReadoutTab";
import QuotesTab from "../components/QuotesTab";
import SummaryTab from "../components/SummaryTab";

const TABS = [
  { id: "readout", label: "Readout" },
  { id: "quotes", label: "Voice of Persona" },
  { id: "summary", label: "AI Summary" },
];

export default function SimulationDetailPage() {
  const { id } = useParams();
  const sim = findSimulation(id);
  const [tab, setTab] = useState("readout");

  if (!sim) return <Navigate to="/simulations" replace />;

  if (sim.status === "fielding") return <FieldingView simulation={sim} />;

  return (
    <>
      <Link
        to="/simulations"
        className="inline-flex items-center gap-1.5 text-body-sm font-medium text-primary-container hover:underline mb-4"
      >
        <IconChevronLeft size={16} />
        Back to simulations
      </Link>

      <div className="flex items-center justify-between gap-6 flex-wrap mb-md">
        <div className="flex items-center gap-4 flex-wrap">
          <h2 className="text-h2 m-0">{sim.title}</h2>
          <span className="text-label-caps text-primary bg-surface-container-high px-2.5 py-1 rounded-full">
            {sim.archive}
          </span>
        </div>
        <Stepper steps={["Define", "Simulate", "Results"]} current={2} />
      </div>

      <DirectionalBanner />

      {/* Tab bar */}
      <div className="flex gap-1 border-b border-outline-variant mb-lg">
        {TABS.map((t) => {
          const active = tab === t.id;
          return (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={[
                "px-4 py-2.5 text-[13px] font-medium border-b-2 transition-colors",
                active
                  ? "text-primary-container border-primary-container font-semibold"
                  : "text-on-surface-variant border-transparent hover:text-on-surface",
              ].join(" ")}
            >
              {t.label}
            </button>
          );
        })}
      </div>

      {tab === "readout" && <ReadoutTab simulation={sim} />}
      {tab === "quotes" && <QuotesTab simulation={sim} />}
      {tab === "summary" && <SummaryTab simulation={sim} />}
    </>
  );
}

function FieldingView({ simulation: sim }) {
  return (
    <>
      <Link
        to="/simulations"
        className="inline-flex items-center gap-1.5 text-body-sm font-medium text-primary-container hover:underline mb-4"
      >
        <IconChevronLeft size={16} />
        Back to simulations
      </Link>

      <div className="flex items-center justify-between gap-6 flex-wrap mb-md">
        <div className="flex items-center gap-4 flex-wrap">
          <h2 className="text-h2 m-0">{sim.title}</h2>
          <Pill status="fielding" progress={sim.progress} />
        </div>
        <Stepper steps={["Define", "Simulate", "Results"]} current={1} />
      </div>

      {/* <DirectionalBanner /> */}

      <section className="card text-center" style={{ padding: "48px 32px" }}>
        <div className="text-[48px] font-bold text-primary-container tracking-tight">
          {sim.progress}%
        </div>
        <div className="text-label-caps text-on-surface-variant mt-1">In Progress</div>
        <h3 className="text-h2 my-6 text-on-surface">Simulating responses</h3>
        <p className="text-on-surface-variant max-w-[480px] mx-auto m-0">
          Personas are responding now. {sim.eta}. Once synthesis is complete, this view
          will replace itself with the full readout.
        </p>
        <div className="h-1.5 bg-surface-dim rounded-full mt-8 max-w-[480px] mx-auto overflow-hidden">
          <div
            className="h-full bg-primary-container rounded-full transition-[width] duration-300"
            style={{ width: `${sim.progress}%` }}
          />
        </div>
      </section>
    </>
  );
}
