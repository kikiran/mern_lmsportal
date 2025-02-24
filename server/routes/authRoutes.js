import express from "express";
import { register, userLogin } from "../controllers/authController.js";
import authMiddleWare from "../middleware/authMiddleWare.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", authMiddleWare, userLogin);

export default router;
