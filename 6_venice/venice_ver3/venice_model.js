

var Model = function(){
 	this.name = "Model";
 	this.word = new Word();
 	this.gameStatus = new GameStatus();
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

		console.log("gamestatus - initgame");
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







