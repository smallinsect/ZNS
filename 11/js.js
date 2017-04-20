
window.onload = function () {
	var oUl = document.getElementById('ul1');
	// alert(oUl.childNodes.length);
	// for(var i = 0; i < oUl.children.length; ++i){
	// 	// oUl.childNodes[i].style.background = "#ccc";
	// 	// nodeType===>3	文本节点
	// 	// nodeType===>1 	元素节点
	// 	// alert(oUl.childNodes[i].nodeType);
	// 	// if(oUl.childNodes[i].nodeType == 1){
	// 	// 	oUl.childNodes[i].style.background = "#ccc";
	// 	// }
	// 	oUl.children[i].style.background = 'red';
	// }
	// alert(oUl.parentNode);
	var aA = document.getElementsByTagName('a');
	for(var i = 0; i < aA.length; ++i){
		aA[i].onclick = function () {
			//	影藏父级元素
			this.parentNode.style.display = 'none';
		};
	}
	var oDiv2 = document.getElementById('div2');
	// alert(oDiv2.parentNode);
	// 根据样式不同 父亲是会发生变化的
	// alert(oDiv2.offsetParent);
	// IE6-8
	// alert(oUl.firstChild);
	// 高级浏览器
	// alert(oUl.firstElementChild);
	if(oUl.firstElementChild){
		oUl.firstElementChild.style.background = '#ccc';
	}else{
		oUl.firstChild = 'red';
	}

	var oTxt = document.getElementById('txt1');
	var oBtn = document.getElementById('btn1');

	oBtn.onclick = function () {
		// oTxt.value = 'heheehehhehe';
		// oTxt['value'] = 'heheheh';
		oTxt.setAttribute('value', 'heiheihei');
	};



	// var oUlBox = document.getElementById('ul-box');
	// var aLi = oUlBox.getElementsByTagName('li');
	// for(var i = 0; i < aLi.length; ++i){
	// 	if(aLi[i].className=='box'){
	// 		aLi[i].style.background = 'red';
	// 	}
	// }
	var oUl = document.getElementById('ul-box');
	var aBox = getByClass(oUl, 'box');
	for(var i = 0; i < aBox.length; ++i){
		aBox[i].style.background = 'blue';
	}
};

function getByClass(oParent, sClass){
	var aResult = [];
	var aEle = oParent.getElementsByTagName('*');
	for(var i = 0; i < aEle.length; ++i){
		if(aEle[i].className == sClass){
			aResult.push(aEle[i]);
		}
	}
	return aResult;
}