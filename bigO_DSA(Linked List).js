/*Big O is basically identifying which code runs more efficiently when compared with other
codes. With Big O, we measure:
a. Time Complexity: It is not measured by time, but by identifying codes by the number of operations present. 
b. Space Complexity: The amount of memory a code uses.

Both conditions are checked during coding interviews. There are three greek letters 
associated with these concepts: Omega(Ohms unit), tether, and Big O (O)
e.g Find a number from an array [1,2,3,4,5,6,7];
Checking for "1" is the best case in this scenario, and that is represented with Omega;
Checking for "7" is the worst case in this scenario, and that is represented with Big O;
Checking for "4" is an average case in this scenario, and that is represented with tether;
*/
const loop = n => {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }

  // Drop Constants
};
console.log(loop(10));
/*This code equals 0 (2n), but when we drop constants, all repeated code remains o(n) no 
matter the number of times*/

/*O(n^2) is an inefficient way of writing code when compared to O(n) 
O(n^2)==>*/
const oOfN = n => {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
};
oOfN(10);

//Drop Dominants
const oOfDominant = n => {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
  for (let k = 0; k < n; k++) {
    console.log(k);
  }
};
oOfDominant(10);
/*The loop above equals o(n^2+n),but because n^2 is the dominant, we only write o(n^2)because
n isn't really affecting the situation*/

//O(1)=> The most efficient Big O (mostly referred to as constant time)
function addItems(n) {
  return n + n + n;
}
/*The code above has two operations, but it will still be referred to as O(1)*/

/*O(n*log(n)) is a very efficient algorithm for all data types, and O(log(n))is also one 
of the most efficient sorting algorithms  */






//Classes
class Cookie {
  constructor(name, cars) {
    this.name = name;
    this.cars = cars;
    /*Linked List can take the methods: 
      push(),==> push.(value) etc
       unshift()
       shift()
       pop()
       insert()
       remove()*/
  }
}
const crv = new Cookie('CRV', 'Honda');
console.log(crv.name);
console.log(crv.cars);

//Pointers
let num1 = 5;
let num2 = num1;
num1 = 10; //if we say num1 = 10 now, num2's value won't change

let obj1 = { value: 11 };
obj2 = obj1; //<= obj2 = {value:11}, and if we change value of obj1, obj2 will change too

//Arrays and LinkedLists are similar
//,but
//Linked Lists don't have indexes
//Arrays are usually in continuous places in memory while linkedLists are usually all over the place
//Linked Lists are also called null-terminating lists
//A Node is a value and a pointer
class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
 
class LinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = this.head;
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

  //LinkedList Methods

  //Push Method
    push(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }


  //pop Method
    pop() {
        if (this.length === 0) return undefined;
        let temp = this.head;
        let pre = this.head;
        while (temp.next) {
            pre = temp;
            temp = temp.next;
        }
        this.tail = pre;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return temp;
    }
 
	// unshift Method
   unshift(value){
         const newNode = new Node(value)
         if(!this.head){
             let temp = this.head;
             this.head = newNode;
             this.tail = this.head;
         }
         else{
         let temp = this.head;
         this.head = newNode;
         this.head.next = temp;
         }
         this.length++;
         return this;
     }
	//shift Method
   shift(){
	if(!this.head)
        {
	return undefined;
	    }else{
	    let temp = this.head;
	    this.head = temp.next;
	    this.length--;
	    if(this.length === 0){
	        this.tail = null;
	    }
	    return temp;
	}
}

}
 


let myLinkedList = new LinkedList(2);
myLinkedList.push(3);

console.log("Before unshift():");
console.log("-----------------");
myLinkedList.getHead();
myLinkedList.getTail();
myLinkedList.getLength();

console.log("\nLinked List:");
myLinkedList.printList();

myLinkedList.unshift(1);

console.log("\nAfter unshift():");
console.log("----------------");
myLinkedList.getHead();
myLinkedList.getTail();
myLinkedList.getLength();

console.log("\nLinked List:");
myLinkedList.printList();


/*
    EXPECTED OUTPUT:

    Before unshift():
    -----------------
    Head: 2
    Tail: 3
    Length: 2

    Linked List:
    2
    3

    After unshift():
    ----------------
    Head: 1
    Tail: 3
    Length: 3

    Linked List:
    1
    2
    3

*/


 
