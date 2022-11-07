import { z } from 'zod';
import { PostSelectObjectSchema } from './objects/PostSelect.schema';
import { PostWhereUniqueInputObjectSchema } from './objects/PostWhereUniqueInput.schema';
import { PostCreateInputObjectSchema } from './objects/PostCreateInput.schema';
import { PostUpdateInputObjectSchema } from './objects/PostUpdateInput.schema';

export const PostUpsertSchema = z.object({
  select: PostSelectObjectSchema.optional(),
  where: PostWhereUniqueInputObjectSchema,
  create: PostCreateInputObjectSchema,
  update: PostUpdateInputObjectSchema,
});
