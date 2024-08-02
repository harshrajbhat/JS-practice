const mynums = [1,2,3,4,5,6,7,8,9]
// when use scope, use RETURN keyword
// const newnums = mynums.map((num) => num +10)

const newnums = mynums
    .map((num) => num*2 )
    .map((num) => num + 1)
    .filter((num) => num >= 12)
console.log(newnums);

