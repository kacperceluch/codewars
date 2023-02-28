// Greed is a dice game played with five six-sided dice. Your mission, should you choose to accept it, is to score a throw according to these rules. You will always be given an array with five six-sided dice values.

//  Three 1's => 1000 points
//  Three 6's =>  600 points
//  Three 5's =>  500 points
//  Three 4's =>  400 points
//  Three 3's =>  300 points
//  Three 2's =>  200 points
//  One   1   =>  100 points
//  One   5   =>   50 point
// A single die can only be counted once in each roll. For example, a given "5" can only count as part of a triplet (contributing to the 500 points) or as a single 50 points, but not both in the same roll.

//My solution

function score( dice ) {
    let count={}
    let points = 0;
  
    dice.forEach(num => {
      count[num] = (count[num] || 0) + 1;
    });
    
    let keys = Object.keys(count).map(Number);
    let values = Object.values(count);
    
    keys.map((n, i) => {
      switch(n){
        case 1:
          (values[i] >= 3 ? points += 1000 + ((values[i] - 3) * 100) : points += (values[i] * 100));
          break;
        case 2:
          (values[i] >= 3 ? points += 200 : null);
          break;
        case 3:
          (values[i] >= 3 ? points += 300 : null);
          break;
        case 4:
          (values[i] >= 3 ? points += 400 : null);
          break;
        case 5:
          (values[i] >= 3 ? points += 500 + ((values[i] - 3) * 50) : points += (values[i] * 50));
          break;
        case 6:
          (values[i] >= 3 ? points += 600 : null);
          break;
      }
    });

    return points;
  }