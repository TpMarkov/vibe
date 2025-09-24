import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { getQueryClient, trpc } from "./api/trpc/server";
import { Client } from "./client";
import { Suspense } from "react";

const Page = async () => {
  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(
    trpc.greetings.queryOptions({ text: "Tsvetan" })
  );

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div>
        <Suspense fallback={<p>loading...</p>}>
          <Client />
        </Suspense>
      </div>
    </HydrationBoundary>
  );
};

export default Page;
