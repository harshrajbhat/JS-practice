const marvelheros = ["ironman","spiderman","captainamerica"]
const dcheros = ["superman","batman","flash"]

// marvelheros.push(dcheros)       //adds the array inside the array as a element dont return new array.
// console.log(marvelheros);

const allheros = marvelheros.concat(dcheros)    //concadinate all the elements in both arrays and create a new array.
// console.log(allheros);

const allnewheros = [...marvelheros,...dcheros] //Spread operator do the same thing as concat 
// console.log(allnewheros);                       //kanch ke glass jese spread krdeta h

const nestedarray = [1,2,3,[4,5,6],7,[8,[9,10]]]
const solvedarray = nestedarray.flat(Infinity)  //unest all the arrays and gives a single array with all the elements.
// console.log(solvedarray);   //output [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 

//console.log(Array.isArray("Harsh"));
//console.log(Array.from('Harsh')); //create new array using "Array.from" outpt [ 'H', 'a', 'r', 's', 'h' ]

let sc1 = 100
let sc2 = 200
let sc3 = 300
// console.log(Array.of(sc1,sc2,sc3)); //returns single array from multiple inputs.outpt [ 100, 200, 300 ]
