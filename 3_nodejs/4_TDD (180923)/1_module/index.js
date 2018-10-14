
// 기본 모듈 가져오는 부분 

// http의 모듈을 가져옴
const http = require('http');
http.createServer();



// 사용자 정의 모듈 가져오는 부분
const math = require('./math.js');
const result = math.sum(1, 2);

console.log("result - " + result);


