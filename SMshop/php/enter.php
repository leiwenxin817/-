<?php
	header("content-type:text/html;charset=utf-8");
	$db = mysql_connect("localhost","root","root");
	mysql_select_db( "db1819" , $db );
	mysql_query("set names utf8");
	
	$name=$_GET["pname"];
	$pwd=$_GET["ppwd"];

	$sql = "SELECT * FROM `shopsm` WHERE uname = '$name' ";
	$res=mysql_query($sql);
	$arr=mysql_fetch_array($res);
	if( $arr ){ //用户名存在
		if( $pwd== $arr["upwd"]){
			echo 1;//登录成功
		}else{
			echo 2; //登录失败
		}
	}else{
		echo 0;//用户名不存在
	}
	
?>