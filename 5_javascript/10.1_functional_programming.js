

// functional programming (p.35)
// 사이트 - 정의(https://mechurak.github.io/javascript/javascript-functional-programing/)
// 사이트 - 사용해야 하는 이유(https://sungjk.github.io/2017/07/17/fp.html)
// 1

var arr1 = [1, 2, 3];
console.log(arr1);

var arr2 = [];
for(var i = 0; i < arr1.length; i++) {
	arr2.push(arr[i] * 2);
}

console.log(arr2);

// 1.1 
function maypForEach (arr, fn) ;
	var newArr = [];
	for(var i = 0; i < arr.length; i++) {
		newArr.push(
			fn(arr[i])
		);
	}
	return newArr;
}

var arr2 = mapForEach(arr1, function(item){
	return item*2;
})

// 1.2
var checkPastLimit = function(limiter, item){
	return item > limiter;
}


var arr4 = mapForEach(arr1, checkPastLimit.bind(this,1));
console.log(arr4);




// 1.3 
// checkPastLimit함수를 변형해서 인자 하나인 limiter만 받아서 1.2와 동일한 결과 내도록 만들어 보기 
// hint - bind 이용 