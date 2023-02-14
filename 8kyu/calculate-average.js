// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

//My solution

function findAverage(array) {
    let a = 0;
    if (array.length === 0) {
        a = 0;
    } else {
        for (let i=0; i<array.length; i++){
            a += array[i]
        }
        a=a/array.length
    }
    return a;
  }