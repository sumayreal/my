const Sequelize = require('sequelize');
const sequelize = new Sequelize({
	dialect: 'sqlite', // sqllite설정 
	storage: './db.sqlite', // 파일 형태 
	logging: false // console.log와 바인딩 
})

// 첫번 째 파라미터 : 모델명, 두 번째 파라미터 : 속성 
const User = sequelize.define('User', {
	name: Sequelize.STRING // varchar 255
});

module.exports = { Sequelize, sequelize, User };