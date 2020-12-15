"use strict";
function sum(x, y) {
    return x + y;
}
sum(1, 2);
//js 배열 내장함수에서도 타입체크 지원
function sumArray(numbers) {
    return numbers.reduce(function (acc, current) { return acc + current; }, 0);
}
var total = sumArray([1, 2, 3, 4, 5]);
//void
function returnNothing() {
    console.log('nothing!!');
}
//rest parameters
function buildName(firstName) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    return firstName + " " + restOfName.join(' ');
}
var employeeName = buildName('Joseph', 'samuel', 'lucas', 'mackinzie');
