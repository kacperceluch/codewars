// As a parent, nappy changing is a never ending part of your daily routine. How the mighty have fallen!
// A friend: "Fancy popping to the pub like the old days?" You: "Nah, I'll stay in and wipe poo off ababy thanks, I've moved on."
// It's important to establish that a small is indeed coming from the baby before you begin the process of changing, because time is now percious and you don't want any false alarms.
// The trouble is that your partner is also smelly...
// You will be given a 2-dimensional array (p) that looks similar to below. Empty spots are represented by 'o' and your baby's bottom is represented by 'B'. Any scent is represented by '~'.

//My solution

function pooRoulette(p) {
    let left = false;
    let right = false;
    let top = false;
    let bottom = false;
    let babyPosition = 0;
    let babyCol = 0;
    let babyRow = 0;
    let result = "Calm before the storm";
    
    p.forEach((row, index) => {
      babyPosition = row.indexOf("B");
      if (babyPosition > -1) {
        babyRow = index;
        babyCol = babyPosition;
      }
    })
    
    // Check top
    if ([babyRow] > 2 && p[babyRow-1][babyCol] === '~' && p[babyRow-2][babyCol] === '~' && p[babyRow-3][babyCol] === '~') {
        top = true;
        result = "Get the wipes!";
    }
    
    // Check bottom
    if ([babyRow] < 4 && p[babyRow+1][babyCol] === '~' && p[babyRow+2][babyCol] === '~' && p[babyRow+3][babyCol] === '~') {
      bottom = true;
      result = "Get the wipes!";
    }
    
    // Check right
    if ([babyCol] < 4 && p[babyRow][babyCol+1] === '~' && p[babyRow][babyCol+2] === '~' && p[babyRow][babyCol+3] === '~') {
      right = true;
      result = "You disgust me!";
    }
    
    // Check left
    if ([babyCol] > 2 && p[babyRow][babyCol-1] === '~' && p[babyRow][babyCol-2] === '~' && p[babyRow][babyCol-3] === '~') {
      left = true;
      result = "You disgust me!";
    }
    
    return result
}