"use client";

import { useState } from "react";

import CADToolbar from "./components/CADToolbar";
import CADViewport from "./components/CADViewport";
import ModelTree from "./components/ModelTree";
import PropertiesPanel from "./components/PropertiesPanel";
import FeatureTimeline from "./components/FeatureTimeline";

export type CADObject = {
  id: string;
  name: string;
  type: "body" | "part" | "sketch" | "feature" | "assembly";
};

const initialObjects: CADObject[] = [
  { id: "body-1", name: "Main Body", type: "body" },
  { id: "sketch-1", name: "Sketch 1", type: "sketch" },
  { id: "feature-1", name: "Pad", type: "feature" },
  { id: "feature-2", name: "Fillet", type: "feature" },
];

export default function CAD() {
  const [objects] = useState<CADObject[]>(initialObjects);
  const [selectedId, setSelectedId] = useState<string | null>("body-1");

  const selectedObject =
    objects.find((object) => object.id === selectedId) ?? null;

  return (
    <div className="flex h-full min-h-0 w-full flex-col overflow-hidden bg-[var(--aevra-background)] text-[var(--aevra-text)]">
      <CADToolbar />

      <div className="flex min-h-0 flex-1">
        <ModelTree
          objects={objects}
          selectedId={selectedId}
          onSelect={setSelectedId}
        />

        <div className="flex min-w-0 flex-1 flex-col">
          <CADViewport selectedObject={selectedObject} />

          <FeatureTimeline
            objects={objects}
            selectedId={selectedId}
            onSelect={setSelectedId}
          />
        </div>

        <PropertiesPanel selectedObject={selectedObject} />
      </div>
    </div>
  );
}