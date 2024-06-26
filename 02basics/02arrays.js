const marvelheros = ["ironman","spiderman","captainamerica"]
const dcheros = ["superman","batman","flash"]

// marvelheros.push(dcheros)       //adds the array inside the array as a element dont return new array.
// console.log(marvelheros);

const allheros = marvelheros.concat(dcheros)    //concadinate all the elements in both arrays and create a new array.
console.log(allheros);