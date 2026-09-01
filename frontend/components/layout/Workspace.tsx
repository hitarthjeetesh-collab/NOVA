"use client";

import Chat from "@/components/chat/Chat";
import EngineeringProcess from "@/components/engineering/EngineeringProcess";

interface WorkspaceProps {
  projectName: string;
}

export default function Workspace({
  projectName,
}: WorkspaceProps) {
  return (
    <div className="flex min-h-0 flex-1">
      <section className="flex min-w-0 flex-1 flex-col border-r border-white/10">
        <div className="border-b border-white/10 px-6 py-4">
          <h1 className="text-lg font-semibold">
            {projectName}
          </h1>

          <p className="mt-1 text-sm text-white/40">
            AI engineering workspace
          </p>
        </div>

        <Chat />
      </section>

      <EngineeringProcess />
    </div>
  );
}