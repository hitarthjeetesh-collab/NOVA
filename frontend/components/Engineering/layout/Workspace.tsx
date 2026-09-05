"use client";

import { useState } from "react";

import Architecture, {
  initialArchitectureNodes,
  type ArchitectureNode,
} from "@/components/Engineering/engineering/architecture/Architecture";

import Code from "@/components/Engineering/engineering/code/Code";
import Calculations from "@/components/Engineering/engineering/calculations/Calculations";
import Planning from "@/components/Engineering/engineering/planning/planning";
import Requirements from "@/components/Engineering/engineering/requirements/Requirements";
import Chat from "@/components/Engineering/chat/Chat";
import EngineeringProcess from "@/components/Engineering/engineering/EngineeringProcess";
import Components from "@/components/Engineering/engineering/components/Components";
import CAD from "@/components/Engineering/engineering/cad/CAD";
import Simulation from "@/components/Engineering/engineering/simulation/Simulation";
import Optimization from "@/components/Engineering/engineering/optimization/Optimization";
import Manufacturing from "@/components/Engineering/engineering/manufacturing/Manufacturing";

import type { WorkspaceStage } from "@/types/workspace";

interface WorkspaceProps {
  projectName: string;
  stage: WorkspaceStage;
  onStageChange: (stage: WorkspaceStage) => void;
}

export default function Workspace({
  projectName,
  stage,
  onStageChange,
}: WorkspaceProps) {
  const [architectureNodes, setArchitectureNodes] =
    useState<ArchitectureNode[]>(initialArchitectureNodes);

  return (
    <div className="flex min-h-0 flex-1">
      <section className="flex min-w-0 flex-1 flex-col">
        <div className="border-b border-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)] px-6 py-4">
          <h1 className="text-lg font-semibold text-[var(--aevra-text)]">
            {projectName}
          </h1>

          <p className="mt-1 text-sm text-[color-mix(in_srgb,var(--aevra-text)_40%,transparent)]">
            {getStageDescription(stage)}
          </p>
        </div>

        <div className="min-h-0 flex-1">
          {stage === "chat" && <Chat />}

          {stage === "requirements" && <Requirements />}

          {stage === "planning" && <Planning />}

          {stage === "architecture" && (
            <Architecture
              nodes={architectureNodes}
              setNodes={setArchitectureNodes}
            />
          )}

          {stage === "components" && (
            <Components
              architectureNodes={architectureNodes}
            />
          )}

          {stage === "calculations" && (
            <Calculations projectName={projectName} />
          )}

          {stage === "code" && (
            <Code projectName={projectName} />
          )}

          {stage === "cad" && <CAD />}

          {stage === "simulation" && <Simulation />}

          {stage === "optimization" && <Optimization />}

          {stage === "manufacturing" && <Manufacturing />}
        </div>
      </section>

      <EngineeringProcess
        stage={stage}
        onStageChange={onStageChange}
      />
    </div>
  );
}

function getStageDescription(stage: WorkspaceStage) {
  switch (stage) {
    case "chat":
      return "AI engineering assistant";

    case "requirements":
      return "System requirements";

    case "planning":
      return "Design priorities and concept exploration";

    case "architecture":
      return "System architecture";

    case "components":
      return "Components and parts";

    case "calculations":
      return "Engineering calculations";

    case "code":
      return "Software and code";

    case "cad":
      return "Computer-aided design";

    case "simulation":
      return "Engineering simulation";

    case "optimization":
      return "Design optimization";

    case "manufacturing":
      return "Manufacturing preparation";
  }
}

interface PlaceholderProps {
  title: string;
  description: string;
}

function Placeholder({
  title,
  description,
}: PlaceholderProps) {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="max-w-md text-center">
        <h2 className="text-2xl font-semibold text-[var(--aevra-text)]">
          {title}
        </h2>

        <p className="mt-3 text-sm leading-6 text-[color-mix(in_srgb,var(--aevra-text)_40%,transparent)]">
          {description}
        </p>

        <button
          type="button"
          className="mt-6 rounded-lg bg-[var(--aevra-text)] px-4 py-2 text-sm font-medium text-[var(--aevra-background)] hover:bg-[color-mix(in_srgb,var(--aevra-text)_90%,transparent)]"
        >
          Get Started
        </button>
      </div>
    </div>
  );
}