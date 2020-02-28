$(document).ready( function() {
	
});

$(".left-panel h3").click(function(){
	if(!$(this).hasClass("active")){
		$(".left-panel h3, .left-panel .btn-set").removeClass("active");
		$(this).addClass("active");
		$(this).next(".btn-set").addClass("active");
	}
});

$(".left-panel .btn-set img").click(function(){
	var imgSrc = $(this).attr("src");
	$(".top-image-rotate img").attr("src" , imgSrc);
});