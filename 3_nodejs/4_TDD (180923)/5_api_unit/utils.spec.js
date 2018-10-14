// spec이 파일명에 들어가있으면 테스트코드라 보면 됨

const utils = require('./utils.js');
const assert = require('assert');
const should = require('should');

// 테스트 수트 
describe('utils.js모듈의 capitalize()함수는', () => {
    it('문자열의 첫번째 문자를 대문자로 변환한다', () => {
        const result = utils.capitialize('hello');
        // assert.equal(result, 'Hello');
        result.should.be.equal('Hello');
    })
})