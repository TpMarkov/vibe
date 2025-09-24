"use client";

import { useSuspenseQuery } from "@tanstack/react-query";
import { useTRPC } from "./api/client";

export const Client = () => {
  const trpc = useTRPC();
  const { data } = useSuspenseQuery(
    trpc.greetings.queryOptions({ text: "Tsvetan" })
  );

  return <div>{JSON.stringify(data, null, 2)}</div>;
};
