/*
    https://www.youtube.com/watch?v=MJcckSfoYdI&list=PLgUwDviBIf0oFON1SRGcMqMIhiZ4EXx_F&index=3&ab_channel=takeUforward

    check if a number is prome number

    7 => true
    15 => false

*/

function isPrimeNumber(n) {
  let count = 0;
  for (let i = 0; i * i <= n; i++) {
    if (n % i === 0) {
        ++count;
        if (n/i !== i ) {
            ++count;
        }
    }
    if (count > 2) {
        return false;
    }
  }
  return true;
}

console.log(isPrimeNumber(360));
