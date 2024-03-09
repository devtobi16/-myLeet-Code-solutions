//Conctructing a node value
class Node {
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}
 
class DoublyLinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = newNode;
        this.length = 1;
    }

    printList() {
        let temp = this.head;
        while (temp !== null) {
            console.log(temp.value);
            temp = temp.next;
        }
    }

    getHead() {
        if (this.head === null) {
            console.log("Head: null");
        } else {
            console.log("Head: " + this.head.value);
        }
    }

    getTail() {
        if (this.tail === null) {
            console.log("Tail: null");
        } else {
            console.log("Tail: " + this.tail.value);
        }
    }

    getLength() {
        console.log("Length: " + this.length);
    }

    makeEmpty() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
 
	// PUSH METHOD 
	
	push(value){
	    const newNode = new Node(value);
	    if(!this.head){
	        this.head = newNode;
	        this.tail = this.head;
	    } 
	    let temp = this.tail;
	    this.tail = newNode;
	    this.tail.prev = temp;
	    this.length++;
	    return this;
	}
	
}
 


let myDLL = new DoublyLinkedList(1);
myDLL.push(2);

myDLL.getHead();
myDLL.getTail();
myDLL.getLength();

console.log("\nDoubly Linked List:");
myDLL.printList();


/*
    EXPECTED OUTPUT:
    ----------------
    Head: 1
    Tail: 2
    Length: 2

    Doubly Linked List:
    1
    2

*/
