// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

//My solution 

function moveZeros(arr) {
    let arr0 = [];
    let result =[];
    for (let i = 0; i < arr.length; i++){
      if (arr[i] === 0){
        arr0.push(0)
      } else {
        result.push(arr[i])
      }
    }
    return result = result.concat(arr0)
  }