const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World, we have now have Render up and running!");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
