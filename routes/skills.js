// Imports
const express = require('express');
const skillsCtrl = require('../controllers/skills');

// Creating router
const router = express.Router();
router.get('/', skillsCtrl.index);

// Exports
module.exports = router;
