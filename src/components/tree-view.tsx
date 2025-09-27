import { TreeItem } from "@/types";

import {
  Sidebar,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuSub,
  SidebarProvider,
  SidebarRail,
  SidebarMenuItem,
} from "./ui/sidebar";
import { ChevronRightIcon, FileIcon, FolderIcon } from "lucide-react";
import { Collapsible, CollapsibleTrigger } from "./ui/collapsible";
import { CollapsibleContent } from "@radix-ui/react-collapsible";

interface TreeViewProps {
  data: TreeItem[];
  value?: string | null;
  onSelect?: (value: string) => void;
}
export const TreeView = ({ data, value, onSelect }: TreeViewProps) => {
  return (
    <SidebarProvider>
      <Sidebar collapsible="none" className="w-full">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {data.map((item, index) => (
                <Tree
                  item={item}
                  key={index}
                  selectedValue={value}
                  onSelect={onSelect}
                  parentPath=""
                />
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </Sidebar>
    </SidebarProvider>
  );
};

interface TreeProps {
  item: TreeItem;
  selectedValue?: string | null;
  onSelect?: (value: string) => void;
  parentPath: string;
}
const Tree = ({ item, onSelect, selectedValue, parentPath }: TreeProps) => {
  const [name, ...items] = Array.isArray(item) ? item : [item];
  const currentPath = parentPath ? `${parentPath}/${name}` : name;

  if (!items.length) {
    const isSelected = selectedValue === currentPath;

    return (
      <SidebarMenuButton
        isActive={isSelected}
        className="data-[active=true]:bg-transparent"
        onClick={() => onSelect?.(currentPath)}
      >
        <FileIcon />
        <span className="truncate">{name}</span>
      </SidebarMenuButton>
    );
  }
  //It's a folder
  return (
    <SidebarMenuItem>
      <Collapsible
        defaultOpen
        className="group/collapsible [&[data-state=open]>button>svg:first-child]:rotate-90"
      >
        <CollapsibleTrigger asChild>
          <SidebarMenuButton>
            <ChevronRightIcon className="transition-transform" />
            <FolderIcon />
            <span className="truncate">{name}</span>
          </SidebarMenuButton>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <SidebarMenuSub>
            {items.map((subItem, index) => {
              return (
                <Tree
                  key={index}
                  item={subItem}
                  selectedValue={selectedValue}
                  onSelect={onSelect}
                  parentPath={currentPath}
                />
              );
            })}
          </SidebarMenuSub>
        </CollapsibleContent>
        <SidebarRail />
      </Collapsible>
    </SidebarMenuItem>
  );
};
