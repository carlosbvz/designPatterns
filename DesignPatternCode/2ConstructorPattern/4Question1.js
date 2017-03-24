function Car( model, year, miles ) {
 
  this.model = model;
  this.year = year;
  this.miles = miles;
 
  // this.toString = function () {
  //   return this.model + " has done " + this.miles + " miles";
  // };
}

var fiat = new Car('Panda', 1987, '150000')

// 1. What will this print?
// console.log(fiat.toString())





// 2. What will this print?
Car.toString  = function () {
    return "I am a nice Car"
} 
// console.log(fiat.toString())




// 3. What will this print?
// fiat.toString = function() {
//     return "I am a nice Fiat!"
// }
// console.log(fiat.toString())

// 4. What will this print?
Car.prototype.toString = function() {
  return "I am a nice car";
}
console.log(fiat.toString())

