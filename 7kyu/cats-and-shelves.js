// An infinite number of shelves are arranged one above the other in a staggered fashion.
// The cat can jump either one or three shelves at a time:
// from shelf i to shelf i+1 or i+3 (the cat cannot climb on the shelf directly above its head)

//My solution

function solution(start, finish) 
{ let a = finish - start;
  let b = (a % 3);
  let c = (a-b)/3;
  return b+c;
}