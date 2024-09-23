import express from "express";
import {
  getAllMovies,
  getAllTrendingMovies,
} from "../middleware/movieMiddleware.js";

const router = express.Router();

// routes
router.get("/", getAllMovies);
router.get("/trending", getAllTrendingMovies);

export default router;
