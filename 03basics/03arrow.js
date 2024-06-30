const user = {
    username : "Harsh",
    price : 899,

    greet : function(){
        console.log(`${this.username}, welcome to the website`);    //this keyword refers current context
        console.log(this);
    }
}
//user.greet()
//this keyword only works with objects and not with functions.
// console.log(this);   //gives the current value of the context or entity.

// function chai() {
//     let username = "harsh"
//     console.log(this.username);
// }
// chai()      //output is undefined bcz this keyword not used with functions.

// const chai = function(){
//     let username = "harsh"
//     console.log(this.username);
// }       //normal function using constructor

const chai = () =>{
    let username = "harsh"
    console.log(this.username);
}
// chai()

// const addtwo = (num1,num2) =>{
//     return num1+num2        //curly braces me return keyword likhna pdega
// }    //explicit hoga ye kyuki isme return keyword use hua he.

// const addtwo = (num1,num2) => num1+num2 //used for single line code , dont use curly braces and "return"

const addtwo = (num1,num2) => (num1+num2)   //parantheisis me return keyword ni likhna 
//Implicitly hoga ye kyuki isme return keyword use nhi hua he
// console.log(addtwo(2,4));


const showw = () =>({username : "harsh"})   //use () to return object
console.log(showw());
