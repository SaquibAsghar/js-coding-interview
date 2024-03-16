/*
    https://www.youtube.com/watch?v=21LLa0slRbo&list=PLAx7-E_inM6EkgZkrujZvewiM_QZRU4A2&index=8
    Find the sum of all numbers in the array
    [1, 2, 3, 4] => 6
*/

const originalArray = [1, 2, 3, 4, 5]

function sumOfAllNumber(arr=[]) {

    const total = arr.reduce((acc, curr) => {
        return acc + curr
    }, 0);

    console.log(total);
    return total;
}

sumOfAllNumber(originalArray)