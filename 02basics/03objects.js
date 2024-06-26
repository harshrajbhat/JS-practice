//SINGLETON
// ye constructor ke through bnta he 
// Object.create()

// OBJECT LITERALS
const mysym = Symbol("key1")
const jsuser = {
    name : "Harsh",
    "fullName" : "Harshraj Bhat" ,
    [mysym] : "Mykey2",
    age : 22,
    location : "Dewas",
    email : "harsh@gmail.com",
    isloggedin : false,
    lastlogindays : ["monday","wednesday","friday"]
}

// console.log(jsuser.name);           //ways to print values from keys
// console.log(jsuser["name"]);
// console.log(jsuser["fullName"]);
// console.log(jsuser[mysym]);     //to print symbol

// jsuser.email = "harshrajbhat@yahoo.com"     //assigning new values to keys
// console.log(jsuser);

// Object.freeze(jsuser)   //to freeze object from getting modified
// jsuser.age = 44
// console.log("B",jsuser);
jsuser.greeting = function () {
    console.log("Hello JS User");
}
jsuser.greeting2 = function (){
    console.log(`hello JS User ${this.fullName}`);      //"this" use krke values print ki jati he
}
console.log(jsuser.greeting());
console.log(jsuser.greeting2());