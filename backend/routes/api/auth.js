const express = require("express");
const registrationController = require("../../controller/registrationController");
const secureApi = require("../../middleware/secureApi");
const otpController = require("../../controller/otpController");
const loginController = require("../../controller/loginController");
const linkController = require("../../controller/linkController");
const route = express.Router();

const app = express();

// route.post("/registration", secureApi, registrationController);  // Middle ware rakhte chaile  registration er pore secureApi use korbo.
route.post("/registration", registrationController);
route.post("/login", loginController);
route.post("/otpvarification", otpController);
route.post("/linkvarification", linkController);

module.exports = route;
