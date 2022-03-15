class node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

class linkedlist {
    constructor() {
        this.head = null;
        this.size = 0;
    }
}

function add(element) {
    var node = new node(element);
    if (!this.head) {
        this.head = node;
    }
    else {
        var cur = this.head;
        while (cur.next != null) {
            cur = cur.next;
        }
        cur.next = node;
    }
}

const reverseList = head => {

    let prev = null;
    let cur = head;
    let next = null;

    while (cur) {
        next = cur.next;
        cur.next = prev;
        prev = cur;
        cur = next;
    }
    return prev;
}