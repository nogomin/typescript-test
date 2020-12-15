class Queue<T> {
  list: T[] = [];
  get length() {
    return this.list.length;
  }
  enqueue(item: T) {
    this.list.push(item);
  }
  dequeue() {
    return this.list.shift();
  }
}

const queue = new Queue<number>();
queue.enqueue(0);
queue.enqueue(1);
queue.enqueue(2);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());

const queue2 = new Queue<string>();
queue2.enqueue('one');
queue2.enqueue('two');
queue2.enqueue('three');
console.log(queue2.dequeue());
console.log(queue2.dequeue());
console.log(queue2.dequeue());


