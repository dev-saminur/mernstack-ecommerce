const express = require("express");
const registrationController = require("../../controller/registrationController");
const secureApi = require("../../middleware/secureApi");
const route = express.Router();

const app = express();

route.get("/registration", secureApi, registrationController);
module.exports = route;
