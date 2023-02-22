// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.
// Implement the function which takes an array containing the names of people that like an item. It must return the display text.

// My solution

function likes(names) {
    let result = "no one likes this"
    if (names.length === 1) {
      result = names[0] + " likes this"
    } else if (names.length === 2) {
      result = names[0] +" and "+ names[1] + " like this"
    } else if (names.length === 3) {
      result = names[0] +", "+ names[1] + " and " + names[2] + " like this"
    } else if (names.length > 3){
      result = names[0] +", "+ names[1] + " and " + (names.length - 2) + " others like this"
    }
    return result;
  }