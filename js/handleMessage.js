(function (){
	var messageLog ,timeDisplay,source,startListen,stopListen;
	messageLog = document.getElementById('messageLog');
	timeDisplay = document.getElementById('timeDisplay');
	startListen = document.getElementById('startListen');
	stopListen = document.getElementById('stopListen');
	//开始监听函数
	function startListening () {
		source = new EventSource("../server.php");
		source.onmessage = receiveMessage;
		messageLog.innerHTML += "<br>" + "Started listening for mesage"
	}
	//收到数据后的处理
	function receiveMessage (e) {
		messageLog.innerHTML+="<br>"+"new webserver time received"+e.data;
		timeDispaly.innerHTML = e.data;
	}
	//停止监听函数
	function stopListening () {
		source.close();
		messageLog.innerHTML+="<br>"+"no longer listening message" ;
	}

	//点击按钮函数
	startListen.addEventListener('click',startListening,false);
	stopListen.addEventListener('click',stopListening,false);
})()