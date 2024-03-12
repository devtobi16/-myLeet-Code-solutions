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

	//Unshift Method
	 unshift(value){
        const newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        }else{
            temp = this.head;
          temp.prev = newNode;
            newNode.next = temp;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

	//Shift Method
	 shift(){
            let temp = this.head;
        if(!this.head) return undefined;
        if(this.head === this.tail)
        {
            this.head = null;
            this.tail = null;
        }else {
            this.head = this.head.next;
            temp.next = null;
            this.head.prev = null;
       
        }
         this.length--;
         return temp;
    }
	//Get Method
	 get(index){
        if(!this.head)return undefined;
        if(index<0||index>this.length) return undefined;
        if(index===0)return this.head;
        if(index=== this.length-1)return this.tail;
        
        let temp = this.head;
        if(index<this.length/2){
        for(let i = 0;i<index; i++){
            temp = temp.next;
           }
            
        }else{
                temp = this.tail;
               
                for( let i = this.length-1; i>index; i--){
                temp = temp.prev;
                }
            }
            
              return temp;
             }
	
           //Set Method
	set (index, value){
       let temp = this.get(index);
       if(temp){
           temp.value = value;
           return true;
       }else{
           return false;
       }
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
