const fs = require('fs');

// 동기 방식으로 파일 읽기
const dataSync = fs.readFileSync('./data.txt', 'utf8');
console.log('dataSync - ' + dataSync);

// 비동기 방식으로 파일 읽기
const dataAsync = fs.readFile('./data.txt', 'utf8', function (err, data) {
    console.log('dataAsync - ' + data);
});