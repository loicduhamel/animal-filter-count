function filterAnimals(pattern, data) {
    const regex = new RegExp(pattern, 'i');
    return data.map(countries => ({
        ...countries,
        people: countries.people.map(person => ({
            ...person,
            animals: person.animals.filter(animal => regex.test(animal.name))
        })).filter(person => person.animals.length > 0)
    })).filter(location => location.people.length > 0);
}

function countAnimals(data) {
    return data.map(countries => ({
        ...countries,
        name: `${countries.name} [${countries.people.length}]`,
        people: countries.people.map(person => ({
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
