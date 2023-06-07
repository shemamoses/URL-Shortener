const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const shortUrl = require("./models/shortUrl");

const DB = process.env.DATABASE_LOCAL || "mongodb://127.0.0.1/url-shortener";

mongoose.connect(DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("error", (error) => {
  console.error("MongoDB connection error:", error);
});

const app = express();
const port = process.env.PORT;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));

app.get("/", async (req, res) => {
  const shortUrls = await shortUrl.find();
  res.render("index", { shortUrls });
});

app.listen(port || 5000, () => {
  console.log("server running successfully");
});

app.post("/shorten", async (req, res) => {
  await shortUrl.create({ full: req.body.url });
  res.redirect("/");
});
