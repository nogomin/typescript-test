//boolean
const isDone: boolean = false;

//null
const nullType: null = null;

//undefined
const undefinedType: undefined = undefined;

//number
const decimal: number = 6;

//string
const color: string = 'red';
const myname: string = 'iu';
const templateString: string = `My name is ${myname}`;

//object
const obj: object = {};

//array
const list: any[] = [1, 'two', true];
const list2: number[] = [1, 2, 3];
const list3: Array<string> = ['iu', 'rose', 'jennie'];

//tuple : 고정된 요수 수 만큼의 타입을 미리 선언
let tuple: [string, number];
tuple = ['hello', 1];
// tuple = [1, 'dd']; //error
// tuple.push(true) //error

//enum(enumerated type) : 서로 연관된 상수들의 집합
enum Color {Red, Green, Blue};
let c1: Color = Color.Green;
// let c2: Color = Color.pink //error

enum LanguageCode {
  korean = 'ko',
  english = 'en',
  japanese = 'ja',
  chinese = 'zh',
  spanish = 'es'
}
const languageCode: LanguageCode = LanguageCode.korean;
console.log(Array.isArray(Color)); // enum은 그 자체로 object
console.log(Object.keys(LanguageCode));
// LanguageCode.korean = 'dd'; //일반 객체와 달리 속성을 변경할수는 없음

//any : 자바스크립의 var
let anyType: any = 4;
anyType = 'string value';
anyType = false;

//void : 함수에서 반환값이 없을 경우
function voidFunc(): void {
  console.log('This is voidFunc()');
}

//never : 결코 발생하지 않는 값
function infiniteLoop(): never {
  while(true) {}
}
function error(message: string): never {
  throw new Error(message);
}



