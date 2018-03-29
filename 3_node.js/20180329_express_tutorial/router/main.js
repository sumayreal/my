

module.exports = function(app, fs)
{
	// json 데이터를 render메소드의 두 번째 인자로 전달함으로서 페이지에서 데이터 사용 가능 
	app.get('/', function (req, res){
		res.render('index', {
			title: 'MY HOMEPAGE',
			length: 5
		})
	}); 
}