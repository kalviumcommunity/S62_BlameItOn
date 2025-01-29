const express = require("express");
const userRouter = require("./routes/users.route.js");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors({ path: ["http://localhost:5173"] }));
app.use(express.urlencoded({ extended: true }));

app.get("/pong", (req, res) => {
  res.send("Welcome to backend");
});

app.use("/users", userRouter);

module.exports = app;
