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

function add(element){
    var node = new node(element);
    if(!this.head){
        this.head = node;
    }
    else{
        var cur = this.head;
        while(cur.next!=null){
            cur = cur.next;
        }
        cur.next = node;
    }
}

function findMiddle(){
    let slow = this.head, fast = this.head;
    while(fast.next!=null && fast!=null){
        fast = fast.next.next;
        slow = slow.next;
    }
    console.log(slow.element);
}