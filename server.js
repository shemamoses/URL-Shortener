const express = require("express");
const dotenv = require("dotenv");

const app = express();
const port = process.env.PORT;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(port || 5000, () => {
  console.log("server running successfully");
});
