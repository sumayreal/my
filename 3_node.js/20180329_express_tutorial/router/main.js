

module.exports = function(app, fs)
{
	// json 데이터를 render메소드의 두 번째 인자로 전달함으로서 페이지에서 데이터 사용 가능 
	app.get('/', function (req, res){
		var sess = req.session;

		res.render('index', {
			title: "MY HOMEPAGE",
			length: 5,
			name: sess.name,
			username: sess.username
		})
	}); 

	// 첫 번째 API: GET/list
	// 모든 유저 리스트를 출력하는 GET API
	// _dirname은 현재 모듈의 위치를 나타냄
	app.get('/list', function (req, res) {
		fs.readFile(__dirname + "/../data/" + "user.json", 'utf8', function(err, data) {
		   console.log(data);
           res.end(data);
       })
	});


	// 두 번째 API: GET/getUser/:username
	// 특정 유저 username의 디테일한 정보를 가져오는 GET API
	// _dirname은 현재 모듈의 위치를 나타냄
	app.get('/getUser/:username', function (req, res) {
		fs.readFile(__dirname + "/../data/" + "user.json", 'utf8', function(err, data) {
		   // 파일을 읽은 후, 유저 아이디를 찾아서 출력
		   // 유저를 찾으면 유저 데이터를 출력하고 유저가 없으면 []을 출력
		   // fs.readFile()로 파일을 읽었을 시엔 텍스트 형태로 읽어지기 때문에, JSON.parse()를 해야 함 

		   var users = JSON.parse(data);
		   res.json(users[req.params.username]);
       })
	});

	// 세 번째 API: POST/addUser/:username
	// body: {"password:" "", "name": ""}
	app.post('/addUser/:username', function (req, res) {

		var result = {};
		var username = req.params.username;

		// Check Req Validity
		if(!req.body["password"] || !req.body["name"]) {
			result["success"] = 0;
			result["error"] = "invalid request";
			res.json(result);
			return;
		}

		// Load Data & Check duplication
		fs.readFile(__dirname + "/../data/user.json", 'utf8', function (err,data) {
			var users = JSON.parse(data);

			if(users[username]) {
				// duplication found
				result["success"] = 0;
				result["error"] = "duplicate";
				res.json(result);
				return;
			}

			// ADD TO DATA
			users[username] = req.body;

			// SAVE DATA
			// JSON의 pretty-print 위함 
			fs.writeFile(__dirname + "/../data/user.json", JSON.stringify(users,null,'\t'), 'utf8', function(err, data) {
				result = {"success": 1};
				res.json(result);
			});
		});
	})


	// 네 번째 API: PUT/ updateUser/:username
	// body: {"password": "", "name": ""}
	// 사용자 정보 업데이트 
	// PUT API는 idempotent해야 함 (요청을 몇 번 수행하더라도 같은 결과 보장)
	app.put('/updateUser/:username', function (req, res) {
		var result = {};
		var username = req.params.username;

		// Check Req Validity
		if(!req.body["password"] || !req.body["name"]) {
			result["success"] = 0;
			result["error"] = "invalid request";
			res.json(result);
			return;
		}

		// Load Data
		fs.readFile(__dirname + "/../data/user.json", 'utf8',  function(err, data){
			var users = JSON.parse(data);

			// ADD MODIF DATA
			users[username] = req.body;

			// SAVE DATA
			fs.writeFile(__dirname + "/../data/user.json",JSON.stringify(users, null, '\t'), "utf8", function(err, data){
                result = {"success": 1};
                res.json(result);
            })
		
		});
	})

	// 마지막 API DELETE deleteUser:/username
	app.delete('/deleteUser/:username', function (req, res) {
		var result = {};

		// LOAD DATA 
		fs.readFile(__dirname + '/../data/user.json', 'utf8', function (err, data) {
			var users = JSON.parse(data);

			// IF NOT FOUND
			if(!users[req.params.username]) {
				result["success"] = 0;
				result["error"] = "not found";
				res.json(result);
				return;
			}

			delete users[req.params.username];
			fs.writeFile(__dirname + "/../data/user.json",JSON.stringify(users, null, '\t'), 'utf8', function (err,data){
				result["success"] = 1;
				res.json(result);
				return;
			})
		})
	})


	// 로그인 API
	app.get('/login/:username/:password', function (req, res) {
		var sess;
		sess = req.session;

		fs.readFile(__dirname + "/../data/user.json",'utf8', function (err, data) {
			var users = JSON.parse(data);
			var username = req.params.username;
			var password = req.params.password;
			var result = {};
	
				if(!users[username]) {
					// USERNAME NOT FOUND
					result["success"] = 0;
					result["error"] = "not found";
					res.json(result);
					return;
				}
	
				if(users[username]["password"] == password) {
					result["success"] = 1;
					sess.username = username;
					sess.name = users[username]["name"];
					res.json(result);
				} else {
					result["success"] = 0;
					result["error"] = "incorrect";
					res.json(result);
				}
			})
		
	})

	app.get('/logout', function(req, res) {
		sess = req.session;

		if(sess.username) {
			req.session.destroy(function (err){
				if(err) {
					console.log(err);
				} else {
					res.redirect('/');
				}
			})
		} else {
			res.redirect('/');
		}
	})


}