const app = require('./index');
const request = require('supertest');

// done���� �񵿱� ��ü ó������
describe('GET/users��', () => {
    it('userJSON ��ü ����', (done) => {
        request(app)
            .get('/users')
            .end((err, res)=>{
                console.log(res.body);
                done();
            })
    })
})