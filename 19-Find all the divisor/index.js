/*
    
    Find all the present for n number

    N = 36 =>  [1, 2, 3, 4, 6]

*/

function findAllTheDivisor(n) {
  const divisorList = [];
  for (let i = 1; i * i <= n; i++) {
    if (n % i === 0) {
      divisorList.push(i);
      if (n / i !== i) {
        divisorList.push(n / i);
      }
    }
  }
  return { divisorList };
}

console.log(findAllTheDivisor(36));
