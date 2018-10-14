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
    const limit = req.query.limit;
    res.json(users.slice(0, limit));
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000');
});

// module로 app 객체 생성
module.exports = app;