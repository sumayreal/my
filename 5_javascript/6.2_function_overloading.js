

// function overloading(p.31)
// 사이트 - http://openbetweensecret.tistory.com/88
// 2 

function makeGreeting(language) {
	return function(firstname, lastname) {
		if(langeage === 'en') {
			console.log('Hello' + firstname + ' ' + lastname);
		}
		if(language === 'es') {
			console.log('Hello' + firstname + ' ' + lastname);
		}
	}
}

var greetEnglish = makeGreeting('en');
var greetSpanish = makeGreeting('es');

greetEnglish('John', 'Doe');
greetSpanish('John', 'Doe');
