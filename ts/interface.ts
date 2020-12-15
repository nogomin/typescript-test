// interface는 클래스 또는 객체 타입 지정 가능
interface Shape {
  getArea(): number;
}

class Circle implements Shape {

  constructor(public radius: number) {
    this.radius = radius;
  }

  getArea() {
    return this.radius * this.radius * Math.PI;
  }
}

class Rectangle implements Shape {

  constructor(private width: number, private height: number) {
    this.width = width;
    this.height = height;
  }
  getArea() {
    return this.width * this.height;
  }
}

const circle = new Circle(5);
const rectangle = new Rectangle(10, 5);

// console.log(circle.radius);
// console.log(rectangle.width); //error

const shapes: Shape[] = [new Circle(5), new Rectangle(10, 5)];

shapes.forEach(shape => {
  console.log(shape.getArea());
})

//##################################################################################

//객체
interface Person {
  name: string;
  age?: number; // ?는 설정해도 되고 안해도 되는 값 세팅할때 사용
}
interface Developer {
  name: string;
  age?: number;
  skills: string[];
}
const person: Person = {
  name: 'iu',
  age: 27
}
const expert: Developer = {
  name: 'jennie',
  skills: ['js', 'php', 'python']
};
// interface Developer extends Person {
//   skills: string[];
// }
// const people: Person[] = [person, expert];
// console.log(people);


