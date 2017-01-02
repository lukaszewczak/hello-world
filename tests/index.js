/* global chai*/
import helloWorld from '../src/index';
const expect = chai.expect;

describe('helloWorld', () => {
    it('is as function', () => {
        expect(helloWorld).to.be.a('function');
    });

    it('return "Hello world!"', () => {
        const result = helloWorld();
        expect(result).to.equal('Hello world!');
    });
});
