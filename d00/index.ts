class MyEvent {
  constructor(private name: string) {}
}

const array: Array<string> = ['string', 'autre string']
const array2: Array<number> = [12, 156]
const array3: Array<MyEvent> = [new MyEvent('coucou'), new MyEvent('')]


class Queue<T> {
  private elements: Array<T> = []

  push(element: T) {
    this.elements.push(element)
  }

  pop() {
    this.elements.shift()
  }

  get(): T {
    return this.elements[0]
  }
}


const queue = new Queue<MyEvent>()

queue.push(new MyEvent('Registered'))
queue.push(new MyEvent('Connected'))
queue.push(new MyEvent('Disconnected'))

console.log(queue.get())
 // Registered
queue.pop()
console.log(queue.get()) // Connected
queue.push(new MyEvent('Get Factures'))
console.log(queue.get()) // Connected
