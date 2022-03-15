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


function InsertAtPos(data, index) {
    let temp = new node(data);
    let cur = this.head, prev = null, i = 0;

    if (index == 0) {
        temp.next = cur;
        this.head = temp;
    }
    else {
        while (i < index) {
            prev = cur;
            cur = cur.next;
            i++;
        }
        prev.next = temp;
        prev = prev.next;
        prev.next = cur;
    }
}