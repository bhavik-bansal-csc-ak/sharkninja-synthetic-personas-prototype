import { Link, Navigate, useParams } from "react-router-dom";
import { findPersona, slugify } from "../data/personas";
import { simulations } from "../data/simulations";
import { IconChevronLeft, IconQuote, IconWarning, IconSparkles, IconUsers } from "../components/icons";
import { Quote } from "../components/ui";

export default function PersonaDetailPage() {
  const { slug } = useParams();
  const p = findPersona(slug);
  if (!p) return <Navigate to="/personas" replace />;

  const initials = p.name.split(" ").map((s) => s[0]).slice(0, 2).join("");
  const linkedSims = (p.appearedIn || [])
    .map((id) => simulations.find((s) => s.id === id))
    .filter(Boolean);

  return (
    <>
      <Link
        to="/personas"
        className="inline-flex items-center gap-1.5 text-body-sm font-medium text-primary-container hover:underline mb-4"
      >
        <IconChevronLeft size={16} />
        Back to personas
      </Link>

      {/* Hero */}
      <div className="flex items-start gap-5 mb-md">
        <div className="w-16 h-16 rounded-full bg-primary-fixed flex items-center justify-center text-primary font-bold text-[22px] flex-shrink-0">
          {initials}
        </div>
        <div className="flex-1 min-w-0">
          <h1 className="text-h1 m-0">
            {p.name}, {p.age}
          </h1>
          <p className="text-on-surface-variant mt-2 max-w-[780px]">
            {p.archetype} · {p.tier} tier · {p.city}
          </p>
          <div className="flex flex-wrap gap-1.5 mt-3">
            {p.traits.map((t, i) => (
              <span
                key={i}
                className="px-2.5 py-0.5 rounded-full bg-surface-container-low text-[11px] font-medium text-on-surface-variant border border-outline-variant"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Two-column grid */}
      <div className="grid gap-gutter" style={{ gridTemplateColumns: "7fr 5fr" }}>
        {/* LEFT */}
        <div className="flex flex-col gap-gutter">
          <section className="card p-6">
            <h3 className="text-h3 m-0 mb-2 flex items-center gap-2">
              <span className="text-primary-container">
                <IconUsers size={18} />
              </span>
              Behavioral Profile
            </h3>
            <p className="text-body-base text-on-surface-variant m-0 leading-relaxed">{p.bio}</p>
          </section>

          <section className="card p-6">
            <h3 className="text-h3 m-0 mb-3 flex items-center gap-2">
              <span className="text-primary-container">
                <IconSparkles size={18} />
              </span>
              Buying Drivers
            </h3>
            <ul className="m-0 p-0 list-none flex flex-col gap-3">
              {p.drivers.map((d, i) => (
                <li key={i} className="p-3.5 bg-surface-container-low rounded-md">
                  <div className="text-[14px] font-semibold text-on-surface">{d.lb}</div>
                  <div className="text-body-sm text-on-surface-variant mt-0.5">{d.desc}</div>
                </li>
              ))}
            </ul>
          </section>

          <section className="card p-6">
            <h3 className="text-h3 m-0 mb-3 flex items-center gap-2">
              <span className="text-error">
                <IconWarning size={18} />
              </span>
              Common Frictions
            </h3>
            <ul className="m-0 p-0 list-none flex flex-col gap-3">
              {p.frictions.map((f, i) => (
                <li
                  key={i}
                  className="p-3.5 bg-surface-container-low rounded-md border-l-4 border-error"
                >
                  <div className="text-[14px] font-semibold text-on-surface">{f.lb}</div>
                  <div className="text-body-sm text-on-surface-variant mt-0.5">{f.desc}</div>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* RIGHT */}
        <div className="flex flex-col gap-gutter">
          <section className="card p-6">
            <div className="text-label-caps text-on-surface-variant mb-2">Grounding Source</div>
            <div className="text-h3 text-on-surface m-0">{p.grounding}</div>
            <div className="text-body-sm text-on-surface-variant mt-1">
              All persona traits and quotes are synthesised from this dataset and validated against
              SharkNinja’s review and panel data.
            </div>
          </section>

          <section className="card p-6">
            <h3 className="text-h3 m-0 mb-3 flex items-center gap-2">
              <span className="text-primary-container">
                <IconQuote size={18} />
              </span>
              Representative Quote
            </h3>
            <Quote q={p.quote} who={`${p.name} · ${p.archetype}`} />
          </section>

          <section className="card p-6">
            <div className="text-label-caps text-on-surface-variant mb-2">Appears In</div>
            {linkedSims.length === 0 ? (
              <p className="text-body-sm text-on-surface-variant m-0">
                Not yet referenced in any active simulation.
              </p>
            ) : (
              <ul className="m-0 p-0 list-none flex flex-col gap-2">
                {linkedSims.map((s) => (
                  <li key={s.id}>
                    <Link
                      to={`/simulations/${s.id}`}
                      className="flex items-center justify-between py-2 px-3 -mx-3 rounded-md text-body-sm text-on-surface hover:bg-surface-container-low"
                    >
                      <span className="font-medium truncate">{s.title}</span>
                      <span className="text-[11px] text-on-surface-variant ml-3 flex-shrink-0">
                        {s.id}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </section>
        </div>
      </div>
    </>
  );
}

export { slugify };
