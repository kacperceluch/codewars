// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

// My solution

function rot13(message){
    const code = [];
    const result = [];
    message = message.split("");
    message.map(a => {
      if (a.match(/^[A-M]+$/)){code.push(a.charCodeAt()+13)}
      else if (a.match(/^[N-Z]+$/)){code.push(a.charCodeAt()-13)}
      else if (a.match(/^[a-m]+$/)){code.push(a.charCodeAt()+13)}
      else if (a.match(/^[n-z]+$/)){code.push(a.charCodeAt()-13)}
      else {code.push(a.charCodeAt())}
      });
    code.map(a => result.push(String.fromCharCode(a)));
    return result.join("");
    }