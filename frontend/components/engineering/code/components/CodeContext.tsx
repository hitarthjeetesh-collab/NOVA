export default function CodeContext() {
  return (
    <div className="border-t border-white/10 bg-[#0f1216] px-4 py-3">
      <div className="mb-3 text-[10px] font-semibold uppercase tracking-wider text-white/30">
        Engineering Context
      </div>

      <div className="grid grid-cols-3 gap-3">
        <div>
          <div className="text-[10px] text-white/25">
            Component
          </div>
          <div className="mt-1 text-xs text-white/60">
            Autonomous Rover
          </div>
        </div>

        <div>
          <div className="text-[10px] text-white/25">
            Subsystem
          </div>
          <div className="mt-1 text-xs text-white/60">
            Drive System
          </div>
        </div>

        <div>
          <div className="text-[10px] text-white/25">
            Language
          </div>
          <div className="mt-1 text-xs text-white/60">
            Python
          </div>
        </div>
      </div>
    </div>
  );
}