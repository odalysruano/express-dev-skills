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

function create(req, res) {
    Skill.create(req.body);
    res.redirect('/skills');
}

function deleteSkill(req, res) {
    Skill.deleteOne(req.params.id);
    res.redirect('/skills');
}

function editSkill(req,res) {
    res.render('skills/edit', { 
        title: 'Edit Skill',
        skill: Skill.getOne(req.params.id),
    });
}

function update(req,res) {
    let skill = req.body;
    skill.id = parseInt(req.params.id);
    Skill.updateOne(skill);
    res.redirect('/skills');
}

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill,
    edit: editSkill,
    update
};
