var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var app = express();
var user = requiere('./api/user')

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));
app.use('/users', user);

app.listen(3000, function () {
    console.log('Example app listening on port 3000');
});

// module로 app 객체 생성
module.exports = app;