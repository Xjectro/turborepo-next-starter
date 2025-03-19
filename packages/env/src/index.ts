import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    HELLO_WORLD: z.string().nonempty(),
  },
  client: {
    NEXT_PUBLIC_SOMEENV: z.string().nonempty(),
  },
  runtimeEnv: {
    HELLO_WORLD: process.env.HELLO_WORLD,
    NEXT_PUBLIC_SOMEENV: process.env.NEXT_PUBLIC_SOMEENV,
  },
});
