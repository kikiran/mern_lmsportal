import express from "express";
import { logout, register, userLogin } from "../controllers/authController.js";
import authMiddleWare from "../middleware/authMiddleWare.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", authMiddleWare, userLogin);
router.post("/logout", authMiddleWare,logout);

export default router;
