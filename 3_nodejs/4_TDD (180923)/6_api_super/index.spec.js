const request = require('supertest');
const should = require('should');
const app = require('./index');

describe('GET/users는', ()=> {
    describe('성공시', () => {
        it('유저 객체를 담은 배열로 응답한다', (done) => {
            request(app)
                .get('/users')
                .end((err, res)=> {
                    // 배열 객체인 지 확인 
                    res.body.should.be.instanceOf(Array);
                    done();
                });
        });

        it('최대 limit 갯수만큼 응답한다', (done) => {
            request(app)
                 .get('/users?limit=2')
                .end((err, res) => {
                    // 갯수가 2인 지 확인
                    res.body.should.have.lengthOf(2)
                    done();
                })
        });
    })

    describe('실패 시', () => {
        it('limit이 숫자형이 아니면 400을 응답한다', (done) => {
            request(app)
                .get('/users?limit=two')
                .expect(400)
                .end(done);
        })
    })
})


describe('GET/users/1은', ()=> {
    describe('성공 시', () => {
        it('id가 1인 유저 객체를 반환한다', (done)=> {
            request(app)
                .get('/users/1')
                .end((err,res) => {
                    res.body.should.have.property('id', 1);
                    // 첫번 째 파라미터에 기대하는 변수, 두번 째 파라미터에 기대하는 값ㅞ
                    done();
                })
        });
    })

    describe('실패 시', () => {
        it('id가 숫자가 아닐경우 400으로 응답한다', (done) => {
            request(app)
                .get('/users/one')
                .expect(400)
                .end(done);
        });

        it('id로 유저를 찾을 수 없을 경우 404로 응답한다', (done) => {
            request(app)
                .get('/users/999')
                .expect(404)
                .end(done);
        });
    })
})


describe('DELETE/user/1는', ()=> {
    describe('성공 시', () => {
        it('204를 응답한다', (done)=> {
            request(app)
                .delete('/user/1')
                .expect(204)
                .end(done);
        })
    })

    describe('실패 시', () => {
        it('id가 숫자가 아닐 경우 400으로 응답한다', (done)=> {
            request(app)
                .delete('/user/one')
                .expect(400)
                .end(done);
        })
    })
})

describe('POST /users는 ', () => {
    describe('성공 시', () => {
        // 테스트 수트 실행 전에 미리 실행 
        let name = 'daniel';
        let body;
        before(done=>{
            request(app)
                .post('/users')
                .send({name})
                .expect(201) // 201 상태코드 확인 
                .end((err, res) => {
                    body = res.body;
                    done();
                });
        });
        it('생성된 user객체를 반환한다', () => {
            // 비동기 테스트 아니므로 done사용하지 않음 
            body.should.have.property('id');
        });
        it('입력한 name을 반환한다', () => {
            // 비동기 테스트 아니므로 done사용하지 않음 
            body.should.have.property('name', name);
        })
    })

    describe('실패 시', () => {
        it('name 파라미터 누락 시 400을 반환한다', (done) => {
            request(app)
                .post('/users')
                .send({})
                .expect(400)
                .end(done);
        });
        it('name이 중복일 경우 409을 반환한다', (done) => {
            request(app)
                .post('/users')
                .send({name : 'daniel'})
                .expect(409)
                .end(done);
        })
    })
})


describe('PUT /users/:id는', () => {
    describe('성공 시', () => {
        it('변경된 name을 응답한다', (done) => {
            const name = 'chally';
            request(app)
                .put('/users/3')
                .send({name})
                .end((err, res) => {
                    res.body.should.have.property('name', name);
                    done();
                })
        })
    })
})







