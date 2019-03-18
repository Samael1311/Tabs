'use strict';

class Options {
constructor (height, width, bg, fontSize, textAlign){
	this.height = height;
	this.width = width;
	this.bg = bg;
	this.fontSize = fontSize;
	this.textAlign = textAlign;
}
createBlock (){
	let div = document.createElement('div');
	div.className = 'create-div';
	div.textContent = "Some text for testing this code";
	div.style.cssText = `height: ${this.height}px; \
	width: ${this.width}px; \
	background-color: ${this.bg}; \
	fontSize: ${this.fontSize}; \
	text-align: ${this.textAlign}; \
	
`;
document.body.appendChild(div);
}

}

var st = new Options(50, 400, 'red', 16, 'center');

st.createBlock();
