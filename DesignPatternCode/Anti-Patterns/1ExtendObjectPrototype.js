console.log('==== obj:')
let obj = {a: "A", b: "B", c: "C", d: "D"};
for (let key in obj) {
   console.log(key +': '+obj[key]); //displays "a: A", "b: B", "c: C", "d: D"
}

Object.prototype.e = "E";

console.log('==== obj:')
for (let key in obj) {
   console.log(key +': '+obj[key]); //displays "a: A", "b: B", "c: C", "d: D", "e: E"
}

let obj2 = {a2: "A2", b2: "B2", c2: "C2", d2: "D2"}; 
console.log('==== obj2:')
for (let key in obj2) {
   console.log(key +': '+obj2[key]); //displays "a2: A2", "b2: B2", "2c: C2", "d2: D2", "e: E"
}

// Question ==> Why this is suppose to be bad?