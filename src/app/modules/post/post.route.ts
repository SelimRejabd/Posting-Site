import { Router } from "express";
import auth from "../../middleware/auth";
import { USER_ROLE } from "../user/user.constant";
import { PostControllers } from "./post.controller";

const router = Router();

router.post(
  "/",
  auth(USER_ROLE.admin, USER_ROLE.user),
  PostControllers.createPost
);

router.get("/", auth(USER_ROLE.admin), PostControllers.getAllPosts);

router.get(
  "/:id",
  auth(USER_ROLE.admin, USER_ROLE.user),
  PostControllers.getSinglePosts
);

router.delete(
  "/:id",
  auth(USER_ROLE.admin, USER_ROLE.user),
  PostControllers.deletePost
);

router.put(
  "/:id",
  auth(USER_ROLE.admin, USER_ROLE.user),
  PostControllers.updatePost
);

export const PostRoutes = router;
