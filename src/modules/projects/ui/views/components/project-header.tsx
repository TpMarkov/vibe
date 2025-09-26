import Link from "next/link";
import { useTheme } from "next-themes";

import { useSuspenseQuery } from "@tanstack/react-query";

import { ChevronDownIcon, ChevronLeftIcon, SunMoonIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { useTRPC } from "@/trpc/client";
import Image from "next/image";
import { DropdownMenuRadioItem } from "@radix-ui/react-dropdown-menu";

interface Props {
  projectId: string;
}
const ProjectHeader = ({ projectId }: Props) => {
  const trpc = useTRPC();
  const { data: project } = useSuspenseQuery(
    trpc.projects.getOne.queryOptions({
      id: projectId,
    })
  );

  const { setTheme, theme } = useTheme();

  return (
    <header className="p-2 flex justify-between items-center border-b">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant={"ghost"}
            size="sm"
            className="focus-visible:ring-0 hover:bg-transparent hover:opacity-75 transition-opacity pl-2!"
          >
            <Image src="/vibe-logo.svg" height={18} width={18} alt="Vibe" />
            <span className="text-sm font-medium">{project.name}</span>
            <ChevronDownIcon className="size-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent side="bottom" align="start">
          <DropdownMenuItem asChild>
            <Link href="/">
              <ChevronLeftIcon />
              <span>Go to Dashboard</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuSub>
            <DropdownMenuSubTrigger className="gap-2">
              <SunMoonIcon className="size-4 text-muted-foreground" />
              <span>Appearance</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuRadioGroup value={theme} onValueChange={setTheme}>
                  <DropdownMenuRadioItem
                    className="hover:cursor-pointer"
                    value="light"
                  >
                    <span>Light</span>
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem
                    className="hover:cursor-pointer"
                    value="dark"
                  >
                    <span>Dark</span>
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem
                    className="hover:cursor-pointer"
                    value="system"
                  >
                    <span>System</span>
                  </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
};

export default ProjectHeader;
