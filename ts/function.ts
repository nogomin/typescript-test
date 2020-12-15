function sum(x: number, y: number): number {
  return x + y;
}
sum(1, 2);

//js 배열 내장함수에서도 타입체크 지원
function sumArray(numbers: Array<number>): number {
  return numbers.reduce((acc, current) => acc + current, 0);
}
const total = sumArray([1, 2, 3, 4, 5]);

//void
function returnNothing(): void {
  console.log('nothing!!');
}

//rest parameters
function buildName(firstName: string, ...restOfName: string[]) {
  return `${firstName} ${restOfName.join(' ')}`;
}
const employeeName = buildName('Joseph', 'samuel', 'lucas', 'mackinzie');



