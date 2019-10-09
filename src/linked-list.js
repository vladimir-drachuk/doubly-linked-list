//const Node = require('./node');

class Node {
    constructor(data = null, prev = null, next = null) {
        this.data = data;
        this.prev = prev;
        this.next = next;

    }

}




class LinkedList {

    constructor() {
        this.length = 0;
        this._head = null;
        this._tail = null;
    }

    append(data) {

        let node = new Node(data);
        
        if (this.length) {
            this._tail.next = node;
            node.prev = this._tail;
            this._tail = node;
        } else {
            this._head = node;
            this._tail = node;
        }
        this.length++;
        return node;
        };


    head() {
        return this._head.data;
    }

    tail() {
        return this._tail.data;
    }

    at(index) {
        let currentNode = this._head;
        let i = 0;
        while (i < index) {
            currentNode = currentNode.next;
            i++;
        }
        return currentNode.data;
        
    }

    insertAt(index, data) {
        let i = 0;
        let buffer;
        let node = new Node(data);
        let currentNode = this._head;
        let prevNode;
        if (index === 0) {
            buffer = this._head; 
            this._head = node;
            this._head.next = buffer;
            this._head.next.prev = node;
        }
        if (index === this.length) {
            buffer = this._tail;
            this._tail = node;
            this._tail.prev = buffer;
            this._tail.prev.next = node;
        }
        if (index > 0 && index < this.length) {
            while (i < index) {
                if (i === index-1) prevNode = currentNode;
                currentNode = currentNode.next;
                i++;
            }
            buffer = currentNode;
            prevNode.next = node;
            prevNode.next.next = buffer;
            prevNode.next.prev = prevNode;
            buffer.prev = node;
        }
        this.length++
    }

    isEmpty() {
       if (this.length === 0) return true;
       return false;
    }

    clear() {
        this._head.data = null;
        this._tail.data = null;
        this.length = 0;
    }

    deleteAt(index) {
        let i = 0;
        let currentNode = this._head;
        if (index === 0) {
        let currentNode = this._head;
            this._head = currentNode.next;
            if (this._head) {
                this._head.prev = null;
            } else {
                this._tail = null;
            }
        }
        if (index === this.length-1) {
            this._tail = list._tail.prev;
            this._tail.next = null;
        }
        if (index > 0 && index < this.length-1) {
            while (i < index) {
                currentNode = currentNode.next;
                i++;
            }
            let nodeDel = currentNode;
            let nodeBefore = currentNode.prev;
            let nodeAfter = currentNode.next;
            nodeBefore.next = nodeAfter;
            nodeAfter.prev = nodeBefore;
            nodeDel = null;           
        }
        this.length--
    }

    reverse() {
       /* let arrayRevers = [];
        let buffer = this.head;
        for (let i = 0; i < this.length; i++) {
            let buffer = this.at(i);
            arrayRevers.push(buffer);
        }
        for (let i = this.length-1; i >= 0; i--) {
            buffer.data = i; 
            buffer = buffer.next*/
          /* let currentNode = this._head;
            let buffer = this._tail;
            this._tail = this._head;
            this._head = buffer;
            let i = 0;
            while (i < this.length-2) {
                currentNode = currentNode.next;
                i++;
            }
            console.log(currentNode);
            buffer = currentNode.next;
            currentNode.next = currentNode.prev;
            currentNode.prev = buffer;*/
  }

    
        

    indexOf(data) {
        let currentNode = this._head;
        for (let i = 0; i < this.length; i++) {
            if (currentNode.data === data) return i;
            currentNode = currentNode.next;
        }
        return -1;
    }
}

//module.exports = LinkedList;

const list = new LinkedList();


list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);
list.append(6);

list.reverse();
console.log(list);

console.log(list.head());   console.log('   =6');
console.log(list.tail());   console.log('   =1');
console.log(list.at(1));    console.log('   =5');
console.log(list.at(2));    console.log('   =4');
console.log(list.at(3));    console.log('   =3');
console.log(list.at(4));    console.log('   =2');