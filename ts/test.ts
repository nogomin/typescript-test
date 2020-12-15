class testClass {
  public name;
  constructor(name: string) {
    this.name = name;
  }
}

const iu = new testClass('rose');
console.log(iu.name);
console.log('test');

let test3 = (x: string): void => {
  console.log(x);
}
test3('dd');

for(let i = 0; i< 4; i++) {
  console.log(i);
}



