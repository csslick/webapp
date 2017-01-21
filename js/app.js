$(function(){

	var $container = $('#container');

	function toggleMenu(){
		$container.find('ul').toggleClass('hide');
		$('header').find('.leftBtn').toggleClass('active'); // 버튼 스타일 클래스 
	}

	// 메뉴 숨기기
	$container.find('ul').addClass('hide');

	// 토글 버튼 이벤트 
	$('header').find('.leftBtn').click(function(){
		toggleMenu();
	});


	/******* ajax *********/
	function loadPage(url){
		// 로딩바 추가
		$('body').append('<div id="progress">Loading...</div>');

		setTimeout(delayTest, 1000);	// 시간 지연을 위한 테스트 코드
		function delayTest(){	// 시간 지연을 위한 테스트 코드
			if(url == undefined){
				// url  미정의시 기본 목록 표시
				$('#container').load('main.html header ul', hijackLinks);
				console.log('load');
			}else{
				// url 요청시
				$('#container').load(url + ' section', hijackLinks);
			}			
		} // end delayTest()

	} // loadPage()

	function hijackLinks(){
		$('#container a').click(function(e){
			e.preventDefault();

			// 클릭한 a요소의 href url을 로드
			loadPage(e.target.href);	
		});

		// 페이지 제목 설정
		var title = $('h2').html() || 'no title';
		$('header > h1 > a').html(title);
		$('h2').remove();

		$('#progress').remove();	// 로딩바 제거
	}

	loadPage();

});	// end $()