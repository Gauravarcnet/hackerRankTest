/**
 * it is a data collections their data structure,
 * they are abstract data structure
 *  they follow LIFO(last In first out)
 * the big O(1) insertion, removal
 * the big O(n) access, search
 * 
 * if we are using stack then push and pop is good because 
 * in tit redexing is not required because it added at the end and remove from the end
 *  on the other hand shift and unshift add and remove in the beginning 
 */

//  let arr = []
//  arr.push("gaurav")
//  arr.push("agrawal")
//  arr.push("ankit")
//  arr.push("bansal")
//  console.log(arr);

// implementing our own stack

    class Node{
        constructor(element){
            this.element = element,
            this.next = null
        }
    }

    class Stack{

        constructor(){
            this.first = null,
            this.last = null,
            this.length = 0
        }
        push(element){
            let node = new Node(element)
            if(!this.first){
                this.first = node,
                this.last = this.first
            }else{
                let curernt = this.first
                this.first = node
                this.first.next = curernt

            }
            return ++this.length
        }
        pop(){
            if(!this.first) return null
            let temp = this.first
            if(this.first === this.last){
                this.last = null
            }
            this.first = this.first.next
            this.length--
            return temp
        }

    }

