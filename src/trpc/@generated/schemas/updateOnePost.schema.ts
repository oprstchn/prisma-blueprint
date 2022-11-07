import { z } from 'zod';
import { PostSelectObjectSchema } from './objects/PostSelect.schema';
import { PostUpdateInputObjectSchema } from './objects/PostUpdateInput.schema';
import { PostWhereUniqueInputObjectSchema } from './objects/PostWhereUniqueInput.schema';

export const PostUpdateOneSchema = z.object({
  select: PostSelectObjectSchema.optional(),
  data: PostUpdateInputObjectSchema,
  where: PostWhereUniqueInputObjectSchema,
});
