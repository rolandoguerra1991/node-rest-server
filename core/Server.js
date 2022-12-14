const express = require("express");
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const DataBase = require("./DataBase");

class Server {
  constructor() {
    this.routerPath = '../routes';
    this.prefixUrl = '/v1/api';
    this.app = express();
    this.port = process.env.PORT;
    this.middleWares();
    this.dbConnection();
    this.routes();
  }

  routes() {
    fs.readdir(path.join(__dirname, this.routerPath), (err, files) => {
      if (!err) {
        files.forEach((file) => {
          const url = `${this.prefixUrl}/${file.split('.')[0]}/`;
          const route = `${this.routerPath}/${file}`;
          this.app.use(url, require(route));
        })
      }
    })
  }

  middleWares() {
    this.app.use(express.static("public"));
    this.app.use(cors());
    this.app.use(express.json());
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Server Listen on port", this.port);
    });
  }

  dbConnection() {
    const dataBase = new DataBase();
    dataBase.connect();
  }
}

module.exports = Server;
