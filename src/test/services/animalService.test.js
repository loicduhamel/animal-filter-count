const { expect } = require('chai');
const { filterAnimals, countAnimals } = require('../../app/services/animalService');

describe('Animal Service', () => {

    describe('filterAnimals', () => {
        it('should filter animals correctly and result contain the pattern', () => {
            const pattern = 'ry';
            const result = filterAnimals(pattern);

            expect(result).not.empty;
            result.forEach(country => {
                country.people.forEach(person => {
                    person.animals.forEach(animal => {
                        expect(animal.name).to.match(new RegExp(pattern, 'i'));
                    });
                });
            });
        });

        it('should return empty array when pattern not exist', () => {
            const pattern = 'patternNotExist';
            const result = filterAnimals(pattern);

            expect(result).empty;
        });
    });

    describe('countAnimals', () => {
        it('should count animals correctly', () => {
            const result = countAnimals();

            expect(result).not.empty;

            result.forEach(country => {
                const countryPeopleCount = country.people.length;
                const countryNameMatch = country.name.match(/\[(\d+)]$/);

                // Check country name equal to the count of peoples
                expect(countryNameMatch).not.empty;
                expect(parseInt(countryNameMatch[1])).to.equal(countryPeopleCount);

                country.people.forEach(person => {
                    const personAnimalCount = person.animals.length;
                    const personNameMatch = person.name.match(/\[(\d+)]$/);

                    // Check name equal to the count of animals
                    expect(personNameMatch).not.empty;
                    expect(parseInt(personNameMatch[1])).to.equal(personAnimalCount);
                });
            });
        });

        it('should count animals and peoples correctly and return the correct format [n]', () => {
            const result = countAnimals();

            result.forEach(country => {
                const countryNameResult = country.name.match(/\[\d+]$/);
                expect(countryNameResult).not.empty;

                country.people.forEach(person => {
                    const personNameResult = person.name.match(/\[\d+]$/);
                    expect(personNameResult).not.empty;
                });
            });
        });
    });

});
