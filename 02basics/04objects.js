// SINGLETON
// const tinderuser = new Object()

const tinderuser = {}

tinderuser.id = "123abc"
tinderuser.name = "Harry"
tinderuser.isloggedin = false

// console.log(tinderuser);

const normaluser = {
    email : "harry@gmail.com",
    fullname : {
        firstname : "Harry",
        lastname : "Potter"
    }

}
// console.log(normaluser.fullname.firstname);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}
const obj3 = {5:"e",6:"f"}

// const obj4 = Object.assign({},obj1,obj2,obj3)       //concadinate all the objects
const obj4 = {...obj1,...obj2,...obj3}      //concadinate using spread operator 
// console.log(obj4);

const usersarr = [
    {
        email : "harry@gmail.com",
        fullname : {
            firstname : "Harry",
            lastname : "Potter"
        }
    
    },
    {
        email : "Spider@gmail.com",
        fullname : {
            firstname : "Spider",
            lastname : "Man"
        }
    
    },
    {
        email : "shakti@gmail.com",
        fullname : {
            firstname : "Shakti",
            lastname : "Man"
        }
    
    }
]

// console.log(usersarr[1].fullname.firstname)

// console.log(Object.keys(tinderuser));       //output [ 'id', 'name', 'isloggedin' ]
// console.log(Object.values(tinderuser));        //output [ '123abc', 'Harry', false ]
// console.log(Object.entries(tinderuser));    //gives nested arrays of key and value pair 
// output = [ [ 'id', '123abc' ], [ 'name', 'Harry' ], [ 'isloggedin', false ] ]

// console.log(tinderuser.hasOwnProperty('id'));   //checks the object consist of or not

const course={
    coursename : "js in hindi",
    fee : 999,
    courseinstructor : "Hitesh Chourdhary"
}

// console.log(course.courseinstructor);       //way to print values from keys in js.

// const {courseinstructor : teacher}= course      //proper way to destructure a object
// console.log(teacher);