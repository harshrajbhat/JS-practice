// falsy values
    // false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values
    // true, "0", "false", " ",[], {}, function(){} 



const userEmail = "h@harsh.ai"
// if (userEmail){
//     console.log("got user email");    
// }else{
//     console.log("don't have user email");
// }

const emailarr = []
// if (emailarr.length ===0){
//     console.log("Array is empty");     
// }

const emptyobj = {}

if (Object.keys(emptyobj).length === 0){
    console.log("Object is Empty");
}

// Terinary Operator
// It works like single line if,else condition
// condition ? true : false
const sellp = 90

sellp <=100 ? console.log("less than 100") : console.log("more than 100");