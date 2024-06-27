let a = 28  //GLOBAL SCOPE
if (true){
    let a = 1   //BLOCK SCOPE
    const b = 2 
    // console.log("INNER A is : ",a);
    // var c = 3
}
// console.log(a); //ye print ni hoga
// console.log(b); //ye bhi print ni hoga
// console.log(c); //ye var he isliye khi bhi print hojayega bkl.
// console.log(a);

function one() {
   const username ="Harsh"
    function two() {
        const website = "Youtube"
        console.log(username);
    }
    // console.log(website);
    two()
}
// one()

if (true){
    const username = "Harry"
    if (username === "Harry"){
        const website = " Youtube"
        // console.log(username + website);
         
    }
    // console.log(website);
}

//+++++++++++++++++++++++++++++++++++++++INTERESTING++++++++++++++++++++++++++++++++++++++++++++++++++

// addone()        //ye chal jayega
function addone(num) {
    return num + 1
}

// console.log(addtwo())       //ye declaration nhi chlegaa
const addtwo = function (num) {
    return num+2
}