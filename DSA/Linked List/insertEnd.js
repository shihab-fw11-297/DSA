class node{
    constructor(element){
        this.element = element;
        this.next = null;
    }
}

class linkedlist{
    constructor() {
        this.head = null;
        this.size=0;
    }
}

function insertEnd(element){
    if (this.head ==null){
        return null;
    }

    let temp = new node(element)
    let cur = this.head;

    while(cur.next!=null){
        cur = cur.next
    }
    cur.next = temp;
}