// Given an array of integers, find the one that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.

//My solution

function findOdd(A) {
    let count ={};
    let oddNumber = 0;
    A.forEach(a => {
      count[a] = (count[a] || 0) + 1
    });
    for (let [key, value] of Object.entries(count)){
      if (value % 2 !== 0){ oddNumber = Number(key)}
    }
    return oddNumber;
  }