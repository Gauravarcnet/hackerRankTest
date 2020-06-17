class Node{
    constructor(data,next){
        this.data = data
        this.next = next
    }
}

class LinkedList{
    constructor(){
        this.head = null
        this.length = 0
    }
    unshift(data){
        const newHead = new Node(data, this.head)
        this.length++
        this.head = newHead
    }
    getFirst(){
        return this.head
    }   

    getLast(){
        let currentNode = this.head
        while(currentNode && currentNode.next){
            currentNode = currentNode.next
        }
        return currentNode
    }
    clear(){
        this.head = null
        this.length = 0
    }
    shift(){

        if(!this.head){
            return
        }

        const oldHead = this.head
        this.head = this.head.next
        this.length--
        return oldHead
    }

    
}

const Link = new LinkedList()
Link.unshift(5)
Link.unshift(6)
console.log(Link.shift());
