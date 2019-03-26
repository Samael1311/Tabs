function sum(a, b) {
	return a + b > 10;
};
let arr = [ [1, 2, 3], [4, 5, 6], [7,8,9] ];
let num = arr[1][1];


var each = function(startArr, f){return f(startArr)};
var arr2 = [64, 49, 36, 25, 16];
var myFunc = function(a){
	var newArr = [];
	for (var i = 0; i < a.length; i++) {
		newArr[i]=Math.sqrt(a[i]);
	}
	return newArr;
};
console.log(each(arr2, myFunc));


let assert = require('chai').assert;

describe("Сумма", function(){

	it("Тип данных: ", function(){
		assert.isBoolean(sum(2,2), true);
	});
	it("True? ", function(){
		assert.equal(sum(2,2), true);
	});

});

describe("Переменная num", function(){

	it("Равна ли 5? ", function(){
		assert.equal(num, 5);
	});

});

describe("Each function", function(){

	it("тип данных: ", function(){
		assert.typeOf(each(arr2, myFunc), 'array');
	});

	it("ожидаемый результат ", function(){
		assert.sameOrderedMembers(each(arr2, myFunc), [8, 7, 6, 5, 4]);
	});

	it("проверка длины: ", function(){
		assert.lengthOf(each(arr2, myFunc), 5);
	});

});