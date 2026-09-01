const stages = [
  {
    name: "Requirements",
    status: "active",
  },
  {
    name: "Architecture",
    status: "pending",
  },
  {
    name: "Components",
    status: "pending",
  },
  {
    name: "Calculations",
    status: "pending",
  },
  {
    name: "CAD",
    status: "pending",
  },
  {
    name: "Simulation",
    status: "pending",
  },
  {
    name: "Optimization",
    status: "pending",
  },
  {
    name: "Manufacturing",
    status: "pending",
  },
];

export default function EngineeringProcess() {
  return (
    <aside className="hidden w-72 shrink-0 overflow-y-auto bg-[#0f1115] xl:block">
      <div className="border-b border-white/10 px-5 py-4">
        <p className="text-sm font-semibold">
          Engineering Process
        </p>

        <p className="mt-1 text-xs text-white/40">
          Project development
        </p>
      </div>

      <div className="p-4">
        <div className="space-y-1">
          {stages.map((stage, index) => {
            const active = stage.status === "active";

            return (
              <div
                key={stage.name}
                className={`flex items-center gap-3 rounded-lg px-3 py-3 ${
                  active
                    ? "bg-white/10"
                    : "text-white/40"
                }`}
              >
                <div
                  className={`flex h-6 w-6 items-center justify-center rounded-full border text-xs ${
                    active
                      ? "border-white bg-white text-black"
                      : "border-white/20"
                  }`}
                >
                  {index + 1}
                </div>

                <span className="text-sm">
                  {stage.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </aside>
  );
}