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

var hasCycle = function (head) {
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) {
            return true;
        }
    }

    return false;
};
