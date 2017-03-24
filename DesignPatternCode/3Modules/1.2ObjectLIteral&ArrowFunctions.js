/**
 * When NOT to use arrow functions in object literals (according to Kyle Simpson (YDKJS))
 */

// 1.
'use strict'
const calculate = {  
  array: [1, 2, 3],
  sum: () => {
    // console.log(this === window); // => true for browser
    return this.array.reduce((result, item) => result + item); // TypeError: Cannot read property 'reduce' of undefined
    // TO 'fix' this:
    // return calculate.array.reduce((result, item) => result + item);
  },
  // A (better) way to fix it
  sum() { // ES6 shorthand syntax
    console.log(this === calculate); // => true
    return this.array.reduce((result, item) => result + item);
  },
  // Another form to fix it (ugly one :P )
  sum: function() {
  //   // console.log(this === window); // => true for browser
  //   return this.array.reduce((result, item) => result + item); // TypeError: Cannot read property 'reduce' of undefined
  //   // TO 'fix' this:
  //   // return calculate.array.reduce((result, item) => result + item);
  // },

};
// console.log(this === window); // => true  
// Throws "TypeError: Cannot read property 'reduce' of undefined"
console.log(calculate.sum());