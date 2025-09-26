"use client";

import {
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  Tooltip,
} from "@/components/ui/tooltip";

interface HintProps {
  children: React.ReactNode;
  text: string;
  side?: "top" | "left" | "right" | "bottom";
  align?: "start" | "end" | "center";
}

const Hint = ({
  children,
  text,
  side = "top",
  align = "center",
}: HintProps) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent side={side} align={align}>
          <p>{text}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default Hint;
