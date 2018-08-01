var _model;
var _controller;

var View = function(model, controller){
	 this.name = "View";
	 this.gameNotification = new GameNotification();

	 _model = model;
	 _controller = controller;

	 // init 
}


/* 화면 알림 나타내주는 부분 
	level , score , fail , result 레이블 초기화해주는 부분 : initNotification
	level , score , fail , result 레이블 업데이트해주는 부분 : updateNotification
	화면 결과 업데이트해주는 부분 : updateResult*/
function GameNotification()
{
	var level; // level 레이블
	var score; // score 레이블
	var fail;  // fail 레이블
	var result; // 결과 레이블

	GameNotification.prototype.initNotification = function()
	{
		this.level = document.getElementById("level");
		this.score = document.getElementById("score");
		this.fail = document.getElementById("fail");
		this.result = document.getElementById("result");

	 	this.updateNotification(_model.gameStatus.level , _model.gameStatus.score , _model.gameStatus.fail);
	}


	GameNotification.prototype.updateNotification = function(level , score , fail)
	{
		console.log('updatenotification : level - ' + level);
		console.log('updatenotification : score - ' + score);
		console.log('updatenotification : fail - ' + fail);



		this.level.innerHTML = level;
		this.score.innerHTML = score;
		this.fail.innerHTML = fail;
	}

	GameNotification.prototype.updateResult = function(result)
	{
		if(result == "success") 
		{
			this.result.innerHTML = "성공";
		}

		else if(result == "fail")
		{
			this.result.innerHTML = "실패";
		}

		else if(result == "gameclear")
		{
			this.result.innerHTML = "게임 클리어";
		}

		else if(result == "gameover")
		{
			this.result.innerHTML = "게임 오버";
		}

		else if(result == "levelup")
		{
			this.result.innerHTML = "레벨업";
		}

		this.result.setAttribute("class","result");

		timer = setTimeout(function(){
			this.result.innerHTML="";
			this.result.setAttribute("class","");
		},300);
	}
}
