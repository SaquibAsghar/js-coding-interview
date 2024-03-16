/*
    How to compare two Arrays are Equal or Not in JavaScript
    arr1 = [1, 2, 3, 4, 5, 8, 9]
    arr2 = [6, 4, 5, 3, 2];

    intersectArr = arr1 & arr2 => [4, 5, 3, 2]
*/

const arr1 = [1, 2, 3, 4, 5, 8, 9];
const arr2 = [6, 4, 5, 3, 2];

function intersectArr(arr1 = [], arr2 = []) {
  let intersectArr = [];
  arr1.some((ele, i) => {
    if (arr2.includes(ele)) {
      if (intersectArr.indexOf(ele) < 0) {
        intersectArr.push(ele);
      }
    }
  });

  return intersectArr;
}

console.log(intersectArr(arr1, arr2));
