$(document).ready(function() {
    window.setTimeout(function(){$(".c1").hide();$(".data").show('slow');},10000);
});
$(".navbar-nav li").click(function(){
	$(".navbar-nav").children().removeClass("active");
	$(this).addClass("active");
});
$(".navbar-nav li li").click(function(){
	$(".navbar-nav ul").children().removeClass("active");
	$(this).addClass("active");
    $(this).parent().stop(true,true).slideUp('medium');
});

$(".navbar-nav li").hover(function(){
		if($(this).find('ul').length==1){
		    $('.dropdown-menu').stop(true,true).slideUp('medium');
	    	$(this).find('.dropdown-menu').stop(true,true).slideDown('medium');
		}
		else if($(this).parent().find('.dropdown-toggle').length==0)
	        $(this).stop(true,true).slideDown('medium');
	    else 
	    	$('.dropdown-menu').stop(true,true).slideUp('medium');
    },
    function () {
    	if(!$(this).closest(".navbar-nav")){
	    	$('.dropdown-menu').stop(true,true).slideUp('medium');
	    	}
	}
 );

$(".innerPer").hover(function(){
		$(this).find("p").stop(true,true).slideDown('slow');
		$(this).find(".fa").removeClass("fa-chevron-up");
		$(this).find(".fa").addClass("fa-chevron-down");
    },
    function () {
		$(this).find("p").stop(true,true).slideUp('medium');
		$(this).find(".fa").removeClass("fa-chevron-down");
		$(this).find(".fa").addClass("fa-chevron-up");
	}
 );



$('.carousel').carousel({
  interval: 5000
});



