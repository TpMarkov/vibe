import { CopyCheckIcon, CopyIcon } from "lucide-react";

import { useEffect, useMemo, useCallback, Fragment, useState } from "react";

import Hint from "@/components/ui/hint";
import { Button } from "./ui/button";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "./ui/resizable";
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbPage,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "./ui/breadcrumb";
import { CodeView } from "./code-view";
import { convertFilesToTreeItems } from "@/lib/utils";
import { TreeView } from "./tree-view";

type FileCollection = { [path: string]: string };

// app.tsx => "tsx"
function getLanguageFromExtension(filename: string): string {
  const extension = filename.split(".").pop()?.toLocaleLowerCase();
  return extension || "text";
}

interface FileExplorerProps {
  files: FileCollection;
}
export const FileExplorer = ({ files }: FileExplorerProps) => {
  const [selectedFile, setSelectedFile] = useState<string | null>(() => {
    const fileKeys = Object.keys(files);
    return fileKeys.length > 0 ? fileKeys[0] : null;
  });
  interface FileBreadCrumbsProps {
    filePath: string;
  }

  const FileBreadCrumb = ({ filePath }: FileBreadCrumbsProps) => {
    const pathSegment = filePath.split("/");
    const maxSegments = 3;

    const renterBreadCrumpItems = () => {
      if (pathSegment.length <= maxSegments) {
        // Show all segments
        return pathSegment.map((segment, index) => {
          const isLast = index === pathSegment.length - 1;

          return (
            <Fragment key={index}>
              <BreadcrumbItem>
                {isLast ? (
                  <BreadcrumbPage className="font-medium">
                    {segment}
                  </BreadcrumbPage>
                ) : (
                  <span className="text-muted-foreground">{segment}</span>
                )}
              </BreadcrumbItem>
              {!isLast && <BreadcrumbSeparator />}
            </Fragment>
          );
        });
      } else {
        const firstSegment = pathSegment[0];
        const lastSegment = pathSegment[pathSegment.length - 1];

        return (
          <>
            <BreadcrumbItem>
              <span className="text-muted-foreground">{firstSegment}</span>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbEllipsis />
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="font-medium">
                  {lastSegment}
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbItem>
          </>
        );
      }
    };
    return (
      <Breadcrumb>
        <BreadcrumbList>{renterBreadCrumpItems()}</BreadcrumbList>
      </Breadcrumb>
    );
  };

  const treeData = useMemo(() => {
    return convertFilesToTreeItems(files);
  }, [files]);

  const handleFileSelect = useCallback(
    (filePath: string) => {
      if (files[filePath]) {
        setSelectedFile(filePath);
      }
    },
    [files]
  );

  return (
    <ResizablePanelGroup direction="horizontal">
      <ResizablePanel defaultSize={30} minSize={30} className="bg-sidebar">
        <TreeView
          data={treeData}
          value={selectedFile}
          onSelect={handleFileSelect}
        />
      </ResizablePanel>
      <ResizableHandle className="hover:bg-primary transition-colors" />
      <ResizablePanel defaultSize={70} minSize={50}>
        {selectedFile && files[selectedFile] ? (
          <div className="h-full w-full flex flex-col">
            <div className="border-b bg-sidebar px-4 py-2 flex justify-between items-center gap-x-2">
              {/* TODO File breadcrump */}
              <FileBreadCrumb filePath={selectedFile} />
              <Hint text="Copy to clipboard" side="bottom">
                <Button
                  variant={"outline"}
                  size="icon"
                  onClick={() => {}}
                  className="ml-auto"
                  disabled={false}
                >
                  <CopyIcon />
                </Button>
              </Hint>
            </div>
            <div className="flex-1 overflow-auto">
              <CodeView
                code={files[selectedFile]}
                lang={getLanguageFromExtension(selectedFile)}
              />
            </div>
          </div>
        ) : (
          <div className="flex h-full items-center justify-center text-muted-foreground">
            Select a file to view it&apos;s contennt
          </div>
        )}
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};
