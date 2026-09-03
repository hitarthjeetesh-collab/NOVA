export default function CodeConsole() {
  return (
    <div className="h-36 shrink-0 border-t border-white/10 bg-[#090c0f]">
      <div className="flex items-center border-b border-white/5 px-4 py-2">
        <span className="text-[10px] font-semibold uppercase tracking-wider text-white/30">
          Console
        </span>
      </div>

      <div className="px-4 py-3 font-mono text-xs text-white/25">
        Output will appear here.
      </div>
    </div>
  );
}