<?php
	header("Content-Type:text/event-stream");
	// web服务器或代理服务器关闭web缓存，否则含时间的消息可能不能按照时间的先后次序到达
	header('Cache-Control:no-cache');
	//关闭php内置的缓存机制，php脚本返回的数据会立即传给服务器
	ob_end_clean();
	do{
		//取得当前时间
		$currentTime = data("h:i:s",time());
		//PHP_EOL 常量，\n\n行结束符根据服务器端返回数据的格式
		echo "data:".currentTime . PHP_EOL;
		echo PHP_EOL;
		//立即发送数据
		flush();
		//等待2s创建新消息
		sleep(2);
	} while(true);
?>