const express = require("express");
const auth = require("./auth");
const productroutes = require("./productRoute");
const route = express.Router();

route.use("/auth", auth);
route.use("/products", productroutes);

module.exports = route;
