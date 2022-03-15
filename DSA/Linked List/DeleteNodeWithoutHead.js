class node{
    constructor(element){
        this.element = element;
        this.next = null;
    }
}


function deletes(node){
    node.data = node.next.data;
    node.next = node.next.next;
}