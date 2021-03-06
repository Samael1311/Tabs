//import { ifError } from "assert";

if(window.NodeList && !NodeList.prototype.forEach){
	NodeList.prototype.forEach = function (callback, thisArg){
		thisArg = thisArg || window;
		for (var i = 0; i < this.length; i++){
			callback.call(thisArg, this[i], i, this);
		}
	};
}

if(!Element.prototype.matches){
	Element.prototype.matches = Element.prototype.matchesSelector ||
		Element.prototype.webkitMatchesSelector || 
		Element.prototype.mozMatchesSelector ||
		Element.prototype.msMatchesSelector;
}


if(!window.XMLHttpRequest){
	window.XMLHttpRequest = ActiveXObject("Microsoft.XMLHTTP");
}


