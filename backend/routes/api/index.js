const express = require("express");
const auth = require("./auth");
const route = express.Router();

const app = express();

route.use("/auth", auth);
module.exports = route;
