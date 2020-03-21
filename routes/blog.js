const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');

const User = require('../models/User');
const Blog = require('../models/Blog');

// @route     GET api/blogs
// @desc      Get all users blogs
// @access    Private
router.get('/', auth, async (req, res) => {
  try {
    const blogs = await Blog.find({ user: req.user.id })
      .sort({ date: -1 })
    res.json(blogs)
  } catch (err) {
    console.err(err.message);
    res.status(500).send("Server Error");
  }
});

// @route     POST api/blogs
// @desc      Add new blog
// @access    Private
router.post('/',
  [auth,
    [
      check('blogName', 'Article Title is required')
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    const { title, body, author, createdAt, updatedAt } = req.body;

    try {
      const newBlog = new Blog({
        title,
        body,
        author,
        createdAt,
        updatedAt,
        user: req.user.id
      });

      const blog = await newBlog.save();

      res.json(blog);
    } catch (err) {
      console.error(er.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route     PUT api/blogs/:id
// @desc      Update contact
// @access    Private
router.put('/:id', auth, async (req, res) => {
  const { title, body, author, createdAt, updatedAt } = req.body;

  // Build blog object based on submitted data
  const blogFields = {};
  if (title) blogFields.title = title;
  if (body) blogFields.body = body;
  if (author) blogFields.author = author;
  if (createdAt) blogFields.createdAt = createdAt;
  if (updatedAt) blogFields.updatedAt = updatedAt;

  try {
    let blog = await Blog.findById(req.params.id);

    if (!blog) return res.status(404).json({ msg: 'Blog not found' });

    // Make sure user owns article
    if (blog.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }

    contact = await Blog.findByIdAndUpdate(
      req.params.id,
      { $set: blogFields },
      { new: true }
    );

    res.json(blog);
  } catch (err) {
    console.error(er.message);
    res.status(500).send('Server Error');
  }
});

// @route     DELETE api/blogs/:id
// @desc      Delete contact
// @access    Private
router.delete('/:id', auth, async (req, res) => {
  try {
    let blog = await Blog.findById(req.params.id);

    if (!blog) return res.status(404).json({ msg: 'Blog not found' });

    // Make sure user owns contact
    if (blog.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }

    await Blog.findByIdAndRemove(req.params.id);

    res.json({ msg: 'Blog removed' });
  } catch (err) {
    console.error(er.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;

