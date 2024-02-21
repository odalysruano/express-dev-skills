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
// GET /skills/edit/:id - EDIT
router.get('/edit/:id', skillsCtrl.edit);
// PUT /skills/:id - UPDATE
router.put('/:id', skillsCtrl.update);

// Exports
module.exports = router;
