import {helloWorld} from '../src/hello-world/test-only';
import {expect} from 'chai';

var assert = require('assert');

describe('Test', () => {
    it('should pass', () => {
        expect(helloWorld()).to.be.equal('Hello world!');
    })
});