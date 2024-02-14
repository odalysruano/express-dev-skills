const skills = [
    {id: 125223, skill: 'HTML', proficiency: 'Expert'},
    {id: 127904, skill: 'CSS', proficiency: 'Expert'},
    {id: 127804, skill: 'JavaScript', proficiency: 'Expert'},
    {id: 139608, skill: 'Express', proficiency: 'Novice'}
];

module.exports = {
    getAll
};

function getAll() {
    return skills;
}
