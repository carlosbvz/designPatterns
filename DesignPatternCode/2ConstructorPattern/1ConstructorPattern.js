/** 
 * Each of the following 3 options will create a new empty object:
 */
 
var obj1 = {};
// or
var obj2 = Object.create( Object.prototype ); 
// or
var obj3 = new Object();

console.log(obj1)
console.log(obj2);
console.log(obj3);

// ==> See prototype.js for difference between new and Object.create