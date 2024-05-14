const SubCategory = require("../model/subCatrgoryModel");

let viewSubCategoryController = async (req, res) => {
  let data = await SubCategory.find();
  console.log(data);
};

module.exports = viewSubCategoryController;
