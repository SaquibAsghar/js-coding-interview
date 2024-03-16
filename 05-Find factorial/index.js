/*
    https://www.youtube.com/watch?v=CiXEPljFUo8&list=PLAx7-E_inM6EkgZkrujZvewiM_QZRU4A2&index=9
    find the factorial of n!
    factorial(5) => 120
*/

function factorial(n){

    if(n ===0 || n==1) return 1;

    return n * factorial(n - 1);

}

console.log(factorial(5))