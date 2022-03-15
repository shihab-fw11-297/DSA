class queue{
    constructor(){
        this.s1 = [];
        this.s2 = [];
    }
}

function enque(x){
    while(this.s1.length !=0){
        this.s2.push(this.s1.pop());
    }
    this.s1.push(x);

    while(this.s2.length!=0){
        this.s1.push(this.s2.pop());
    }
}

function dequeue(x){

    if(this.s1.length == 0){
        console.log('empty');
    }
    let x = this.s1[this.s1.length];
    this.s1.pop();
    return x;
}