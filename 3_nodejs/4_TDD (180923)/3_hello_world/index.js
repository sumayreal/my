
// http 모듈 가져오기
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

// (req, res) => 는 arrow함수로 function(req, res)와 같은 의미
const server = http.createServer((req, res) => {
    console.log(req.url);

    // 라우팅
    if (req.url === '/') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hello World!\n');
    } else {
        res.statusCode = 404;
        res.end('Not Found');
    }
});

// 서버를 요청 대기 상태로 만드는 함수 (요청 대기 - 서버가 클라이언트의 요청을 받을 수 있게 종료하지 않고 계속 대리고 있게 하는 함수)
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});