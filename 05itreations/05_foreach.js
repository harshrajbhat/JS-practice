const coding = ['js', 'ruby', 'java', 'python']

coding.forEach( function (item) {
//     console.log(item);
})

coding.forEach( (item) => {
    // console.log(item);
})

function printme(item){
    // console.log(item);
}
coding.forEach(printme)

coding.forEach((item, index, arr) => {
    // console.log(item, index, arr);
})


// Objects inside array ittretion

const objarr = [
    {
        languagename : 'Javascript',
        languageFileName : 'js'
    },
    {
        languagename : 'Java',
        languageFileName : 'java'
    },
    {
        languagename : 'Python',
        languageFileName : 'py'
    },
]

objarr.forEach((item)=>{
    console.log(`${item.languagename} is a Language & file extension is ${item.languageFileName}`);
})
