var cards = $(".img-wrap");
for(var i = 0; i < cards.length; i++){
    var target = Math.floor(Math.random() * cards.length -1) + 1;
    var target2 = Math.floor(Math.random() * cards.length -1) +1;
    cards.eq(target).before(cards.eq(target2));
}
window.addEventListener("load",function(){
	alert("ciaociao");
	setTimeout(function(){
		window.scrollTo(0, 1);
	}, 0);
});
function showabout(){
    $(".container_about").css("display","inherit");
    $(".container_about").addClass("animated slideInLeft");
    $(".info").addClass("animated slideOutRight");
    $(".showhidemenu").addClass("animated slideOutRight");
    $(".right_menu").addClass("animated slideOutRight");
    $(".container_about").fadeTo(1000,1);
    $(".header").fadeTo(800,0);
    $(".container").fadeTo(800,0);
    $(".info").fadeTo(100,0);
    $(".showhidemenu").fadeTo(100,0);
    $(".right_menu").fadeTo(100,0);
    setTimeout(function(){
        $(".container_about").removeClass("animated slideInLeft");
        $(".info").removeClass("animated slideOutRight");
        $(".showhidemenu").removeClass("animated slideOutRight");
        $(".right_menu").removeClass("animated slideOutRight");
        $(".info").css("display","none");
        $(".showhidemenu").css("display","none");
        $(".right_menu").css("display","none");
    },800);
}
function closeabout(){
		$(".info").css("display","inherit");
		$(".showhidemenu").css({"display":"flex","display":"-webkit-flex"});
		$(".right_menu").css({"display":"flex","display":"-webkit-flex"});
    $(".container_about").addClass("animated slideOutLeft");
    $(".info").addClass("animated slideInRight");
    $(".showhidemenu").addClass("animated slideInRight");
    $(".right_menu").addClass("animated slideInRight");
    $(".container_about").fadeTo(800,0);
    $(".info").fadeTo(800,1);
    $(".showhidemenu").fadeTo(800,1);
    $(".right_menu").fadeTo(800,1);
    $(".header").fadeTo(1000,1);
    $(".container").fadeTo(1000,1);
    setTimeout(function(){
        $(".container_about").removeClass("animated slideOutLeft");
        $(".info").removeClass("animated slideInRight");
        $(".showhidemenu").removeClass("animated slideInRight");
        $(".right_menu").removeClass("animated slideInRight");
        $(".container_about").css("display","none");
    },800);
}
var flag=true;
var menuopened=false;
function showmenu(){
		if(flag){
			$(".fas").toggleClass("fa-bars fa-times-circle");
			$(".showhidemenu").css("right","8em");
			$(".right_menu").css("right","-2em");
			menuopened=!menuopened;
			$(".wrapped_menu").on(right_menu_mouse());
		}
		else{
			$(".wrapped_menu").off(right_menu_mouse());
			$(".fas").toggleClass("fa-times-circle fa-bars");
			$(".showhidemenu").css("right","0em");
			$(".right_menu").css("right","-10em");
			menuopened=false;
		}
		flag=!flag
}
function right_menu_mouse(){
	if(menuopened){
		$(".wrapped_menu").mouseleave(function(){
			$(".fas").toggleClass("fa-times-circle fa-bars");
			$(".showhidemenu").css("right","0em");
			$(".right_menu").css("right","-10em");
			menuopened=false;
			flag=!flag
			$(this).off("mouseleave");
		});
	}
	else{
		$(".wrapped_menu").off(right_menu_mouse());
		menuopened=false;
		flag=!flag
	}
}
	
function allImgs(){
	$(".concertsImgs, .landscapesImgs, .sportsImgs, .portraitsImgs").css("display","block");
	$(".concertsImgs, .landscapesImgs, .sportsImgs, .portraitsImgs").css("opacity","0");
	$(".concertsImgs, .landscapesImgs, .sportsImgs, .portraitsImgs").fadeTo(800,1);
}
function concertsImgs(){
	$(".landscapesImgs, .sportsImgs, .portraitsImgs").css("display","none");
	$(".concertsImgs").css("display","block");
	$(".concertsImgs").css("opacity","0");
	$(".concertsImgs").fadeTo(800,1);
}
function landscapesImgs(){
	$(".concertsImgs, .sportsImgs, .portraitsImgs").css("display","none");
	$(".landscapesImgs").css("display","block");
	$(".landscapesImgs").css("opacity","0");
	$(".landscapesImgs").fadeTo(800,1);
}
function sportsImgs(){
	$(".concertsImgs, .landscapesImgs, .portraitsImgs").css("display","none");
	$(".sportsImgs").css("display","block");
	$(".sportsImgs").css("opacity","0");
	$(".sportsImgs").fadeTo(800,1);
}
function portraitsImgs(){
	$(".concertsImgs, .landscapesImgs, .sportsImgs").css("display","none");
	$(".portraitsImgs").css("display","block");
	$(".portraitsImgs").css("opacity","0");
	$(".portraitsImgs").fadeTo(800,1);
}
function showgallery(){
    $("#concerts_container").css("display","inherit");
    $("#concerts_container").addClass("animated slideInRight");
    $("#concerts_container").fadeTo(1000,1);
    setTimeout(function(){
        $("#concerts_container").removeClass("animated slideInRight");
    },800);
    $("#middle").fadeTo(800,0);
    $("#footer").fadeTo(800,0);
}
function closegallery(){
    $("#concerts_container").addClass("animated slideOutRight");
    setTimeout(function(){
        $("#concerts_container").removeClass("animated slideOutRight");
        $("#concerts_container").css("display","none");
    },800);
    $("#concerts_container").fadeTo(800,0);
    $("#middle").fadeTo(1000,1);
    $("#footer").fadeTo(1000,1);
}
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
}

setTimeout(function(){
	$("#loading").addClass("animated fadeOut");
	setTimeout(function(){
		$("#loading").removeClass("animated fadeOut");
	  $("#loading").css("display","none");
	  $("#box").css("display","none");
	},1500);
},2000);

/*$(document).ready(function(){
  $('.carousel').on('mouseenter',function() {
  $(this).carousel('cycle');
  }).on('mouseleave', function() {
  $(this).carousel('pause');
  });
});*/
