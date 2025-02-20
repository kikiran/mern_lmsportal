import express from "express";
import { createLogin, userLogin } from "../controllers/authController.js";

const router = express.Router();

router.post("/singup", createLogin);
router.get("/login", userLogin);

export default router;
