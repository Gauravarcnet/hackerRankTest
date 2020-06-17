
//enqueue O (N) linear and dequeue O(N)
class Stack{
    constructor(data){
        this.data = []

    }
    push(data){
        this.data.push(data)
    }
    pop(){
        return this.data.pop()
        
    }
}