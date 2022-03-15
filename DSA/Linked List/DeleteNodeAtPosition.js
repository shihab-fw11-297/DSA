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

function deletes(head, position){
    let cur = head, cnt=1;
    
    if(position==0){
        let nextNode = cur.next.next;
        cur.next = nextNode;
        return cur;
    }
    else{
        while(cnt!=position && cur.next!=null){
            cur = cur.next;
            cnt++;
        }
        let nextNode = cur.next.next;
        cur.next = nextNode;
        return head;
    }
}