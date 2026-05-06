import { BarItem, FrictionItem, Quote, SentimentRibbon } from "./ui";
import {
  IconCategory,
  IconWarning,
  IconFace,
  IconCheck,
  IconSparkles,
} from "./icons";

export default function ReadoutTab({ simulation: c }) {
  return (
    <div className="grid gap-gutter" style={{ gridTemplateColumns: "7fr 5fr" }}>
      <div className="flex flex-col gap-gutter">
        <section className="card p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-h3 flex items-center gap-2 m-0">
              <span className="text-primary-container">
                <IconCategory />
              </span>
              Role in Category
            </h3>
            <span className="text-label-caps text-primary-container bg-primary-fixed px-2.5 py-1 rounded-sm">
              {c.role.archetype}
            </span>
          </div>
          <div className="text-body-base">
            <p
              className="m-0 mb-3"
              dangerouslySetInnerHTML={{ __html: c.role.para }}
            />
            <div className="grid grid-cols-3 pt-4 mt-4 border-t border-surface-container-high">
              {c.role.stats.map((s, i) => (
                <div
                  key={i}
                  className={[
                    "text-center px-3",
                    i > 0 ? "border-l border-surface-container-high" : "",
                  ].join(" ")}
                >
                  <span className="block text-h2 text-primary tracking-tight">
                    {s.v}
                  </span>
                  <span className="block text-label-caps text-on-surface-variant mt-1">
                    {s.k}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="card p-6">
          <div className="mb-4">
            <h3 className="text-h3 flex items-center gap-2 m-0">
              <span className="text-error">
                <IconWarning />
              </span>
              Friction & Unmet Needs
            </h3>
          </div>
          <div className="flex flex-col gap-3">
            {c.frictions.map((f, i) => (
              <FrictionItem key={i} {...f} />
            ))}
          </div>
        </section>

        <section className="card p-6">
          <div className="mb-4">
            <h3 className="text-h3 flex items-center gap-2 m-0">
              <span className="text-tertiary">
                <IconFace />
              </span>
              Demographic Sensitivity
            </h3>
          </div>
          <div className="flex flex-col gap-4">
            {c.demographics.map((d, i) => (
              <BarItem key={i} label={d.lb} value={d.v} />
            ))}
          </div>
        </section>
      </div>

      <div className="flex flex-col gap-gutter">
        <section
          className="card p-6"
          style={{
            backgroundImage: "linear-gradient(135deg, #e1e7ff, #f2f3ff)",
          }}
        >
          <div className="text-label-caps text-primary mb-2">Headline Finding</div>
          <h3 className="text-h2 text-primary m-0 mb-3 leading-tight">
            {c.headline}
          </h3>
          <div className="text-label-caps text-on-surface-variant my-4">
            Audience Sentiment
          </div>
          <SentimentRibbon {...c.sentiment} />
        </section>

        <section className="card overflow-hidden">
          <div className="bg-inverse-surface text-white p-6">
            <h4 className="text-h3 m-0">Voice of Persona</h4>
            <div className="text-label-caps text-inverse-on-surface opacity-85 mt-1">
              Representative quotes
            </div>
          </div>
          <div className="px-6 py-5 flex flex-col gap-3.5">
            {c.quotes.slice(0, 2).map((q, i) => (
              <Quote key={i} {...q} />
            ))}
          </div>
        </section>

        <section className="card p-6">
          <div className="mb-4">
            <h3 className="text-h3 flex items-center gap-2 m-0">
              <span className="text-primary-container">
                <IconSparkles />
              </span>
              Recommended Actions
            </h3>
          </div>
          <ul className="m-0 p-0 list-none flex flex-col gap-3.5">
            {c.summary.map((s, i) => (
              <li key={i} className="flex gap-3 items-start text-body-sm leading-snug text-on-surface">
                <span className="text-primary-container flex-shrink-0 mt-0.5">
                  <IconCheck size={18} />
                </span>
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
