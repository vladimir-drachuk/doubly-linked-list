const Node = require('./node');

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
        return this;
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
            if(this.length>1){
                this._head.next = buffer;
                this._head.next.prev = node;
            }            
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
        return this;
    }

    isEmpty() {
       if (this.length === 0) return true;
       return false;
    }

    clear() {
        if(this.length>1) {
            this._head.data = null;
            this._tail.data = null;
            this.length = 0;
        }
        return this;
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
            return this;
        }
        if (index === this.length-1) {
            this._tail = this._tail.prev;
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
        return this;
    }

    reverse() {
        let buffer = this._tail;
        this._tail = this._head;
        this._head = buffer;

        let currentObj=this._head;
        let nextObj;
        let prevObj;
        for(let i = 0; i < this.length; i++) {
            nextObj = currentObj.prev;
            prevObj = currentObj.next;
            currentObj.next = nextObj;
            currentObj.prev = prevObj;
            currentObj = currentObj.next;
        }
        return this;
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

module.exports = LinkedList;
