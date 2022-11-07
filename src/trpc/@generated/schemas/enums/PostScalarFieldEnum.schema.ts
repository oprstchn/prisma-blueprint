import { z } from 'zod';

export const PostScalarFieldEnumSchema = z.enum([
  'id',
  'content',
  'authorId',
  'createdAt',
  'updatedAt',
]);
