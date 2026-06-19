// what is array
// let anurag = [
//   1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 6, 7, 8, 12, 3, 4, 5, 6, 7, 8, 9, 7, 5, 4, 3, 2,
//   3, 5, 7, 5, 4, 2, 3, 5, 56,
// ]; //0 1 2 3 4
// let arr = [1, 2, 3, 4, 5]; //0 1 2 3 4

// console.log('arr: ', arr[4]); // how to access the array

//how to find the length of an array
// console.log('arr: ', arr.length);
// console.log( anurag[anurag.length-1]); // --->arr[5-1 = 4]
// console.log( anurag[35]); // --->arr[5-1 = 4]

// let xyz = ['firstname','diwaker','lastname',"10",'age','dwivedi']
// let char = ["a", "b", "c", "d", "e"];
// let bool = [true, false];
// let str = ["diwaker", "dwivedi"];

// let res = [1, "a", true, "dwivedi"];
// console.log("res: ", res);

// let facultyInfo = [
//   {
//     firstname: "diwaker",
//     lastname: "dwivedi",
//     age: "10",
//     address: "ballupur",
//     institute: "acadmiac",
//     salary: "12345678",
//   },
//   {
//     firstname: "vivek",
//     lastname: "pawar",
//     age: "10",
//     address: "clement town",
//     institute: "acadmiac",
//     salary: "12345678",
//   },
//   {
//     firstname: "anurag",
//     lastname: "singh",
//     age: "10",
//     address: "ballupur",
//     institute: "acadmiac",
//     salary: "12345678",
//   },
// ];

// console.log('facultyInfo: ', facultyInfo);

// let staffinfo = [
//   {
//     firstname: "diwaker",
//     lastname: "dwivedi",
//     age: "10",
//     address: "ballupur",
//     institute: "acadmiac",
//     salary: "12345678",
//   },
//   {
//     firstname: "vivek",
//     lastname: "pawar",
//     age: "10",
//     address: "clement town",
//     institute: "acadmiac",
//     salary: "12345678",
//   },
//   {
//     firstname: "anurag",
//     lastname: "singh",
//     age: "10",
//     address: "ballupur",
//     institute: "acadmiac",
//     salary: "12345678",
//   },
// ];

// let studentinfo = [
//   {
//     firstname: "diwaker",
//     lastname: "dwivedi",
//     age: "10",
//     address: "ballupur",
//     institute: "acadmiac",
//     salary: "12345678",
//   },
//   {
//     firstname: "vivek",
//     lastname: "pawar",
//     age: "10",
//     address: "clement town",
//     institute: "acadmiac",
//     salary: "12345678",
//   },
//   {
//     firstname: "anurag",
//     lastname: "singh",
//     age: "10",
//     address: "ballupur",
//     institute: "acadmiac",
//     salary: "12345678",
//   },
// ];

// let obj = {key:'value'}

// let webdevelopmentfacultyinfo = {
//   firstname: "diwaker",
//   lastname: "dwivedi",
//   age: "10",
//   address: "ballupur",
//   institute: "acadmiac",
//   salary: "12345678",
// };

// let digitalmarketingfacultyinfo = {
//   firstname: "diwaker",
//   lastname: "dwivedi",
//   age: "10",
//   address: "ballupur",
//   institute: "acadmiac",
//   salary: "12345678",
// };

// let AIfacultyinfo = {
//   firstname: "diwaker",
//   lastname: "dwivedi",
//   age: "10",
//   address: "ballupur",
//   institute: "acadmiac",
//   salary: "12345678",
// };

// console.log("facultyInfo: ", facultyInfo);

// let arr2 = new Array(5);
// how to create array
//how to access array
//how to update the array
//the length property in array
//how to iterate the array
//sorting in array
// let numarr = [ 5,4,3,2,1] //5,4,3,2,1
// let numarr2 = [5, 4, 3, 20, 10]; //20,10,5,4,3
// console.log('numarr: ', numarr2.sort((a,b)=> a-b));
// console.log('numarr: ', numarr.sort((a,b)=> b-a));

//spread operatior and destructor of array
//array methods in js
//map filter and reduce method in array

//how to update the values in array

// let arr = [1, 2, 3, 4, 5]; //0 1 2 3 4
// arr[2] = 'value'
// console.log('arr: ', arr);

// let anurag = [
//   1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 6, 7, 8, 12, 3, 4, 5, 6, 7, 8, 9, 7, 5, 4, 3, 2,
//   3, 5, 7, 5, 4, 2, 3, 5, 56,
// ];
// console.log('anurag: ', anurag);

// for (let i = 0; i < facultyInfo.length; i++){
//   // console.log('i: ', i);
//   console.log("facultyname: ", facultyInfo[i].firstname);
//   console.log("facultySalary: ", facultyInfo[i].salary);

// }

// while , for of , for in  , map , filter , reduce , do while
let arr=[9,10,2,3,4,5];
// arr.at(3)
console.log('arr.at(1): ', arr.at(1));
let arr2 = [20,30,40,50]

// let res = arr.join(' ')
// console.log('res: ', typeof res);
// console.log('res: ', res);

// let str = "diwaker"

// let res = Array.from(str)
// console.log('res: ', res);

let arr3= [100,200,300,400]
// let res = arr2.concat(arr , arr3)
// console.log('res: ', res);

//array destructure aka spread operators  --> ...arrayname
// let res = [...arr , ...arr2 , ...arr3]
// console.log('res: ', res);
let val = ['diwaker' , 'dwivedi',87654321]

//second type of array destructure
const[firstname , lastname , password] = val 
// console.log('password: ', password);
// console.log('firstname: ', firstname);




// console.log(arr.sort((a,b)=>a-b));
// arr.unshift(10)

// console.log('arr: ', arr);

// arr.shift()
// console.log('arr: ', arr);

// arr.indexOf(10)
// console.log('arr.indexOf(10): ', arr.indexOf(10));


// let arr=[9,10,2,3,4,5];
// let arr=[1,2,3,4]
// resarr = [1,20,30,4];

// for(let i =0 ; i<arr.length;i++){
//   console.log(arr[i]);
// }

// arr.forEach((res)=>{
//   console.log(res); 
// })


// let arr=[1,2,3,4]
// let val1 =arr.some((res)=>res>3) // f f f t ||or
// console.log('val: ', val1);


// let val2 =arr.every((res)=>res>0)
// console.log('val: ', val2); //f f f t &&and

// let val = arr.splice(1,0,100,200)
// console.log('remove: ', val);
// console.log('original array: ', arr);

