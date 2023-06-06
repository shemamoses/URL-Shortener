const express = require("express");
const dotenv = require("dotenv");

const app = express();
const port = process.env.PORT;


app.listen(port, () => {
  console.log('server running successfully');
});
