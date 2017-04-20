
// alert(12.5 % 5);

window.onload = function () {
	var aLi = document.getElementsByTagName('li');

	for(var i = 0; i < aLi.length; ++i){
		if(i % 2 == 0){
			aLi[i].style.background = '#ccc';
		}else{
			aLi[i].style.background = '#bbb';
		}
	}

	var arr = [1,2,3,4];	//数组
	var json = {a: 12, b: 5, c: 'abc'};	//json
	// alert(json.b);
	// alert(json['b']);
	// alert(arr[2]);
	for(var i in arr){
		alert(arr[i]);
	}
	for(var i in json){
		alert(json[i]);
	}
};