type Person2 = {
  name: string;
  age?: number;
}
// &는 intersection으로 두개 이상의 타입들을 합쳐준다.
type Developer2 = Person2 & {
  skills: string[];
}
const person2: Person2 = {
  name: 'jennie'
}
const expert2: Developer2 = {
  name: 'rose',
  skills: ['react', 'typescript']
};

type People = Person[];
const people: People = [person2, expert2];

// type과 interface는 큰 차이가 없다. 일관성 있게만 쓰면 됨. 다만 라이브러리를 작성하거나 라이브러리를 위한 타입 지원파일을 작성할 때는 interface를 권장

type U = string | number[];

type IType<T extends U> = string | T;

const dataA: IType<number[]> = [1,2,3];



