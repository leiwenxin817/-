$.ajax({
	type : "get",
	url : " json/content.json",
	async:true,
	success :function(arr){
		var str="";
		for( var i=0; i<arr.length; i++){
			str+=`<li>
					<a href="page.html?${arr[i].id}">
						<img src="img/${arr[i].src}" alt="" />
						<p>${arr[i].name}</p>
						<p id="price">${arr[i].price}</p>
					</a>
					<div id="ts">
						<p>劲省200口口新鲜</p>
						<p>精选大果汁多味甜</p>	
					</div>
				</li>`;
		}
		$("#ul").html(str);
	}
})
