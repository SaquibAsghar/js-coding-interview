/*
    https://www.youtube.com/watch?v=zmk32_QA71s&list=PLAx7-E_inM6EkgZkrujZvewiM_QZRU4A2&index=1
    To find the duplciate value from the array
    [1, 1, 2, 2, 40, 10, 2, 40, 4] => [1, 2, 40]
 */

const orignalArr = [1, 1, 2, 2, 40, 10, 2, 40, 4];

function getDuplicateValue(arr) {
  const filterdArr = [];
  arr.forEach((ele, i) => {
    if (arr.indexOf(ele) !== i) {
      !filterdArr.includes(ele) && filterdArr.push(ele);
    }
  });
  console.log(filterdArr);
  return filterdArr;
}

getDuplicateValue(orignalArr);
