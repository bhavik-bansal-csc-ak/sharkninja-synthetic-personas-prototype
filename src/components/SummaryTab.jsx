import { IconCheck, IconDownload, IconSparkles } from "./icons";

export default function SummaryTab({ simulation: c }) {
  return (
    <section className="card p-6">
      <div className="mb-4">
        <h3 className="text-h3 flex items-center gap-2 m-0">
          <span className="text-primary-container">
            <IconSparkles />
          </span>
          AI Insights Summary
        </h3>
      </div>
      <ul className="m-0 p-0 list-none flex flex-col gap-3.5">
        {c.summary.map((s, i) => (
          <li
            key={i}
            className="flex gap-3 items-start text-body-sm leading-snug text-on-surface"
          >
            <span className="text-primary-container flex-shrink-0 mt-0.5">
              <IconCheck size={18} />
            </span>
            <span>{s}</span>
          </li>
        ))}
      </ul>
      <button className="btn btn-primary mt-6 w-full justify-center">
        <IconDownload size={16} />
        Export Full Intelligence Report
      </button>
    </section>
  );
}
