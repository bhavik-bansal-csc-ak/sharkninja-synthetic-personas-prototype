import { Link } from "react-router-dom";
import { personas, slugify } from "../data/personas";

export default function PersonasPage() {
  return (
    <>
      <div className="mb-md">
        <h1 className="text-h1 m-0">Persona Library</h1>
      </div>
      <div className="grid gap-gutter" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))" }}>
        {personas.map((p) => (
          <PersonaCard key={p.name} persona={p} />
        ))}
      </div>
    </>
  );
}

function PersonaCard({ persona: p }) {
  const initials = p.name.split(" ").map((s) => s[0]).slice(0, 2).join("");
  return (
    <Link
      to={`/personas/${slugify(p.name)}`}
      className="card p-5 block hover:shadow-md transition-shadow"
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="w-11 h-11 rounded-full bg-primary-fixed flex items-center justify-center text-primary font-bold">
          {initials}
        </div>
        <div className="min-w-0">
          <div className="text-[15px] font-semibold text-on-surface truncate">
            {p.name}, {p.age}
          </div>
          <div className="text-[12px] text-on-surface-variant truncate">
            {p.archetype} · {p.city}
          </div>
        </div>
      </div>
      <div className="text-label-caps text-on-surface-variant mb-2">{p.tier}</div>
      <div className="flex flex-wrap gap-1.5">
        {p.traits.map((t, i) => (
          <span
            key={i}
            className="px-2.5 py-0.5 rounded-full bg-surface-container-low text-[11px] font-medium text-on-surface-variant border border-outline-variant"
          >
            {t}
          </span>
        ))}
      </div>
    </Link>
  );
}
