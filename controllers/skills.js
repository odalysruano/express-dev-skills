const Skill = require('../models/skill');

// handles '/skills/' route
function index(req, res) {
    res.render('skills/index', {
    skills: Skill.getAll()
    });
}

// handles '/skills/:id' route
function show(req, res) {
    res.render('skills/show', {
        skill: Skill.getOne(req.params.id),
    });
}

function newSkill (req, res) {
    res.render('skills/new', { title: 'New Skill'});
}

module.exports = {
    index,
    show,
    new: newSkill
};
