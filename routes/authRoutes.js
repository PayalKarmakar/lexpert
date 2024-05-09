import { Router } from "express";
import { register, login } from "../controller/authController.js";
import {
  regFormValidator,
  loginFormValidator,
} from "../middleware/authMiddleware.js";

const router = Router();

router.post("/register", regFormValidator, register);
router.post("/login", loginFormValidator, login);

export default router;
