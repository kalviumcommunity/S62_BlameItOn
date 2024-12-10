const express = require("express");
const app = express();

const PORT = 8080;

app.get("/pong", (req, res) => {
  res.send("Welcome to backend");
});

app.listen(PORT, () => {
  console.log(
    `Server is running in port: ${PORT}, link: http://localhost:${PORT}`
  );
});
