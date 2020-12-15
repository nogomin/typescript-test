// 2개 이상의 타입을 허용하는 경우, 'or' 개념
let msg: string | number;
msg = 100;
msg = 'hi';
// msg = true; //error

function x(n?: number | string) {
  console.log(n);
}
x();
x(100);
x('hi');

function a(n: any): string | number {
  return n;
}
const test: string | number = a('welcome');
const test2: string | number = a(2000);
console.log(test);
console.log(test2);

