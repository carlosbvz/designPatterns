/**
 * Function declarations load before any code is executed.
 * Function expressions load only when the interpreter reaches that line of code.
 */

// var foo = function() { return 5; } 

// var foo;
console.log(foo()); 

// Function expression
var foo = function() { return 5; } 
// Function Declaration
// function foo() { return 5; }   // Question => Why with this one works?


// Way to see the hoisting in this case: 
// console.log(`bar: ${bar}`)
// let bar = 'CharlieLet';
// var bar = 'CharlieBar';