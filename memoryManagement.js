//  #1
//  Common recursion 
//  Example stack overflow

function calculateFalsyNFactorial(n) {
    return n * calculateFalsyNFactorial(n - 1);
}
//  Solve
//  Recursion has 2 cases: base (for output) and recursion (for calling itself)
//  Base case applys to avoid stack overflow 
function calculateTruthyNFactorial(n) {
    if (n == 1) {
        return 1;   //<-- base case (always first)
    }
    return n * calculateTruthyNFactorial(n - 1);    // <-- general case
}

//  #2
//  Using setTimeout
//  Example stack overflow

//  This function will have an error about stack overflow
let sum = 0;
const calculateInfinityFalsySum = function () {
    sum++;
    calculateInfinityFalsySum();
}

//  Such functions like setTimeout and setInterval apply to avoid stack overflow with help of event loop
//  At first function falls to 'call stack', after that 
//    => web API provide setTimeout function which send callback function (in our case it's calculateInfinitySum)to 'task queue' (event queue) 
//    => from 'task queue' functions can fall to 'call stack' only when it (call stack) will be empty 
//    => function calculateInfinitySum executed so function from 'task queue' can fall to 'call stack'
//  As we can see, in our case this loop continues to infinity without stack overflow because of event loop
let sum = 0;
const calculateInfinityTruthySum = function () {
    sum++;
    setTimeout(calculateInfinityTruthySum, 0);
}