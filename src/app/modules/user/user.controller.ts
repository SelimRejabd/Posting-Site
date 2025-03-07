import { JwtPayload } from "jsonwebtoken";
import catchAsync from "../utils/catchAsync";
import sendResponse from "../utils/sendResponse";
import { UserServices } from "./user.service";

const createUser = catchAsync(async (req, res) => {
  const result = await UserServices.createUserIntoDB(req.body);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "User is created succesfully.",
    data: result,
  });
});

const getAllUsers = catchAsync(async (req, res) => {
  const result = await UserServices.getAllUsersFromDB();

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Users data retrived succesfully.",
    data: result,
  });
});

const getSingleUser = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await UserServices.getSingleUserFromDB(
    req.user as JwtPayload,
    id
  );

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Users data retrived succesfully.",
    data: result,
  });
});

const deleteUser = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await UserServices.deleteUserFromDB(
    req.user as JwtPayload,
    id
  );

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Users data deleted succesfully.",
    data: result,
  });
});

const updateUser = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await UserServices.updateUserIntoDB(
    req.user as JwtPayload,
    id,
    req.body
  );

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Users data updated succesfully.",
    data: result,
  });
});

export const UserControllers = {
  createUser,
  getAllUsers,
  getSingleUser,
  deleteUser,
  updateUser,
};
