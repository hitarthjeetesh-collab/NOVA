export function EmptyState({ text }: { text: string }) {
  return (
    <div className="rounded-xl border border-dashed border-white/10 bg-[#0f1115] px-6 py-10 text-center">
      <p className="text-sm text-white/30">{text}</p>
    </div>
  );
}
