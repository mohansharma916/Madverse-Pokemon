/* eslint-disable @typescript-eslint/no-unused-vars */
import * as trpc from "@trpc/server";
import * as trpcNext from "@trpc/server/adapters/next";
import { prisma } from "./prisma";
import { type CreateNextContextOptions } from "@trpc/server/adapters/next";
import { initTRPC } from "@trpc/server";
import superjson from "superjson";
import { ZodError } from "zod";

type CreateContextOptions = Record<string, never>;

export async function createContextInner(_opts: CreateContextOptions) {
  return {
    prisma,
  };
}

export const createTRPCContext = (_opts: CreateNextContextOptions) => {
  return createContextInner({});
};

// export type Context = trpc.inferAsyncReturnType<typeof createContextInner>;
