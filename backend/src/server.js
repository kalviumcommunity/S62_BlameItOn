const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/pong", (req, res) => {
  res.send("Welcome to backend");
});

module.exports = app;
