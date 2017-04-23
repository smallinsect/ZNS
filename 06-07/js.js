window.onload = function () {
	var aDiv = document.getElementsByTagName('div');

	for(var i = 0; i < aDiv.length; ++i){
		aDiv[i].onmouseover = function () {
			// alert(this.innerHTML);
			for(var i = 0; i < aDiv.length; ++i){
				aDiv[i].className = '';
			}
			this.className = 'box';
		};
	}
	// var a = 12;
	// alert(typeof a);
	// a = 'adadfa';
	// alert(typeof a);
	// a = true;
	// alert(typeof a);
	// a = function () {
	// 	alert('abd');
	// };
	// alert(typeof a);
	// a = document;
	// alert(typeof a);
	// alert(typeof b);//b未定义
	var oTxt1 = document.getElementById('txt1');
	var oTxt2 = document.getElementById('txt2');
	var oBtn = document.getElementById('btn1');
	oBtn.onclick = function () {
		oTxt1.value = parseInt(oTxt1.value) + parseInt(oTxt2.value);
	};

	var aUl = document.getElementsByTagName('ul')[0];
	var aLi = document.getElementsByTagName('li');
	// 隔行变色
	for(var i = 0; i < aLi.length; ++i){
		if(i % 2 == 0){
			aLi[i].style.background = '#ccc';
		}else{
			aLi[i].style.background = '#bbb';
		}
	}
	// 遍历数组
	// var arr = [1, 2, 3, 4, 5, 6];
	// for(var i in arr){
	// 	alert(arr[i]);
	// }
	// 遍历json
	// var json = {1: 'a', 'b': 2, 'Fun': 'd', };
	// for(var i in json){
	// 	alert(json[i]);
	// }
};