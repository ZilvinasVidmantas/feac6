const { CategoryModel } = require('../category-model');

async function getCategories(req, res) {
  const allCAtegories = await CategoryModel.find();
  res.json(allCAtegories);
}

module.exports = {
  getCategories
}