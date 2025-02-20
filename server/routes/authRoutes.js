import express from "express";
import { createLogin } from "../controllers/authController.js";

const router = express.Router();

router.post("/login", createLogin);

export default router;
