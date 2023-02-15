// Given an array of integers.
// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
// If the input is an empty array or is null, return an empty array.

// My solution

function countPositivesSumNegatives(input) {
  let positive = [];
  let negative = [];
  let positiveNegative = [];
  let sum=0;
 
   if (input && input.length >0){
      input.forEach((item) => {
        if (item < 0) {
          negative.push(item);
        } else if (item > 0) {
          positive.push(item);
        }
   });
   positiveNegative.push(positive.length);
   negative.forEach((item) => {
      sum += item;
      });
    positiveNegative.push(sum)
   } else { 
      positiveNegative = [];
      }
   return(positiveNegative);
}
     
     