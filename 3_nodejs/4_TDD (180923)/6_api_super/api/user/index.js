const express = require('express');
const router = express.Router();

// 데이터 
var users = [
    { id: 1, name: 'alice' },
    { id: 2, name: 'bak' },
    { id: 3, name: 'chris' }
];

// 라우터 설정 
router.get('/', function (req, res) {
    // 최대 limit 갯수만큼 응답한다 
    // 테스트 실패
    // res.json(users);

    // 테스트 성공
    // limit 가져오기
    // const limit = req.query.limit;
    // res.json(users.slice(0, limit));

    // 테스트 성공 
    // limit이 숫자형이 아니면 400을 응답한다 
    req.query.limit = req.query.limit || 10; // querystring 안 들어 올 경우 default 설정 

    const limit = parseInt(req.query.limit, 10); // 10진수로 변경 

    // limit값이 정수가 아니라면 isNan함수 통해 검증 가능 
    if(Number.isNaN(limit)) {
        return res.status(400).end(); // 별도 설정해 주지 않으면 200 리턴 
    }
    res.json(users.slice(0, limit));
});

router.get('/:id', function(req, res) {
    const id = parseInt(req.params.id, 10);    
    // id값이 정수가 아니라면 isNan함수 통해 검증 가능 
    if(Number.isNaN(id)) {
        return res.status(400).end(); // 별도 설정해 주지 않으면 200 리턴 
    }

    const user = users.filter((user) => user.id === id)[0]; // 조건에 맞는 배열 리턴 
    // user가 업다면 undefined를 리턴할 것임 
    if(!user) return res.status(404).end();

    res.json(user);
});

router.delete('/:id', function(req, res) {
    const id = parseInt(req.params.id, 10);    
     // id값이 정수가 아니라면 isNan함수 통해 검증 가능 
    if(Number.isNaN(id)) {
        return res.status(400).end(); // 별도 설정해 주지 않으면 200 리턴 
    }

    users = users.filter(user => user.id !== id); // 삭제 
    res.status(204).end();
});

router.post('/', (req, res) => {
    const name = req.body.name;

    // name파라미터 확인 
    if(!name) return res.status(400).end();

    const isConflict = users.filter(user => user.name === name).length;
    
    // 중복 검증 
    if(isConflict) return res.status(409).end();

    const id = Date.now(); // 고유한 id 만들기 위해 
    const user = {id, name};

    users.push(user);

    // 201 코드로 응답, 생성된 객체 리턴 
    res.status(201).json(user);
});

router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    if(Number.isNaN(id)) {
        return res.status(400).end();
    }

    const name = req.body.name;
    if(!name) return res.status(400).end();

    const isConflict = users.filter(user => user.name === name).length;
    if(isConflict) return res.status(409).end();

    const user = users.filter(user => user.id === id)[0]; //배열 리턴 
    if(!user) return res.status(404).end();

    user.name = name;

    res.json(user);
})

module.exports = router;
