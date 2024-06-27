const { expect } = require('chai');
const { filterAnimalsByPattern, countAnimalsOfPeoples, filterAndCountAnimalsOfPeoples } = require('../../app/controllers/animalController');
const { filterAnimals, countAnimals } = require('../../app/services/animalService');
const { data } = require('../../../resources/data');

describe('Animal Controller', () => {

    describe('filterAndCountAnimalsOfPeoples', () => {
        it('should filter and count animals by pattern and controller and service results are equals', () => {
            const resultController = filterAndCountAnimalsOfPeoples('ry');
            const filterResultService = filterAnimals('ry', data);
            const countFilteredResultService = countAnimals(filterResultService);
            expect(resultController && countFilteredResultService).not.empty;
            expect(resultController && countFilteredResultService).length(2);
            expect(resultController).to.deep.equal(countFilteredResultService);
        });
    });

    describe('filterAnimalsByPattern', () => {
        it('should filter animals by pattern and controller and service results are equals', () => {
            const resultController = filterAnimalsByPattern('ry');
            const resultService = filterAnimals('ry', data);
            expect(resultController && resultService).not.empty;
            expect(resultController && resultService).length(2);
            expect(resultController).to.deep.equal(resultService);
        });

        it('should filter animals by pattern null and controller and service results are equals', () => {
            const resultController = filterAnimalsByPattern('');
            const resultService = filterAnimals('', data);
            expect(resultController && resultService).not.empty;
            expect(resultController && resultService).length(5);
            expect(resultController).to.deep.equal(resultService);
            expect(resultService && resultController).to.deep.equal(data);
        });
    });

    describe('countAnimalsOfPeoples', () => {
        it('should count animals correctly and controller and service results are equals', () => {
            const resultController = countAnimalsOfPeoples();
            const resultService = countAnimals(data);
            expect(resultController && resultService).not.empty;
            expect(resultController && resultService).length(5);
            expect(resultController).to.deep.equal(resultService);
        });
    });

});
