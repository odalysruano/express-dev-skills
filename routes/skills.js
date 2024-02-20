// Imports
const express = require('express');
const skillsCtrl = require('../controllers/skills');

// Creating router that handles "/skills" sub-routes
const router = express.Router();

// GET /skills
router.get('/', skillsCtrl.index);
// GET /skills/new
router.get('/new', skillsCtrl.new);
// GET /skills/:id
router.get('/:id', skillsCtrl.show);
// POST /skills
router.post('/', skillsCtrl.create);
// DELETE /skills/:id
router.delete('/:id', skillsCtrl.delete);

// Exports
module.exports = router;
