import { Router } from "express";
import { AuthControllers } from "./auth.controller";
import { UserControllers } from "../user/user.controller";

const router = Router();

router.post("/register", UserControllers.createUser);

router.post("/login", AuthControllers.loginUser);

export const AuthRoutes = router;
