if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({
    path: "./config/.env",
  });
}

const app = require("./server.js");
const connectDatabase = require("./DB/database.js");
const { connectDB } = require("./DB/db.js");

const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, () => {
  // connectDatabase();
  connectDB();
  console.log(
    `Server is running in port: ${PORT}, link: http://localhost:${PORT}`
  );
});
