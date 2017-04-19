


window.onload = function () {
	var oDiv1 = document.getElementById('div1');
	var oUl = oDiv1.getElementsByTagName('ul')[0];
	var aLi = oUl.getElementsByTagName('li');

	oUl.innerHTML += oUl.innerHTML;
	oUl.style.width = aLi[0].offsetWidth*aLi.length+'px';
	alert(oUl.offsetWidth);
	alert(oUl.offsetHeight);
	alert(oUl.offsetLeft);
	alert(oUl.offsetTop);
	// setInterval(function () {
	// 	oUl.style.left = oUl.offsetLeft+10+'px';
	// 	if(oUl.offsetLeft<-oUl.offsetWidth/2){
	// 		oUl.style.left = 0;
	// 	}
	// 	if(oUl.offsetLeft>0){
	// 		oUl.style.left = -oUl.offsetWidth/2+'px';
	// 	}
	// }, 30);

	// setInterval(function () {
	// 	oDiv1.style.left = oDiv1.offsetLeft+10+'px';
	// }, 100);
	
};