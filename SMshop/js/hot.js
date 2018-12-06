
$.ajax({
	type:"get",
	url:"json/hot.json",
	success:function(msg){
		var str="";
		for(var i =0; i<msg.length;i++){
			str+=`<li>
					<a href="page.html?${msg[i].id}">
						<img src="img/${msg[i].src}" alt="" />
						<p>${msg[i].name}</p>
						<p id="price">${msg[i].price}</p>
					</a>
				</li>`;
		}
		$("#ul2").html(str)
		
	}
})

$.ajax({
	type:"get",
	url:"json/hot2.json",
	success:function(msg){
		var str="";
		for(var i =0; i<msg.length;i++){
			str+=`<li>
					<a href="page.html?${msg[i].id}">
						<img src="img/${msg[i].src}" alt="" />
						<p>${msg[i].name}</p>
						<p id="price">${msg[i].price}</p>
					</a>
				</li>`;
		}
		$("#ul3").html(str)
		
	}
})


$.ajax({
	type:"get",
	url:"json/hot3.json",
	success:function(msg){
		var str="";
		for(var i =0; i<msg.length;i++){
			str+=`<li>
					<a href="page.html?${msg[i].id}">
						<img src="img/${msg[i].src}" alt="" />
						<p>${msg[i].name}</p>
						<p id="price">${msg[i].price}</p>
					</a>
				</li>`;
		}
		$("#ul4").html(str)
		
	}
})


$.ajax({
	type:"get",
	url:"json/hot4.json",
	success:function(msg){
		var str="";
		for(var i =0; i<msg.length;i++){
			str+=`<li>
					<a href="page.html?${msg[i].id}">
						<img src="img/${msg[i].src}" alt="" />
						<p>${msg[i].name}</p>
						<p id="price">${msg[i].price}</p>
					</a>
				</li>`;
		}
		$("#ul5").html(str);
	}
})

$(".active").mouseenter(function(){
	$("#btn_l").animate({"opacity":1},500)
	$("#btn_r").animate({"opacity":1},500)
}).mouseleave(function(){
	$("#btn_l").animate({"opacity":0},500)
	$("#btn_r").animate({"opacity":0},500)
})

var index=0;
$("#btn_l").click(function(){
	--index;
	if(index<0){
		index=0;
	}
	$("#ul5").css( "left" , 240*index);
})
$("#btn_r").click(function(){	
	++index;
	if(index>6){
		index=6;
	}
	$("#ul5").css("left", -240*index);	
})
