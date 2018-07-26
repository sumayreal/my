
/* 시작 버튼을 눌렀을 때 수행되는 함수*/
function start()
{
	var gamecontrol = new GameControl();
	
	gamecontrol.startGame();
	gamecontrol.gametimer = setInterval(function(){
		gamecontrol.gameStatus.fail = gamecontrol.gameNotification.fail.innerHTML;
		if(gamecontrol.gameStatus.fail > 19)
		{
			gamecontrol.gameNotification.updateResult("gameover");
			gamecontrol.endGame();
		}
	} , 500);


	document.getElementById("answer").addEventListener("keyup",function(event){
		if(event.key=="Enter"){
			gamecontrol.checkAnswer();
		}
	});
	document.getElementById("start").setAttribute("disabled","");
}

/*  게임 컨트롤 다루는 함수 
	게임 시작 시 초기화 해주는 부분 :startGame
	게임 종료 시 타이머 반납하고 word DOM객체 삭제해주는 부분 : endGame
	사용자가 엔터 클릭 시 실행되는 부분 : checkAnswer */
function GameControl()
{
	var word; // word DOM 객체
	var gameStatus; // 현재 level , score , fail 가지고 있는 객체 
	var gameNotification; // 화면에 알림 정보 띄어주는 객체 
	var gametimer; 

	// 게임 시작하는 부분
	GameControl.prototype.startGame = function()
	{
		this.word = new Word();
		this.gameStatus = new GameStatus();
		this.gameNotification = new GameNotification();

		this.gameStatus.initGame();

		this.word.setTimerOffset(1000);
		this.word.setDownOffset(20);
		this.word.startTimer(this.word.downOffset , this.word.timerOffset);

		this.gameNotification.initNotification();
		this.gameNotification.updateNotification(this.gameStatus.level , this.gameStatus.score , this.gameStatus.fail);

	}

	GameControl.prototype.endGame = function()
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
	GameControl.prototype.checkAnswer = function()
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
				this.gameStatus.score = this.gameStatus.score + 2;
				this.gameStatus.continued = this.gameStatus.continued + 1;

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
			this.gameStatus.fail = parseInt(this.gameStatus.fail) + 1;
			this.gameStatus.continued = 0;

			this.gameNotification.updateResult("fail");
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
	}


	GameNotification.prototype.updateNotification = function(level , score , fail)
	{
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

/* 현재 진행상태로 다음 진행상태 결정해주는 객체 
	게임 처음 시작 시 초기화해주는 부분 : initGame
	다음 상태 결정해주는 함수 : isFinish
*/
function GameStatus()
{
	var level;
	var score;
	var fail;
	var continued;
	var status;

	GameStatus.prototype.initGame = function()
	{
		this.level = 1;
		this.score = 0;
		this.fail = 0;
		this.continued = 0;
		this.end = false;
	}

	GameStatus.prototype.isFinish = function()
	{
		this.status = "";
		if(this.score > (parseInt(this.level) * 10) -1)
		{
			this.level = this.level + 1;
			this.status = "levelup";
		}

		if(parseInt(this.level) > 4)
		{
			this.status = "success";
		}

		else if(parseInt(this.fail) > 19)
		{
			this.status = "fail";
		}

		return this.status;
	}

}


/*
 단어 dom 정보 가지고 있는 객체 
 단어 dom 객체 추가해주는 부분 : addWord
 timerOffset , downOffset 정해주는 부분 : setTimerOffset , setDownOffset
 단어 내려가게 해주는 부분 : goDown 
 단어 타이머 관리해주는 부분 : startTimer , stopTimer
*/
function Word()
{
	var timerOffset; // 타이머 offset
	var downOffset; // 내려가는 value offset
	var timer; //단어 타이머 id

	Word.prototype.pool = ["기린","원숭이","토끼","강아지","사슴","꽃사슴","거북이","자라","고양이","개","게","거위","고래",
		"족제비","종다리","쥐","지네","구관조","구렁이","지렁이","붕어","금붕어","비글",
		"이구아나","이집트코브라","범고래","벼룩","자메이카딱다구리","검은고양이","범도룡뇽",
		"사과","포도","검정색","카레","치킨","피자","크라임씬","삼겹살","바나나","키위",
		"됴됴됴","비빔국수","김치전","우리집","책","도서관","공룡","박물관","텀블러","마우스",
		"컴퓨터","스튜디오","데이터베이스","도넛","설탕","소금","김치","감자","고구마","토마토"];

	Word.prototype.addWord = function()
	{
		var quizWidth = window.innerWidth * 0.7;


		var newword = document.createElement("a");
		var top = 0;
		var left = Math.random()*(quizWidth-120);
		
		newword.setAttribute("class" , "word");
		newword.style.left = left + "px";
		newword.style.top = top + "px";
		newword.innerHTML = this.pool.pop();

		document.getElementById("quiz").appendChild(newword);
	}

	this.setTimerOffset = function(val)
	{
		this.timerOffset = val;
	}

	this.setDownOffset = function(val)
	{
		this.downOffset = val;
	}


	//단어 생성해서 화면에 표시해주는 부분
	Word.prototype.goDown = function(val)
	{
		
		this.addWord();

		var quiz = document.getElementById("quiz");
		var words = document.getElementsByClassName("word");

		var tmplength = words.length;


		var isdelete = false;
		for(var i = 0 ; i < tmplength ; i++)
		{
			var tmp = words[i].style.top.split("px")[0];
			tmp = parseInt(tmp) + val;

			//범위 벗어나는 부분 fail 조정해주는 부분
			if(tmp > 530){
				isdelete = true;
			} else {
				words[i].style.top = tmp+"px";
			}

		}

		if(isdelete)
		{
			document.getElementById("fail").innerHTML = parseInt(document.getElementById("fail").innerHTML) + 1 ;
			quiz.removeChild(words[0]);
		}


	}


	this.startTimer = function(val , time)
	{
		this.timer = setInterval(function(){
			Word.prototype.goDown(val);
		}, time);
	}

	this.stopTimer = function()
	{
		clearInterval(this.timer);
	}


}



