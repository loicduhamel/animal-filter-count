const { filterAnimals, countAnimals } = require('../services/animalService');

function filterAnimalsByPattern(pattern) {
    const filteredData = filterAnimals(pattern);
    console.log(JSON.stringify(filteredData, null, 2));
}

function countAnimalsOfPeoples() {
    const countedData = countAnimals();
    console.log(JSON.stringify(countedData, null, 2));
}

module.exports = {
    filterAnimalsByPattern: filterAnimalsByPattern,
    countAnimalsOfPeoples: countAnimalsOfPeoples
};
