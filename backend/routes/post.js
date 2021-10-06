const express = require('express');
const router = express.Router();

const auth = require('../middlewares/auth');
const postCtrl = require('../controllers/post');
const multer = require('../middlewares/multer-config');

/*
router.post('/', auth, multer,postCtrl.createPost);
router.delete('/:id', auth, postCtrl.deletePost);
router.get('/', auth, postCtrl.getAllPosts);
*/

module.exports = router;