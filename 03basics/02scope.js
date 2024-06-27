let a = 28  //GLOBAL SCOPE
if (true){
    let a = 1   //BLOCK SCOPE
    const b = 2 
    console.log("INNER A is : ",a);
    // var c = 3
}
// console.log(a); //ye print ni hoga
// console.log(b); //ye bhi print ni hoga
// console.log(c); //ye var he isliye khi bhi print hojayega bkl.
console.log(a);