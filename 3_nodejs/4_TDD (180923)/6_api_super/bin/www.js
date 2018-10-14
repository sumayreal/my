const app = require('../index');
const syncDb = require('./sync-db');

// 데이터베이스 설정 후 서버 구동  
syncDb().then(()=> {
	console.log('Sync Database');
	app.listen(3000, () => {
		console.log('Server is running on 3000 port');
	});
});