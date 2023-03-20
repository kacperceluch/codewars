// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).
// Examples:
// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

//My solution:

function solution(str, ending){
    ending = ending.split("").join("");
    str = str.split("").slice((str.length - ending.length)).join("");
    return (ending === str ? true : false);
}