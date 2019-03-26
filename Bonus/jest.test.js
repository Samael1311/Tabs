
function sum(a, b) {
	return a + b > 10;
}

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

test('Sum проверка типа данных ', () => {
	expect(sum(2,2)).toBeTruthy();
});

test('Sum проверка типа данных ', () => {
	expect(sum(2,2)).toBeFalsy();
});

test('Num: ', () => {
	expect(num).toEqual(5);
});


test('Each: ', () => {
	expect(Array.isArray([each(arr2, myFunc)])).toBe(true);
});

test('Each length: ', () => {
	expect((each(arr2, myFunc))).toHaveLength(5);
});