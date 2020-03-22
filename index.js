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
	
	initializeCarousel('all');
});

function initializeCarousel(claz) {
	if(claz !== currentClaz) {
		$(".carousel-indicators").empty();
		$(".carousel-inner").empty();
		
		let numConcerts = 0;
		let numPortraits = 0;
		let numLandscapes = 0;
		let numSports = 0;
		
		$(".img-fluid").each(function(index, element) {
			
			const img = $(element);
			const resSrc = img.attr('src');
			const alt = img.attr('alt');
			const title = $(element).siblings('h4').text();
			const description = $(element).siblings('p').text();
			
			const currentImgClaz = $(element).attr('class').split(' ')[1];
			
			let idSuffix;
			if (currentImgClaz === 'concertsImgs') {
				idSuffix = currentImgClaz + "-" + numConcerts;
				numConcerts++;
			} else if (currentImgClaz === 'portraitsImgs') {
				idSuffix = currentImgClaz + "-" + numPortraits;			
				numPortraits++;
			} else if (currentImgClaz === 'landscapesImgs') {
				idSuffix = currentImgClaz + "-" + numLandscapes;
				numLandscapes++;
			} else {
				idSuffix = currentImgClaz + "-" + numSports;
				numSports++;
			}
			
			img.attr('id', idSuffix);
			$(".carousel-indicators").append("<li id='indicator-" + idSuffix + "' data-target='#gallery' data-slide-to='"+index+"' class='"+(index==0 ? 'active' : '')+"'></li>");
			$(".carousel-inner").append("<div class='carousel-item "+(index==0 ? "active" : "")+"'><img id='carousel-" + idSuffix + "' class='d-block w-100' style='filter:blur(10px);' src='"+resSrc+"' alt='"+alt+"'/><div class='carousel-caption d-md-block'><h3>"+title+"</h3><p>"+description+"</p></div></div>");
		});
		
		currentClaz = claz;
	}
};

$(window).on('load', function () {
	$('.img-fluid').each(function(i, el) {
		const $midImgId = 'mid-'+ $(el).attr('id');
		const $midSrc = $(el).attr('data-src').replace('low', 'mid');
		
		$(el).attr('src', $(el).attr('data-src')).on('load', function(event) {	
				$(event.target).removeAttr('style');
			});
		
		$(".carousel-item img[id$='" + $(el).attr('id') + "']").attr('src', $midSrc);
	});
	
	loadingFinished();
});

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

$('.img-wrap').on('click', function (event) {
	
	$('.carousel-item').removeClass('active');
	$('.carousel-indicators').children().removeClass('active');
	
	const $img = $(event.target).children('img.img-fluid');
	const $imgId = $img.attr('id');
	$(".carousel-item img[id$='" + $imgId + "']").parent().addClass('active');
	$(".carousel-indicators li[id$='" + $imgId + "']").addClass('active')

	$('.carousel').carousel('cycle');
	
	const $bigImgId = 'big-'+ $imgId;
	const $bigSrc = $img.attr('data-src').replace('mid', 'big');
	if (!$('#' + $bigImgId).length) {
		$(".carousel-item img[id$='" + $imgId + "']").attr('src', $bigSrc).on('load', function(event) {	
				$(event.target).attr('id', $bigImgId).removeAttr('style');
			});
	}
});

$('#gallery').on('slide.bs.carousel', function (event) {
		const $carouselImg = $(event.relatedTarget).children('img');
		const $bigImgId = 'big-'+ $carouselImg.attr('id');
		const $bigSrc = $carouselImg.attr('src').replace('mid', 'big');
		if (!$('#' + $bigImgId).length) {
	  	$carouselImg.attr('src', $bigSrc).on('load', function(event) {	
					$(event.target).attr('id', $bigImgId).removeAttr('style');
				});
		}
	});