/** Using Object.create
 *  Creates a new-empty object and assignts the parameter (the object itself) as its prototype
 */
// const Car = {  };

// const car1 = Object.create(Car);
// console.log(car1.color); // undefined

// Car.__proto__.color = 'red';
// // Car.color = 'green';


// console.log(car1.color); // ?


// Using the 'new' keyword we dont assign the function as the prototype, but the function's prototype
function Car() {
}
const car1 = new Car();
console.log(car1.color); // undefined

Car.color = 'green';
console.log(car1.color); // ?

Car.prototype.color = 'green';
console.log(car1.color); // ?
