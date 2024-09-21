import express from "express";
import { getAllMovies, getAllTrendingMovies } from "../middleware/movieMiddleware.js";

const router = express.Router();

// routes
router.get("/", getAllMovies);

<<<<<<< HEAD
export default router;
=======
router.get("/trending", getAllTrendingMovies)

export default router;
>>>>>>> 36dd008 (Added trendingMovies route)
