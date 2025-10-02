import { intervalToDuration } from "date-fns/intervalToDuration";
import { formatDuration } from "date-fns/formatDuration";

import { Button } from "@/components/ui/button";

import { CrownIcon } from "lucide-react";

import Link from "next/link";
import { useAuth } from "@clerk/nextjs";
import { useMemo } from "react";

interface Props {
  points: number;
  msBeforeNext: number;
}
const Usage = ({ points, msBeforeNext }: Props) => {
  const { has } = useAuth();
  const hasPremium = has?.({ plan: "pro" });

  const resetTime = useMemo(() => {
    try {
      return formatDuration(
        intervalToDuration({
          start: new Date(),
          end: new Date(Date.now() + msBeforeNext),
        }),
        { format: ["months", "days", "hours"] }
      );
    } catch (error) {
      console.error("Error formating duration", error);
      return "";
    }
  }, [msBeforeNext]);

  return (
    <div className="rounded-top-xl bg-background border border-b-0 p-2">
      <div className="flex items-center gap-x-2">
        <div>
          <p className="text-sm">
            {points}{" "}
            {hasPremium ? "credits remainin" : "free credits remaining"}
          </p>
          <p className="text-xs text-muted-foreground">Resets in {resetTime}</p>
        </div>
        {!hasPremium && (
          <Button asChild variant="default" size="sm" className="ml-auto">
            <Link href="/pricing">
              <CrownIcon /> Upgrade
            </Link>
          </Button>
        )}
      </div>
    </div>
  );
};

export default Usage;
