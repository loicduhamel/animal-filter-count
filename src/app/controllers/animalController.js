const { filterAnimals, countAnimals } = require('../services/animalService');

function filterAnimalsByPattern(pattern) {
    return filterAnimals(pattern);
}

function countAnimalsOfPeoples() {
    return countAnimals();
}

module.exports = {
    filterAnimalsByPattern: filterAnimalsByPattern,
    countAnimalsOfPeoples: countAnimalsOfPeoples
};
