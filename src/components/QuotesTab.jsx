import { Quote } from "./ui";
import { IconQuote } from "./icons";

export default function QuotesTab({ simulation: c }) {
  return (
    <section className="card p-6">
      <div className="mb-4">
        <h3 className="text-h3 flex items-center gap-2 m-0">
          <span className="text-primary-container">
            <IconQuote />
          </span>
          Voice of Persona
        </h3>
      </div>
      <div className="flex flex-col gap-3.5">
        {c.quotes.map((q, i) => (
          <Quote key={i} {...q} />
        ))}
      </div>
    </section>
  );
}
