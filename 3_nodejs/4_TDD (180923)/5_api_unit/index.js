var express = require('express');
var morgan = require('morgan');
var app = express();

// ����� ��ü ����
var users = [
    { id: 1, name: 'alice' },
    { id: 2, name: 'bek' },
    { id: 3, name: 'chris' }
];

app.use(morgan('dev'));

// �����
app.get('/users', (req, res) => {
    res.json(users); // �ڵ����� content-type�� application/json���� ����
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000');
});

// module�� app ��ü ����
module.exports = app;

