class stack{
    constructor() {
            this.q1 = new queue();
            this.q2 = new queue();
    }
}

function push(x){
    this.q1.push(x);
}

function pop(){
    while(this.q1.length > 1){
        this.q2.push(this.q1.queue.shift());
    }

    let val = this.q1.queue.shift();
    this.Q1.queue = this.Q2.queue
    this.Q2.queue = []
    return val
}

function top() {
    return this.Q1.queue[this.Q1.queue.length - 1]
 }
 function isEmpty() {
       if (this.Q1.queue.length == 0)
         return true;
     else
         return false;
 }
