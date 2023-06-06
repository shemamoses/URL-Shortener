const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const DB = process.env.DATABASE_LOCAL || "mongodb://localhost/url-shortener";

mongoose.connect(DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();
const port = process.env.PORT;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(port || 5000, () => {
  console.log("server running successfully");
});

app.post("/shorten", (req, res) => {});
