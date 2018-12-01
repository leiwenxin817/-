<?php
	header("content-type:text/html;charset=utf-8");
	$db = mysql_connect("localhost","root","root");
	mysql_select_db( "db1819" , $db );
	mysql_query("set names utf8");


	$pname=$_GET["uname"];
	$pemail=$_GET["uemail"];
	$pwd=$_GET["upwd"];
	$phone=$_GET["uphone"];                                                                                                                                                                                                                                                                                                                                                                                    
	
	//注册功能
	//查找shosm中是否存在$pname 如果存在就不注册
	$sql="select * from shopsm where uname='$pname'";
	$res=mysql_query($sql);
	$arr=mysql_fetch_array($res);
	if($arr){
		echo 0; //用户名已存在*/
	}else{
		$sql2 ="INSERT INTO `shopsm`(`uname`, `uemail`, `upwd`, `phone`) VALUES ('$pname', '$pemail', '$pwd', '$phone' )";
		$row2 = mysql_query($sql2);
		if($row2){
			echo 1;//注册成功
		}else{
			echo 2;//注册失败
		}			
	}
?>