// Create a function that takes a positive integer and returns the next bigger number that can be formed by rearranging its digits.
// For example:
//   12 ==> 21
//  513 ==> 531
// 2017 ==> 2071
// If the digits can't be rearranged to form a bigger number, return -1 (or nil in Swift, None in Rust):
//   9 ==> -1
// 111 ==> -1
// 531 ==> -1

// My solution

function nextBigger(n){
    let result =[]
    let rest = []
    let num1 = 0;
    let num2 = 0;
    n = String(n).split("").map(Number);
    for (let i = n.length-1; i >= 0; i--){
     if (n[i-1]< n[i]){
        result = n.slice(0, (i-1));
        num1 = n[i-1];
        rest = n.slice(i).sort();
        for (let i = 0; i < rest.length; i++){
          if (rest[i] > num1){
            num2 = rest[i]
            rest.splice(i, 1);
           break;
          }
        } 
        if (result != -1) {
          result.push(num2);
          rest.push(num1);
          rest.sort();
          result = result.concat(rest);
          result = result.join("");
          result = Number(result);
        }
    break;
      } else {
        result = -1
      }
    }
    return result;
  }