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

        var node = new Node(data);
        
        if (this.length) {
            this._tail.next = node;
            node.prev = this._tail;
            this._tail = node;
        } else {
            this._head = node;
            this._tail = node;
        }
        this.length++;
        console.log(node);
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

    insertAt(index) {
            
        
        
    }

    isEmpty() {
       return this.doublyLinkedList.length === 0 ? true : false
    }

    clear() {
        this.doublyLinkedList = [];
    }

    deleteAt(index) {
        if (index === 1) 
        let currentNode = this._head;
            this._head = currentNode.next;
            if (this._head) {
                this._head.prev = null;
            } else {
                this._tail = null;
            }
    }

    reverse() {
        this.doublyLinkedList.reverse();
    }

    indexOf(data) {
        for (let i = 0; i < this.doublyLinkedList.length; i++) {
            if (this.doublyLinkedList[i] === data) return i
        }
        return -1;
    }
}

//module.exports = LinkedList;

const list = new LinkedList();


list.append(44);
console.log(list);
list.append(79);
list.append(100);
//list.append(79);
//list.append(1229);
//console.log(list.at(2));
//list.insertAt(1);
console.log(list);
/*console.log(list.length);
console.log(list);*/
/*console.log(list.head());
console.log(list.tail());
console.log(list.at(1));
console.log(list.insertAt(3));
console.log(list);*/

