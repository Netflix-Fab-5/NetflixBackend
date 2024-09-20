import express from "express";
import { getAllMovies } from "../middleware/movieMiddleware.js";

const router = express.Router();
// routes
router.get("/", getAllMovies);

export default router;