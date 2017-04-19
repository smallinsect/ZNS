
function toDou(n){
	if(n < 10){
		return '0'+n;
	}
	return ''+n;
}

function show() {
	var oDate = new Date();
	var aImg = document.getElementsByTagName('img');
	var str = toDou(oDate.getHours())+toDou(oDate.getMinutes())+toDou(oDate.getSeconds());
	oDate.getFullYear();//年
	oDate.getMonth()+1;//月 从0开始
	oDate.getDate();//几号
	oDate.getDay();//星期几 0是星期日
	for(var i = 0; i < str.length; ++i){
		// aImg[i].src = 'img/'+str[i]+'.png';
		aImg[i].src = 'img/'+str.charAt(i)+'.png';
	}
}
// //每个一段时间 执行一次 函数
// setInterval(show, 1000);
// //执行一次
// setTimeout(show, 1000);

window.onload = function () {
	// var oBtn1 = document.getElementById('btn1');
	// var oBtn2 = document.getElementById('btn2');
	// var timer = null;

	// oBtn1.onclick = function () {
	// 	timer = setInterval( function () {
	// 		alert('a');
	// 	}, 1000);
	// };

	// oBtn2.onclick = function () {
	// 	clearInterval(timer);
	// };
	// alert(oDate.getHours()+' '+oDate.getMinutes()+' '+oDate.getSeconds());
	setInterval(show, 1000);
	show();
};
