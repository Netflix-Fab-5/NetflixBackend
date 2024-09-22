import express from "express";
import { signup } from "../middleware/userMiddleware.js";

const router = express.Router();
router.post("/signup", signup)

export default router;
