"use client";

import Image from "next/image";
import { PricingTable } from "@clerk/nextjs";

import { dark } from "@clerk/themes";
import { useCurrentTheme } from "@/hooks/use-current-theme";

const Page = () => {
  const currentTheme = useCurrentTheme();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <section className="w-full max-w-3xl space-y-6">
        <div className="flex flex-col items-center text-center space-y-4">
          <Image
            src="/vibe-logo.svg"
            height={50}
            width={50}
            className="hidden md:block"
            alt="Vibe"
          />
          <h1 className="text-xl md:text-3xl font-bold">Pricing</h1>
          <p className="text-muted-foreground text-sm md:text-base">
            Choose the plan that fits your needs
          </p>
          <PricingTable
            appearance={{
              elements: {
                pricingTableCard: "rounded-lg!",
              },
              baseTheme: currentTheme === "dark" ? dark : undefined,
            }}
          />
        </div>
      </section>
    </div>
  );
};

export default Page;
