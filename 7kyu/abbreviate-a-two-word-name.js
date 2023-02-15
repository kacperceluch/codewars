// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
// The output should be two capital letters with a dot separating them.

//My solution

function abbrevName(name){
    let [a, b] = name.split(" ");
    return (a.slice(0, 1).toUpperCase() + "." + b.slice(0, 1).toUpperCase())
    }