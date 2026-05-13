import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { simulations } from "../data/simulations";
import { Quote } from "./ui";
import {
  IconActivity,
  IconUsers,
  IconWarning,
  IconFace,
  IconCategory,
  IconSparkles,
  IconQuote,
  IconInfo,
} from "./icons";

const COHORT_COLORS = ["#003594", "#4f86f7", "#7aa8ff", "#b4c5ff"];
const SEV_DOT  = { high: "bg-error", med: "bg-warn", low: "bg-success" };
const SEV_TINT = { high: "bg-error/10 text-error", med: "bg-warn/10 text-warn", low: "bg-success/10 text-success" };
const VERSION_KEY = "personasim.readout.version";

/* ---------- Directional helpers — no statistics, only tier labels ---------- */
function tierFromPct(v, max = 100) {
  const r = v / max;
  if (r >= 0.8) return { key: "vh", label: "Very High", tone: "text-primary font-semibold" };
  if (r >= 0.6) return { key: "h",  label: "High",      tone: "text-primary-container font-semibold" };
  if (r >= 0.4) return { key: "m",  label: "Moderate",  tone: "text-on-surface" };
  if (r >= 0.2) return { key: "l",  label: "Low",       tone: "text-on-surface-variant" };
  return        { key: "vl", label: "Very Low",  tone: "text-outline" };
}
function tierFromRank(r) {
  if (r <= 1.5) return { label: "Top",      tone: "text-primary font-semibold" };
  if (r <= 2.5) return { label: "Strong",   tone: "text-primary-container font-semibold" };
  if (r <= 3.5) return { label: "Mid",      tone: "text-on-surface" };
  return         { label: "Weak",    tone: "text-on-surface-variant" };
}
function netSignalLabel(pos, neg) {
  const net = pos - neg;
  if (net >= 50) return "Strongly positive";
  if (net >= 30) return "Net positive";
  if (net >= 10) return "Leaning positive";
  if (net >= -10) return "Mixed";
  if (net >= -30) return "Leaning negative";
  return "Net negative";
}
function audienceShareLabel(rank, total) {
  if (rank === 0) return "Largest cohort";
  if (rank === total - 1) return "Smallest cohort";
  if (rank === 1) return "Second largest";
  return "Mid-sized cohort";
}

function TierBadge({ tier }) {
  return (
    <span className={`text-[11px] font-semibold tracking-wide ${tier.tone}`}>{tier.label}</span>
  );
}

/* ---------- Shared primitives ---------- */
function Kpi({ label, value, sub, tone = "on-surface" }) {
  const toneCls =
    tone === "primary" ? "text-primary"
    : tone === "success" ? "text-success"
    : "text-on-surface";
  return (
    <div className="card p-4 flex flex-col gap-1 min-w-0">
      <div className="text-label-caps text-on-surface-variant truncate">{label}</div>
      <div className={`text-h3 tracking-tight ${toneCls}`}>{value}</div>
      {sub && <div className="text-[11px] text-on-surface-variant truncate">{sub}</div>}
    </div>
  );
}

function CardTitle({ icon, children, accent = "primary-container" }) {
  return (
    <h3 className="text-h3 m-0 mb-4 flex items-center gap-2">
      <span className={`text-${accent}`}>{icon}</span>
      <span>{children}</span>
    </h3>
  );
}

function HBar({ label, value, max = 100, highlight }) {
  const pct = Math.min(100, (value / max) * 100);
  const t = tierFromPct(value, max);
  return (
    <div>
      <div className="flex items-baseline justify-between gap-2 mb-1">
        <span className={["text-[12.5px] truncate", highlight ? "font-semibold text-on-surface" : "text-on-surface"].join(" ")}>{label}</span>
        <TierBadge tier={t} />
      </div>
      <div className="h-1.5 bg-surface-container rounded-full overflow-hidden">
        <div
          className={["h-full rounded-full transition-all", highlight ? "bg-primary-container" : "bg-primary-fixed-dim"].join(" ")}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

/* ---------- Directional banner ---------- */
function DirectionalNotice() {
  return (
    <section
      className="rounded-lg p-3.5 flex items-start gap-3 border"
      style={{ background: "rgba(178,91,0,0.06)", borderColor: "rgba(178,91,0,0.20)" }}
    >
      <span className="text-warn flex-shrink-0 mt-0.5"><IconInfo size={16} /></span>
      <div className="text-[12px] text-warn leading-snug">
        <strong className="font-semibold">Directional indicators only.</strong>{" "}
        Synthetic-persona simulation surfaces relative signal between cohorts and claims, not statistical survey data. All tiers are comparisons within this study; pair with a human cohort before any pricing or launch decision.
      </div>
    </section>
  );
}

/* =================================================================
   V1 — POC (lightweight, decision-ready)
   =================================================================*/

function ReadoutV1({ sim: c }) {
  const premium = c.role.stats[0];
  const premiumTier = /\d/.test(String(premium.v))
    ? tierFromPct(parseFloat(String(premium.v).replace(/[^\d.]/g, "")))
    : { label: String(premium.v), tone: "text-primary font-semibold" };

  return (
    <div className="flex flex-col gap-gutter">
      {/* <DirectionalNotice /> */}

      <div className="grid grid-cols-3 gap-3">
        <Kpi label="Audience" value={c.audience.toLocaleString()} sub="synthetic personas" />
        <Kpi label="Net Signal" value={netSignalLabel(c.sentiment.pos, c.sentiment.neg)} sub="vs. comparable cohorts" tone="success" />
        <Kpi label={premium.k} value={premiumTier.label} tone="primary" />
      </div>

      <section className="card p-5">
        <div className="flex items-center justify-between mb-3">
          <span className="text-label-caps text-on-surface-variant">Audience Sentiment</span>
          <span className="text-[11.5px] text-on-surface-variant">{netSignalLabel(c.sentiment.pos, c.sentiment.neg)}</span>
        </div>
        <div className="flex h-2 rounded-full overflow-hidden bg-surface-dim">
          <span className="bg-success" style={{ width: `${c.sentiment.pos}%` }} />
          <span className="bg-outline-variant" style={{ width: `${c.sentiment.neu}%` }} />
          <span className="bg-error" style={{ width: `${c.sentiment.neg}%` }} />
        </div>
        <div className="flex justify-between text-[11px] text-on-surface-variant mt-2">
          <span className="text-success font-semibold">+ Positive</span>
          <span>○ Neutral</span>
          <span className="text-error font-semibold">− Negative</span>
        </div>
      </section>

      <section className="card p-6">
        <div className="text-label-caps text-primary mb-2">Headline Finding</div>
        <h2 className="text-h2 text-primary m-0 leading-tight">{c.headline}</h2>
      </section>

      <section className="card p-5">
        <CardTitle icon={<IconWarning size={18} />} accent="error">Top Frictions</CardTitle>
        <div className="flex flex-col gap-2.5">
          {c.frictions.map((f, i) => (
            <div key={i} className="flex items-center gap-3 px-3 py-2.5 rounded-md bg-surface-container-low">
              <span className={`w-2 h-2 rounded-full flex-shrink-0 ${SEV_DOT[f.sev]}`} />
              <span className="text-[13px] font-semibold text-on-surface flex-shrink-0">{f.lb}</span>
              <span className={`ml-auto text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${SEV_TINT[f.sev]}`}>
                {f.sev === "high" ? "Severe" : f.sev === "med" ? "Notable" : "Minor"}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="card p-5">
        <CardTitle icon={<IconQuote size={18} />}>Top Voice</CardTitle>
        {c.quotes[0] && <Quote {...c.quotes[0]} />}
      </section>
    </div>
  );
}

/* =================================================================
   V2 — Full research dashboard
   =================================================================*/

function BrandRecall({ research }) {
  const max = Math.max(...research.competitive.flatMap((b) => [b.recall, b.considered, b.purchased]));
  return (
    <section className="card p-5">
      <CardTitle icon={<IconActivity size={18} />}>Brand Recall vs. Competitive Set</CardTitle>
      <div className="flex flex-col gap-4">
        {research.competitive.map((b, i) => {
          const overall = (b.recall + b.considered + b.purchased) / 3;
          const tier = tierFromPct(overall, max);
          return (
            <div key={i} className="flex flex-col gap-1.5">
              <div className="flex items-baseline justify-between">
                <span className={["text-[13px]", i === 0 ? "font-semibold text-primary" : "text-on-surface"].join(" ")}>{b.brand}</span>
                <TierBadge tier={tier} />
              </div>
              <div className="flex gap-1 h-2">
                {[b.recall, b.considered, b.purchased].map((v, j) => (
                  <div key={j} className="flex-1 bg-surface-container rounded-full overflow-hidden">
                    <div className="h-full rounded-full" style={{ width: `${(v / max) * 100}%`, background: COHORT_COLORS[j] }} />
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex gap-3 mt-4 text-[10.5px] text-on-surface-variant">
        <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-sm" style={{ background: COHORT_COLORS[0] }} />Recall</span>
        <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-sm" style={{ background: COHORT_COLORS[1] }} />Considered</span>
        <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-sm" style={{ background: COHORT_COLORS[2] }} />Purchased</span>
      </div>
    </section>
  );
}

function PermissionBarriers({ research }) {
  const max = Math.max(...research.barriers.flatMap((b) => [b.premium, b.mid]));
  return (
    <section className="card p-5">
      <CardTitle icon={<IconWarning size={18} />} accent="error">Permission Barriers</CardTitle>
      <div className="flex items-end gap-3 h-32 px-1">
        {research.barriers.map((b, i) => (
          <div key={i} className="flex-1 flex flex-col items-center justify-end gap-1 min-w-0">
            <div className="w-full flex items-end justify-center gap-0.5 h-full">
              <div className="flex-1 bg-primary rounded-t-sm" style={{ height: `${(b.premium / max) * 100}%`, minHeight: "8px" }} />
              <div className="flex-1 bg-primary-fixed-dim rounded-t-sm" style={{ height: `${(b.mid / max) * 100}%`, minHeight: "8px" }} />
            </div>
            <div className="text-[10px] text-on-surface-variant text-center leading-tight truncate w-full">{b.cohort}</div>
          </div>
        ))}
      </div>
      <div className="flex gap-3 mt-3 text-[10.5px] text-on-surface-variant justify-center">
        <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-sm bg-primary" />Premium</span>
        <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-sm bg-primary-fixed-dim" />Mid</span>
      </div>
    </section>
  );
}

function FeaturePriorityHeatmap({ research }) {
  const cells = research.featurePriority.flatMap((r) => [r.c0, r.c1, r.c2, r.c3]);
  const max = Math.max(...cells);
  const min = Math.min(...cells);
  const tone = (v) => {
    const t = (v - min) / (max - min || 1);
    const r = Math.round(219 + (0 - 219) * t);
    const g = Math.round(225 + (53 - 225) * t);
    const b = Math.round(255 + (148 - 255) * t);
    return { bg: `rgb(${r},${g},${b})`, fg: t > 0.55 ? "#ffffff" : "#003594" };
  };
  return (
    <section className="card p-5">
      <CardTitle icon={<IconCategory size={18} />}>Feature Priority Heatmap</CardTitle>
      <div className="overflow-hidden rounded-md border border-surface-container-high">
        <table className="w-full text-[11px]">
          <thead>
            <tr className="bg-surface-container-low text-label-caps text-on-surface-variant">
              <th className="text-left px-3 py-2.5">Feature</th>
              {research.cohorts.map((c, i) => (
                <th key={i} className="text-center px-2 py-2.5 truncate">{c}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {research.featurePriority.map((row, i) => {
              const vals = [row.c0, row.c1, row.c2, row.c3];
              return (
                <tr key={i}>
                  <td className="px-3 py-2 text-[12px] font-medium text-on-surface">{row.feature}</td>
                  {vals.map((v, j) => {
                    const t = tone(v);
                    const tier = tierFromPct(v, max);
                    return (
                      <td
                        key={j}
                        className="px-2 py-2 text-center font-semibold transition-colors"
                        style={{ background: t.bg, color: t.fg }}
                      >
                        {tier.label}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="flex items-center gap-2 mt-3 text-[10.5px] text-on-surface-variant justify-end">
        <span>Less important</span>
        <span className="w-24 h-2 rounded-full" style={{ background: "linear-gradient(90deg, rgb(219,225,255), rgb(0,53,148))" }} />
        <span>More important</span>
      </div>
    </section>
  );
}

function ConversionFunnel({ research }) {
  if (!research.funnel) return null;
  const max = Math.max(...research.funnel.map((s) => s.v));
  const sorted = [...research.funnel].sort((a, b) => b.v - a.v);
  const rank = (s) => sorted.findIndex((x) => x.stage === s.stage);
  return (
    <section className="card p-5 lg:col-span-2">
      <CardTitle icon={<IconUsers size={18} />}>Audience Funnel</CardTitle>
      <div className="flex items-end gap-2">
        {research.funnel.map((s, i) => {
          const w = `${(s.v / max) * 100}%`;
          const t = tierFromPct(s.v, max);
          return (
            <div key={i} className="flex-1 flex flex-col items-center min-w-0">
              <div className={`text-[13px] font-semibold ${t.tone}`}>{t.label}</div>
              <div className="text-[10px] text-on-surface-variant mb-1.5">{audienceShareLabel(rank(s), sorted.length)}</div>
              <div className="w-full bg-surface-container rounded-md overflow-hidden h-3 relative">
                <div className="h-full rounded-md" style={{ width: w, background: `linear-gradient(90deg, ${COHORT_COLORS[Math.min(i, 3)]}, ${COHORT_COLORS[Math.min(i + 1, 3)]})` }} />
              </div>
              <div className="text-[11px] font-medium text-on-surface text-center mt-2 leading-tight">{s.stage}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function ClaimAppeal({ research }) {
  const claims = research.claimAppeal.map((row) => {
    const vals = [row.c0, row.c1, row.c2, row.c3];
    const avg = vals.reduce((a, b) => a + b, 0) / vals.length;
    return { claim: row.claim, avgRank: avg, tier: tierFromRank(avg), score: Math.max(0, 100 - (avg - 1) * 25) };
  });
  return (
    <section className="card p-5">
      <CardTitle icon={<IconSparkles size={18} />}>Claim Appeal</CardTitle>
      <div className="flex flex-col gap-3">
        {claims.map((c, i) => {
          const pct = Math.min(100, c.score);
          return (
            <div key={i}>
              <div className="flex items-baseline justify-between gap-2 mb-1">
                <span className="text-[12.5px] text-on-surface truncate">{c.claim}</span>
                <span className={`text-[11px] font-semibold ${c.tier.tone}`}>{c.tier.label}</span>
              </div>
              <div className="h-1.5 bg-surface-container rounded-full overflow-hidden">
                <div className="h-full rounded-full bg-primary-container" style={{ width: `${pct}%` }} />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function PositioningExpectations({ research }) {
  return (
    <section className="card p-5">
      <CardTitle icon={<IconFace size={18} />} accent="tertiary">Positioning Expectations</CardTitle>
      <div className="flex flex-col gap-3">
        {research.expectations.map((row, i) => {
          const vals = [row.c0, row.c1, row.c2, row.c3];
          const total = vals.reduce((a, b) => a + b, 0) || 1;
          return (
            <div key={i}>
              <div className="text-[12.5px] font-medium text-on-surface mb-1">{row.bucket}</div>
              <div className="flex gap-0.5 h-3 rounded-sm overflow-hidden">
                {vals.map((v, j) => (
                  <div
                    key={j}
                    style={{ width: `${(v / total) * 100}%`, background: COHORT_COLORS[j], minWidth: "8px" }}
                    title={`${research.cohorts[j]}: ${tierFromPct(v, 50).label}`}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex flex-wrap gap-2 mt-3 text-[10.5px] text-on-surface-variant">
        {research.cohorts.map((c, i) => (
          <span key={i} className="flex items-center gap-1">
            <span className="w-2.5 h-2.5 rounded-sm" style={{ background: COHORT_COLORS[i] }} />
            {c}
          </span>
        ))}
      </div>
    </section>
  );
}

function GoldStandard({ research }) {
  return (
    <section className="card p-5">
      <CardTitle icon={<IconUsers size={18} />}>Standard Recognition</CardTitle>
      <div className="flex flex-col gap-3.5">
        {research.goldStandard.map((row, i) => (
          <div key={i}>
            <div className="text-[12.5px] font-medium text-on-surface mb-1.5">{row.cohort}</div>
            <div className="grid grid-cols-3 gap-1.5">
              {[
                { label: "Recognises", value: row.recognizes, color: COHORT_COLORS[0] },
                { label: "Sees as Low", value: row.perceivesLow, color: "#e07071" },
                { label: "Quality Cue", value: row.qualityPrio, color: "#2db86b" },
              ].map((m, j) => {
                const t = tierFromPct(m.value, 50);
                return (
                  <div key={j} className="flex flex-col gap-1 min-w-0">
                    <div className="flex items-baseline justify-between">
                      <span className="text-[10px] text-on-surface-variant truncate">{m.label}</span>
                      <span className="text-[10.5px] font-semibold" style={{ color: m.color }}>{t.label}</span>
                    </div>
                    <div className="h-1.5 bg-surface-container rounded-full overflow-hidden">
                      <div className="h-full rounded-full" style={{ width: `${(m.value / 50) * 100}%`, background: m.color }} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Demographics({ demographics }) {
  return (
    <section className="card p-5">
      <CardTitle icon={<IconFace size={18} />} accent="tertiary">Demographic Sensitivity</CardTitle>
      <div className="flex flex-col gap-3">
        {demographics.map((d, i) => (
          <HBar key={i} label={d.lb} value={d.v} />
        ))}
      </div>
    </section>
  );
}

function CrossSimulationMatrix({ current }) {
  const rows = simulations
    .filter((s) => s.status !== "fielding")
    .map((s) => {
      const net = s.sentiment ? s.sentiment.pos - s.sentiment.neg : 0;
      const recallVal =
        s.research && s.research.competitive && s.research.competitive[0]
          ? s.research.competitive[0].recall
          : null;
      const premiumStat = s.role && s.role.stats && s.role.stats.find((x) => /premium/i.test(x.k));
      const premiumNum = premiumStat ? parseFloat(String(premiumStat.v).replace(/[^\d.]/g, "")) : NaN;
      return {
        id: s.id,
        title: s.title,
        market: s.market,
        audience: s.audience,
        netLabel: netSignalLabel(s.sentiment.pos, s.sentiment.neg),
        recallLabel: recallVal != null ? tierFromPct(recallVal, 60).label : "—",
        premiumLabel: !isNaN(premiumNum) ? tierFromPct(premiumNum).label : (premiumStat ? premiumStat.v : "—"),
        switchIntent: s.role && s.role.stats && s.role.stats[2] ? s.role.stats[2].v : "—",
        isCurrent: s.id === current.id,
      };
    });

  rows.sort((a, b) => (a.isCurrent ? -1 : b.isCurrent ? 1 : 0));

  return (
    <section className="card p-5">
      <CardTitle icon={<IconActivity size={18} />}>Cross-Simulation Matrix</CardTitle>
      <div className="text-[12px] text-on-surface-variant mb-4">
        Same directional signals across every simulation. Current simulation highlighted.
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-[12.5px] min-w-[700px]">
          <thead>
            <tr className="text-label-caps text-on-surface-variant border-b border-surface-container-high">
              <th className="text-left px-3 py-2.5">Simulation</th>
              <th className="text-left px-3 py-2.5">Market</th>
              <th className="text-right px-3 py-2.5">Audience</th>
              <th className="text-right px-3 py-2.5">Net Signal</th>
              <th className="text-right px-3 py-2.5">Recall</th>
              <th className="text-right px-3 py-2.5">Premium</th>
              <th className="text-right px-3 py-2.5">Switch Intent</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr
                key={r.id}
                className={[
                  "border-b border-surface-container-high last:border-b-0 transition-colors",
                  r.isCurrent ? "bg-primary-fixed/40" : "hover:bg-surface-container-low",
                ].join(" ")}
              >
                <td className="px-3 py-3">
                  {r.isCurrent ? (
                    <span className="font-semibold text-primary">{r.title}</span>
                  ) : (
                    <Link to={`/simulations/${r.id}`} className="text-on-surface hover:text-primary-container hover:underline">
                      {r.title}
                    </Link>
                  )}
                </td>
                <td className="px-3 py-3 text-on-surface-variant">{r.market}</td>
                <td className="px-3 py-3 text-right text-on-surface-variant">{r.audience.toLocaleString()}</td>
                <td className="px-3 py-3 text-right font-semibold text-primary">{r.netLabel}</td>
                <td className="px-3 py-3 text-right text-on-surface">{r.recallLabel}</td>
                <td className="px-3 py-3 text-right font-semibold text-primary">{r.premiumLabel}</td>
                <td className="px-3 py-3 text-right text-on-surface-variant">{r.switchIntent}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function ReadoutV2({ sim: c }) {
  const r = c.research;
  const premium = c.role.stats[0];
  const premiumTier = /\d/.test(String(premium.v))
    ? tierFromPct(parseFloat(String(premium.v).replace(/[^\d.]/g, "")))
    : { label: String(premium.v), tone: "text-primary font-semibold" };

  return (
    <div className="flex flex-col gap-gutter">
      <DirectionalNotice />

      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
        <Kpi label="Audience" value={c.audience.toLocaleString()} sub="synthetic personas" />
        <Kpi label="Net Signal" value={netSignalLabel(c.sentiment.pos, c.sentiment.neg)} sub="vs. comparable cohorts" tone="success" />
        {c.role.stats.map((s, i) => {
          const num = parseFloat(String(s.v).replace(/[^\d.]/g, ""));
          const label = !isNaN(num) ? tierFromPct(num).label : s.v;
          return <Kpi key={i} label={s.k} value={label} tone="primary" />;
        })}
      </div>

      <section className="card p-5">
        <div className="flex items-center justify-between mb-3">
          <span className="text-label-caps text-on-surface-variant">Audience Sentiment</span>
          <span className="text-[11.5px] text-on-surface-variant">{netSignalLabel(c.sentiment.pos, c.sentiment.neg)}</span>
        </div>
        <div className="flex h-2 rounded-full overflow-hidden bg-surface-dim">
          <span className="bg-success" style={{ width: `${c.sentiment.pos}%` }} />
          <span className="bg-outline-variant" style={{ width: `${c.sentiment.neu}%` }} />
          <span className="bg-error" style={{ width: `${c.sentiment.neg}%` }} />
        </div>
        <div className="flex justify-between text-[11px] text-on-surface-variant mt-2">
          <span className="text-success font-semibold">+ Positive</span>
          <span>○ Neutral</span>
          <span className="text-error font-semibold">− Negative</span>
        </div>
      </section>

      {r && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter">
          <ConversionFunnel research={r} />
          <BrandRecall research={r} />
          <PermissionBarriers research={r} />
          <FeaturePriorityHeatmap research={r} />
          <ClaimAppeal research={r} />
          <PositioningExpectations research={r} />
          <GoldStandard research={r} />
        </div>
      )}

      {!r && (
        <div className="card p-6 text-center text-body-sm text-on-surface-variant">
          Full research signals not available for this simulation. Switch to POC view for the lightweight summary.
        </div>
      )}

      <CrossSimulationMatrix current={c} />

      <Demographics demographics={c.demographics} />

      <section className="card overflow-hidden">
        <div className="px-5 py-4 flex items-center gap-2 border-b border-surface-container-high">
          <span className="text-primary-container"><IconQuote size={16} /></span>
          <span className="text-label-caps text-on-surface-variant">Top Voice</span>
        </div>
        <div className="p-5">{c.quotes[0] && <Quote {...c.quotes[0]} />}</div>
      </section>
    </div>
  );
}

/* =================================================================
   MAIN — version toggle
   =================================================================*/

export default function ReadoutTab({ simulation: c }) {
  const [version, setVersion] = useState("v1");

  useEffect(() => {
    try {
      const saved = localStorage.getItem(VERSION_KEY);
      if (saved === "v1" || saved === "v2") setVersion(saved);
    } catch (e) { /* localStorage unavailable */ }
  }, []);

  const setAndPersist = (v) => {
    setVersion(v);
    try { localStorage.setItem(VERSION_KEY, v); } catch (e) { /* no-op */ }
  };

  return (
    <div className="flex flex-col gap-gutter">
      {/* <div className="flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center gap-2">
          <span className="text-label-caps text-on-surface-variant">Results view</span>
          <span className="text-[11px] px-2 py-0.5 rounded-full bg-warn-soft text-warn font-semibold tracking-wider uppercase">
            POC
          </span>
        </div>
        <div className="flex p-0.5 bg-surface-container-low rounded-md border border-outline-variant">
          <button
            type="button"
            onClick={() => setAndPersist("v1")}
            className={[
              "px-3 py-1.5 rounded text-[12px] font-medium transition-colors",
              version === "v1" ? "bg-primary-container text-white" : "text-on-surface-variant hover:text-on-surface",
            ].join(" ")}
          >
            v1 · Quick Read
          </button>
          <button
            type="button"
            onClick={() => setAndPersist("v2")}
            className={[
              "px-3 py-1.5 rounded text-[12px] font-medium transition-colors",
              version === "v2" ? "bg-primary-container text-white" : "text-on-surface-variant hover:text-on-surface",
            ].join(" ")}
          >
            v2 · Full Dashboard
          </button>
        </div>
      </div> */}

      {version === "v1" ? <ReadoutV1 sim={c} /> : <ReadoutV2 sim={c} />}
    </div>
  );
}
