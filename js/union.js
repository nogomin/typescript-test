"use strict";
// 2개 이상의 타입을 허용하는 경우, 'or' 개념
var msg;
msg = 100;
msg = 'hi';
// msg = true; //error
function x(n) {
    console.log(n);
}
x();
x(100);
x('hi');
function a(n) {
    return n;
}
var test = a('welcome');
var test2 = a(2000);
console.log(test);
console.log(test2);
