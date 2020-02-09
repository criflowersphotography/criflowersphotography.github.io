var cards = $(".img-wrap");
var cards2 = $(".carousel-item");
for(var i = 0; i < cards.length; i++){
    var target = Math.floor(Math.random() * cards.length -1) +1;
    var target2 = Math.floor(Math.random() * cards.length -1) +1;
    cards.eq(target).before(cards.eq(target2));
    cards2.eq(target).before(cards2.eq(target2));
}

let claz = '';
$('#gallery').on('slide.bs.carousel', function (ev) {
	if (claz != '') {
		nextGivenClassElement(claz, ev.relatedTarget, ev.to);
	}
});

function nextGivenClassElement(claz, el, to) {
	const src = $(el).children('img').attr('src');

	console.log('src -> ' + src + ', to -> ' + to);

	if(src && !src.includes(claz)) {		
		nextGivenClassElement(claz, $('#gallery').carousel(to + 1), (to + 1));
		$('#gallery').carousel('previous');
	}
}

$(".social").hide();

$(window).on("load", function(){
	$("#loading").fadeOut(800, function(){
		$('#b1').addClass('animated bounceOutLeft')
		$('#b6').addClass('animated bounceOutRight');
		setTimeout(function(){
			$('#b2').addClass('animated bounceOutLeft');
			$('#b5').addClass('animated bounceOutRight');
		},100);
		setTimeout(function(){
			$('#b3').addClass('animated bounceOutLeft');
			$('#b4').addClass('animated bounceOutRight');
		},200);
		$(".info").addClass("animated bounceInLeft");
		$(".showhidemenu, .right_menu").addClass("animated bounceInRight");
		$(".social").show().addClass("animated zoomIn");
		setTimeout(function(){
			$(".info").removeClass("animated bounceInLeft");
			$(".showhidemenu, .right_menu").removeClass("animated bounceInRight");
			$(".social").removeClass("animated zoomIn");
	  	$("#box").css("display","none");
		},3000);
	});
});

function showabout() {
	$(".container_about").css({"display":"flex","display":"-webkit-flex"});
	$(".header, .container, .showhidemenu").fadeOut(800).addClass("animated fadeOutRight");
	$(".info").fadeOut(200).addClass("animated fadeOutRight");
	$(".container_about").addClass("animated fadeInLeft").fadeTo(800,1, function(){
		$(window).scrollTop(0);
		$(".container_about").removeClass("animated fadeInLeft");
		$(".header, .container, .info, .showhidemenu").removeClass("animated fadeOutRight");
	});
}
function closeabout() {
	$(".container_about").addClass("animated fadeOutLeft").fadeOut(800);
	$(".info, .showhidemenu, .header, .container").addClass("animated fadeInRight").fadeTo(800,1, function(){
		$(".container_about").removeClass("animated fadeOutLeft");
		$(".info, .showhidemenu, .header, .container").removeClass("animated fadeInRight");
	});
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

function hideIndicators(claz) {
	$('.carousel-item').each((index, el) => { 
		if (claz != '' && !$(el).children('img').attr('src').includes(claz)) {
			$('.carousel-indicators').find('li[data-slide-to="' + index + '"]').hide();
		} else {
			$('.carousel-indicators').find('li[data-slide-to="' + index + '"]').show();
		}
	});
}
	
function allImgs(){
	claz = '';
	hideIndicators(claz);
	$(".concertsImgs, .landscapesImgs, .sportsImgs, .portraitsImgs").css("display","block");
	$(".concertsImgs, .landscapesImgs, .sportsImgs, .portraitsImgs").css("opacity","0");
	$(".concertsImgs, .landscapesImgs, .sportsImgs, .portraitsImgs").fadeTo(400,1);
}

function concertsImgs(){
	claz = 'Concerts';
	hideIndicators(claz);
	$(".landscapesImgs, .sportsImgs, .portraitsImgs").css("display","none");
	$(".concertsImgs").css("display","block");
	$(".concertsImgs").css("opacity","0");
	$(".concertsImgs").fadeTo(400,1);
}

function landscapesImgs(){
	claz = 'Landscapes';
	hideIndicators(claz);
	$(".concertsImgs, .sportsImgs, .portraitsImgs").css("display","none");
	$(".landscapesImgs").css("display","block");
	$(".landscapesImgs").css("opacity","0");
	$(".landscapesImgs").fadeTo(400,1);
}

function sportsImgs(){
	claz = 'Sports';
	hideIndicators(claz);
	$(".concertsImgs, .landscapesImgs, .portraitsImgs").css("display","none");
	$(".sportsImgs").css("display","block");
	$(".sportsImgs").css("opacity","0");
	$(".sportsImgs").fadeTo(400,1);
}

function portraitsImgs(){
	claz = 'Portraits';
	hideIndicators(claz);
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
	$('.carousel').carousel('pause');
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

var indexCarousel = 0;
$('.img-wrap').click(function() {
	var whichSrc = $(this).find('img').attr("src");
  $('.carousel-item').removeClass('active');
  $('.carousel-indicators').children().removeClass('active');
  $('img[src="'+whichSrc+'"]').parent('div.carousel-item').addClass('active');
  indexCarousel = $(this).index();
  $(document).find('li[data-slide-to="'+indexCarousel+'"]').addClass('active');
  $('.carousel').carousel('cycle');
});
