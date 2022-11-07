import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PostCreateManyAuthorInput> = z
  .object({
    id: z.string().optional(),
    content: z.string(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
  })
  .strict();

export const PostCreateManyAuthorInputObjectSchema = Schema;
