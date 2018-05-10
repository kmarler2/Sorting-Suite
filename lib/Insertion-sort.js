//create two different arrays, sorted and unsorted
//the item at index 0(the first item in the array) becomes the sorted array

//start by letting the first item in our array be the new sorted array
//move the first unsorted element and compare it to our sorted array starting with the last element
require('locus');
let sortedArray = [1000, 23, 222, 90, 45, 444, 33, 2, 98, 49, 49, 33, 20];

function insertSort(array) {
  var el;
  for(var i = 1; i < array.length; i++) {
    el = arr[i];
    var j = i;
    while(j > 0 && arr[j - 1] > el){
      arr[j] = arr[j - 1];
      j--;
    }
  }
}

insertionSort(sortedArray);
//not functional when tested using repl