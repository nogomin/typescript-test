"use strict";
//boolean
var isDone = false;
//null
var nullType = null;
//undefined
var undefinedType = undefined;
//number
var decimal = 6;
//string
var color = 'red';
var myname = 'iu';
var templateString = "My name is " + myname;
//object
var obj = {};
//array
var list = [1, 'two', true];
var list2 = [1, 2, 3];
var list3 = ['iu', 'rose', 'jennie'];
//tuple : 고정된 요수 수 만큼의 타입을 미리 선언
var tuple;
tuple = ['hello', 1];
// tuple = [1, 'dd']; //error
// tuple.push(true) //error
//enum(enumerated type) : 서로 연관된 상수들의 집합
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c1 = Color.Green;
// let c2: Color = Color.pink //error
var LanguageCode;
(function (LanguageCode) {
    LanguageCode["korean"] = "ko";
    LanguageCode["english"] = "en";
    LanguageCode["japanese"] = "ja";
    LanguageCode["chinese"] = "zh";
    LanguageCode["spanish"] = "es";
})(LanguageCode || (LanguageCode = {}));
var languageCode = LanguageCode.korean;
console.log(Array.isArray(Color)); // enum은 그 자체로 object
console.log(Object.keys(LanguageCode));
// LanguageCode.korean = 'dd'; //일반 객체와 달리 속성을 변경할수는 없음
//any : 자바스크립의 var
var anyType = 4;
anyType = 'string value';
anyType = false;
//void : 함수에서 반환값이 없을 경우
function voidFunc() {
    console.log('This is voidFunc()');
}
//never : 결코 발생하지 않는 값
function infiniteLoop() {
    while (true) { }
}
function error(message) {
    throw new Error(message);
}
