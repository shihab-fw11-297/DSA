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

function insertBeg(element){
    let cur = new node(element)
    cur.next = this.head
    this.head = cur
}