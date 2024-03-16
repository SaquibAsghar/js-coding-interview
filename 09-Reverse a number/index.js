/*
  To reverse a number
   
  12 => 21
  10298 => 89201
 */

const num = 123;

function reverseNumber(val) {
  let revNumber = val.toString(),
    revString = "";
  let start = revNumber[0],
    end = revNumber.length;
  while (start <= end) {
    revString += revNumber[end - 1];
    --end;
  }
  return Number(revString);
}

console.log(reverseNumber(num));
