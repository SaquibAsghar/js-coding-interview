/* 
    to create an sub array from a given array and size
    [1, 2, 3, 4, 5, 6 ], size = 2 => [[1, 2], [3, 4], [5, 6]]]
*/

const arr = [1, 2, 3, 4, 5, 6, 7, 8];
const size = 3;

function createArrayChunk(arr, size) {
  let newArr = [],
    tempArr = [],
    count = 0;
  arr.forEach((element) => {
    if (count < size) {
      tempArr.push(element);
      ++count;
    } else if (count === size) {
      newArr.push(tempArr);
      count = 0;
      tempArr = [];
      tempArr.push(element);
      ++count;
    }
  });
  newArr.push(tempArr);
  return newArr;
}

console.log(createArrayChunk(arr, size));
