var express = require('express');
var morgan = require('morgan');
var app = express();

// 사용자 객체 생성
var users = [
    { id: 1, name: 'alice' },
    { id: 2, name: 'bek' },
    { id: 3, name: 'chris' }
];

app.use(morgan('dev'));

// 라우팅
app.get('/users', (req, res) => {
    res.json(users); // 자동으로 content-type을 application/json으로 설정
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000');
});

// module로 app 객체 생성
module.exports = app;

