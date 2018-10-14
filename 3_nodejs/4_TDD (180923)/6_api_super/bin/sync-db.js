const models = require('../models');

// force - true는 다시 db생성 한다는 의미 
models.sequelize.sync({force: true});