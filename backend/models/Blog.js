const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: String,
  content: String,
  author: String,
  imageUrl: { type: String, default: '' },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Blog', blogSchema);
