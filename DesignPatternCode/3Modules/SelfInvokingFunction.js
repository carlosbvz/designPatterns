// function level scoping :)

(function fn() {
    var x = Math.random();

    console.log(x)
})();


// vs 
var x = Math.random();
console.log(x)
