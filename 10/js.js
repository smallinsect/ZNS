


window.onload = function () {
	var oDiv1 = document.getElementById('div1');
	var oUl = oDiv1.getElementsByTagName('ul')[0];
	var aLi = oUl.getElementsByTagName('li');
	var timer = null;
	var speed = 10;
	oUl.innerHTML += oUl.innerHTML;
	oUl.style.width = aLi[0].offsetWidth*aLi.length+'px';
	// alert(oUl.offsetWidth);
	// alert(oUl.offsetHeight);
	// alert(oUl.offsetLeft);
	// alert(oUl.offsetTop);
	function move(){
		oUl.style.left = oUl.offsetLeft+speed+'px';
		if(oUl.offsetLeft<-oUl.offsetWidth/2){
			oUl.style.left = 0;
		}
		if(oUl.offsetLeft>0){
			oUl.style.left = -oUl.offsetWidth/2+'px';
		}
	}
	timer = setInterval( move, 30);
	oDiv1.onmouseover = function () {
		clearInterval(timer);
	};
	oDiv1.onmouseout = function () {
		timer = setInterval( move, 30);
	};
	document.getElementsByTagName('a')[0].onclick = function () {
		speed = -10;
	};
	document.getElementsByTagName('a')[1].onclick = function () {
		speed = 10;
	};
	// setInterval(function () {
	// 	oDiv1.style.left = oDiv1.offsetLeft+10+'px';
	// }, 100);
	
};