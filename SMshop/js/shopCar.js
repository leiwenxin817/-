var $str=localStorage.name;
//"[{"src":"../pageImg/1.jpg","price":"￥238","count":"4"}]"
var arr=JSON.parse($str)[0];
//console.log(arr.src);

var constr="";
constr=`<div id="show_con">
			<ul>
				<li><input type="checkbox"></li>
				<li>商品信息</li>
				<li>单价（元）</li>
				<li>数量</li>
				<li>小计（元）</li>
				<li>操作</li>
			</ul>
			<ul>
				<li>
					<input type="checkbox">
					<img src="${arr.src}">
				</li>
				<li>
					Bioderma/贝德玛 法国进口舒妍多效洁肤液卸妆水500ml*2<br>
					 支持7天无理由退货   <br>
					支持极速达
				</li>
				<li>${arr.price}</li>
				<li>
					<div id="footnum">
						<a href="javaScript:;" id="jian">-</a>
						<span id="num">${arr.count}</span>
						<a href="javaScript:;" id="jia">+</a>	
					</div>
				</li>
				<li>￥1190.00</li>
				<li><a href="javaScript:;">删除</a></li>
			</ul>
		</div>
		<div id="show_foot">
			<a href="javaSctipt:;">批量删除</a>	
			<button>去结算</button>
			<div id="money"><span>合计</span><br>￥1190.00<span>(5)件</span></div>
		</div>`;
$("#show").html(constr);


