const express = require('express');
const router = express.Router();
const { register, login, getUsers, getUserById, updateUserById } = require('../controllers/userController');

// GETs
router.get('/users', getUsers);
router.get('/users/:id', getUserById);

// POSTs
router.post('/register', register);
router.post('/login', login);

// PUT
router.put('/users/:id', updateUserById);

module.exports = router;
