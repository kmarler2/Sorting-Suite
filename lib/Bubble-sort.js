let numbers = [100, 19, 36, 42, 87, 90, 22, 34, 56, 12, 4, 37, 67, 54, 2, 0, -34, -211];

function bubbleSort(numbersArray) {
  for(let i = 0; i < numbersArray.length; i++) {
    for(let j = 1; j < numbersArray.length - i; j++) {

      if(numbersArray[j-1] > numbersArray[j]) {
        
        [numbersArray[j-1], numbersArray[j]] = [numbersArray[j], numbersArray[j-1]];
      }
    }
  }
  return numbersArray;
}
bubbleSort(numbers);