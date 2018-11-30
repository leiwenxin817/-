// 随机区间
    function rand(min,max){
		return Math.round(Math.random()*(max-min)+min );
	}


//自定义时间格式  
	function dateToString(now,sign){
		//定义符号默认值  没定义sign就是-
		 sign = sign || "-";
		//获取年月日
		var y = now.getFullYear();
		var m = now.getMonth()+1;
		var d = now.getDate();
		
		//获取时分秒
		var h = fnSenconds( now.getHours() );
		var mi = fnSenconds( now.getMinutes() );
		var se = fnSenconds( now.getSeconds() );
		
		//定义自己的时间格式
		var str = y +sign+ m +sign+ d +"    "+ h +":"+ mi +":"+ se;
		
		return str;
	}
	   function fnSenconds(num){
	   		return	num < 10 ?  "0"+num  :  num ;
	   }
	var d = new Date();
	//document.write(dateToString(d,"~"));
	
	
//随机获取六位十六进制颜色 
	function getColor(){
		var color="0123456789abcdef"; 
		var ran="#"; //将字符拼接进去    随机
		for(var i=1; i<=6;i++){ //拼接六次
			ran += color.charAt(Math.round( Math.random()*15 ) );
		}
		return ran;
	}
	
//函数功能根据id查找页面元素
	function $id(id){
		return document.getElementById(id);
	}
//函数功能根据标签查找页面元素
	function $tagName(tagname){
		return document.getElementsByTagName(tagname);
	}
//函数功能根据class查找页面元素
	function $classname(classname){
		return document.getElementsByClassName(classname);
	}
	
// 碰撞检测
function pz(obj1,obj2){
 	 	var L1=obj1.offsetLeft;
 	 	var R1=obj1.offsetLeft+obj1.offsetWidth;
 	 	var T1=obj1.offsetTop;
 	 	var B1=obj1.offsetTop+obj1.offsetHeight;
 	 	
 	 	var L2=obj2.offsetLeft;
 	 	var R2=obj2.offsetLeft+obj2.offsetWidth;
 	 	var T2=obj2.offsetTop;
 	 	var B2=obj2.offsetTop+obj2.offsetHeight;
 	 	
 	 	if(R1<L2 || L1>R2 || T1>B2 || B1<T2){
 	 		return false;
 	 	}else{
 	 		return true;
 	 	}
 	 }


//字母数字验证码
function yzm(){
	var str = "";//用来存放验证码
	for( var i = 1 ; i <= 6 ; i++ ){
		var code = rand(48,122);
		if( code >= 58&&code <= 64 ||code >= 91 && code <= 96 ){
			i--;
		}else{
			var ch = String.fromCharCode( code );
			str += ch;
		}
	}
	//console.log( str );
	return str;
}
