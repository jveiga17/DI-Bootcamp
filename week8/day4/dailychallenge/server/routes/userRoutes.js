const express = require('express');
const UserController = require('../controllers/userController');

const router = express.Router();

// GETs
router.get('/users', UserController.getAllUsers);
router.get('/users/:id', UserController.getUserById);

// POSTs
router.post('/register', UserController.registerUser);
router.post('/login', UserController.loginUser);

// PUTs
router.put('/users/:id', UserController.updateUserById);

module.exports = router;