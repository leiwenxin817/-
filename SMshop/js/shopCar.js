var $str=localStorage.name;
//"[{"src":"../pageImg/1.jpg","price":"￥238","count":"4"}]"
var arr=JSON.parse($str)[0];
//console.log(arr.src);

var constr="";
constr=`<ul>
				<li><input type="checkbox" id="qx"></li>
				<li>商品信息</li>
				<li>单价（元）</li>
				<li>数量</li>
				<li>小计（元）</li>
				<li>操作</li>
			</ul>
			<ul>
				<li>
					<input type="checkbox" id="ck">
					<img src="${arr.src}">
				</li>
				<li>
					Bioderma/贝德玛 法国进口舒妍多效洁肤液卸妆水500ml*2<br>
					 支持7天无理由退货   <br>
					支持极速达
				</li>
				<li id="pri">${arr.price}</li>
				<li>
					<div id="footnum">
						<a href="javaScript:;" id="jian" class="updateCount" data-number="-1">-</a>
						<span id="count">${arr.count}</span>
						<a href="javaScript:;" id="jia" class="updateCount" data-number="1">+</a>	
					</div>
				</li>
				<li id="num">${arr.price*arr.count}</li>
				<li><a href="javaScript:;" id="del">删除</a></li>
			</ul>`;
		
$("#show_con").html(constr);


//结算功能
function jiesuan(){
	var money=0;
	var count=0;
	$("#ck:checked").each(function(){
		//this在指向某个复选框
		money += Number($(this).parent().parent().find("#num").html());
		count += parseInt($(this).parent().parent().find("#count").html());
	})
	$("#js_price").html(money);
	$("#js_count").html(count);
}

//加减操作
$(".updateCount").click(function(){
	var sign=$(this).data("number");
	var count=parseInt($(this).parent().find("#count").html());
	if(sign== -1 && count==1){
		return;
	}
	
	arr.count+=Number(sign);
	localStorage.name=JSON.stringify(arr);
	$(this).parent().find("#count").html(arr.count);
	$(this).parent().parent().next().html(arr.count*arr.price)
	jiesuan();
})

//删除操作
$("#del").click(function(){
	if(confirm("确定要删除吗？")){
		localStorage.removeItem("name");		
		$(this).parent().parent().remove();
	}
})


//全选功能
$("#qx").click(function(){
	$("#ck").prop("checked",$(this).prop("checked"));
	jiesuan();
})

$("#ck").click(function(){
	jiesuan();
})