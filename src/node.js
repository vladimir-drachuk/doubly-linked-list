class Node {
    constructor(data = null, prev = null, next = null) {
        this.data = data;
        this.prev = prev;
        this.next = next;
    }

    lenght() {
    if (this.data === null) return 0;
    }
}

module.exports = Node;
