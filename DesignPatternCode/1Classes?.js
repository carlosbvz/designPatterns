/**
 * "Creating classes" in js
 *  The classes behavior is simulating by using functions declarations
 */

// A car "class" ==> Function Expression.  ===> More about this in Declarations-vs-Expressions
var Car = function ( model ) {
 
  this.model = model;
  this.color = "silver";
  this.year = "2012";
 
  this.getInfo = function () {
    return this.model + " " + this.year+ " "+ this.color;
  };
}

var myCar = new Car('ford');
var Car2  = new Car('BMW')
 
myCar.year = "2010";
Car2.color = "green ";
 
console.log( myCar.getInfo() );
console.log( Car2.getInfo() );

/** Note: 
 * The new operator creates an instance of a user-defined object type or 
 * of one of the built-in object types that has a constructor function.
 */