// Express
const express = require("express");
const app = express();
const path = require("path");

app.listen(3000, () => {
  console.log("Server started listening on port 3000");
});

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "index.html"));
});
