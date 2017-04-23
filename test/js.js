
window.onload = function () {
	var aA = document.getElementsByTagName('a');
	var oDiv = document.getElementById('open-close');
	aA[0].onclick = function () {
		oDiv.className = 'open';
	};
	aA[1].onclick = function () {
		oDiv.className = 'close';
	};


};
function onKD(){
	var oDiv = document.getElementById('div-move');	
	var onKeyDown;
	if(window.event){ 	//IE8以及更早版本
		onKeyDown = event.keyCode;
	} else if(event.which) { 	//IE9/Firefox/Chrome/Opera/Sarari
		onKeyDown = event.which;
	} 
	
	onKeyDown = String.fromCharCode(onKeyDown);
	if(onKeyDown == 'W' || onKeyDown == 'w'){
		oDiv.style.top = oDiv.offsetTop - 10 + 'px';
	} else if(onKeyDown == 'S' || onKeyDown == 's'){
		oDiv.style.top = oDiv.offsetTop + 10 + 'px';
	} else if(onKeyDown == 'A' || onKeyDown == 'a'){
		oDiv.style.left = oDiv.offsetLeft - 10 + 'px';
	} else if(onKeyDown == 'D' || onKeyDown == 'd'){
		oDiv.style.left = oDiv.offsetLeft + 10 + 'px';
	}
}