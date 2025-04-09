const express = require('express');
const router = express.Router();
const multer = require('multer');
const { getUsers, createUser } = require('../controllers/userController');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage: storage });

router.get('/', getUsers);
router.post('/add-user', upload.single('image'), createUser);

module.exports = router;
