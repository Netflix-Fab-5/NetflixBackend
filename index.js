import express from "express";
import cors from "cors";
import dotenv from "dotenv";
const app = express();
const port = process.env.PORT || 3000;
const apiUrl = process.env.API_URL;

app.use(
  cors({
    origin: apiUrl, // Använd URL:en från .env-filen
  }),
);

app.get("/", (req, res) => {
  res.send("Hello World, we have now have Render up and running!");
});

// Starta servern
app.listen(port, () => {
  if (process.env.NODE_ENV === "production") {
    console.log(`Server running in production mode on port ${port}`);
  } else {
    console.log(`Server running locally on http://localhost:${port}`);
  }
});
