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
