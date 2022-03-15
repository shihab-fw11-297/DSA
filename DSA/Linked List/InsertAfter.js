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

function InsertAfter(element,Check){
    let temp = new node(element)

    let prev = null, cur = this.head;

    while(cur!=null){
        if(cur.element == Check){
            temp.next = cur
            prev.next = temp;
        }
        prev = cur;
        cur = cur.next;
    }
}