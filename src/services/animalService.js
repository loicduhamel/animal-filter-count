const { data } = require('../../resources/data');

function filterAnimals(pattern) {
    const regex = new RegExp(pattern, 'i');
    return data.map(countrie => ({
        ...countrie,
        people: countrie.people.map(person => ({
            ...person,
            animals: person.animals.filter(animal => regex.test(animal.name))
        })).filter(person => person.animals.length > 0)
    })).filter(location => location.people.length > 0);
}

function countAnimals() {
    return data.map(countrie => ({
        ...countrie,
        name: `${countrie.name} [${countrie.people.length}]`,
        people: countrie.people.map(person => ({
            ...person,
            name: `${person.name} [${person.animals.length}]`,
            animals: person.animals
        }))
    }));
}

module.exports = {
    filterAnimals,
    countAnimals
};
