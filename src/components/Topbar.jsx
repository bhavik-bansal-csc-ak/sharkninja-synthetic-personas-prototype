export default function Topbar() {
  return (
    <header className="sticky top-0 z-40 bg-[#0F1C2E] text-white">
      <div className="flex items-center justify-between pl-6 pr-8 py-3.5">
        <div className="flex items-center gap-6 min-w-0">
          <div className="flex items-baseline gap-0 select-none">
            <span className="text-[20px] font-medium tracking-tight">Shark</span>
            <span className="text-[20px] font-light text-white/40 mx-1">|</span>
            <span className="text-[20px] font-extrabold tracking-tight">NINJA</span>
          </div>
          <div className="hidden md:block w-px h-6 bg-white/15" />
          <span className="hidden md:block text-[14px] font-normal text-white/65 truncate">
            Synthetic Persona Simulation Platform
          </span>
        </div>
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center text-white font-bold text-[12px] ring-1 ring-white/20">
            BB
          </div>
        </div>
      </div>
    </header>
  );
}
