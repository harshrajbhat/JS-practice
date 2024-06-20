// Primitive  : Call by Value and given a copy of the Original Value to perfom operation.

// 7 types : String, Number, Bollean, Null, Undefined, Symbol, BigInt

// let name = "Harsh"
// let num1 = 102
// let num2 = 13.5
// let isLoggedIn = true
// let size = null
// let age;
// let id = Symbol('123')
// const bignum = 34364346432526n



// Non Primitive or Refrence : Arrays, Objects, Functions 

let hero=["Shaktiman","FlyingJatt","Bahubali"]

let info = {
    name : "Harsh",
    age : 22,
    place : "dewas"
}

const plus = function () {
    console.log(2+2);
}

console.log(typeof plus);   //function
console.log(typeof info);   //object
console.log(typeof hero);   //object