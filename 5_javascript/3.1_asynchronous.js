

// asynchronous(p.8)
// 사이트 - https://jdub7138.blog.me/221023382803
// 1

// long running function 
function waitThreeSeconds() {
	var ms = 3000 + new Date().getTime();
	
	while(new Date() < ms)
	{}

	console.log('finished function');
}

function clickHandler() {
	console.log('click event!');
}


// listen for the click event
document.addEventListener('click', clickHandler);

waitThreeSeconds();
console.log('finished execution');


// waitThreeSeconds 실행 중에 클릭 이벤트 발생 시키면 어떻게 될까?
