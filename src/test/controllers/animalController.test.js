const { expect } = require('chai');
const { filterAnimalsByPattern, countAnimalsOfPeoples } = require('../../app/controllers/animalController');
const { filterAnimals, countAnimals } = require('../../app/services/animalService');
const { data } = require('../../../resources/data');

describe('Animal Controller', () => {

    describe('filterAnimalsByPattern', () => {
        it('should filter animals by pattern and controller and service results are equals', () => {
            const resultController = filterAnimalsByPattern('ry');
            const resultService = filterAnimals('ry');
            expect(resultController && resultService).not.empty;
            expect(resultController && resultService).length(2);
            expect(resultController).to.deep.equal(resultService);
        });

        it('should filter animals by pattern null and controller and service results are equals', () => {
            const resultController = filterAnimalsByPattern('');
            const resultService = filterAnimals('');
            expect(resultController && resultService).not.empty;
            expect(resultController && resultService).length(5);
            expect(resultController).to.deep.equal(resultService);
            expect(resultService && resultController).to.deep.equal(data);
        });
    });

    describe('countAnimalsOfPeoples', () => {
        it('should count animals correctly and controller and service results are equals', () => {
            const resultController = countAnimalsOfPeoples();
            const resultService = countAnimalsOfPeoples();
            expect(resultController && resultService).not.empty;
            expect(resultController && resultService).length(5);
            expect(resultController).to.deep.equal(resultService);
        });
    });

});
