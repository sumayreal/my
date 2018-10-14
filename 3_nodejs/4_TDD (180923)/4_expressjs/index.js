const express = require('express');
const morgan = require('morgan');

// 어플리케이션
const app = express();

// 미들웨어는 req, res, next 파라미터로 필요하며 마지막에 next()함수 실행해야 함
function logger(req, res, next) {
    console.log('i am logger');
    next();
}

function logger2(req, res, next) {
    console.log('i am logger2');
    next();
}

// 미들 웨어 추가 
app.use(logger);
app.use(logger2);
app.use(morgan('dev'));

app.listen(3000, function () {
    console.log('Server is running');
}) 