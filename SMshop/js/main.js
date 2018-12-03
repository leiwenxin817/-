$("#headWrapper").load("public.html #header",function(){
	
	var $headerli= $("#header li:has(ul)"); //一级菜单
	$headerli.mouseenter(function(){
		$(this).find(".iconfont").html("&#xe64a;").fadeOut(20).fadeIn(500);
		$(this).css("background","#005c9d");
		$(this).find("#two").css({"display":"block"  ,"z-index":10	})
	}).mouseleave(function(){
		$(this).find(".iconfont").html("&#xe629;").fadeIn(1000);
		$(this).css("background","#0069aa");
		$(this).children("#two").hide(100);
		$(this).find("#two").css("display","none")
	})
		
});

$("#footWrapper").load("public.html #footer");




 


