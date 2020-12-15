"use strict";
var testClass = /** @class */ (function () {
    function testClass(name) {
        this.name = name;
    }
    return testClass;
}());
var iu = new testClass('rose');
console.log(iu.name);
console.log('test');
var test3 = function (x) {
    console.log(x);
};
test3('dd');
for (var i = 0; i < 4; i++) {
    console.log(i);
}
