$(document).ready(function(){
	 var $tablist = $('ul#tb-grid > li'),
	     $body = $('html, body'),
		 $tabcontent = $('.content-wrap > section');
		 
	$tablist.click(function(e) {
		e.preventDefault();
		var tab_id = $(this).attr('data-tab');
		$tablist.removeClass('tab-current');
		$tabcontent.removeClass('content-current');
            $(this).addClass('tab-current');
		    $("#" + tab_id).addClass('content-current');
$body.animate({
			scrollTop: $tablist.offset().top},500);
			return false;
		});
     $('span.og-close').click(function(e){
		 e.preventDefault();
		$tablist.removeClass('tab-current');
		$tabcontent.removeClass('content-current');
			$body.animate({
				scrollTop: $body.offset().top},500);
				return false;
		}); 
})