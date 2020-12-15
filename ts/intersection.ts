// 2개 이상의 타입을 조합하는 경우, 'and' 개념
interface Fruit {
  name: string,
  color: string
}

interface Price {
  price: number
}

const apple: Fruit & Price = {
  name: 'apple',
  color: 'red',
  price: 2000
}
