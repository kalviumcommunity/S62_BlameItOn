if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({
    path: "./config/.env",
  });
}

const app = require("./server.js");
const connectDatabase = require("./DB/database.js");

const PORT = process.env.PORT;

const server = app.listen(PORT, () => {
  connectDatabase();
  console.log(
    `Server is running in port: ${PORT}, link: http://localhost:${PORT}`
  );
});
