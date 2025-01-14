import express from "express";
import { signUpController,loginUserController,logoutUserController,authCheckUserController } from "../controllers/auth.controller.js";
import protectRoute from "../middleware/protectRoute.js";
const router = express.Router();

router.post("/signup", signUpController);
router.post("/login", loginUserController);
router.post("/logout", logoutUserController);

router.get("/authCheck", protectRoute, authCheckUserController);

export default router;