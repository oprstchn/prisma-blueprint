import { z } from 'zod';
import { PostSelectObjectSchema } from './objects/PostSelect.schema';
import { PostCreateInputObjectSchema } from './objects/PostCreateInput.schema';

export const PostCreateOneSchema = z.object({
  select: PostSelectObjectSchema.optional(),
  data: PostCreateInputObjectSchema,
});
