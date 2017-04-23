
var arr = [
'一月快乐一月，',
'二月快乐二月，',
'三月快乐三月，',
'四月快乐四月，',
'五月快乐五月，',
'六月快乐六月，',
'七月快乐七月，',
'八月快乐八月，',
'九月快乐九月，',
'十月快乐十月，',
'十一月快乐十一月，',
'十二月快乐十二月，',
];

window.onload = function () {
	// alert('a');
	var oDiv = document.getElementById('tab');
	var oUl = oDiv.getElementsByTagName('ul')[0];
	var aLi = oUl.getElementsByTagName('li');
	var oTxt = oDiv.getElementsByTagName('div')[0];

	for(var i = 0; i < aLi.length; ++i){
		aLi[i].index = i;
		aLi[i].onmouseover = function () {
			for(var i = 0; i < aLi.length; ++i){
				aLi[i].className = '';
			}
			this.className = 'active';
			oTxt.innerHTML = '<h2>'+(this.index+1)+'月活动</h2><p>'+arr[this.index]+'呵呵呵。。。</p>';
		};
	}

};