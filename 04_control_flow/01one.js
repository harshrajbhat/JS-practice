// if-else keyword

// comparision operators :-  <, >, <=, >=, ==, ===, !=

const isUserLoggedIn = true
const teampreature = 41

// if (teampreature > 40){
//     console.log("teampreature is high ")
// }
// else{
//     console.log("teampreature is low ");
// }

const score = 200
// if (score >101){
//     const power = "fly"
//     console.log(`User power is to ${power}`);
// }


// SHORT HAND CODE

const balance = 2000
// if (balance>1400) console.log("You are Rich");

// NESTING

// if (balance<500){
//     console.log("less than 500");
// }else if(balance<750){
//     console.log("less than 750");
// }else if(balance<950){
//     console.log("less than 950");
// } else{
//     console.log("less than 1200");
// }

// real life usage of nested if else
    // using && operator

const userLoggedIn = true
const debitCard = true
const isUserLoggedGoogle = false
const isUserLoggedEmail = true

if (userLoggedIn && debitCard){
    console.log("allow to buy course");
}

// using OR(||) operator
if (isUserLoggedEmail || isUserLoggedGoogle){
    console.log("user logged in");
}

