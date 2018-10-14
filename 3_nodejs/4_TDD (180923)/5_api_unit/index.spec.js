const app = require('./index');
const request = require('supertest');

// doneÀ¸·Î ºñµ¿±â °´Ã¼ Ã³¸®ÇØÁÜ
describe('GET/users´Â', () => {
    it('userJSON °´Ã¼ ¸®ÅÏ', (done) => {
        request(app)
            .get('/users')
            .end((err, res)=>{
                console.log(res.body);
                done();
            })
    })
})