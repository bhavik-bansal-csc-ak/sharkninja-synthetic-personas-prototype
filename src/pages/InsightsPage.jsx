import { crossInsights } from "../data/crossInsights";
import { IconInfo } from "../components/icons";

export default function InsightsPage() {
  return (
    <>
      <div className="mb-md">
        <h1 className="text-h1 m-0">Cross-Simulation Insights</h1>
      </div>

      <div className="grid grid-cols-2 gap-gutter">
        {crossInsights.map((i, idx) => (
          <div key={idx} className="card p-6">
            <h3 className="text-h3 m-0 mb-2 flex items-center gap-2">
              <span className="text-primary-container">
                <IconInfo size={18} />
              </span>
              {String(idx + 1).padStart(2, "0")}. {i.title}
            </h3>
            <p className="text-body-base text-on-surface-variant m-0">{i.body}</p>
          </div>
        ))}
      </div>
    </>
  );
}
