var main = function() {
	$('.page_container').hide();
    $('.active_page').children('.page_container').show();

    $('#home_nav').click(function() {
    	var curr_nav = $('.active_nav_opt');
    	if (curr_nav.attr('id') != 'home_nav') {
    		curr_nav.removeClass('active_nav_opt');
    		$('#home_nav').addClass('active_nav_opt');
    		var curr_page = $('.active_page');
    		curr_page.removeClass('active_page').children('.page_container').hide(200);
    		$('#home_page').addClass('active_page').children('.page_container').show(1000);
    	}
    });
    $('#resume_nav').click(function() {
    	var curr_nav = $('.active_nav_opt');
    	if (curr_nav.attr('id') != 'resume_nav') {
    		curr_nav.removeClass('active_nav_opt');
    		$('#resume_nav').addClass('active_nav_opt');
    		var curr_page = $('.active_page');
    		curr_page.removeClass('active_page').children('.page_container').hide(200);
    		$('#resume_page').addClass('active_page').children('.page_container').show(1000);
    	}
    });
    $('#contact_nav').click(function() {
    	var curr_nav = $('.active_nav_opt');
    	if (curr_nav.attr('id') != 'contact_nav') {
    		curr_nav.removeClass('active_nav_opt');
    		$('#contact_nav').addClass('active_nav_opt');
    		var curr_page = $('.active_page');
    		curr_page.removeClass('active_page').children('.page_container').hide(200);
    		$('#contact_page').addClass('active_page').children('.page_container').show(1000);
    	}
    });
}

$(document).ready(main);