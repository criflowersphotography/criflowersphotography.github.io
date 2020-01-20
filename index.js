var cards = $(".img-wrap");
var cards2 = $(".carousel-item");
for(var i = 0; i < cards.length; i++){
    var target = Math.floor(Math.random() * cards.length -1) +1;
    var target2 = Math.floor(Math.random() * cards.length -1) +1;
    cards.eq(target).before(cards.eq(target2));
    cards2.eq(target).before(cards2.eq(target2));
}
function showabout() {
	$(".container_about").css({"display":"flex","display":"-webkit-flex"});
	$(".header, .container, .showhidemenu").fadeOut(800).addClass("animated fadeOutRight");
	$(".info").fadeOut(200).addClass("animated fadeOutRight");
	$(window).scrollTop(0);
	$(".container_about").addClass("animated fadeInLeft").fadeTo(800,1, function(){
		$(".container_about").removeClass("animated fadeInLeft");
		$(".header, .container, .info, .showhidemenu").removeClass("animated fadeOutRight");
	});
}
function closeabout() {
	$(".container_about").addClass("animated fadeOutLeft").fadeOut(800);
	$(".showhidemenu, .header, .container").addClass("animated fadeInRight").fadeIn(800, function(){
		$(".container_about").removeClass("animated fadeOutLeft");
	});
	setTimeout(function(){
		$(".info").addClass("animated fadeInRight").fadeIn(800, function(){
			$(".info, .showhidemenu, .header, .container").removeClass("animated fadeInRight");
		});
	},400);
}
var flag=true;
var menuopened=false;
function showmenu(){
		if(flag){
			$(".fas").toggleClass("fa-bars fa-times-circle");
			$(".showhidemenu").css("right","8em");
			$(".right_menu").css("right","-2em");
			menuopened=!menuopened;
			$("#wrapped_menu").on(right_menu_mouse());
		}
		else{
			$("#wrapped_menu").off(right_menu_mouse());
			$(".fas").toggleClass("fa-times-circle fa-bars");
			$(".showhidemenu").css("right","0em");
			$(".right_menu").css("right","-10em");
			menuopened=false;
		}
		flag=!flag
}
function right_menu_mouse(){
	if(menuopened){
		$("#wrapped_menu").mouseleave(function(){
			$(".fas").toggleClass("fa-times-circle fa-bars");
			$(".showhidemenu").css("right","0em");
			$(".right_menu").css("right","-10em");
			menuopened=false;
			flag=!flag
			$(this).off("mouseleave");
		});
	}
	else{
		$("#wrapped_menu").off(right_menu_mouse());
		menuopened=false;
		flag=!flag
	}
}
	
function allImgs(){
	$(".concertsImgs, .landscapesImgs, .sportsImgs, .portraitsImgs").css("display","block");
	$(".concertsImgs, .landscapesImgs, .sportsImgs, .portraitsImgs").css("opacity","0");
	$(".concertsImgs, .landscapesImgs, .sportsImgs, .portraitsImgs").fadeTo(400,1);
}
function concertsImgs(){
	$(".landscapesImgs, .sportsImgs, .portraitsImgs").css("display","none");
	$(".concertsImgs").css("display","block");
	$(".concertsImgs").css("opacity","0");
	$(".concertsImgs").fadeTo(400,1);
	/*var listcards = $(".img-wrap");
	var listcarousel = $(".carousel-item");
	for(var i = 0; i < cards.length; i++){
    listcards.eq(i);
    listcarousel.eq(i);
	}*/
}
function landscapesImgs(){
	$(".concertsImgs, .sportsImgs, .portraitsImgs").css("display","none");
	$(".landscapesImgs").css("display","block");
	$(".landscapesImgs").css("opacity","0");
	$(".landscapesImgs").fadeTo(400,1);
}
function sportsImgs(){
	$(".concertsImgs, .landscapesImgs, .portraitsImgs").css("display","none");
	$(".sportsImgs").css("display","block");
	$(".sportsImgs").css("opacity","0");
	$(".sportsImgs").fadeTo(400,1);
}
function portraitsImgs(){
	$(".concertsImgs, .landscapesImgs, .sportsImgs").css("display","none");
	$(".portraitsImgs").css("display","block");
	$(".portraitsImgs").css("opacity","0");
	$(".portraitsImgs").fadeTo(400,1);
}
/*function showgallery(){
    $("#concerts_container").css("display","inherit");
    $("#concerts_container").addClass("animated slideInRight");
    $("#concerts_container").fadeTo(1000,1);
    setTimeout(function(){
        $("#concerts_container").removeClass("animated slideInRight");
    },800);
    $("#middle").fadeTo(800,0);
    $("#footer").fadeTo(800,0);
}*/

function closeModalGallery(){
	$("#ModalImgs").modal('hide');
	//$('#gallery').carousel('pause');
}

/*
function showwork(){
    $("#work_container").css("display","inherit");
    $("#work_container").addClass("animated slideInRight");
    $("#work_container").fadeTo(1000,1);
    setTimeout(function(){
        $("#work_container").removeClass("animated slideInRight");
    },800);
    $("#middle").fadeTo(800,0);
    $("#footer").fadeTo(800,0);
}
function closework(){
    $("#work_container").addClass("animated slideOutRight");
    setTimeout(function(){
        $("#work_container").removeClass("animated slideOutRight");
        $("#work_container").css("display","none");
    },800);
    $("#work_container").fadeTo(800,0);
    $("#middle").fadeTo(1000,1);
    $("#footer").fadeTo(1000,1);
}
function showcontact(){
    $("#contact_container").css("display","inherit");
    $("#contact_container").addClass("animated slideInUp");
    $("#contact_container").fadeTo(1000,1);
    setTimeout(function(){
        $("#contact_container").removeClass("animated slideInUp");
    },800);
    $("#middle").fadeTo(800,0);
    $("#footer").fadeTo(800,0);
}
function closecontact(){
    $("#contact_container").addClass("animated slideOutDown");
    setTimeout(function(){
        $("#contact_container").removeClass("animated slideOutDown");
        $("#contact_container").css("display","none");
    },800);
    $("#contact_container").fadeTo(800,0);
    $("#middle").fadeTo(1000,1);
    $("#footer").fadeTo(1000,1);
}*/

$(window).on( "load", function(){
	$("#loading").addClass("animated fadeOut");
	setTimeout(function(){
		$(".info").addClass("animated bounceInLeft");
		$(".showhidemenu").addClass("animated bounceInRight");
		$(".right_menu").addClass("animated bounceInRight");
		$(".social").addClass("animated zoomIn");
		setTimeout(function(){
			$("#loading").removeClass("animated fadeOut");
			$(".info").removeClass("animated bounceInLeft");
			$(".showhidemenu").removeClass("animated bounceInRight");
			$(".right_menu").removeClass("animated bounceInRight");
			$(".social").removeClass("animated zoomIn");
	  	$("#loading").css("display","none");
	  	$("#box").css("display","none");
		},3000);
	},800);
});

//$(document).carousel('pause');

$('.img-wrap').click(function() {
	var whichSrc = $(this).find('img').attr("src");
  $('.carousel-item').removeClass('active');
  $('img[src="'+whichSrc+'"]').parent('div.carousel-item').addClass('active');
  //$('#gallery').carousel('cycle');
  /*$(document).ready(function(){
  	$('.carousel').on('mouseenter',function() {
  		$(this).carousel('cycle');
  	}).on('mouseleave', function() {
  		$(this).carousel('pause');
  	});
	});*/
});
