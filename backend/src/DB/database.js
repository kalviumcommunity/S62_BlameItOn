if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({
    path: "../config/.env",
  });
}

const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect(process.env.DB_URL)
    .then((data) => {
      console.log("DataBase sucessfully connected:", data.connection.host);
    })
    .catch((er) => {
      console.log("Error connecting to DataBase:", er.message);
    });
};

module.exports = connectDatabase;
