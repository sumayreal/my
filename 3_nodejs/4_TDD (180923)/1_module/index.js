
// �⺻ ��� �������� �κ� 

// http�� ����� ������
const http = require('http');
http.createServer();



// ����� ���� ��� �������� �κ�
const math = require('./math.js');
const result = math.sum(1, 2);

console.log("result - " + result);


