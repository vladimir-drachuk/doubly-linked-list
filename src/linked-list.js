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
        this.q = 0;
    }

    append(data) {

        let str = '';
        if (this.length === 0) {
            /*this.data = data;
            this.next = null;
            this.prev = null;*/
            this.list = new Node(data, null, null);
            this.q = data;
            this.length = 1;
            return;
        }
        for (let i = 0; i < this.length; i++) {
            str += '.next'
        }
        let a = new Node(data, this.q, null); 
        eval('this.list' + str + '=a');
        this.q = data; 
        this.length +=1;
        str = ''; 
        return;

    }

    head() {
        return this.list.data;
    }

    tail() {
        let str ='this.list.next';
        let str1 ='this.list'
        while (eval(str) != null) {
            str += '.next';
            str1 += '.next';
        }
        let a = eval(str1 + '.data');
        str = '';
        return a;
    }

    at(index) {
        let str ='this.list';
        for (let i = 0; i < index; i++) {
            str += '.next';
        }
        let a = eval(str + '.data');
        str = '';
        return a;
    }

    insertAt(index) {
        let str ='this.list';
        for (let i = 0; i < index-1; i++) {
            str += '.next';
        }
        let str1 = 'this.list';
        for (let i = 0; i < index; i++) {
            str1 += '.next';
        }
        let a = eval(str);
        let b = eval(str1);
        eval('delete ' + str);
        console.log (list);
        console.log('---------');
        
        this.length -=1;
        
        
        
    }

    isEmpty() {
       return this.doublyLinkedList.length === 0 ? true : false
    }

    clear() {
        this.doublyLinkedList = [];
    }

    deleteAt(index) {
        this.doublyLinkedList.delete(index)
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

console.log(list);
list.append(44);
console.log(list.length);
list.append(79);
console.log(list.length);
list.append(100);
console.log(list.length);
list.append(79);
console.log(list.length);
list.append(1229);
console.log(list.length);
console.log(list);
console.log(list.head());
console.log(list.tail());
console.log(list.at(1));
console.log(list.insertAt(3));
console.log(list);

