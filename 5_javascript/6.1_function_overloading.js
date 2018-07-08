

// function overloading(p.23)
// 사이트 - http://openbetweensecret.tistory.com/88
// 1

function greet(firstname, lastname, language) {
	language = language || 'en'; // default 설정 

	if(language === 'en')
		console.log('Hello');

	if(language === 'es')
		console.log('Hola');
}

// 1.1
greet('John', 'Doe', 'en');
greet('John', 'Doe', 'es');


// 1.2
function greetEnglish(firstname, lastname)
	greet(firstname, lastname, 'en');

function greetSpanish(first, lastname)
	greet(firstname, lastname, 'es');

