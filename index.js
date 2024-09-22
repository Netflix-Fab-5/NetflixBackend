import express from "express";
import cors from "cors";
import movieRouter from "./routes/movieRouter.js";
const app = express();
const port = process.env.PORT || 3000;
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World, we have now have Render up and running!");
});

app.use("/movies", movieRouter);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
