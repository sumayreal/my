

// function carrying(p.34)
// - creating a copy of a function but with some present parameters > very useful in mathmetical situations
// 99_concept.js 5번 보기 
// 1


function multiply(a, b) {
	return a*b;
}


var multipleByTwo = multiply.bind(this, 2);
console.log(multibleByTwo(4));
console.log(multibleByTwo(6));

