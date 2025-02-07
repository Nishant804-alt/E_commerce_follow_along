const express = require('express');
const { createUser, getUsers } = require('../controllers/userController');
const upload = require('../middlewares/upload');

const router = express.Router();

router.post('/users', upload.single('profilePicture'), createUser);
router.get('/users', getUsers);

module.exports = router;
