import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Stepper, showToast } from "../components/ui";
import { IconArrowRight, IconChevronLeft } from "../components/icons";
import { personas } from "../data/personas";

const ARCHETYPES = Array.from(new Set(personas.map((p) => p.archetype)));

const PRESET_GROUPS = [
  {
    key: "archetype",
    label: "Persona Archetype",
    options: ARCHETYPES,
    allLabel: "All Archetypes",
  },
  {
    key: "age",
    label: "Age Group",
    options: ["18–24", "25–34", "35–44", "45–54", "55–64", "65+"],
    allLabel: "All Ages",
  },
  {
    key: "gender",
    label: "Gender",
    options: ["Female", "Male", "Non-binary"],
    allLabel: "All Genders",
  },
  {
    key: "income",
    label: "Household Income",
    options: ["Under $35K", "$35K–$75K", "$75K–$150K", "$150K+"],
    allLabel: "All Income Levels",
  },
  {
    key: "household",
    label: "Household Composition",
    options: ["Single", "Couple, no kids", "Family with kids", "Empty nester", "Multi-generational"],
    allLabel: "All Household Types",
  },
];

const ALL_KEY = "__ALL__";

export default function NewSimulationPage() {
  const navigate = useNavigate();
  const [presets, setPresets] = useState(
    Object.fromEntries(PRESET_GROUPS.map((g) => [g.key, new Set([ALL_KEY])]))
  );
  const [variance, setVariance] = useState(true);
  const [bias, setBias] = useState(false);
  const [file, setFile] = useState(null);
  const [dragOver, setDragOver] = useState(false);
  const fileRef = useRef(null);

  const toggleInGroup = (groupKey, option) => {
    setPresets((prev) => {
      const next = new Set(prev[groupKey]);
      if (option === ALL_KEY) {
        return { ...prev, [groupKey]: new Set([ALL_KEY]) };
      }
      next.delete(ALL_KEY);
      next.has(option) ? next.delete(option) : next.add(option);
      if (next.size === 0) return { ...prev, [groupKey]: new Set([ALL_KEY]) };
      return { ...prev, [groupKey]: next };
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

  const activeFilterCount = PRESET_GROUPS.reduce((sum, g) => {
    const set = presets[g.key];
    return set.has(ALL_KEY) ? sum : sum + set.size;
  }, 0);

  const resetAll = () =>
    setPresets(Object.fromEntries(PRESET_GROUPS.map((g) => [g.key, new Set([ALL_KEY])])));

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

        {/* Population filters — section header */}
        <div className="flex items-center justify-between mb-3 mt-5">
          <div className="flex items-center gap-2">
            <span className="text-label-caps text-on-surface-variant">Population Filters</span>
            {activeFilterCount > 0 && (
              <span className="text-[11px] px-2 py-0.5 rounded-full bg-primary-fixed text-primary font-semibold">
                {activeFilterCount} active
              </span>
            )}
          </div>
          {activeFilterCount > 0 && (
            <button
              type="button"
              onClick={resetAll}
              className="text-[12px] text-on-surface-variant hover:text-primary-container hover:underline"
            >
              Reset all
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-4">
          {PRESET_GROUPS.map((g) => (
            <MultiSelectDropdown
              key={g.key}
              label={g.label}
              options={g.options}
              allLabel={g.allLabel}
              selected={presets[g.key]}
              onToggle={(opt) => toggleInGroup(g.key, opt)}
            />
          ))}
        </div>

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
            Upload the survey or interview guide the personas will respond to.
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

/* ---------- MultiSelectDropdown ---------- */
function MultiSelectDropdown({ label, options, allLabel, selected, onToggle }) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    const onClick = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const isAll = selected.has(ALL_KEY);
  const summaryText = isAll
    ? allLabel
    : selected.size === 1
    ? Array.from(selected)[0]
    : `${selected.size} selected`;

  return (
    <div ref={wrapRef}>
      <label className="block text-label-caps text-on-surface-variant mb-1.5">{label}</label>
      <div className="relative">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-haspopup="listbox"
          aria-expanded={open}
          className={[
            "field-input flex items-center justify-between text-left w-full transition-colors",
            open ? "ring-2 ring-primary-container/20 border-primary-container" : "",
          ].join(" ")}
        >
          <span className={isAll ? "text-on-surface-variant" : "text-on-surface font-medium truncate"}>
            {summaryText}
          </span>
          <svg
            width="16" height="16" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            className={["text-on-surface-variant transition-transform flex-shrink-0 ml-2", open ? "rotate-180" : ""].join(" ")}
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>

        {open && (
          <div
            role="listbox"
            className="absolute z-20 top-full left-0 right-0 mt-1 bg-surface-bright border border-outline-variant rounded-md shadow-md max-h-72 overflow-auto p-1"
          >
            <Option
              label={allLabel}
              checked={isAll}
              onClick={() => onToggle(ALL_KEY)}
              emphasised
            />
            <div className="border-t border-surface-container-high my-1" />
            {options.map((o) => (
              <Option
                key={o}
                label={o}
                checked={!isAll && selected.has(o)}
                onClick={() => onToggle(o)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function Option({ label, checked, onClick, emphasised }) {
  return (
    <button
      type="button"
      onClick={onClick}
      role="option"
      aria-selected={checked}
      className={[
        "w-full flex items-center gap-2.5 px-3 py-2 rounded text-[13px] text-left transition-colors",
        checked
          ? "bg-primary-fixed text-primary font-semibold"
          : "text-on-surface hover:bg-surface-container-low",
        emphasised && !checked ? "text-on-surface-variant" : "",
      ].join(" ")}
    >
      <span
        className={[
          "w-4 h-4 rounded border flex items-center justify-center flex-shrink-0",
          checked
            ? "bg-primary-container border-primary-container text-white"
            : "bg-surface-bright border-outline-variant",
        ].join(" ")}
      >
        {checked && (
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        )}
      </span>
      <span className="truncate">{label}</span>
    </button>
  );
}

function Field({ label, className = "", children }) {
  return (
    <div className={className}>
      <label className="block text-label-caps text-on-surface-variant mb-1.5">{label}</label>
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
