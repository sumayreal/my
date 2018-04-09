// [LOAD PACKAGES]
var express = require('express'); // 웹 프레임워트
var app = express();
var bodyParser = require('body-parser'); // 데이터 처리 미들웨어
var mongoose = require('mongoose'); // 연동 라이브러리 

// [CONFIGURE APP TO USE bodyParser]
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

// DEFINE MODEL
var Book = require('./models/book');

// [CONFIGURE SERVER PORT]
var port = process.env.PORT || 3000;

// [CONFIGURE ROUTER]
var router = require('./routes')(app, Book);

// [CONFIGURE mongoose]
var db = mongoose.connection;
db.on('error', console.error);
db.once('open', function() {
	// CONNECTED TO MONGODB SERVER
	console.log("Connected to mongod server");
})

mongoose.connect('mongodb://localhost/mongodb_tutorial');

// [RUN SERVER]
var server = app.listen(port, function() {
	console.log("Express server has started on port " + port)
});



