// spec�� ���ϸ� �������� �׽�Ʈ�ڵ�� ���� ��

const utils = require('./utils.js');
const assert = require('assert');
const should = require('should');

// �׽�Ʈ ��Ʈ 
describe('utils.js����� capitalize()�Լ���', () => {
    it('���ڿ��� ù��° ���ڸ� �빮�ڷ� ��ȯ�Ѵ�', () => {
        const result = utils.capitialize('hello');
        // assert.equal(result, 'Hello');
        result.should.be.equal('Hello');
    })
})