var arr = [
'哈哈哈哈',
'呵呵呵呵',
'嘿嘿嘿嘿'
];
function show(){
	// return 12;
	return '呵呵呵';
}
//不定传参
function sum(){
	var result = 0;
	for(var i = 0; i < arguments.length; ++i){
		result += arguments[i];
	}
	return result;
}
// css(oDiv, 'width')	获取样式
// css(oDiv, 'width', '200px')	设置样式
function css(){
	if(arguments.length == 2){
		return arguments[0].style[arguments[1]];
	}else{
		arguments[0].style[arguments[1]] = arguments[2];
	}
}
function css1(obj, name, value){
	if(arguments.length == 2){
		return obj.style[name];
	}else{
		obj.style[name] = value;
	}
}
function getStyle(obj, name){

	if(obj.currentStyle){//IE
		// alert(obj.currentStyle[name]);
		return obj.currentStyle[name];
	}else{//chrome FF
		// alert(getComputedStyle(obj, null)[name]);
		return getComputedStyle(obj, null)[name];
	}
}
window.onload = function () {
	// alert(sum(1,2,3,4,5,6));
	// alert(show());
	// for(var i = 0; i < arr.length; ++i){
	// 	alert(arr[i]);
	// }
	var aDiv = document.getElementsByTagName('div');
	// alert(css(aDiv[0], 'width'));
	// css(aDiv[0], 'background', 'black');
	// alert(css1(aDiv[0], 'width'));
	// css1(aDiv[0], 'background', 'black');
	
	var oDiv = document.getElementById('div1');

	// alert(oDiv.style.width);
	// 取非行间样式
	// IE 使用currentStyle
	// alert(oDiv.currentStyle.width);
	
	// chrome
	// alert(getComputedStyle(oDiv, null).width);
	// alert(getStyle(oDiv, 'width'));
	// 复合样式 background 有很多样式合成的 background 就不能取出来
	// alert(getStyle(oDiv, 'backgroundColor'));
	// var arr1 = [1, 2, 3];
	// var arr2 = new Array(1, 2, 3);
	// alert(arr1.length);
	// 
	// var arr1 = ['float', 'width', 'alpha', 'zoom', 'left'];
	// arr1.sort();
	var arr1 = [22, 12, 4, 1, 34, 5];
	arr1.sort( function (n1, n2) {
		if(n1 < n2){
			return -1;
		} else if(n1 > n2) {
			return 1;
		}
		return 0;
	});
	// alert(arr1);
};