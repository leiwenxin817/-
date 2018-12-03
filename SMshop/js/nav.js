$("#navWrapper").load("public.html #nav",function(){
	
	$("#nav li").mouseenter(function(){
		$(this).children(".nav_two").css("display","block");
	}).mouseleave(function(){
		$(this).children(".nav_two").css("display","none");
	})	
});


//获取页面滚走距离  将nav吸顶
$(window).scroll(function(){
	var scro = $(document).scrollTop()
	if(scro >=102){
		$("#nav").css({
		"position" : "fixed",
		"top" : 0,
		"left": 70
		})
	}else{
		$("#nav").css({
			"position":""
		})
	}
})
