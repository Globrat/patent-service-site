const express = require('express');
const router = express.Router();
const {
  getAllBlogs,
  createBlog,
  deleteBlog
} = require('../controllers/blogController');

// GET all blogs
router.get('/', getAllBlogs);

// POST new blog
router.post('/', createBlog);

// DELETE blog by ID
router.delete('/:id', deleteBlog);

module.exports = router;
