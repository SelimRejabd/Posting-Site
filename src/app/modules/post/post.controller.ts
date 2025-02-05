import { JwtPayload } from "jsonwebtoken";
import catchAsync from "../utils/catchAsync";
import sendResponse from "../utils/sendResponse";
import { PostServices } from "./post.service";

const createPost = catchAsync(async (req, res) => {
  const result = await PostServices.createPostIntoDB(
    req.user as JwtPayload,
    req.body
  );

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Post is created succesfully",
    data: result,
  });
});

const getAllPosts = catchAsync(async (req, res) => {
  const result = await PostServices.getAllPostsFromDB(req.query);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Posts data retrived succesfully",
    data: result,
  });
});

const getSinglePosts = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await PostServices.getSinglePostFromDB(
    req.user as JwtPayload,
    id
  );

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Post data retrived succesfully",
    data: result,
  });
});

const deletePost = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await PostServices.deletePostFromDB(
    req.user as JwtPayload,
    id
  );

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Post data deleted succesfully",
    data: result,
  });
});

const updatePost = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await PostServices.updatePostIntoDB(
    req.user as JwtPayload,
    id,
    req.body
  );

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Post data updated succesfully",
    data: result,
  });
});

export const PostControllers = {
  createPost,
  getAllPosts,
  getSinglePosts,
  deletePost,
  updatePost,
};
