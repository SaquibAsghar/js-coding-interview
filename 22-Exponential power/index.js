/*
    https://www.youtube.com/watch?v=hFWckDXE-K8&list=PLgUwDviBIf0oFON1SRGcMqMIhiZ4EXx_F&index=5&ab_channel=takeUforward

    find the exponential value of given number 'n' having power 'x'
*/

function numPow(n, x) {
  let ans = 1;
  let isNegative = x < 0;
  if (isNegative) {
    x *= -1;
  }
  while (x > 0) {
    if (x % 2 === 1) {
      // for odd power
      ans *= n;
      x -= 1;
    } else {
      x = x / 2;
      ans *= ans;
    }
  }
  if (isNegative) {
    return 1 / ans;
  }
  return ans;
}

console.log(numPow(2, 5));
