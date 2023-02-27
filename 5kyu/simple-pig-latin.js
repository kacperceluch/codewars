// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

//My solution

function pigIt(str){
    str = str.split(" ").map(word => word.split(""));
    let latin = [];
    str.map(word => { if (word[0].match(/^[^a-zA-Z0-9]+$/)){
        word.push(word[0])
      } else {
        word.push(word[0]+"ay")};
     word.shift();
    return latin.push(word.join(""));
    })
    return latin.join(" ");
  }