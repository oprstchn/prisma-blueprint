import { createRouter } from "./helpers/createRouter";
import { usersRouter } from "./User.router";
import { postsRouter } from "./Post.router";

export const appRouter = createRouter()

  .merge('user.', usersRouter)

  .merge('post.', postsRouter)
