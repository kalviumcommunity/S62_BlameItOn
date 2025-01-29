const path = require("path");
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({
    path: path.resolve(__dirname, "./config/.env"),
  });
}

const app = require("./server.js");
const connectDatabase = require("./DB/database.js");
const { connectDB } = require("./DB/db.js");

const PORT = process.env.PORT;

const server = app.listen(PORT, () => {
  connectDatabase();
  connectDB();
  console.log(
    `Server is running in port: ${PORT}, link: http://localhost:${PORT}`
  );
});
