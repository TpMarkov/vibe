import { inngest } from "./client";

import { openai, createAgent } from "@inngest/agent-kit";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event }) => {
    const summarizer = createAgent({
      name: "summarizer",
      system:
        "You are a skilled Next.js & React developer. You write readable and maintainable simple snippets like React components and such.",
      model: openai({ model: "gpt-4o" }),
    });

    const { output } = await summarizer.run(
      `Write the following snippet: ${event.data.value}`
    );

    return { output };
  }
);
