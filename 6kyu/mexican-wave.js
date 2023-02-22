// In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return
// that string in an array where an uppercase letter is a person standing up. 
// 1.  The input string will always be lower case but maybe empty.
// 2.  If the character in the string is whitespace then pass over it as if it was an empty seat.

// My solution

function wave(str){

    const word = str.split("");
    let result = [];
    
    for (let i = 0; i < word.length; i++){
      result.push(word.map((letter, index) => index === i ? letter.toUpperCase() : letter ).join(""))
    }
    
    return result.filter(el => /[A-Z]/.test(el));
    
  }