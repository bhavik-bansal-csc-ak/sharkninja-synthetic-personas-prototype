import { useEffect, useState } from "react";

/* ---------- Pill ---------- */
export const Pill = ({ status, label, progress }) => {
  if (status === "synthesized") {
    return (
      <span className="pill pill-success">
        <span className="pill-dot bg-success" />
        Synthesized
      </span>
    );
  }
  if (status === "analyzing") {
    return (
      <span className="pill pill-processing">
        <span className="pill-dot bg-primary-container animate-pulse-slow" />
        Analyzing
      </span>
    );
  }
  if (status === "fielding") {
    return (
      <span className="pill pill-warn">
        <span className="pill-dot bg-warn animate-pulse-slow" />
        Fielding {progress != null ? `${progress}%` : ""}
      </span>
    );
  }
  return <span className="pill">{label}</span>;
};

/* ---------- Stepper ---------- */
export const Stepper = ({ steps, current }) => (
  <div className="flex items-center gap-1">
    {steps.map((s, i) => {
      const isActive = i === current;
      const isDone = i < current;
      const stateCls = isActive ? "active" : isDone ? "done" : "";
      return (
        <div key={s} className="flex items-center gap-1">
          <div className={`flex items-center gap-2 ${stateCls}`}>
            <span
              className={[
                "w-7 h-7 rounded-full flex items-center justify-center text-[12px] font-bold border-2",
                isActive
                  ? "bg-primary-container text-white border-primary-container"
                  : isDone
                  ? "bg-surface-container-high text-primary border-surface-container-high"
                  : "bg-transparent text-outline border-outline-variant",
              ].join(" ")}
            >
              {i + 1}
            </span>
            <span
              className={[
                "text-label-caps",
                isActive || isDone ? "text-primary" : "text-outline",
              ].join(" ")}
            >
              {s}
            </span>
          </div>
          {i < steps.length - 1 && (
            <span
              className={[
                "w-8 border-t-2 mx-1",
                i < current ? "border-primary-container" : "border-outline-variant",
              ].join(" ")}
            />
          )}
        </div>
      );
    })}
  </div>
);

/* ---------- Toast ---------- */
let toastSetter = null;
export const Toast = () => {
  const [msg, setMsg] = useState(null);
  useEffect(() => {
    toastSetter = setMsg;
    return () => { toastSetter = null; };
  }, []);
  useEffect(() => {
    if (!msg) return;
    const t = setTimeout(() => setMsg(null), 2400);
    return () => clearTimeout(t);
  }, [msg]);
  return (
    <div
      className={[
        "fixed bottom-6 right-6 px-[18px] py-3.5 rounded-lg bg-inverse-surface text-white text-body-sm font-medium shadow-md z-50 transition-all pointer-events-none",
        msg ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5",
      ].join(" ")}
    >
      {msg || ""}
    </div>
  );
};
export const showToast = (m) => toastSetter && toastSetter(m);

/* ---------- SentimentRibbon ---------- */
export const SentimentRibbon = ({ pos, neu, neg }) => (
  <>
    <div className="flex h-2 rounded-full overflow-hidden bg-surface-dim">
      <span className="bg-success" style={{ width: `${pos}%` }} />
      <span className="bg-outline-variant" style={{ width: `${neu}%` }} />
      <span className="bg-error" style={{ width: `${neg}%` }} />
    </div>
    <div className="flex justify-between text-[11px] text-on-surface-variant mt-2">
      <span className="text-success font-semibold">+ {pos}%</span>
      <span>○ {neu}%</span>
      <span className="text-error font-semibold">− {neg}%</span>
    </div>
  </>
);

/* ---------- BarItem ---------- */
export const BarItem = ({ label, value }) => (
  <div>
    <div className="flex justify-between text-[11px] font-bold text-on-surface-variant tracking-wider uppercase mb-1.5">
      <span>{label}</span>
      <span>{value}%</span>
    </div>
    <div className="h-2 bg-surface-dim rounded-full overflow-hidden">
      <div
        className="h-full bg-primary-container rounded-full transition-[width] duration-300"
        style={{ width: `${value}%` }}
      />
    </div>
  </div>
);

/* ---------- FrictionItem ---------- */
export const FrictionItem = ({ lb, sev, desc }) => (
  <div className={`friction-item ${sev}`}>
    <div className="text-body-sm font-semibold text-on-surface">{lb}</div>
    <div className="text-body-sm text-on-surface-variant mt-0.5">{desc}</div>
  </div>
);

/* ---------- Quote ---------- */
export const Quote = ({ q, who, alt }) => (
  <div className={`quote ${alt ? "alt" : ""}`}>
    <p className="text-body-base italic text-on-surface m-0 leading-snug">"{q}"</p>
    <div
      className={[
        "mt-2 text-label-caps",
        alt ? "text-tertiary" : "text-primary",
      ].join(" ")}
    >
      {who}
    </div>
  </div>
);

/* ---------- DirectionalBanner ---------- */
export const DirectionalBanner = () => (
  <div
    className="rounded-lg p-5 mb-lg flex items-start gap-3.5 border"
    style={{ background: "rgba(0,74,198,0.06)", borderColor: "rgba(0,74,198,0.18)" }}
  >
    <span className="text-primary-container flex-shrink-0 mt-0.5">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="16" x2="12" y2="12" />
        <line x1="12" y1="8" x2="12.01" y2="8" />
      </svg>
    </span>
    <div>
      <div className="text-label-caps text-primary">
        Directional results — pair with primary research
      </div>
      <div className="text-body-sm text-on-surface-variant mt-1">
        All findings come from synthetic persona simulation grounded in SharkNinja’s
        review and panel data. Treat these as fast hypotheses for strategic planning;
        validate with a human cohort before any pricing or launch decision.
      </div>
    </div>
  </div>
);
