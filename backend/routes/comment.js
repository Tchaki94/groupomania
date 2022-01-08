const express = require('express');
const router = express.Router();

const auth = require('../middlewares/auth');
const commentCtrl = require('../controllers/comment');
const multer = require('../middlewares/multer-config');

router.post('/:post_id', auth, multer, commentCtrl.createComment);

module.exports = router;