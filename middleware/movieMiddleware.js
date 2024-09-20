import fs from "fs";
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

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