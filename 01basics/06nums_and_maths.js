const score = 66
// console.log(score);

const scorenum = new Number(84.234) //trough New keyword we can specify datatype.
// console.log(scorenum);

// console.log(scorenum.toString().length);    //converts number to string.
// console.log(scorenum.toFixed(1));           //gives fixed numbers after decimal
// console.log(scorenum.toPrecision(4));       //gives the total number of values in a number

const num = 1000000
// console.log(num.toLocaleString('en-IN'));     //to convert the number with comas(,) in indian manner


// +++++++++++++++++++++++++++++++++++++++++Maths+++++++++++++++++++++++++++++++++++++++++

// console.log(Math.round(9.4));       //Rounds the value after the decimal
// console.log(Math.abs(-9));      // converts negative value into same positive value
// console.log(Math.ceil(9.4));        //rounds up and output 10
// console.log(Math.floor(9.4));       //rounds up and output 9
// console.log(Math.min(34,6,11,64));    //gives minimum number from array
// console.log(Math.max(34,6,11,64));    //gives maximum number from array

// console.log(Math.random());         //normal random values under 0 to 1
// console.log(Math.random()*10 +1);           //isse 0.233 esi ki jgh 1 se zyada ayegi
// console.log(Math.floor((Math.random()*10)+1));      //isse round of values ayegi

// const min = 1
// const max = 6
// console.log(Math.floor(Math.random()*(max-min+1))+min);     // ye dice game jese kam krega random values between 1 to 6