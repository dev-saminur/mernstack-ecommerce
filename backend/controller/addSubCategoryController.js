const subcategory = require("../model/subCatrgoryModel");

let addSubCategoryController = async (req, res) => {
  const { name, categoryId } = req.body;

  let existingsubcategory = await subcategory.find({
    name: name.toLowerCase(),
  });
  console.log(name);
  if (existingsubcategory.length > 0) {
    res.send({ error: "subcategory already exists" });
  } else {
    let cate = new subcategory({
      name: name.toLowerCase(),
      categoryId: categoryId,
    });
    cate.save();
    res.send({ success: "subcategory created" });
  }
};
module.exports = addSubCategoryController;
