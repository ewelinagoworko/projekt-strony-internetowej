$(function(){
	
	var okno = $(window);
	var menu = $('#main-menu');
	
	
	okno.scroll(function(){
		
		if(okno.scrollTop() >= 100) {
			console.log('test');
			menu.addClass('scroll');
		} else {
			menu.removeClass('scroll');
		}
	});
});