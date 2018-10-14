const models = require('../models');

module.exports = () => {
	// force - true는 다시 db생성 한다는 의미 
	// sync는 내부적으로 비돛기 처리 과정이 있음 
	return models.sequelize.sync({force: true});
}