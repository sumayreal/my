
module.exports = function(app, todo, user){
	app.use(function(req, res, next) {
	  res.header("Access-Control-Allow-Origin", "*");
	  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	  next();
	});


	// CHECK IF USER EXISTS
	app.post('/api/user/checkUser', function (req, res){
		let result = {};

		let userid = req.body["userid"];
		let password = req.body["password"];

		// Check Req Validity		
		if(!userid || !password) {
			result["success"] = 0;
			result["error"] = "필수 정보 누락";
			res.json(result);
			return;
		}

		user.find(function (err, users){
			user.findOne({userid:userid, password:password}, function (err, user){
				if(err) {
					return res.status(500).json({error: err});
				}
				else if(!user) {
					result["success"] = 0;
					result["error"] = "회원 조회 실패";
				}
				else {
					result["success"] = 1;
				}

				res.json(result);
				return;				
			})
		})
	})

	// CREATE USER
	app.post('/api/user/createUser', function (req, res){
		let result = {};

		let isMemberExist = 0;
		let userid = req.body["userid"];
		let password = req.body["password"];
		let newuser = new user({
			"userid": userid,
			"password": password
		});

		// Check Req Validity		
		if(!userid || !password) {
			result["success"] = 0;
			result["error"] = "필수 정보 누락";
			res.json(result);
			return;
		}
		
		// CHECK IF ALREADY MEMBER EXISTS
		user.findOne({userid:userid, password:password}, function (err, user){
			if(err) {
				return res.status(500).json({error: err});
			}
			else if(user){
				console.log(user);
				isMemberExist = 1;
				result["success"] = 0;
				result["error"] = "이미 회원 존재";
				res.json(result);
				return;
			}	
			else {
				newuser.save(function (err){
					if(err){
						console.error(err);
						result["success"] = 0;
						return;
					}
					else {
						result["success"] = 1;
						res.json(result);
					}
				});
			}
		})
	})


	// GET TODO LIST 
	app.get('/api/todo/find/:userid', function (req, res){
		let result = {};

		let userid = req.params.userid;

		// Check Req Validity		
		if(!userid) {
			result["success"] = 0;
			result["error"] = "필수 정보 누락";
			res.json(result);
			return;
		}

		todo.find({userid: userid}, {_id: 0}, function(err, todos){
			if(err)
				return res.status(500).json({error: err});
			if(todos.length === 0)
				return res.status(404).json({error: 'todo not found'});
			res.json(todos);
		})
	})

	app.post('/api/todo/find', function (req, res){
		let result = {};

		let userid = req.body["userid"];
		let type = req.body["type"];
		let item = Number(req.body["item"]);

		// Check Req Validity		
		if(!userid || !type || !item) {
			result["success"] = 0;
			result["error"] = "필수 정보 누락";
			res.json(result);
			return;
		}

		// CHECK IF ALREADY MEMBER EXISTS
		todo.findOne({userid:userid, type:type, 'todo.item': item}, {'todo.$': 1}, function (err, todo){
			if(err) {
				return res.status(500).json({error: err});
			}
			else if(todo){
				console.log('else if: todo - ' + todo);

				result["success"] = 1;
				result["todo"] = todo;
				res.json(result);
				return;
			}	
			else {
				console.log('else : todo - ' + todo);
				result["success"] = 0;
				result["error"] = "미존재";
				result["todo"] = todo;
				res.json(result);
			}
		})
	})

	// CREATE BOOK
	app.post('/api/todo/insert', function (req, res){
		var newtodo = new todo({
			"userid": req.body["userid"],
			"type": req.body["type"],
			"content": req.body["content"]		
		});
	
		newtodo.save(function(err){
			if(err){
				console.error(err);
				res.json({result: 0});
				return;
			}

			res.json({result: 1});
		});
	})

	// UPDATE THE BOOK
	app.put('/api/books/:book_id', function (req, res){
		todo.findById(req.params.todo_id, function (err, todo){
			if(err)
				return res.status(500).json({error: 'database failure'});
			if(!book)
				return res.status(404).json({error: 'book not found '});

			if(req.body.userid) 
				todo.userid = req.body.userid;
			if(req.body.totalmenu)
				todo.totalmenu = req.body.totalmenu;

			todo.save(function (err){
				if(err)
					res.status(500).json({error: 'failed to update'});
				res.json({message: 'todo updated'});
			})
		})
	})

	// DELETE BOOK
	app.delete('/api/todo/delete/:book_id', function (req, res){
	    todo.remove({ _id: req.params.book_id }, function(err, output){
	        if(err) return res.status(500).json({ error: "database failure" });

	        /* ( SINCE DELETE OPERATION IS IDEMPOTENT, NO NEED TO SPECIFY )
	        if(!output.result.n) return res.status(404).json({ error: "book not found" });
	        res.json({ message: "book deleted" });
	        */

	        res.status(204).end();
	    })
	})
}