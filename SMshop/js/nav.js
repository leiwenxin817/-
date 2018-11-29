$("#nav li").mouseenter(function(){
	$(this).children(".nav_two").css("display","block");
}).mouseleave(function(){
	$(this).children(".nav_two").css("display","none");
})

var timer=null;
var index=0;
var $ulist=$("#autoUl li");
var $olist=$("#autoOl li");
timer=setInterval(autoplay,1500);
function autoplay(){
	index++;
	if(index ==$ulist.size()){
		index=0;
	}
	$olist.eq(index).addClass("active").siblings().removeClass("active")
	$ulist.eq(index).fadeIn(1000).siblings().fadeOut(1000)
}
$olist.mouseenter(function(){
	clearInterval(timer);
	index=$(this).index()-1;
	autoplay();
}).mouseleave(function(){
	timer=setInterval(autoplay,1500);
});