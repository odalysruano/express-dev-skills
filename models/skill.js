const skills = [
    {id: 125223, skill: 'HTML', proficiency: 'Expert'},
    {id: 127904, skill: 'CSS', proficiency: 'Expert'},
    {id: 127804, skill: 'JavaScript', proficiency: 'Expert'},
    {id: 139608, skill: 'Express', proficiency: 'Novice'}
];

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
};

function getAll() {
    return skills;
}

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id)
}

function create(skill) {
    skill.id = Date.now() % 1000000;
    skill.done = false;
    skills.push(skill);  
}

function deleteOne(id) {
    id = parseInt(id);
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
}
