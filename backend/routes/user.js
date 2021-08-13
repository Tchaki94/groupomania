const express = require('express');
const router = express.Router();

const auth = require('../middlewares/auth');
const userCtrl = require('../controllers/user');
const multer = require('../middlewares/multer-config');



module.exports = router;