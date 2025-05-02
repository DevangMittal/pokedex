import { z } from "zod";
import { router, publicProcedure } from "@/server/api/trpc";
import { prisma } from "@/server/db";

export const pokemonRouter = router({
    getByName: publicProcedure
        .input(z.string())
        .query(async ({ input }) => {
            return prisma.pokemon.findUnique({
                where: { name: input },
            });
        }),

    getByNames: publicProcedure
        .input(z.array(z.string()))
        .query(async ({ input }) => {
            return prisma.pokemon.findMany({
                where: { name: { in: input } },
            });
        }),

    getByType: publicProcedure
        .input(z.string().optional())
        .query(async ({ input }) => {
            if (!input) {
                return prisma.pokemon.findMany();
            }
            return prisma.pokemon.findMany({
                where: {
                    types: {
                        has: input
                    }
                }
            });
        }),

    getAll: publicProcedure
        .input(z.object({
            type: z.string().optional(),
            limit: z.number().min(1).max(100).optional(),
            cursor: z.number().optional(),
        }))
        .query(async ({ input }) => {
            const limit = input.limit ?? 20;
            const { type, cursor } = input;

            const pokemons = await prisma.pokemon.findMany({
                where: type ? {
                    types: {
                        has: type
                    }
                } : undefined,
                take: limit + 1,
                cursor: cursor ? { id: cursor } : undefined,
                orderBy: { id: 'asc' },
            });

            let nextCursor: typeof cursor | undefined = undefined;
            if (pokemons.length > limit) {
                const nextItem = pokemons.pop();
                nextCursor = nextItem!.id;
            }

            return {
                items: pokemons,
                nextCursor,
            };
        }),
});