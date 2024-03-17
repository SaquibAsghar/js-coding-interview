/*
    Write a function that accepts an integer N
    and returns a NxN spiral matrix.
    --- Examples
      matrix(2)
        [[1, 2],
        [4, 3]]
      matrix(3)
        [[1, 2, 3],
        [8, 9, 4],
        [7, 6, 5]]
     matrix(4)
        [[1, 2, 3, 4],
        [12, 13, 14, 5],
        [11, 16, 15, 6],
        [10, 9, 8, 7]]

*/

const matrixSize = 4;

function matrix(n) {
  let matrixMain = [],
    count = 1;
  let rowStart = 0,
    colStart = 0,
    rowEnd = n - 1,
    colEnd = n - 1;
  for (let i = 0; i < n; i++) {
    matrixMain.push([]);
  }
  while (rowStart < rowEnd && colStart < colEnd) {
    for (i = colStart; i <= rowEnd; i++) {
      matrixMain[rowStart][i] = count;
      ++count;
    }
    ++rowStart;
    for (i = rowStart; i <= rowEnd; i++) {
      matrixMain[i][colEnd] = count;
      ++count;
    }
    --colEnd;

    for (let i = colEnd; i >= colStart; i--) {
      matrixMain[rowEnd][i] = count;
      ++count;
    }
    --rowEnd;

    for (let i = rowEnd; i >= rowStart; i--) {
      matrixMain[i][colStart] = count;
      ++count;
    }
    ++colStart;

    //   console.log({ rowStart, rowEnd, colStart, colEnd });
  }
  return matrixMain;
}

console.log(matrix(matrixSize));
