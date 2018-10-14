const fs = require('fs');

// ���� ������� ���� �б�
const dataSync = fs.readFileSync('./data.txt', 'utf8');
console.log('dataSync - ' + dataSync);

// �񵿱� ������� ���� �б�
const dataAsync = fs.readFile('./data.txt', 'utf8', function (err, data) {
    console.log('dataAsync - ' + data);
});