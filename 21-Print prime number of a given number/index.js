/*
    https://www.youtube.com/watch?v=LT7XhVdeRyg&list=PLgUwDviBIf0oFON1SRGcMqMIhiZ4EXx_F&index=4&ab_channel=takeUforward

    find the list of prime factors present for given number

*/

function getPrimeNumbers(n) {
  const primeNumbers = [];
  for (let i = 2; i * i < n; i++) {
    if (n % i === 0) {
      primeNumbers.push(i);
      while (n % i === 0) {
        n = n / i;
      }
    }
  }
  if (n !== 1) {
    primeNumbers.push(n);
  }

  return primeNumbers;
}

console.log(getPrimeNumbers(780));
console.log(getPrimeNumbers(37));
console.log(getPrimeNumbers(16));