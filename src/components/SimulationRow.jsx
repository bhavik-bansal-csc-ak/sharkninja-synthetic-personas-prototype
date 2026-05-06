import { useNavigate } from "react-router-dom";
import { Pill } from "./ui";
import { tileFor, tileColor, IconChevronRight } from "./icons";

export default function SimulationRow({ simulation }) {
  const Tile = tileFor(simulation.domain);
  const navigate = useNavigate();
  const onOpen = () => navigate(`/simulations/${simulation.id}`);

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onOpen}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onOpen()}
      className="grid items-center gap-3 px-6 py-[18px] border-b border-outline-variant last:border-b-0 hover:bg-surface-container-low transition-colors cursor-pointer"
      style={{ gridTemplateColumns: "5fr 2fr 2fr 2fr 1fr" }}
    >
      <div className="flex items-center gap-3.5 min-w-0">
        <div
          className={`w-10 h-10 rounded-md flex items-center justify-center flex-shrink-0 ${tileColor(
            simulation.domain
          )}`}
        >
          <Tile size={20} />
        </div>
        <div className="flex flex-col min-w-0">
          <div className="text-[15px] font-semibold text-on-surface truncate">
            {simulation.title}
          </div>
          <div className="text-[12px] text-on-surface-variant truncate mt-0.5">
            {simulation.preset || simulation.domainLabel} · {simulation.sku}
          </div>
        </div>
      </div>

      <div className="text-body-sm text-on-surface-variant">{simulation.market}</div>
      <div className="text-body-sm text-on-surface-variant">
        {simulation.audience.toLocaleString()} personas
      </div>
      <div>
        <Pill
          status={simulation.status}
          label={simulation.statusLabel}
          progress={simulation.progress}
        />
      </div>

      <div className="flex justify-end">
        <button
          className={`btn ${
            simulation.status === "fielding" ? "btn-secondary" : "btn-primary"
          } !px-3.5 !py-2 !text-[13px]`}
          onClick={(e) => {
            e.stopPropagation();
            onOpen();
          }}
        >
          {simulation.status === "fielding" ? "View Status" : "View Results"}
          <IconChevronRight size={14} />
        </button>
      </div>
    </div>
  );
}
