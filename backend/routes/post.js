const express = require('express');
const router = express.Router();

const auth = require('../middlewares/auth');
const postCtrl = require('../controllers/post');
const multer = require('../middlewares/multer-config');

module.exports = router;