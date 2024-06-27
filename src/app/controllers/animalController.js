const { filterAnimals, countAnimals } = require('../services/animalService');
const { data } = require('../../../resources/data');

const allData = data;

function filterAnimalsByPattern(pattern) {
    return filterAnimals(pattern, allData);
}

function countAnimalsOfPeoples() {
    return countAnimals(data);
}

function filterAndCountAnimalsOfPeoples(pattern) {
    const dataFiltered = filterAnimals(pattern, allData);
    return countAnimals(dataFiltered);
}

module.exports = {
    filterAnimalsByPattern: filterAnimalsByPattern,
    countAnimalsOfPeoples: countAnimalsOfPeoples,
    filterAndCountAnimalsOfPeoples: filterAndCountAnimalsOfPeoples
};
