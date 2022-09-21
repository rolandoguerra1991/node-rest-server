const mongoose = require("mongoose");

class DataBase {
  constructor() {
    this.url = process.env.MONGODB_STRING;
  }

  connect() {
    mongoose
      .connect(this.url)
      .then(() => {
        console.log("Connection to the database has been established.");
      })
      .catch(() => {
        console.error("An error occurred when connecting to the database.");
      });
  }
}

module.exports = DataBase;
