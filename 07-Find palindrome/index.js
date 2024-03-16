/*
    to find the pallindrome

    "madam" === "madam => true
    1881 === 1881 => true
    apple === elppa => false

*/

const val = 18811;

function isPalindrome(val) {
  let isPalindrome;
  val = val.toString();
  let start = 0,
    end = val.length - 1;
  while (start < end) {
    if (val[start] === val[end]) {
      isPalindrome = true;
      ++start;
      --end;
      continue;
    }
    return isPalindrome = false;
  }
  return isPalindrome;
}

console.log(isPalindrome(val));
