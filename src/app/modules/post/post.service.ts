import { JwtPayload } from "jsonwebtoken";
import AppError from "../../error/AppError";
import { TPost } from "./post.interface";
import { Post } from "./post.model";
import { User } from "../user/user.model";
import QueryBuilder from "../../builder/QueryBuilder";

const createPostIntoDB = async (user: JwtPayload, payload: TPost) => {
  const userData = await User.isUserExistsById(user.email);

  payload.authorId = userData._id.toString() as any;
  const result = await Post.create(payload);
  return result;
};

const getAllPostsFromDB = async (query: Record<string, unknown>) => {
  const postQuery = new QueryBuilder(
    Post.find().populate("authorId"),
    query
  ).paginate();

  const result = await postQuery.modelQuery;
  if (!result) {
    throw new AppError(404, "Post data not found.");
  }
  return result;
};

const getSinglePostFromDB = async (user: JwtPayload, id: string) => {
  const result = await Post.findById(id).populate<{
    authorId: { email: string };
  }>({
    path: "authorId",
    select: "email",
  });

  const author = result?.authorId as { email: string } | null;

  if (author?.email !== user.email && user.role !== "admin") {
    throw new AppError(401, "Unauthorized.");
  }

  if (!result) {
    throw new AppError(404, "Post data not found.");
  }
  return result;
};

const deletePostFromDB = async (user: JwtPayload, id: string) => {
  await getSinglePostFromDB(user, id);

  const result = await Post.findByIdAndDelete(id);
  return result;
};

const updatePostIntoDB = async (
  user: JwtPayload,
  id: string,
  payload: Partial<TPost>
) => {
  await getSinglePostFromDB(user, id);

  const result = await Post.findByIdAndUpdate(id, payload, {
    new: true,
  });
  return result;
};

export const PostServices = {
  createPostIntoDB,
  getAllPostsFromDB,
  getSinglePostFromDB,
  deletePostFromDB,
  updatePostIntoDB,
};
