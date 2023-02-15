// We create a class for each node within the queue
class Node {
    // Each node has two properties, its value and a pointer that indicates the node that follows
    constructor(value) {
        this.value = value
        this.next = null
    }
}

// We create a class for the queue
class Queue {
    // The queue has three properties, the first node, the last node and the stack size
    constructor() {
        this.first = null
        this.last = null
        this.size = 0
    }
    // The enqueue method receives a value and adds it to the "end" of the queue
    enqueue(val) {
        var newNode = new Node(val)
        if (!this.first) {
            this.first = newNode
            this.last = newNode
        } else {
            this.last.next = newNode
            this.last = newNode
        }
        return ++this.size
    }
    // The dequeue method eliminates the element at the "beginning" of the queue and returns its value
    dequeue() {
        if (!this.first) return null

        var temp = this.first
        if (this.first === this.last) {
            this.last = null
        }
        this.first = this.first.next
        this.size--
        return temp.value


    }



    printQueue() {
        var str = "";
        for (var i = 0; i < this.items.length; i++)
            str += this.items[i] + " ";
        return str;
    }





}



const quickQueue = new Queue

quickQueue.enqueue("value1")
quickQueue.enqueue("value2")
quickQueue.enqueue("value3")
quickQueue.enqueue("value4")


// quickQueue.enqueue("value2")
// quickQueue.enqueue("value3")

console.log(quickQueue.dequeue()) // value1
console.log(quickQueue) 
