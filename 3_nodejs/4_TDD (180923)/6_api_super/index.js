var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var app = express();
var user = require('./api/user')

if(process.env.NODE_ENV !== 'test') {
	app.use(morgan('dev')); // 어플리케이션 로그 안 나오게 설정
}
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));

app.use('/users', user);

// module로 app 객체 생성
module.exports = app;