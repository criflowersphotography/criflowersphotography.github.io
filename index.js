let currentClaz;

$(document).ready(function() {
	var cards = $(".img-wrap");
	var cards2 = $(".carousel-item");
	for(var i = 0; i < cards.length; i++){
	    var target = Math.floor(Math.random() * cards.length -1) +1;
	    var target2 = Math.floor(Math.random() * cards.length -1) +1;
	    cards.eq(target).before(cards.eq(target2));
	    cards2.eq(target).before(cards2.eq(target2));
	}
});

/*$(function () {
	var $images = $('.container img');
	var $lengthImgs = $images.length;
	var i = 0;
	loadNextImg();
	function loadNextImg() {
		if (i < $lengthImgs) {
			if(i === 15){
	   		loadingFinished();
	   	}
	   	var srcMidImg = $($images).attr('data-src');
	   	$('.container').append("<img class='loadMidImg' style='display:none;' src='"+srcMidImg+"'/>");
	   	$('.loadMidImg').on('load', function () {
	   		$($images[i]).attr('src', $($images[i]).attr('data-src'));
	   		$($images[i]).attr('data-src', $($images[i]).attr('data-src').replace(".jpg","_low.jpg"));
	   		$($images[i]).removeAttr('style');
	   	});
		}
		if(i === $lengthImgs){
	   	initializeCarousel('all');
	   	return false;
	  }
		i += 1;
		$($images[i]).ready(loadNextImg);
	}
});*/

$(function initializeCarousel(claz) {
	if(claz !== currentClaz) {
		$(".carousel-indicators").empty();
		$(".carousel-inner").empty();
		
		const imgWrapClass = 
			claz === 'Concerts' ? '.concertsImgs' :
			claz === 'Portraits' ? '.portraitsImgs' :
			claz === 'Landscapes' ? '.landscapesImgs' :
			claz === 'Sports' ? '.sportsImgs' : '';
			
		$(".img-wrap" + imgWrapClass).each(function(index, element){
			const lowResSrc = $(element).children('img').attr('src');
			const highResSrc = lowResSrc.replace("_low.jpg","_bigger.jpg");
			const alt = $(element).children('img').attr('alt');
			const title = $(element).children('h4').text();
			const description = $(element).children('p').text();
			$(".carousel-indicators").append("<li data-target='#gallery' data-slide-to='"+index+"' class='"+(index==0 ? 'active' : '')+"'></li>");
			$(".carousel-inner").append("<div class='carousel-item "+(index==0 ? "active" : "")+"'><img class='d-block w-100' style='filter:blur(10px);' src='"+lowResSrc+"' data-src='"+highResSrc+"' alt='"+alt+"'/><div class='carousel-caption d-md-block'><h3>"+title+"</h3><p>"+description+"</p></div></div>");
		});
		
		currentClaz = claz;
	}
});

$(window).on('load', function () {
		$('.img-fluid').each(function(i, el) {
			var id = "big" + i;
			
			$('.container').append("<img class='loadMidImg' id='" + id + "' style='display:none;' src='" + $(el).attr('data-src') + "'/>");	
			
			$('#' + id).on('load', function(event) {
				$(el)
					.attr("src", $(event.target).attr('src'))
					.removeAttr("style");
			});
		});
});

/*
*/

$(".social").hide();

function loadingFinished() {
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
			//$(".social").removeClass("animated zoomIn");
	  	$("#box").css("display","none");
		},1000);
	});
};

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
	
function allImgs(){
	initializeCarousel('all');
	$(".concertsImgs, .landscapesImgs, .sportsImgs, .portraitsImgs").css("display","block");
	$(".concertsImgs, .landscapesImgs, .sportsImgs, .portraitsImgs").css("opacity","0");
	$(".concertsImgs, .landscapesImgs, .sportsImgs, .portraitsImgs").fadeTo(400,1);
}

function concertsImgs(){
	initializeCarousel('Concerts');
	$(".landscapesImgs, .sportsImgs, .portraitsImgs").css("display","none");
	$(".concertsImgs").css("display","block");
	$(".concertsImgs").css("opacity","0");
	$(".concertsImgs").fadeTo(400,1);
}

function landscapesImgs(){
	initializeCarousel('Landscapes');
	$(".concertsImgs, .sportsImgs, .portraitsImgs").css("display","none");
	$(".landscapesImgs").css("display","block");
	$(".landscapesImgs").css("opacity","0");
	$(".landscapesImgs").fadeTo(400,1);
}

function sportsImgs(){
	initializeCarousel('Sports');
	$(".concertsImgs, .landscapesImgs, .portraitsImgs").css("display","none");
	$(".sportsImgs").css("display","block");
	$(".sportsImgs").css("opacity","0");
	$(".sportsImgs").fadeTo(400,1);
}

function portraitsImgs(){
	initializeCarousel('Portraits');
	$(".concertsImgs, .landscapesImgs, .sportsImgs").css("display","none");
	$(".portraitsImgs").css("display","block");
	$(".portraitsImgs").css("opacity","0");
	$(".portraitsImgs").fadeTo(400,1);
}

function closeModalGallery(){
	$("#ModalImgs").modal('hide');
}

$(document).on('click', "div.img-wrap", function () {
	/*const chkSrc = $($('.carousel-item img')[0]).attr('src').includes('low');
	if(chkSrc==true) {
		var i = 0;
		loadNextCarousel();
		function loadNextCarousel() {
			if(i < $('.carousel-item img').length) {
				const tempSrc = $($('.carousel-item img')[i]).attr('data-src');
				$($('.carousel-item img')[i]).attr('src', tempSrc+"?");
				$($('.carousel-item img')[i]).removeAttr('data-src');
				$($('.carousel-item img')[i]).removeAttr('style');
			}
			else {
				return false;
			}
			i += 1;
			$($('.carousel-item img')[i]).ready(loadNextCarousel);
		}
	}
	var $src = $(this).children().attr('src').split('.')[0];
	var src2 = $src+"_";*/
	var $src = $(this).children().attr('src');
	$('.carousel-item').removeClass('active');
	$('.carousel-indicators').children().removeClass('active');
	$('.carousel img').each(function(index, el) {
		if($(el).attr('src').includes($src)) {
			$(el).parent('div.carousel-item').addClass('active'); 
			$(($('.carousel-indicators').children())[index]).addClass('active'); 
			return false;
		}
	});
	$('.carousel').carousel('cycle');
});