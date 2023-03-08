// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being
//returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.
// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

//My solution

function rgb(r, g, b){
    let result = 0;
    result = [r,g,b].map(x => {
      if (x>255) { x = 255};
      if (x<0) {x = 0};
      return [Math.floor(x/16), x%16]
      }).flat();
    result = result.map(x => { 
      return (x<10 ? x.toString() : String.fromCharCode(x+55))
    }).join("");
    return result;
  }
  