// import { get } from "https";

/**
 * inklist consist of nodes, and each node has a value 
 * and a pointer to another node or null 
 * 
 * Big O()
 * insertion O(1)
 * removal depends on condtion O(1) or O(n)
 * searching O(n)
 * access O(n)
 * 
 */
class Node {
    constructor(element){
        this.element = element,
        this.next = null
    }
}

class Link{
    constructor(){
        this.head = null,
        this.tail = null,
        this.length = 0
    }

    //push means inserting at the end
    push(elemnt){
        let node = new Node(elemnt)
        if(!this.head){
            this.head = node
            this.tail = node
        }else{
            
            
            this.tail.next = node
            this.tail = node
            this.length += 1
        }
        return this
    }
    traverse(){
        let current = this.head
        while(current){
            console.log(current.element)
            current = current.next
        }
    }
    pop(){
        if(!this.head) return undefined
        let current,prev = this.head
        while(current.next){
            prev = current
            current = curren.next
        }
        this.tail = current
        this.tail.next = null
        this.length--
        return current

    }
    shift(){
        if(!this.head) return undefined
        let current = this.head
        this.head = current.next
        this.length--
        return current
    }
    unshift(element){
        let node = new Node(element)
        if(!this.head) {
            this.head = node
            this.tail = node
        }else{
            let current = this.head
            node.next = current
            this.head = node
            
        }
        this.length++
        return this
    }

    get(index){
        if(index < 0 || index >= this.length) return null
        let counter = 0,
            current = this.head
        while(counter < index){
            current = current.next
            counter++
        }
        return current
    }
    set(index,value){
        let node = get(index)
        if(!node) return undefifalsened
        node.element = value
        return true
    }
    insertOnto(index,elemnt){
        if(index < 0 || index > this.length) return false
        if(index === this.length-1) return this.push(elemnt)
        if(index === 0) return this.unshift(elemnt)
        let prevNode = get(index-1) 
        if(!findNode) return false
        let newNode = new Node(elemnt),
            NextNode = prevNode.next
        newNode.next = NextNode
        findNode.next = newNode
        this.length++
        return true
    }
    removeFrom(index,){
        if(index < 0 || index > this.length) return false
        if(index === this.length-1) return this.pop()
        if(index === 0) return this.shift()
        let prevNode = get(index-1),
            removeNode = prevNode.next
            prevNode.next = removeNode.next
        return removeNode

    }
    print(){
        let arr = [],
            current = this.head
            while(current){
                arr.push(current.element)
                current = current.next
            }
            return arr
            
    }
    reverse(){
        let node = this.head    
        this.head = this.tail
        this.tail = node
        let prev = null,
        next
        for (let i = 0; i < this.length; i++) {
            next = node.next
            node.next = prev
            prev = node
            node = next
        }
        return this
    }
}

// let node = new Node("hi")
// node.next = new Node("How are you")
// node.next.next = new Node("What are you doing now a days")

// console.log(node);
let list = new Link()
list.push("100")
list.push("250")
list.push("400")
list.push("550")



// console.log(list);
// console.log(list.print());

console.log(list.reverse());
console.log(list.print());

