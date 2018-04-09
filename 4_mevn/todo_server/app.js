const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express();

// [CONFIGURE APP TO USE bodyParser]
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

// [CONFIGURE SERVER PORT]
var port = process.env.PORT || 8081;

// DEFINE MODEL
var todo = require('./models/todo');
var user = require('./models/user');

// [CONFIGURE ROUTER]
var router = require('./routes/')(app, todo, user);

// [CONFIGURE mongoose]
var db = mongoose.connection;
db.on('error', console.error);
db.once('open', function() {
	// CONNECTED TO MONGODB SERVER
	console.log("Connected to mongod server");
})

mongoose.connect('mongodb://localhost/semicolon_todo');

// [RUN SERVER]
var server = app.listen(port, function() {
	console.log("Express server has started on port " + port)
});
