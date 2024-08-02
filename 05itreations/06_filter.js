// const coding = ['js', 'ruby', 'java', 'python']
// const values = coding.forEach((item)=>{
//     console.log(item);
    
// })
// console.log(values);

// FILTER

const mynums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newnums = mynums.filter((num) => {
//     return num > 4;
// })          //scope open kro to return use krna pdega

// const newnums = mynums.filter((num) => num > 4)

// console.log(newnums);

// USING FOR EACH WITH ARRAY

// const newnums = []
// mynums.forEach((num) => {
//     if (num > 6){
//         newnums.push(num)
//     }
// })
// console.log(newnums);


const books = [
    { name: "The Great Adventure", genre: "Adventure", year: 2010 },
    { name: "Mystery of the Old House", genre: "Mystery", year: 2015 },
    { name: "Love in the Time of Algorithms", genre: "Romance", year: 2020 },
    { name: "The Future of Tech", genre: "Science Fiction", year: 2022 },
    { name: "Journey to the Unknown", genre: "Fantasy", year: 2018 },
    { name: "History of the Ancient World", genre: "History", year: 2005 },
    { name: "Cooking with Passion", genre: "Cooking", year: 2017 },
    { name: "The Art of Zen", genre: "Self-Help", year: 2019 },
    { name: "Haunted Nights", genre: "Horror", year: 2016 },
    { name: "The World of Economics", genre: "Non-Fiction", year: 2021 }
  ];
const sbook = books.filter((bk) => bk.genre ==='Horror' )
const ybook = books.filter((bk) => {
    return bk.year > 2015 && bk.genre === 'Fantasy'
})
console.log(ybook);

