const { CategoryModel } = require('../category-model');

async function createCategory(req, res) {
  const { name, description, image } = req.body;
  // reiktų atlikti validaciją, ar visi būtini laukai yra užpildyti teisingai
  const newCategoryModel = new CategoryModel({
    name,
    description,
    image,
  });

  try {
    const createdCategory = await newCategoryModel.save();
    res.status(201).json(createdCategory);
  } catch (error) {
    console.error('Error creating category', error);
    res.status(400).json({ error: 'Server error, contact Administrator' });
  }
}

module.exports = {
  createCategory
}
