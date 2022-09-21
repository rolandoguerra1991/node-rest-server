const express = require("express");
const cors = require('cors');

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.middleWares();
    this.routes();
  }

  routes() {
    this.app.use('/api/users', require('../routes/users.router'));
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
}

module.exports = Server;
