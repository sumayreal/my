

var _model;

var Controller = function(model){
	 this.name = "Controller";

	 _model = model;
}

// 게임 시작하는 부분
Controller.prototype.startGame = function()
{
	// this.word = new Word();
	// this.gameStatus = new GameStatus();
	// this.gameNotification = new GameNotification();

	_model.gameStatus.initGame();

	_model.word.setTimerOffset(1000);
	_model.word.setDownOffset(20);
	_model.word.startTimer(_model.word.downOffset , _model.word.timerOffset);

	// _model.gameNotification.updateNotification(_model.gameStatus.level , _model.gameStatus.score , _model.gameStatus.fail);

}

Controller.prototype.endGame = function()
{
	var quiz = document.getElementById("quiz");
	var words = document.getElementsByClassName("word");

	clearInterval(this.gametimer);
	this.word.stopTimer();

	var length = words.length;

	for(var i = 0; i<length;i++)
	{
		quiz.removeChild(words[0]);
	}
}

//엔터 시 체크하는 부분
Controller.prototype.checkAnswer = function()
{

	var answer = document.getElementById("answer").value;
	var words = document.getElementsByClassName("word");
	var quiz = document.getElementById("quiz");

	var isdelete = false;
	var isfail = true;
	var deleteword;
	var currentstatus = "";

	for(var i=0;i<words.length;i++){
		//일치하면
		if(answer == words[i].innerHTML) {
			_model.gameStatus.score = _model.gameStatus.score + 2;
			_model.gameStatus.continued = _model.gameStatus.continued + 1;

			isfail = false;
			isdelete = true;
			deleteword = words[i];

			this.gameNotification.updateResult("success");
		}
	}

	if(isdelete)
	{
		document.getElementById("quiz").removeChild(deleteword);
	}

	if(isfail)
	{
		_model.gameStatus.fail = parseInt(_model.gameStatus.fail) + 1;
		_model.gameStatus.continued = 0;

		_model.gameNotification.updateResult("fail");
	}

	document.getElementById("answer").value = "";

	this.gameNotification.updateNotification(this.gameStatus.level , this.gameStatus.score , this.gameStatus.fail);
	this.currentstatus = this.gameStatus.isFinish();
	
	if(this.currentstatus == "success")
	{
		this.gameNotification.updateResult("gameclear");
		this.endGame();
		return;
	}

	else if(this.currentstatus == "fail")
	{
		this.gameNotification.updateResult("gameover");
		this.endGame();
		return;
	}

	if(this.currentstatus == "levelup")
	{
		
		this.gameNotification.updateNotification(this.gameStatus.level , this.gameStatus.score , this.gameStatus.fail);
		this.gameNotification.updateResult("levelup");
		
		this.word.stopTimer();
		this.word.setTimerOffset(1000 - 80 * parseInt(this.gameStatus.level));
		this.word.setDownOffset(parseInt(20));
		this.word.startTimer(this.word.downOffset , this.word.timerOffset);

	}

}


