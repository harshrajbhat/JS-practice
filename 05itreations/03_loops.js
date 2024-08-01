// for of loop

// ["","",""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello world"
for (const greeet of greetings) {
    // console.log("each char is " + greeet);
}


// Maps :- same like object but keeps unique values and store in exact manner in which it is entered.

const map = new Map()
map.set('IN', 'India')
map.set('USA', 'United States of America')
map.set('FR', 'France')

// console.log(map);

for (const [key, value] of map) {
    // console.log(key, " :- ", value);
}

const myobj = {
    'game1' : 'NFS',
    'game2' : 'GTA'
}   //for of loops object me kam nhi krte hee
for (const [key, value] of myobj) {
    console.log(key, " :- ", value);
}