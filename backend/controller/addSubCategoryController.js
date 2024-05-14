const subcategory = require("../model/subCatrgoryModel");

let addSubCategoryController = async (req, res) => {
  const { name, categoryId } = req.body;

  const existingsubcategory = await subcategory.find({
    name: name.toLowerCase().trim(),
  });
  console.log(name);
  if (existingsubcategory.length > 0) {
    res.send({ error: "subcategory already exists" });
  } else {
    let category = new subcategory({
      name: name.toLowerCase(),
      categoryId: categoryId,
    });
    category.save();
    res.send({ success: "subcategory created" });
  }
};
module.exports = addSubCategoryController;
