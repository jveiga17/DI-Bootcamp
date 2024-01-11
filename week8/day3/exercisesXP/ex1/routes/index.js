// importing module
const express = require('express');
const router = express.Router(); 

// Define routes
router.get('/', (req, res) => {
  res.send('Homepage');
});

router.get('/about', (req, res) => {
  res.send('About Us page');
});

module.exports = router;
