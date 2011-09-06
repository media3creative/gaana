var whichPic = 1;
var currentPage = "#page0"
var bg_1_pic = "bg_1.jpg"
var bg_2_pic = "bg_1.jpg"
var agent=navigator.userAgent.toLowerCase();
var is_iphone = ((agent.indexOf('iphone') != -1));
var is_ipad = ((agent.indexOf('ipad') != -1));
var is_safari = ((agent.indexOf('safari') != -1));
jQuery.noConflict();
function menu_appear(menu_item,delay_count,offset){
	var width_1 = 250 + Math.random()*50 + "px"
	var width_2 = 150 + Math.random()*50 + "px"
	
	jQuery(menu_item).delay(delay_count+700).animate(
		{"opacity":"1"},
		{duration: 150
		,ease: "swing"
		,queue: true}
	)
	jQuery(jQuery(menu_item).next()).delay(delay_count).animate(
		{"width":width_1},
		{duration: 250
		,ease: "swing"
		,queue: true}
	).animate(
			{"width":"175px","left":"100px"},
			{duration: 250
			,ease: "swing"
			,queue: true}
	).animate(
			{"background-color":"white","left":"20px"},
			{duration: 150
			,ease: "swing"
			,queue: true}
	).fadeOut("slow",function(){
		//jQuery(menu_item).css("visibility","visible")
	}
	);
}
jQuery(document).ready(function() {
	changePage("#homePage","bg_1.jpg");
	jQuery('.content-container').css("display","none")
	jQuery('#homePage').css("display","block")
	
	//changePage("#page1")
	//jQuery(".preloader").delay(600).slideToggle(600,"swing");
	jQuery(".bg2").css("display", "none");
	jQuery("body").css("overflow-x", "hidden");
	//=======ANIMATION FOR MAIN MENU===========
	//====FIX SAFARI MARGIN PROBLEM============
	if(is_safari){
	}
	//=====menu-animation=====================
	//menu_appear("#main-1-link",1250);
	//menu_appear("#main-8-link",1500);
	//menu_appear("#main-2-link",1750);
	//menu_appear("#main-7-link",2000);
	//menu_appear("#main-3-link",2250);
	//menu_appear("#main-6-link",2500);
	//menu_appear("#main-4-link",2750);
	//menu_appear("#main-5-link",3000);
	//==============
	jQuery('.close-content').click(function(){
		jQuery(this).parent().slideToggle("slow");
	});
	//alert(jQuery('#main-1-link').next());
	jQuery('#main-1-link').click(function(){
		changePage("#homePage","bg_1.jpg");
	});
	jQuery('#main-2-link').click(function(){
		changePage("#eventPage","bg_2.jpg");
	});
	jQuery('#main-3-link').click(function(){
		changePage("#gamePage","bg_3.jpg");
	});
	jQuery('#main-4-link').click(function(){
		changePage("#galleryPage","bg_4.jpg");
	});
	jQuery('#main-5-link').click(function(){
		changePage("#blogPage","bg_5.jpg");
	});
	jQuery('#main-6-link').click(function(){
		changePage("#contactPage","bg_6.jpg");
	});
	jQuery('#main-7-link').click(function(){
		changePage("#donationPage","bg_7.jpg");
	});
		// pageComeOut();
	//=====MOUSE ENTER MENU ITEM==============
	jQuery('#main-1-link,#main-2-link,#main-3-link,#main-4-link,#main-5-link,#main-6-link,#main-7-link,#main-8-link').hover(
	  function () {

			jQuery(this).css("color","black");
			jQuery(this).next().css("display","block").animate(
				//alert(jQuery(this).width())
				{"height":"70px","margin-top":"-80px"},
				{duration: 200
				,ease: "swing"
				,queue: false}
			);
	  }
		,
		 function () {

			jQuery(this).next().animate(
				//alert(jQuery(this).width())
				{"height":"0px","margin-top":"-8px"},
				{duration: 200
				,ease: "swing"
				,queue: false
				,complete: function() {
				      jQuery(this).css("display","none")
			 			}
				}
			)
			//jQuery(this).next().delay(200).css("display","none");
			jQuery(this).css("color","#FFFFFF");
		  }
	);
	//=====MOUSE ENTER MENU ITEM==============
	jQuery('#sub-menu-6-item-1,#sub-menu-6-item-2,#sub-menu-6-item-3,#sub-menu-6-item-4,#sub-menu-6-item-5,#sub-menu-6-item-6').hover(
	  function () {
			jQuery(this).children().first().fadeIn().animate(
				//alert(jQuery(this).width())
				{"height":"15px","margin-top":"2px","width":"30px"},
				{duration: 200
				,ease: "swing"
				,queue: false}
			);
			jQuery(this).css("color","#931616")
	  }
		,
		 function () {
			
					jQuery(this).children().first().fadeIn().animate(
						//alert(jQuery(this).width())
						{"height":"2px","margin-top":"7px","width":"7px"},
						{duration: 200
						,ease: "swing"
						,queue: false}
					);
					jQuery(this).css("color","white")
		  }
	);
	//setInterval(slideShow,4000);
});
function ipadFunc(){
	if(is_ipad
		|| is_iphone){
		//window.location.reload(true);
		//alert(parseInt(jQuery("window").css("height")))
		//alert(window.orientation)
		//if( parseInt(jQuery(".content-container").css("height")) > 600
		//&& (window.orientation == 90 ||  window.orientation == -90)
		//){
			//alert(parseInt(jQuery(".content-container").css("height"))+ 150 +"px");
			jQuery(".bg1, .bg2").css(
				{"height": parseInt(jQuery(".content-container").css("height"))+ 600 +"px"}
				);
		//}else{
		//		jQuery(".bg1").css(
		//			{"height": "100%"}
		//			);
		//		jQuery(".bg2").css(
		//			{"height": "100%"}
		//			);
		//}
	};
}
jQuery(window).resize(function() {
 	var middlePoint = (parseInt(jQuery("body").css("width"))/2) - (parseInt(jQuery(currentPage).css("width"))/2) + 30 + "px"
	//alert("tutu")
	//jQuery(currentPage).css("left",middlePoint)
});

//===============

function changePage(targetPage,targetBg){
	//var inPoint = (parseInt(jQuery("body").css("width"))/2) - (parseInt(jQuery(targetPage).css("width"))/2) - 100 + "px"
	var inPoint = "100px"
	var outPoint2 =  (0 - parseInt(jQuery(targetPage).css("width"))) + "px"
	var outPoint =  (parseInt(jQuery("body").css("width")) + parseInt(jQuery(targetPage).css("width"))) + "px"
	//alert(inPoint);
	if(currentPage != targetPage){
		jQuery(targetPage).css("left",outPoint2)
		jQuery(targetPage).fadeIn(100).animate(
		{'left':inPoint},"fast","swing"	,function(){
				switchBg(targetBg);
			}
		);
		//jQuery(currentPage).fadeOut();
		jQuery(currentPage).animate(
		{'left':"2000px"},"slow","linear"
		).fadeOut("fast",function(){
			//switchBg(targetBg);
		});
		currentPage = targetPage
	};
}
function slideShow(){
	//alert(currentPage)
	if(currentPage == "#homePage"
	|| currentPage == "#page0"){
		whichPic += 1;
		if(whichPic == 1){
			switchBg("bg_1.jpg");
		}
		if(whichPic == 2){
			switchBg("bg_1_2.jpg");
		}
		if(whichPic == 3){
			switchBg("bg_1_4.jpg");
		}
		if(whichPic == 4){
			switchBg("bg_1_5.jpg");
			whichPic = 0;
		}

	}
	//jQuery(".bg").delay("300").fadeIn();
}
function switchBg(whichBg){
	if(bg_1_pic != whichBg){
	jQuery(".bg2").css("display","block");
	jQuery(".bg2").css("background-image","url(/images/"+ bg_1_pic + ")");
	jQuery(".bg1").css("display","none");
	jQuery(".bg1").css("background-image","url(/images/"+ whichBg + ")");
	
	jQuery(".bg2").fadeOut(1500);
	jQuery(".bg1").fadeIn(1500);
	bg_2_pic = bg_1_pic;
	bg_1_pic = whichBg;
	}
}
