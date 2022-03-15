const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};
// Complete the function below
var isPalindrome = function (head) {
  let cur = head;
  let stack = [];
  while(cur){
      stack.push(cur.data)
      cur = cur.next
  }
  let i=0,j=stack.length-1;
  while(i<j){
      if(stack[i]!==stack[j]){
          return false;
      }
      i++;
      j--;
  }
  return true
};