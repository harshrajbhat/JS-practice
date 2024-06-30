// IMMEDIATE INVOKED FUNCTION EXPRESSION (IIFE):- Function which is called immediately after defined.
// global scope ke pollution se problem hoti he isliye iife ka use krte he 

// IIFE Ex:-

(function chai() {
    //Named iife he ye
    console.log("Welcome to the Chai house");
})();   //surround the function with () an after the function ends, add a () to immediately run func.
// use ; to end the function iife.

((name)=>{
    //Unnamed IIFE he ye
    console.log(`Hello ${name}, welcome to the code.`);
})("Harshuu")