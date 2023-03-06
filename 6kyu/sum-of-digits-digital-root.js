// Digital root is the recursive sum of all the digits in a number.
// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

//My solution

function digitalRoot(n) { 
    let numArr = Array.from(String(n), Number);
      do{
        numArr = numArr.reduce((a, b) => {
          return a + b
        }, 0)
        numArr = Array.from(String(numArr), Number);
      } while (numArr.length > 1);
    return Number(numArr);
  }