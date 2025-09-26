"use client";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import MessagesContainer from "./components/messages-container";
import { Suspense, useState } from "react";
import { Fragment } from "@/generated/prisma";
import `ProjectHeader` from "./components/project-header";
import FragmentWeb from "./components/fragment-web";

interface Props {
  projectId: string;
}
const ProjectView = ({ projectId }: Props) => {
  const [activeFragment, satActiveFragment] = useState<Fragment | null>(null);

  return (
    <div className="h-screen">
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel
          defaultSize={35}
          minSize={20}
          className="flex flex-col min-h-0"
        >
          <Suspense fallback={<p>Loading project...</p>}>
            <ProjectHeader projectId={projectId} />
          </Suspense>
          <Suspense fallback={<p>loading messages...</p>}>
            <MessagesContainer
              projectId={projectId}
              activeFragment={activeFragment}
              setActiveFragment={satActiveFragment}
            />
          </Suspense>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={65} minSize={50} className="flex flex-col">
          {!!activeFragment && <FragmentWeb data={activeFragment} />}
          TODO: Preview
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};

export default ProjectView;
