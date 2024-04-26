const express = require("express");
const apiRoute = require("./api");
const route = express.Router();

const app = express();

route.use(process.env.API_VERSION, apiRoute);
module.exports = route;
