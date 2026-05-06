import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Stepper, showToast } from "../components/ui";
import { IconArrowRight, IconChevronLeft } from "../components/icons";

const ALL = "All Personas";
const PRESETS = [
  ALL,
  "Urban Parents",
  "Pet Households",
  "Empty Nesters",
  "Renters 25–34",
  "Premium Tier",
];

export default function NewSimulationPage() {
  const navigate = useNavigate();
  const [activePresets, setActivePresets] = useState(new Set([ALL]));
  const [variance, setVariance] = useState(true);
  const [bias, setBias] = useState(false);

  const togglePreset = (p) => {
    setActivePresets((prev) => {
      const next = new Set(prev);
      if (p === ALL) {
        return new Set([ALL]);
      }
      next.delete(ALL);
      next.has(p) ? next.delete(p) : next.add(p);
      if (next.size === 0) return new Set([ALL]);
      return next;
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    showToast("Simulation initialized — synthesis underway");
    setTimeout(() => navigate("/simulations"), 700);
  };

  return (
    <>
      <Link
        to="/simulations"
        className="inline-flex items-center gap-1.5 text-body-sm font-medium text-primary-container hover:underline mb-2"
      >
        <IconChevronLeft size={16} />
        Back to simulations
      </Link>
      <h1 className="text-h1 m-0 mt-2">Run Simulation</h1>
      <div className="mt-5 mb-md">
        <Stepper steps={["Setup", "Generation", "Analysis"]} current={0} />
      </div>

      <form onSubmit={onSubmit} className="card p-8">
        <h2 className="text-h2 m-0">Research Core</h2>
        <p className="text-on-surface-variant m-0 mt-1 mb-6">
          Define the product, market, and persona cohort.
        </p>

        <div className="grid grid-cols-2 gap-5 mb-4">
          <Field label="Product">
            <input className="field-input" placeholder="e.g. Cordless Hand Vac" required />
          </Field>
          <Field label="SKU">
            <input className="field-input" placeholder="e.g. WV410BL" required />
          </Field>
        </div>

        <div className="grid grid-cols-2 gap-5 mb-4">
          <Field label="Market">
            <select className="field-input" required defaultValue="United States">
              <option>United States</option>
              <option>United Kingdom</option>
              <option>Germany</option>
              <option>France</option>
              <option>Mexico</option>
            </select>
          </Field>
          <Field label="Audience Size">
            <select className="field-input" required defaultValue="500 personas">
              <option>250 personas</option>
              <option>500 personas</option>
              <option>750 personas</option>
              <option>1,000 personas</option>
            </select>
          </Field>
        </div>

        <Field label="Demographic Presets" className="mb-4">
          <div className="flex flex-wrap gap-2">
            {PRESETS.map((p) => (
              <button
                key={p}
                type="button"
                onClick={() => togglePreset(p)}
                className={`chip ${activePresets.has(p) ? "active" : ""}`}
              >
                {p}
              </button>
            ))}
          </div>
          <p className="text-[12px] text-on-surface-variant mt-2 m-0">
            Default: <strong className="text-on-surface">All Personas</strong> runs the simulation across every archetype in the library. Pick specific cohorts to narrow the focus.
          </p>
        </Field>

        <Field label="Concept Brief / Stimulus" className="mb-4">
          <textarea
            className="field-input min-h-[96px] resize-y"
            placeholder="Paste the product brief, claim copy, or pricing tiers the personas should respond to..."
            required
          />
        </Field>

        <div className="grid grid-cols-2 gap-5 mt-2">
          <ToggleRow
            name="Behavioral Variance"
            sub="Allow outliers in persona personality traits"
            on={variance}
            onClick={() => setVariance((v) => !v)}
          />
          <ToggleRow
            name="Strict Bias Filtering"
            sub="Enable enterprise-grade safety alignment"
            on={bias}
            onClick={() => setBias((v) => !v)}
          />
        </div>

        <div className="flex justify-end gap-3 pt-5 mt-2 border-t border-outline-variant">
          <Link to="/simulations" className="btn btn-secondary">
            Cancel
          </Link>
          <button type="submit" className="btn btn-primary">
            Initialize Simulation
            <IconArrowRight size={16} />
          </button>
        </div>
      </form>
    </>
  );
}

function Field({ label, className = "", children }) {
  return (
    <div className={className}>
      <label className="block text-label-caps text-on-surface-variant mb-1.5">
        {label}
      </label>
      {children}
    </div>
  );
}

function ToggleRow({ name, sub, on, onClick }) {
  return (
    <div className="flex items-center justify-between py-3 gap-4">
      <div className="flex-1">
        <div className="text-[14px] font-semibold text-on-surface">{name}</div>
        <div className="text-[12px] text-on-surface-variant mt-0.5">{sub}</div>
      </div>
      <button
        type="button"
        onClick={onClick}
        className={`switch ${on ? "on" : ""}`}
        aria-pressed={on}
      />
    </div>
  );
}
