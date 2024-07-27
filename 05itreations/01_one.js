// for loop

for (let i = 0; i <=10 ; i++) {
    const element = i;
    if (i==5) {
        // console.log("5 is the best number");
    }
    // console.log(element);
    
}

for (let i = 0; i <=5 ; i++) {
    // console.log(`Outer loop ${i}`);
    for (let j = 0; j <=5; j++) {
        // console.log(`Inner loop ${j}`);
        
    }
}

let myarr = ["flash","batman","superman"]

for (let i = 0; i < myarr.length; i++) {
    const element = myarr[i];
    // console.log(element);
}

// break and continue

for (let i = 1; i < 8; i++) {
    // console.log(`Value of i is ${i}`);
    if (i==5) {
        break;
    }
}

// continue

for (let i = 0; i < 10; i++) {
    if (i==5) {
        console.log("Detected the mistake");
        continue;
    }
    console.log(`Value of i is ${i}`);
    
}