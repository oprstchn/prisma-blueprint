import { shield, allow } from 'trpc-shield';

export const permissions = shield({
  query: {
    aggregatePost: allow,
    aggregateUser: allow,
    findFirstPost: allow,
    findFirstUser: allow,
    findManyPost: allow,
    findManyUser: allow,
    findUniquePost: allow,
    findUniqueUser: allow,
    groupByPost: allow,
    groupByUser: allow,
  },
  mutation: {
    createOnePost: allow,
    createOneUser: allow,
    deleteManyPost: allow,
    deleteManyUser: allow,
    deleteOnePost: allow,
    deleteOneUser: allow,
    updateManyPost: allow,
    updateManyUser: allow,
    updateOnePost: allow,
    updateOneUser: allow,
    upsertOnePost: allow,
    upsertOneUser: allow,
  },
});
