const { filterAnimalsByPattern, countAnimalsOfPeoples, filterAndCountAnimalsOfPeoples } = require('./src/app/controllers/animalController');
const FILTER = '--filter=';
const COUNT = '--count';
const SEPARATOR = '=';
const ERROR_MESSAGE = 'Usage: node app.js --filter=<pattern> (example: --filter=ry) or node app.js --count';

const args = process.argv.slice(2);

if (args.length > 0) {

    if (args[0].startsWith(FILTER) && args.length === 2 && args[1].startsWith(COUNT)) {
        const pattern = args[0].split(SEPARATOR)[1];
        console.log(JSON.stringify(filterAndCountAnimalsOfPeoples(pattern), null, 2));
    } else if (args[0].startsWith(COUNT)) {
        console.log(JSON.stringify(countAnimalsOfPeoples(), null, 2));
    } else if (args[0].startsWith(FILTER)) {
        const pattern = args[0].split(SEPARATOR)[1];
        console.log(JSON.stringify(filterAnimalsByPattern(pattern), null, 2));
    } else {
        console.log(ERROR_MESSAGE);
    }
} else {
    console.log(ERROR_MESSAGE);
}
