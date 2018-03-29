

// events 모듈 사용
var events = require('events');


// Eventemitter 객체 생성
var eventEmitter = new events.EventEmitter();

// EventHandler 함수 생성
var connectHandler = function connected() {
	console.log ("Connection Successful");

	// data_received 이벤트 발생
	eventEmitter.emit("data_received");
}

// connection 이벤트와 connectHandler 이벤트 핸들러 연동
eventEmitter.on('connection', connectHandler);

// data_received 이벤트와 익명 함수의 연동
// 함수를 변수 안에 담는 대신에, .on() 메소드의 인자로 직접 함수 전달
eventEmitter.on('data_received', function() {
	console.log("Data Received");
});

// connection 이벤트 발생시키기 
eventEmitter.emit('connection');

console.log("Program has ended");


