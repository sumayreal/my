const models = require('../models');

module.exports = () => {
	// force - true는 다시 db생성 한다는 의미 
	// sync는 내부적으로 비동기 처리 과정이 있음 
	const options = {
		force: process.env.NODE_ENV === 'test' ? true : false
	};

	return models.sequelize.sync(options);
}