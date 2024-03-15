/*
    https://www.youtube.com/watch?v=rr9H9eIogyM&list=PLAx7-E_inM6EkgZkrujZvewiM_QZRU4A2&index=2
    find the min/max from the current array list
    [11, 1, 34, 20, 5, 7, 9, 10, 0 ,-10] => -10 (min)
     [11, 1, 34, 20, 5, 7, 9, 10, 0 ,-10] => 34 (max)
*/

const originalArr = [11, 1, 34, 20, 5, 7, 9, 10, 0 ,-10]

Array.prototype.myMin = function(args){
    const min = Math.min(...args)
    return min;
}

Array.prototype.myMax = function(args){
    return Math.max(...args)
}

console.log(originalArr.myMin(originalArr))
console.log(originalArr.myMax(originalArr))