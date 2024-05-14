const express = require("express");
const addCategoryController = require("../../controller/addCategoryController");
const addSubCategoryController = require("../../controller/addSubCategoryController");
const viewSubCategoryController = require("../../controller/viewSubCategoryController");
const route = express.Router();

const app = express();

route.post("/creatcategory", addCategoryController);
route.post("/creatsubcategory", addSubCategoryController);
route.get("/viewsubcategory", viewSubCategoryController);

module.exports = route;
