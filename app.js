const { filterAnimalsByPattern, countAnimalsOfPeoples } = require('./src/app/controllers/animalController');
const FILTER = '--filter=';
const COUNT = '--count';
const SEPARATOR = '=';
const ERROR_MESSAGE = 'Usage: node app.js --filter=<pattern> (example: --filter=ry) or node app.js --count';

const args = process.argv.slice(2);

if (args.length > 0) {
    const arg = args[0];

    if (arg.startsWith(FILTER)) {
        const pattern = arg.split(SEPARATOR)[1];
        console.log(JSON.stringify(filterAnimalsByPattern(pattern), null, 2));
    } else if (arg.startsWith(COUNT)) {
        console.log(JSON.stringify(countAnimalsOfPeoples(), null, 2));
    } else {
        console.log(ERROR_MESSAGE);
    }
} else {
    console.log(ERROR_MESSAGE);
}
