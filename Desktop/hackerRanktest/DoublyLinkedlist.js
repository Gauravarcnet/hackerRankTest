/**
 * 
 * comparision with single linklist it take more memory === more flexibility
 */
class Node{
    constructor(element){
        this.element = element,
        this.next = null
        this.prev = null
    }
}

class DoublyLink{
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }
    push(element){
        let newNode = new Node(element)
        if(!this.head){
            this.head = newNode
            this.tail = newNode
        }else{
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        }
        this.length++
        return this
    }
}
let list = new DoublyLink()
list.push("100")
console.log(list);
list.push("200")
console.log(list);
