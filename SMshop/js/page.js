$("#content_left ul li").mouseenter(function(){
	var index=$(this).index();
	$(this).css("border","1px solid #0069aa").siblings().css("border","")
	$("#content_left ol li").eq(index).show().siblings().hide()
	$("#content_right ul li").eq(index).show().siblings().hide();
})

$("#content_left ol").mouseenter(function(){
	$("#mask").show();
	$("#content_right").show();
}).mouseleave(function(){
	$("#mask").hide();
	$("#content_right").hide();	
}).mousemove(function(e){
	var e = e || event;
	var x = e.pageX - $("#content_left ol").offset().left - $("#mask").width()/2;
	var y = e.pageY - $("#content_left ol").offset().top - $("#mask").height()/2;

	var maxL=$("#content_left ol").width()-$("#mask").width();
	var maxT=$("#content_left ol").height()-$("#mask").height();
	
	x= Math.min(Math.max(0,x),maxL);
	y= Math.min(Math.max(0,y),maxT);
	
	$("#mask").css({"left" : x, "top" :y });
	
	var x1=x*$("#content_right ul").width()/$("#content_left ol li").width();
	var y1=y*$("#content_right ul").height()/$("#content_left ol li").height();
	$("#content_right ul li").css({
		"left": -x1,
		"top":-y1
	})
})
var index=0;
$("#jian").on("click",function(){
	--index;
	if(index<=0){
		index=0;
	}
	$("#footnum #num").html(index)
});

$("#jia").on("click",function(){
	++index;
	$("#footnum #num").html(index);
});

$("#content_foot button").on("click",function(){
	$("#page_info").css("display","block");
	//获取购物数量
	var count=$("#footnum #num").html();
	$("#shopcar a #num").html(count);
	var falg=true;
	var arr=[];
	json={
		"src": "pageImg/1.jpg",
		"price":$("#price").html(),
		"count":count	
	}
	arr.push(json);
	localStorage.name= JSON.stringify(arr);
	console.log(localStorage.name)
});

$("#close").on("click",function(){
	$("#page_info").css("display","none");	
});
