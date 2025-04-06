const express = require('express');
const multer = require('multer');
const path = require('path');
const Blog = require('../models/Blog');
const router = express.Router();

// Multer setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const uniqueName = Date.now() + '-' + file.originalname;
    cb(null, uniqueName);
  }
});
const upload = multer({ storage });

// Create a blog post
router.post('/', upload.single('image'), async (req, res) => {
  try {
    const { title, content, author } = req.body;
    const imageUrl = req.file ? `/uploads/${req.file.filename}` : '';
    const blog = new Blog({ title, content, author, imageUrl });
    await blog.save();
    res.status(201).send(blog);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

// Get all blog posts with pagination
router.get('/', async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    const skip = (page - 1) * limit;

    const totalBlogs = await Blog.countDocuments();
    const blogs = await Blog.find().sort({ date: -1 }).skip(skip).limit(limit);

    res.send({
      blogs,
      totalPages: Math.ceil(totalBlogs / limit),
      currentPage: page
    });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});


module.exports = router;
