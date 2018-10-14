
// http ��� ��������
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

// (req, res) => �� arrow�Լ��� function(req, res)�� ���� �ǹ�
const server = http.createServer((req, res) => {
    console.log(req.url);

    // �����
    if (req.url === '/') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hello World!\n');
    } else {
        res.statusCode = 404;
        res.end('Not Found');
    }
});

// ������ ��û ��� ���·� ����� �Լ� (��û ��� - ������ Ŭ���̾�Ʈ�� ��û�� ���� �� �ְ� �������� �ʰ� ��� �븮�� �ְ� �ϴ� �Լ�)
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});