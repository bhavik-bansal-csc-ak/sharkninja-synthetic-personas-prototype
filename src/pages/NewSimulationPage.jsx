import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Stepper, showToast } from "../components/ui";
import { IconArrowRight, IconChevronLeft } from "../components/icons";
import { personas } from "../data/personas";

const ALL = "All Personas";
// Presets derived from the Persona Library — guarantees presets stay in sync
// with the archetypes the simulation will actually run against.
const ARCHETYPES = Array.from(new Set(personas.map((p) => p.archetype)));
const PRESETS = [ALL, ...ARCHETYPES];

export default function NewSimulationPage() {
  const navigate = useNavigate();
  const [activePresets, setActivePresets] = useState(new Set([ALL]));
  const [variance, setVariance] = useState(true);
  const [bias, setBias] = useState(false);
  const [file, setFile] = useState(null);
  const [dragOver, setDragOver] = useState(false);
  const fileRef = useRef(null);

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

  const handleFile = (f) => {
    if (!f) return;
    setFile(f);
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
            Default: <strong className="text-on-surface">All Personas</strong> runs the simulation across every archetype in the Persona Library. Pick specific cohorts to narrow the focus.
          </p>
        </Field>

        <Field label="Questionnaire" className="mb-4">
          <input
            ref={fileRef}
            type="file"
            accept=".pdf,.docx,.doc,.csv,.txt"
            className="hidden"
            onChange={(e) => handleFile(e.target.files?.[0])}
          />
          {!file ? (
            <div
              onClick={() => fileRef.current?.click()}
              onDragOver={(e) => {
                e.preventDefault();
                setDragOver(true);
              }}
              onDragLeave={() => setDragOver(false)}
              onDrop={(e) => {
                e.preventDefault();
                setDragOver(false);
                handleFile(e.dataTransfer.files?.[0]);
              }}
              className={[
                "rounded-md border-2 border-dashed px-6 py-8 text-center cursor-pointer transition-colors",
                dragOver
                  ? "border-primary-container bg-primary-fixed/40"
                  : "border-outline-variant bg-surface-container-low hover:border-outline hover:bg-surface-container",
              ].join(" ")}
            >
              <div className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center mx-auto mb-3 text-primary-container">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="12" y1="18" x2="12" y2="12" />
                  <line x1="9" y1="15" x2="15" y2="15" />
                </svg>
              </div>
              <div className="text-[14px] font-semibold text-on-surface">
                Drop your questionnaire here, or click to browse
              </div>
              <div className="text-[12px] text-on-surface-variant mt-1">
                PDF, DOCX, CSV, or TXT — up to 10 MB
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-3 px-4 py-3 rounded-md bg-surface-container-low">
              <div className="w-9 h-9 rounded-md bg-primary-fixed flex items-center justify-center text-primary-container flex-shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[14px] font-semibold text-on-surface truncate">{file.name}</div>
                <div className="text-[12px] text-on-surface-variant">
                  {(file.size / 1024).toFixed(1)} KB
                </div>
              </div>
              <button
                type="button"
                onClick={() => {
                  setFile(null);
                  if (fileRef.current) fileRef.current.value = "";
                }}
                className="text-on-surface-variant hover:text-error text-[18px] leading-none px-2 transition-colors"
                aria-label="Remove file"
              >
                ×
              </button>
            </div>
          )}
          <p className="text-[12px] text-on-surface-variant mt-2 m-0">
            Upload the survey or interview guide the personas will respond to. Each question becomes a stimulus.
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
