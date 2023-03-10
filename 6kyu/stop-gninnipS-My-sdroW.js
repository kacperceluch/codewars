// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata).
// Strings passed in will consist of only letters and spaces.Spaces will be included only when more than one word is present.

//My solution

function spinWords(string){
    string = string.split(" ").map(word => word.split(""));
    string.map(word => {
      if (word.length > 4){word.reverse()}
    });
    return string.map(word => word.join("")).join(" ");
  }