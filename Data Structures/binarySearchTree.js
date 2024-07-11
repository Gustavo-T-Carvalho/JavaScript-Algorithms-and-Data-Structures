class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.count = 1;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }
    

    find(value){
        if(this.root === null){
            return false;
        }
        
        let current = this.root;
        while(current){
            if(value > current.value) {
                if(!current.right){
                    return false;  
                }
                current = current.right  
            } else if(value < current.value){
                if(!current.left){
                    return false;
                } 
                current = current.left;
            } else {
                return current;
            }
        }
        return false;
    }
    
    insert(value){
        const node = new Node(value);
         
        if(this.root === null){
            this.root = node;
            return node;
        }
        let current = this.root;
        while(true){
            if(value > current.value) {
                if(!current.right){
                    current.right = node;
                    return this;
                }
                current = current.right    
            } else if(value < current.value){
                if(!current.left){
                    current.left = node;
                    return this;
                }
                current = current.left;
            } else {
                current.count++;
                return current.count;
            }
        }
        
         
    }

    traverseDFSPreOrder(){
        let nodes = [];
       
        if(!this.root){
            return nodes;
        }
        
        function traverse(node, nodes){
            if(!node){
                return nodes;
            }
        
            nodes.push(node.value);
            traverse(node.left, nodes)
            traverse(node.right, nodes)
        }
        
        traverse(this.root, nodes);
        console.log(nodes);

        
    }

        traverseDFSPostOrder(){
        let nodes = [];
       
        if(!this.root){
            return nodes;
        }
        
        function traverse(node, nodes){
            if(!node){
                return nodes;
            }
        
            traverse(node.left, nodes)
            traverse(node.right, nodes)
            nodes.push(node.value);     
        }
        
        traverse(this.root, nodes);
        console.log(nodes);
    }

    traverseDFSInOrder(){
         let nodes = [];
       
        if(!this.root){
            return nodes;
        }
        
        function traverse(node, nodes){
            if(!node){
                return nodes;
            }
        
            traverse(node.left, nodes)
            nodes.push(node.value);
            traverse(node.right, nodes)
        }
        
        traverse(this.root, nodes);
        console.log(nodes);
    }
    

    traverseBFS(){
        const queue = [];
        const nodes = [];
        
        queue.push(this.root);
        while(queue.length){
            const current = queue.shift()
            nodes.push(current);
            if(current.left){
                queue.push(current.left);
            }
            if(current.right){
                queue.push(current.right);
            }
            
        }

       return nodes;
              
    }
}



const tree = new BinarySearchTree();
tree.insert(10)
tree.insert(6)
tree.insert(15)
tree.insert(3)

tree.insert(8)
tree.insert(20)
// tree.insert(6)
// tree.insert(10)
// tree.insert(11)
// tree.insert(9)
// tree.insert(8)





