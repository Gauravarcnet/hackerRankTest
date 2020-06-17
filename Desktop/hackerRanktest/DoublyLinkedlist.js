/**
 * 
 * comparision with single linklist it take more memory === more flexibility4
 * Big O(1) for insert and removal
 * Big O(n) for access and search
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
    pop(){
        if(!this.head) return undefined
        let poppedNode = this.tail
        if(this.length === 1){
            this.tail = null
            this.head = null
        }else{
            this.tail = poppedNode.prev
            this.tail.next = null
            poppedNode.prev = null
        }
        this.length++
        return poppedNode
    }
    shift(){
        if(!this.head) return undefined
        let oldHead = this.head
        if(this.length === 1){
            this.tail = null
            this.head = null
        }else{
            this.head = oldHead.next
            this.head.prev = null
            oldHead.next = null
        }  
        this.length--
        return oldHead
        
    }
    unshift(element){
        let newNode = new Node(element)
        if(!this.head){
            this.head = newNode
            this.tail = newNode
        }else{
            this.head.prev = newNode
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
        return this
    }
    get(index){
        if(index < 0 || index >= this.length) return null
        let middle = Math.floor(this.length/2)
        let current 
        if(index <= middle){
            let counter = 0
             current = this.head
            while (counter < index) {
                current = current.next
                counter++
            }
        }else{
            {
                let counter = this.length-1
                 current = this.tail
                while (counter > index) {
                    current = current.prev
                    counter--
                }
            }
        }
        return current
    }
    set(index,value){
        let getNode = this.get(index)
        if(!getNode) return false
        getNode.element = value
        return true
    }
    insertOnto(index,element){
        if(index < 0 || index >= this.length) return false
        if(index === 0) return this.unshift(element)
        if(index === this.length-1) return this.push(element)

        let beforeNode = this.get(index-1)
        let newNode = new Node(element)

        let afterNode = beforeNode.next
        beforeNode.next = newNode
        newNode.prev = beforeNode
        newNode.next = afterNode
        afterNode.prev = newNode
        this.length++
        return true
    }
    remove(index){
        if(index < 0 || index >= this.length) return false
        if(index === 0) return this.shift()
        if(index === this.length-1) return this.pop()

        let removeNode = this.get(index),
            beforeRemoveNode = removeNode.prev,
            afterRemoveNode = removeNode.next
        beforeRemoveNode.next = afterRemoveNode
        afterRemoveNode.prev = beforeRemoveNode
        this.length--
        removeNode.next = null
        removeNode.prev = null
        return removeNode

    }


}
let list = new DoublyLink()
list.push("Gaurav")
// console.log(list);
list.push("neeraj")
// console.log(list.get(1));
// console.log(list.set(1,400))
// console.log(list.get(1));
list.insertOnto(1,"Ankit")
list.insertOnto(2,"Sanjay")
console.log("Before",list);

console.log(list.remove(1)
);

console.log("After",list);




