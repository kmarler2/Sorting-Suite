let numbers = [100, 19, 36, 42, 87, 90, 22, 34, 56, 12, 4, 37, 67, 54, 2, 0, -34, -211];
//step 1: compare item1 with item2, if item1 is larger than item2, then swap positions in the array
//step 2: compare item2 with item3, if item2 is larger than item3, then swap positions in the array
//step 3: continue comparing until the end of the array
//step 3: loop through the array the same way but backwards so that the largest number bubble up

function bubbleSort(numbersArray) {
  //loop through entire array
  for(let i = 0; i < numbersArray.length; i++) {
    //compare our current element to every other element
    for(let j = 1; j < numbersArray.length - i; j++) {

      if(numbersArray[j-1] > numbersArray[j]) {
        
        [numbersArray[j-1], numbersArray[j]] = [numbersArray[j], numbersArray[j-1]];
      }
    }
  }
  return numbersArray;
}
bubbleSort(numbers);