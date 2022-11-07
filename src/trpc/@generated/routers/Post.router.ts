import { createRouter } from "./helpers/createRouter";
import { PostFindUniqueSchema } from "../schemas/findUniquePost.schema";
import { PostFindFirstSchema } from "../schemas/findFirstPost.schema";
import { PostFindManySchema } from "../schemas/findManyPost.schema";
import { PostCreateOneSchema } from "../schemas/createOnePost.schema";
import { PostCreateManySchema } from "../schemas/createManyPost.schema";
import { PostDeleteOneSchema } from "../schemas/deleteOnePost.schema";
import { PostUpdateOneSchema } from "../schemas/updateOnePost.schema";
import { PostDeleteManySchema } from "../schemas/deleteManyPost.schema";
import { PostUpdateManySchema } from "../schemas/updateManyPost.schema";
import { PostUpsertSchema } from "../schemas/upsertOnePost.schema";
import { PostAggregateSchema } from "../schemas/aggregatePost.schema";
import { PostGroupBySchema } from "../schemas/groupByPost.schema";

export const postsRouter = createRouter()

  .query("aggregatePost", {
    input: PostAggregateSchema,
    async resolve({ ctx, input }) {
      const aggregatePost = await ctx.prisma.post.aggregate(input);
      return aggregatePost;
    },
  })

  .mutation("createManyPost", {
    input: PostCreateManySchema,
    async resolve({ ctx, input }) {
      const createManyPost = await ctx.prisma.post.createMany({ data: input.data });
      return createManyPost;
    },
  })

  .mutation("createOnePost", {
    input: PostCreateOneSchema,
    async resolve({ ctx, input }) {
      const createOnePost = await ctx.prisma.post.create({ data: input.data });
      return createOnePost;
    },
  })

  .mutation("deleteManyPost", {
    input: PostDeleteManySchema,
    async resolve({ ctx, input }) {
      const deleteManyPost = await ctx.prisma.post.deleteMany(input);
      return deleteManyPost;
    },
  })

  .mutation("deleteOnePost", {
    input: PostDeleteOneSchema,
    async resolve({ ctx, input }) {
      const deleteOnePost = await ctx.prisma.post.delete({ where: input.where });
      return deleteOnePost;
    },
  })

  .query("findFirstPost", {
    input: PostFindFirstSchema,
    async resolve({ ctx, input }) {
      const findFirstPost = await ctx.prisma.post.findFirst(input);
      return findFirstPost;
    },
  })

  .query("findManyPost", {
    input: PostFindManySchema,
    async resolve({ ctx, input }) {
      const findManyPost = await ctx.prisma.post.findMany(input);
      return findManyPost;
    },
  })

  .query("findUniquePost", {
    input: PostFindUniqueSchema,
    async resolve({ ctx, input }) {
      const findUniquePost = await ctx.prisma.post.findUnique({ where: input.where });
      return findUniquePost;
    },
  })

  .query("groupByPost", {
    input: PostGroupBySchema,
    async resolve({ ctx, input }) {
      const groupByPost = await ctx.prisma.post.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByPost;
    },
  })

  .mutation("updateManyPost", {
    input: PostUpdateManySchema,
    async resolve({ ctx, input }) {
      const updateManyPost = await ctx.prisma.post.updateMany(input);
      return updateManyPost;
    },
  })

  .mutation("updateOnePost", {
    input: PostUpdateOneSchema,
    async resolve({ ctx, input }) {
      const updateOnePost = await ctx.prisma.post.update({ where: input.where, data: input.data });
      return updateOnePost;
    },
  })

  .mutation("upsertOnePost", {
    input: PostUpsertSchema,
    async resolve({ ctx, input }) {
      const upsertOnePost = await ctx.prisma.post.upsert({ where: input.where, create: input.create, update: input.update });
      return upsertOnePost;
    },
  })
