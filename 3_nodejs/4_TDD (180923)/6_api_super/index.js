var express = require('express');
var morgan = require('morgan');
var app = express();

var users = [
    { id: 1, name: 'alice' },
    { id: 2, name: 'bak' },
    { id: 3, name: 'chris' }
];

app.use(morgan('dev'));

app.get('/users', function (req, res) {
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

app.listen(3000, function () {
    console.log('Example app listening on port 3000');
});

// module로 app 객체 생성
module.exports = app;