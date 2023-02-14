class Node {
    constructor(data) {
        this.value = data
        this.next = null
    }
}




class Stack {


    constructor(data) {
        this.first = data
        this.last = data
        this.size = 0

    }


    push(data) {


        let newNode = new Node(data)


        if (this.first) {

            let temp = this.first
            this.first.next = temp
            this.first = newNode
        }
        else{
            
        }



    }





}