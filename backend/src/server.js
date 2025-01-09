const express = require("express");
const userRouter = require("./routes/users.route.js");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/pong", (req, res) => {
  res.send("Welcome to backend");
});

app.use("/users", userRouter);

module.exports = app;
