import fs from "fs";
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Function for get all movies
export const getAllMovies = (req, res) => {
  const filePath = path.join(__dirname, "..", "data", "movies.json");

  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) {
      return res.status(500).send("Error reading the movie file");
    }

    const movies = JSON.parse(data);
    res.json(movies);
  });
};
<<<<<<< HEAD
=======

// Function for get trending movies
export const getAllTrendingMovies = (req, res) => { 
  const filePath = path.join(__dirname, "..", "data", "movies.json");

  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) {
      return res.status(500).send("Error reading the movie file");
    }

    const movies = JSON.parse(data);

    // Filter out the trending movies
    const trendingMovies = movies.filter(movie => movie.isTrending);

    res.json(trendingMovies);
  });
}
>>>>>>> 36dd008 (Added trendingMovies route)
