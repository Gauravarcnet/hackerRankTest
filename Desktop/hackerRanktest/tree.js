class Node{
    constructor(data){
        this.data = data
        this.children = []

    }
}

class Tree{

    constructor(){
        this.root = null
    }

    add(data, toNodeData){

        const node = new Node(data)

        const parent = toNodeData ? this.findBFS(toNodeData):null

        if(parent){
            parent.children.push(node)

        }else{
            if(!this.root){
                this.root = node
            }else{
                return "tried to store node at root when root alreaady exist"
            }
        }

    }

    findBFS(data){
        const queue = [this.data]

        let node = null

        this.traverseBFS((node) => {
            if(node.data === data){
                node = node
            }
        })

        return node
    }

    traverseBFS(cb){
        const queue = [this.root]

        if(cb){
            while (queue.length) {
                const node  = queue.shift()
                
                cb(node)
                
                for (const child of node.children) {
                    queue.push(child)
                }
            }
        }
    }


}

let tree = new Tree()

tree.add("Node1")
tree.add("Node2","Node1")
tree.add("Node3","Node2")
tree.add("Node4")

tree.traverseBFS((node) => {
    console.log(node);
    
})