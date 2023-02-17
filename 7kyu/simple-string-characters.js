// In this Kata, you will be given a string and your task will be to return a list of ints detailing
// the count of uppercase letters, lowercase, numbers and special characters, as follows.

// My solution

function solve(s){

    const regexUpper = /[A-Z]/g;
    const upper = s.match(regexUpper) ?? []
  
    const regexLower = /[a-z]/g;
    const lower = s.match(regexLower) ?? []
  
    const regexNum = /\d/g;
    const num = s.match(regexNum) ?? []
  
    const regexChar = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/g;
    const char = s.match(regexChar) ?? []
   
    let result = [upper.length, lower.length, num.length, char.length]
    
    return (result)
   }