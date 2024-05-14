const category = require("../model/categoryModel");

let addCategoryController = async (req, res) => {
  const { name } = req.body;

  let existingCategory = await category.find({ name: name.toLowerCase() });
  console.log(name);
  if (existingCategory.length > 0) {
    res.send({ error: "category already exists" });
  } else {
    let cate = new category({ name: name.toLowerCase() });
    cate.save();
    res.send({ success: "Category created" });
  }
};
module.exports = addCategoryController;
