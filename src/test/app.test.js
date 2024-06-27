const { execSync } = require('child_process');
const { expect } = require('chai');

describe('App', () => {

    it('should filter and count animals by pattern when --filter and --count options are used', () => {
        const result = execSync('node app.js --filter=ry --count').toString();
        expect(result).not.empty;
    });

    it('should filter animals by pattern when --filter option is used', () => {
        const result = execSync('node app.js --filter=ry').toString();
        expect(result).not.empty;
    });

    it('should filter animals by pattern null when --filter option is used', () => {
        const result = execSync('node app.js --filter=').toString();
        expect(result).not.empty;
    });

    it('should count animals when --count option is used', () => {
        const result = execSync('node app.js --count').toString();
        expect(result).not.empty;
    });

    it('should display error message when no arguments are provided', () => {
        const result = execSync('node app.js').toString();
        expect(result).to.contain('Usage: node app.js --filter=<pattern> (example: --filter=ry) or node app.js --count');
    });

});
