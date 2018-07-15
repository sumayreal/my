

// CLOSURE(p.29)
// 사이트 - https://opentutorials.org/module/532/6544
// 3


function bulidFunctions() {
	var arr = [];
	for(var i = 0; i < 3; i++) {
		var arr = [];
		for(var i = 0; i < 3; i++) {
			arr.push{
				function(){
					console.log(i);
				}
			}
		}
	}
	return arr;
}


var fs = buildFunctions();

fs[0]();
fs[1]();
fs[2]();


// 3.1
function bulidFunctions() {
	var arr = [];
	for(var i = 0; i < 3; i++) {
		var arr = [];
		for(var i = 0; i < 3; i++) {
			let j=i;
			arr.push{
				function(){
					console.log(j);
				}
			}
		}
	}
	return arr;
}


var fs = buildFunctions();

fs[0]();
fs[1]();
fs[2]();



// 3.2
function bulidFunctions2(){
	var arr = [];

	for(var i = 0; i < 3; i++){
		arr.push(
			function(j){
				return function(){
					console.log(j);
				}
			}(i)
		);
	}

	return arr;
}

fs[0]();
fs[1]();
fs[2]();
