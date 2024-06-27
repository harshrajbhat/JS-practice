//basic function

function saymyname() {
    console.log("H");
    console.log("A");
    console.log("R");
    console.log("S");
    console.log("H");
}
// saymyname()

// function addtwonums(num1,num2) {   //ye parameters he
//     console.log(num1+num2);
// }
// addtwonums(29,11)   //ye arguments he

function addtwonums(num1,num2) {
    let result = num1+num2
    return result
    console.log("harsh");   //return statement ke bad koi code execute nhi hoga
}
let result = addtwonums(6,4)
// console.log("Result is : ",result);

function welcomeuser(user = "Bro"){ 
    if (!user) {        //is line me kbhi ayega hini kyuki default value bro dedi he ki kchni hoto bro
        console.log("Please enter a ledgit value ");
        return
    }
    return `${user} just Logged in `
}
welcomeuser("harsh")        //it will not print anything it only returns a value

// console.log(welcomeuser());

function addCartValues(num1,num2,...num3) { // "..." is ko Rest operator bolte he or isi ko spread bhi bolte he
    return num3   
}
// console.log(addCartValues(34,63,12,53,4,23));

const user = {
    username : "Harshraj Bhat",
    location : "Dewas"
}
function handelobject(anyobject) {
    console.log(`Username is ${anyobject.username} and he lives in ${anyobject.location}`);
}
// handelobject(user)

const myarr = [3,53,23,64,23]

function arrayelement(arr) {
    return arr[1]
}
console.log(arrayelement(myarr))