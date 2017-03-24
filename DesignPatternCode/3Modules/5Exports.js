/**
 * Exports
 * This next variation allows us to declare globals without consuming 
 * them and could similarly support the concept of global imports 
 * seen in the last example.
 */

// Global module
var myModule = (function () {
 
  // Module object
  var module = {},
    privateVariable = "Hello World";
 
  function privateMethod() {
    // ...
  }
 
  module.publicProperty = "Foobar";
  module.publicMethod = function () {
    console.log( privateVariable );
  };
 
  return module;
 
})();