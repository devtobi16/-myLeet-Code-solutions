//Bubble Sort
function bubbleSort(arr) {
  let swapped;
  do {
   swapped = false;
    for (let i = 0; i < arr.length-1 ; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      } 
      
    }
  } while (swapped);
  return arr;
}

//Insertion Sort
function insertionSort(arr) {
for(let i =1; i<arr.length;i++){
let numberToInsert = arr[i];
let j = i-1;
  
  while(j>0 && arr[j]>numberToInsert){
    arr[j+1] = arr[j]
    j = j-1;
  }
  arr[j+1] = numberToInsert;
}
  return arr;
}

//Quick Sort

function quickSort(arr){
  //Finding pivot element
  if(arr.length<2){
    return arr;
  }
  let pivot = arr[arr.length-1];
  // left and right arrays that will contain the traversed elements
  let left = [];
  let right = [];
  //Traversing the elements and pushing the appropriate elements in each array after comparing
  //with pivot
  for(let i=0;i<arr.length-1;i++){
    if(arr[i]<pivot){
      left.push(arr[i]);
    }else{
      right.push(arr[i]);
    }
  }
  //returning the merged sorted arrays
  return[...quickSort(left),pivot,...quickSort(right)];
}

//Merge Sort

function mergeSort(arr){
  //Dividing array elements until they are less than two
  if(arr.length<2){
    return arr;
  }
  const mid = Math.floor(arr.length/2);
  const leftArr = arr.slice(0,mid);
  const rightArr = arr.slice(mid);

  return merge(mergeSort(leftArr),mergeSort(rightArr));
}
  function merge(leftArr,rightArr){
    const sortedArr =[];
    while(leftArr.length && rightArr.length){
      if(leftArr[0]<=rightArr[0]){
        sortedArr.push(leftArr.shift());
      }else{
        sortedArr.push(rightArr.shift())
      }
    }
     return[...sortedArr,...leftArr,...rightArr]//order is important
  }
