function ListNode(val) {
    this.val = val;
    this.next = null;
}

const rotateRight = (head, k) => {

    if (!head) {
        return null;
    }
    const count = getLength(head);
    k %= count;

    if (k === 0) {
        return head;
    }

    let end = count - k;
    let i=1, cur = head;

    while(i!=end){
        cur = cur.next;
        i++;
    }

    let temp = cur.next;
    cur.next = null
    cur = temp;
    while(cur.next!=null){
        cur = cur.next;
    }
    cur.next = head;
    return head;
  };
  