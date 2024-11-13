const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: String,
  image: String,
},
{
  timestamps: true,
  versionKey: false,
});


const CategoryModel = mongoose.model('Category', CategorySchema);

module.exports = {
  CategoryModel,
}
