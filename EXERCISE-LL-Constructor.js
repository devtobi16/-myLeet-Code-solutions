/*this.next in a node class equals to the next value. However, if that's the only value
then next=null*/

// WRITE NODE CLASS HERE //
//                       //
//                       //
//                       //
//                       //
///////////////////////////
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  // WRITE LL CONSTRUCTOR HERE //
  //                           //
  //                           //
  //                           //
  //                           //
  ///////////////////////////////

  constructor(value) {
    this.newNode = new Node(value);
    if (!this.head) {
      this.head = this.newNode;
      this.tail = this.head;
      this.length = 1;
    }
  }
  pop() {
    if (this.head === null) {
      undefined;
    } else {
      let temp = this.head;
      let pre = this.head;
      while (temp.next) {
        pre = temp;
        temp = temp.next;
      }
      this.tail = pre;
      this.tail.next = null;
      this.length--;
    }
    if (this.length === 0) {
      this.head = null;
      this.length = null;
    }

    return temp;
  }
}

let myLinkedList = new LinkedList(4);
myLinkedList.push(5);
console.log(myLinkedList);

/*
    EXPECTED OUTPUT:
    ----------------
    Head: 4
    Tail: 4
    Length: 1
    
    Linked List:
    4

*/

//Test with 2,1,0 items when you want to practice the methods
