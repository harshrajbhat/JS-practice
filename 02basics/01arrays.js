//Arrays

const myarray = [1,3,5,2,4]
const heros = ["shaktiman","krish","nagraj"]
const newaray = new Array(1,2,3,4,5)

// console.log(myarray[2]);    //find elements through indexing
// console.log(heros);
// console.log(newaray);

// METHODS OF Array

// myarray.push(6) //adds value at the end of the array
// myarray.pop()   //removes last element
// myarray.unshift(0)  //adds value at starting of a array
// myarray.shift() //removes first element of array

// const strarr = newaray.join()       //converts the whole array into string
// console.log(strarr);

// console.log(myarray.includes(3));       //gives true or false if exist 
// console.log(myarray.indexOf(2));        //gives index of existing element and if not present it returns -1.

// SLICE & SPLICE

// console.log('A',newaray);
// const myn1 = newaray.slice(1,3)         //gives the elements of the given indexing from 1 to 3-1.
// console.log(myn1);

// const myn2 = newaray.splice(1,3)        //removes given elements from original array and gives element from the range 1 to 3.
// console.log(myn2);