var end =false;

//level을 1로, fail,total, continued을 0으로 초기화 하는 함수
function init() {
	var answer = document.getElementById("answer");

	//기본갑으로 level, fail, total, continued 설정
	var myuser = new user(1,0,0,0);
	myuser.setUser();

	answer.addEventListener("keyup",function(event){
		if(event.key=="Enter"){
			myuser.checkAnswer();
		}
	});

}

//사용자가 시작 버튼 눌렀을 때 실행하는 함수
//단어 추가 하고 내려오게 하고 start 버튼은 disabled로 수정
function start(){
	var level = document.getElementById("level");
	var startbutton = document.getElementById("start");

	addQuiz(1);
	stopTimer(false,35,5300-level.innerHTML*500);

	startbutton.setAttribute("disabled","");
}


//사용자에게 성공이나 실패, 아이템을 사용할 수 있는 여부 알려주는 애니메이션 담당하는 함수
function resultAnimate(value){
	var div = document.getElementById("result");
	var timer;

	div.setAttribute("class","result");
	div.innerHTML = value;

	timer = setTimeout(function(){
		div.setAttribute("class","");
		div.innerHTML="";
	},300);

}


//사용자에게 게임 클리어와 게임 종료를 알려주는 함수
//남아있는 단어 지우고 정답 칸 리스너 삭제하는 기능 담당
function endAnimate(value){
	var div = document.getElementById("result");
	var words = document.getElementsByClassName("word");
	var quiz = document.getElementById("quiz");
	var answer = document.getElementById("answer");
	var timer;

	div.setAttribute("class","result");
	div.innerHTML=value;
	end=true;

	//타이머 삭제하고 남아있는 단어 삭제하는 부분
	stopTimer(true,0,0);
	
	var wordslength = words.length;
	for(var i=0;i<wordslength;i++){
		quiz.removeChild(words[0]);
	}

	timer = setTimeout(function(){
		div.setAttribute("class","result");
		div.innerHTML=value;
		stopTimer(true,0,0);

		if(words.length>0){
			for(var i=0;i<words.length;i++){
				quiz.removeChild(words[0]);
			}
		}
	},400);

	answer.setAttribute("disabled","");

}

//<div>quiz에 num개수 만큼 단어 추가해주는 함수
function addQuiz(num){
	var words = new word();

	for(var i=0;i<num;i++){
		words.addWord();
	}
}

//timer 담당하는 함수로 stop가 true일 경우 멈추고 false일 경우 작동하는 함수
function stopTimer(stop,value,time){
	var Droptimer;
	
	//stop이 false
	if(!stop){
		Droptimer = setInterval(function(){
			new word().goDown(value);
		},time);

		quiz.setAttribute("timer",Droptimer);
	} else {
		var tmp = quiz.getAttribute("timer");

		clearInterval(tmp);
	}
}

//첫번째 아이템이 클릭되었을 때 
//5초간 타이머 멈추고 다시 수행하는 함수
function item1Clicked(){
	var item = document.getElementsByClassName("item")[0];
	var items = document.getElementsByClassName("item");
	var level = document.getElementById("level").innerHTML;
	var quiz = document.getElementById("quiz");
	var timer;

	var tmp = item.getAttribute("class");
	if(tmp == "item"){
		resultAnimate("아이템이 없습니다");
	} else {
		quiz.style.backgroundColor="rgb(233,156,71)";

		items[1].setAttribute("onclick","");
		items[2].setAttribute("onclick","");

		//정지
		resultAnimate("STOP!!!");
		stopTimer(true,0,0);

		//다시 비어있는 상태로
		item.setAttribute("class","item");

		timer = setTimeout(function(){
			items[1].setAttribute("onclick","item2Clicked();");
			items[2].setAttribute("onclick","item3Clicked();");

			stopTimer(false,35,5300-level*500);
			quiz.style.backgroundColor="rgb(170,238,220)";
		},5000);
	}
}

//두번째 아이템이 클릭되었을 때
//내려가는 속도가 잠시 느려지는 함수
function item2Clicked(){
	var item = document.getElementsByClassName("item")[1];
	var items = document.getElementsByClassName("item");
	var level = document.getElementById("level").innerHTML;
	var quiz = document.getElementById("quiz");
	var timer;

	var tmp = item.getAttribute("class");
	if(tmp == "item"){
		resultAnimate("아이템이 없습니다");
	} else {
		quiz.style.backgroundColor="rgb(233,156,71)";

		items[0].setAttribute("onclick","");
		items[2].setAttribute("onclick","");

		//속도 조절
		resultAnimate("SLOW!!!");
		stopTimer(true,0,0);
		stopTimer(false,35,5300-500*level+2000);

		//다시 비어있는 상태로
		item.setAttribute("class","item");

		timer = setTimeout(function(){
			items[0].setAttribute("onclick","item1Clicked();");
			items[2].setAttribute("onclick","item3Clicked();");

			stopTimer(true,0,0);
			stopTimer(false,35,5300-500*level);
			quiz.style.backgroundColor="rgb(170,238,220)";
		},5000);
	}
}

//세번째 아이템이 클릭되었을 때
//다시 처음부터 시작하는 함수
function item3Clicked(){
	var item = document.getElementsByClassName("item")[2];
	var items = document.getElementsByClassName("item");
	var words = document.getElementsByClassName("word");
	var quiz = document.getElementById("quiz");
	var timer;

	var tmp = item.getAttribute("class");
	if(tmp == "item"){
		resultAnimate("아이템이 없습니다");
	} else {
		items[0].setAttribute("onclick","");
		items[1].setAttribute("onclick","");

		quiz.style.backgroundColor="rgb(233,156,71)";

		resultAnimate("RESET!!!");
		//stopTimer(true,0);

		//존재하는 word 삭제
		var length = words.length;
		for(var i=0;i<length;i++){
			quiz.removeChild(words[0]);
		}

		addQuiz(1);

		//다시 비어있는 상태로
		item.setAttribute("class","item");

		timer = setTimeout(function(){
			items[0].setAttribute("onclick","item1Clicked();");
			items[1].setAttribute("onclick","item2Clicked();");

			quiz.style.backgroundColor="rgb(170,238,220)";
		},5000);
	}
}

//단어를 담당하는 function
//addWord는 단어를 <div>quiz에 추가해주는 함수
//goDown은 val만큼 단어의 top을 조정해주는 함수
function word(){

	var words = document.getElementsByClassName("word");
	var quiz = document.getElementById("quiz");

	//<a>word</a> 추가
	this.addWord = function(){
		var quizWidth = window.innerWidth * 0.7;
		
		var values=["기린","원숭이","토끼","강아지","사슴","꽃사슴","거북이","자라","고양이","개","게","거위","고래",
		"족제비","종다리","쥐","지네","구관조","구렁이","지렁이","붕어","금붕어","비글",
		"이구아나","이집트코브라","범고래","벼룩","자메이카딱다구리","검은고양이","범도룡뇽",
		"사과","포도","검정색","카레","치킨","피자","크라임씬","삼겹살","바나나","키위",
		"됴됴됴","비빔국수","김치전","우리집","책","도서관","공룡","박물관","텀블러","마우스",
		"컴퓨터","스튜디오","데이터베이스","도넛","설탕","소금","김치","감자","고구마","토마토"];

		var word = document.createElement("a");
		var top = 0;
		var left = Math.random()*(quizWidth-120);
		var tmp = parseInt(Math.random()*60);

		var index = 0;

		//단어 겹치게 안나오게 조정해주는 부분
		while(index<2){
			var check = false;
			for(var i=0;i<words.length;i++){
				if(tmp == words[i].getAttribute("value")){
					check=true;
				}
			}

			if(check){
				tmp = parseInt(Math.random()*60);
				index++;
			} else {
				break;
			}
		}


		//화면에 <a>word</a>추가
		word.setAttribute("class","word");
		word.setAttribute("value",tmp);
		word.style.left=left+"px";
		word.style.top = top + "px";
		word.innerHTML = values[tmp];

		quiz.appendChild(word);
	}

	//word top 조정해주는 함수
	this.goDown = function(val){

		var level = document.getElementById("level");
		var fail = document.getElementById("fail");
		var quiz = document.getElementById("quiz");


		var height = 530;
		var tmplength = words.length;

		for(let i=0;i<tmplength;i++){
			var tmp = words[i].style.top.split("px")[0];
			tmp = parseInt(tmp)+val;

			//범위 벗어나는 부분 fail 조정해주는 부분
			if(tmp > height){
				quiz.removeChild(words[i]);
				fail.innerHTML = parseInt(fail.innerHTML)+1;

				tmplength=words.length;
				i=i-1;
			} else {
				words[i].style.top = tmp+"px";
			}
		}

		if(!end){
			addQuiz(1);
		}

		if(parseInt(fail.innerHTML) > 19 && !end){
			endAnimate("게임 실패");
			end=true;
			return;
		}
	}
}

//user 담당하는 function
//checkAnswer는 사용자가 enter눌렀을 때 실행되는 함수
//getUser과 setUser는 fail,total,level의 innerHTML과 user의 fail,total,level 조정해주는 부분
//updateUser는 게임 성공, 실패, 레벨에 따른 기능 결정해주는 부분
//addItem은 updaetUser에서 아이템 추가 시 호출되는 함수
function user(level,total,fail,continued){
	this.level=level;
	this.total=total;
	this.fail=fail;
	this.continued=continued;


	//존재하는 단어와 비교해서 그에 따라 fail,level,total조정해주는 함수
	this.checkAnswer = function(){

		var answer = document.getElementById("answer");
		var words = document.getElementsByClassName("word");
		var quiz = document.getElementById("quiz");

		this.getUser();

		//정답 체크해주는 부분
		var check=false;
		for(var i=0;i<words.length;i++){
			//일치하면
			if(answer.value == words[i].innerHTML) {
				this.total = parseInt(this.total)+1;
				this.continued = parseInt(this.continued)+1;

				quiz.removeChild(words[i]);
				check = true;
				resultAnimate("성공");
			}
		}

		//일치하지 않으면
		if(!check){
			this.fail = parseInt(this.fail)+1;
			this.continued = 0;
			resultAnimate("실패");
		}

		this.setUser();
		this.updateUser();
		answer.value="";
	}

	//fail, total, level의 innerHTML과 user의 fail,total, level 일치시켜주는 함수
	this.getUser = function(){
		var fail = document.getElementById("fail");
		var total = document.getElementById("total");
		var level = document.getElementById("level");

		this.fail = fail.innerHTML;
		this.total = total.innerHTML;
		this.level = level.innerHTML;
	}

	//user의 fail,total,level을 fail,total,level의 innerHTML과 일치시켜주는 함수
	this.setUser = function(){
		var fail = document.getElementById("fail");
		var total = document.getElementById("total");
		var level = document.getElementById("level");

		fail.innerHTML = this.fail;
		total.innerHTML = this.total;
		level.innerHTML = this.level;
	}

	//연속해서 5개 넘게 성공시키면 아이템 추가해주고 fail이 20보다 커지면 게임 오버, level 이 10이 되면 게임 클리어
	//로 수행하게 조정해주는 함수
	//레벨에 따라 timer가 내려주는 부분 조정
	this.updateUser = function(){

		var words = document.getElementsByClassName("word");

		if(this.continued>5) {
			this.addItem();
			this.continued = parseInt(this.continued)-5;
		}

		if(this.fail>20){
			endAnimate("게임 오버");
		}

		//levelUp
		else if(this.total>this.level*10-1){
			this.level = parseInt(this.level)+1;
			this.setUser();
			stopTimer(true,0,0);
			stopTimer(false,35,5300-this.level*500);
			resultAnimate("레벨업");
			if(this.level>10){
			endAnimate("게임 클리어");
			}
		}

		if(this.level>9){
			endAnimate("게임 클리어");
		}
	}

	//item추가해주는 함수
	this.addItem = function(){
		var ownitem = document.getElementsByClassName("added");
		var item = document.getElementsByClassName("item");

		//아이템이 차 있을 경우
		if(ownitem.length>2) {
		} else {
			var index = 0;
			while(index < 3) {
				if(item[index].getAttribute("class")=="item"){
					item[index].setAttribute("class","item added");
					break;
				}
				index++;
			}
		}
	}
}