const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.use(authController.authenticateToken);

router.get('/', (req, res) => {
  res.status(200).json({ message: 'Access granted to protected route', user: req.user });
});

module.exports = router;
