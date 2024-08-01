// for in loop

const myobj = {
    js : 'javascript',
    cpp : 'C++',
    rb : 'Ruby',
    python : 'py'
}

for (const key in myobj) {
    // console.log(`${key} shortcut is for ${myobj[key]}`);
}

const pro = ['js', 'py', 'java'] //array ko as a object use krke for in loop use kr skte he
for (const key in pro) {
    // console.log(pro[key]);
}

