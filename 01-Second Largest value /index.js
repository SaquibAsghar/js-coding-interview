/*Given an array of integers which can contain duplicate numbers as well, you have to find the second largest number in the array.

Input: [8,2,1,1,2,4,5,8,7,7,9,0,8]
Output: 8

*/

const originalArr = [8, 2, 1, 10, 20, 19, 5, 8, 19, 7, 9, 0, 8];

function secondLargestVal(arr, cb) {
  let tempArr = [];

  arr.forEach((ele, i) => {
    if (arr.indexOf(arr[i]) === i) {
      tempArr.push(ele);
    }
  });
  console.log(tempArr);
  cb(tempArr);
}

// secondLargestVal(originalArr, (arr) => {
//   let largest = arr[0],
//     secondLargest = -Infinity;
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > largest) {
//       secondLargest = largest;
//       largest = arr[i];
//     } else if (arr[i] < largest && arr[i] > secondLargest) {
//       secondLargest = arr[i];
//     }
//   }
//   console.log({ secondLargest, largest });
//   return secondLargest;
// });


// alternative implementation without sorting
function secondLargestVal(arr) {
  let largestVal = arr[0];
  let smallestVal = -Infinity;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largestVal) {
      smallestVal = largestVal;
      largestVal = arr[i];
    } else if (smallestVal < arr[i] && arr[i] < largestVal) {
      smallestVal = arr[i];
    }
  }
  console.log({ smallestVal, largestVal });
  return smallestVal;
}

// anotherFunc(originalArr);
