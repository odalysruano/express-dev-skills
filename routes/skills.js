// Imports
const express = require('express');
const skillsCtrl = require('../controllers/skills');

// Creating router that handles "/skills" sub-routes
const router = express.Router();
router.get('/', skillsCtrl.index);
router.get('/:id', skillsCtrl.show);

// Exports
module.exports = router;
