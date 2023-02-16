// Write a program that outputs the top n elements from a list.

// My solution

function largest(n, array) {
    let largest=[];
    for (let i=1 ; i <= n; i++){
      let x = Math.max(...array);
      largest.unshift(x);
      let index = array.indexOf(x);
      array.splice(index, 1)
    }
    return largest;
}