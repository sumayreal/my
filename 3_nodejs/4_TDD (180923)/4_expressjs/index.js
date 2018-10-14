const express = require('express');
const morgan = require('morgan');

// ���ø����̼�
const app = express();

// �̵����� req, res, next �Ķ���ͷ� �ʿ��ϸ� �������� next()�Լ� �����ؾ� ��
function logger(req, res, next) {
    console.log('i am logger');
    next();
}

function logger2(req, res, next) {
    console.log('i am logger2');
    next();
}

// �̵� ���� �߰� 
app.use(logger);
app.use(logger2);
app.use(morgan('dev'));

app.listen(3000, function () {
    console.log('Server is running');
}) 