<?php
	header("content-type:text/html;charset=utf-8");
	$db=mysql_connect("locahost","root","root");
	mysql_select_db("db1819",$db);
	mysql_query("set names utf8");
	$status =$_GET["status"];
	$pname =$_GET["pname"];
	$pemail=$_GET["pemail"];
	$pwd =$_GET["pwd"];
	$phone=$_GET["phone"];
	
	if("status"=="register"){
		//注册功能
		$sql ="INSERT INTO `shopSM`(`uname`, `uemail`, `upwd`, `phone`) VALUES ('$pname', '$pemail', '$pwd', '$phone' )";
		$row = mysql_query($sql );
		if($row){
			echo 1;//注册成功
		}else{
			echo 2;//注册失败
		}
	}
?>