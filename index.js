import express from "express";
import cors from "cors";
import movieRouter from "./routes/movieRouter.js";
import userRouter from "./routes/userRouter.js";

const app = express();
const port = process.env.PORT || 3000;
app.use(cors());
app.use(express.json()); //for parsing JSON body

app.get("/", (req, res) => {
  res.send("Hello World, we have now have Render up and running!");
});

app.use("/movies", movieRouter);
app.use("/users", userRouter);











app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
