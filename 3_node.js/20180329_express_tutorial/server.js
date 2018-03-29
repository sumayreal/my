var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');
var fs = require("fs");

// 서버가 읽을 수 있도록 html의 위치 정의 
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

var server = app.listen(3000, function(){
	console.log("Express server has started on port 3000")
});

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(session({
	secret: '@#@$MYSIGN#@$#$', // 쿠키를 임의로 변조하는 것을 방지하기 위한 sign값, 원하는 값을 넣으면 됨
 	resave: false, // 세션을 언제나 저장할 지 (변경하지 않아도) 정하는 값
 	saveUninitialized: true // uninitialized세션이란 새로 생겼지만 변경되지 않는 세션 의미 
}));


var router = require('./router/main')(app, fs);