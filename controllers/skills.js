const Skill = require('../models/skill');

// handles '/' route
function index(req, res) {
    res.render('skills/index', {
    skills: Skill.getAll()
    });
}

module.exports = {
    index,
};
