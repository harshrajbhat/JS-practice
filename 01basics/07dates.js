// Date

let date = new Date()
// console.log(date);                       //2024-06-24T11:18:56.871Z
// console.log(date.toLocaleString());      //6/24/2024, 11:25:33 AM
// console.log(date.toLocaleDateString());  //6/24/2024
// console.log(date.toLocaleTimeString());  //11:25:33 AM
// console.log(date.toString());            //Mon Jun 24 2024 11:18:56 GMT+0000 (Coordinated Universal Time)
// console.log(date.toDateString());        //Mon Jun 24 2024
// console.log(date.toJSON());              //2024-06-24T11:18:56.871Z
// console.log(date.toISOString());         //2024-06-24T11:18:56.871Z
// console.log(date.toTimeString());        //11:18:56 GMT+0000 (Coordinated Universal Time)

let mycreatedate = new Date(2022,0,28,10,30,20) //to create date and time according to you
// console.log(mycreatedate.toLocaleString());     //1/28/2022, 10:30:20 AM

let mytimestamp = Date.now()
// console.log(mytimestamp);                   //to get time in mili seconds from time
// console.log(mycreatedate.getTime());        //to get the time in mili seconds from date
// console.log(Math.floor(Date.now()/1000));   //to get in seconds

let newdate = new Date()
console.log(newdate);
console.log(newdate.getDate());
console.log(newdate.getDay());
console.log(newdate.getMonth()+1);
