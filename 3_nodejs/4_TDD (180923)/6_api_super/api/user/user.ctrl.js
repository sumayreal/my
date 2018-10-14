// ctrl (controller) - api 로직

const models = require('../../models');

const index = function (req, res) {
    // 최대 limit 갯수만큼 응답한다 
    // 테스트 실패
    // res.json(users);

    // 테스트 성공
    // limit 가져오기
    // const limit = req.query.limit;
    // res.json(users.slice(0, limit));

    // 테스트 성공 
    // limit이 숫자형이 아니면 400을 응답한다 
    req.query.limit = req.query.limit || 10; // querystring 안 들어 올 경우 default 설정 

    const limit = parseInt(req.query.limit, 10); // 10진수로 변경 

    // limit값이 정수가 아니라면 isNan함수 통해 검증 가능 
    if(Number.isNaN(limit)) {
        return res.status(400).end(); // 별도 설정해 주지 않으면 200 리턴 
    }

    // 모델 전체 반환 
    models.User
    	.findAll({
    		limit: limit // limit 전달
    	})
    	.then(users => {
    		res.json(users);
    	});
}

const show = function(req, res) {
    const id = parseInt(req.params.id, 10);    
    // id값이 정수가 아니라면 isNan함수 통해 검증 가능 
    if(Number.isNaN(id)) {
        return res.status(400).end(); // 별도 설정해 주지 않으면 200 리턴 
    }

	// db형식 
    models.User.findOne({
    	where: {
    		id: id // id찾는 부분 
    	}
    }).then(user => {
    	if(!user) return res.status(404).end();
    	res.json(user);
    })

    // json형식 
    // const user = users.filter((user) => user.id === id)[0]; // 조건에 맞는 배열 리턴 
    // // user가 업다면 undefined를 리턴할 것임 
    // if(!user) return res.status(404).end();
	// 
    // res.json(user);
}

const destroy = function(req, res) {
    const id = parseInt(req.params.id, 10);    
     // id값이 정수가 아니라면 isNan함수 통해 검증 가능 
    if(Number.isNaN(id)) {
        return res.status(400).end(); // 별도 설정해 주지 않으면 200 리턴 
    }

    users = users.filter(user => user.id !== id); // 삭제 
    res.status(204).end();
}

const create = (req, res) => {
    const name = req.body.name;

    // name파라미터 확인 
    if(!name) return res.status(400).end();

    const isConflict = users.filter(user => user.name === name).length;
    
    // 중복 검증 
    if(isConflict) return res.status(409).end();

    const id = Date.now(); // 고유한 id 만들기 위해 
    const user = {id, name};

    users.push(user);

    // 201 코드로 응답, 생성된 객체 리턴 
    res.status(201).json(user);
}

const update = (req, res) => {
    const id = parseInt(req.params.id, 10);
    if(Number.isNaN(id)) {
        return res.status(400).end();
    }

    const name = req.body.name;
    if(!name) return res.status(400).end();

    const isConflict = users.filter(user => user.name === name).length;
    if(isConflict) return res.status(409).end();

    const user = users.filter(user => user.id === id)[0]; //배열 리턴 
    if(!user) return res.status(404).end();

    user.name = name;

    res.json(user);
}

// module.exports = {
// 	index: index,
// 	show: show,
// 	destroy: destroy,
// 	create: create,
// 	update: update
// }

// ES6으로 아래와 같이 사용 가능 
module.exports = {index, show, destroy, create, update };
