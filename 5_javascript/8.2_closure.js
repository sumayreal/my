

// CLOSURE(생활코딩 참고)
// 사이트 - https://opentutorials.org/module/532/6544
// 2


function factory_movie(title){
	// title은 factory_movie가 생이 마감한 뒤에는 내부함수(get_title, set_title)로만 접근 가능 
    return {
        get_title : function (){
            return title;
        },
        set_title : function(_title){
            title = _title
        }
    }
}
ghost = factory_movie('Ghost in the shell');
matrix = factory_movie('Matrix');
 
alert(ghost.get_title());
alert(matrix.get_title());
 
ghost.set_title('공각기동대');
 
alert(ghost.get_title());
alert(matrix.get_title());
