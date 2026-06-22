                                       //objects in javascript

// let person = {
//     firstname:"diwaker",
//     lastname:"dwivedi",
//     age:"10",
//     address:"ballupur",
//     "institute name" :"acadmiac",
//     greet: function(){
//         console.log('hello');
//     }
// }
// person.greet()
//how to access the values
// console.log(person.firstname); 


// console.log(person["institute name"]);

//how to add elements 
// person.email="diwaker@gmail.com"
// console.log('person: ', person);
// person.greet = function(){
//     console.log("good morning");
// }
// console.log(person.greet());

// person.firstname = 'xyz'
// console.log('person: ', person);



// console.log(person);
// delete person.address;
// console.log('person.address: ', person.address.pincode);
// console.log(person);


// const res = info
// const res1= {...info} // one level copy
// const info ={
//     address:{ // object nesting
//         state:{
//         name:'UK',
//         city:'dehradun',
//         pincode:{
//             value:'248001'
//         }
//         }
//     }
// }
// // console.log(Object.values(info));
//optional chaining
// console.log(info?.address?.state?.pincode?.value);





//how to update elements
// person.email = "dwivedi@gmail.com"
// console.log('person: ', person);

//how to delete 

// delete person.email
// console.log('person: ', person);

//object can contain function inside it 

// const newobj = {
//     getname: function(val){
//         console.log(val);
//     }
// }

// newobj.getname("sailash")


// let person = {
//     firstname:"diwaker",
//     lastname:"dwivedi",
//     age:"10",
//     address:"ballupur",
//     "institute name" :"acadmiac",
//     greet: function(){
//         console.log('hello');   
//     }
// }

//for in / for of- array 
// for(let key in person){
//     // console.log(key);
//     // person.key
//     console.log('person.key: ', person[key]);
// }








//common obeject methods

// console.log( Object.keys(person));
// console.log( Object.values(person));
// console.log( Object.entries(person));


// looping in object 

let person = {
    firstname:"diwaker",
    lastname:"dwivedi",
    age:"10",
    address:"ballupur",
    "institute name" :"acadmiac",
    greet: function(){
        console.log('hello');   
    }
}
// person.firstname
// person[firstname]


// for(let key in person){
//     // console.log(key);
//     console.log(key , person[key]); // value
//     // console.log(person[key]);
// }

//spread operator in object [...arr]

// const person1 = {
//     name1:'diwaker',
//     age:10,
// }
// const person2 = {
//     name2:'anurag',
//     age2:'2-'
// }

// const res = {
//     ...person1 , ...person2
// }
// console.log('res: ', res);

//object destructureing 

// const facultyinfo = {
//     firstname:"diwaker",
//     faculty:'web tech',
// }

// facultyinfo.firstname,
// facultyinfo.faculty

// const {firstname:name , faculty : coursename , age=10 } = facultyinfo // object destructure
// console.log('name: ', name);
// console.log('coursename: ', coursename);
// console.log('firstname: ', firstname);
// console.log(age);

// function userinfo(obj){
//     console.log('obj: ', obj);
// }

// function userinfo(obj){
//     const {firstname , age} = obj
//     console.log('age: ', age);
//     console.log('firstname: ', firstname);
//     // console.log('obj: ', obj);
// }

// function userinfo({ firstname , age}){
//     // const { firstname , age} = obj.meals;
//     console.log('firstname: ', firstname);
//     // console.log('obj: ', obj);
//     // console.log('obj: ', obj);
// }

// const user = {
//     meals:{
//         firstname:"diwaker",
//         age:10
//     }
// }

// userinfo(user.meals)


// spread operator  ...






//object destructure

// const {firstname , faculty} = facultyinfo
// console.log('firstname: ', firstname);


// const {firstname:name , faculty:role , age=10} = facultyinfo
// console.log('age: ', age);
// console.log('firstname: ', name);
// console.log('role: ', role);















// const name = facultyinfo.firstname
// const role = facultyinfo.faculty



// or you can do like this 

// const { firstname , faculty} = facultyinfo



// or 

// const { firstname:name , faculty:role} = facultyinfo



// giving default value in object 

// const {firstname:name , faculty:role , age=10} = facultyinfo



//destructure in function parameter

// function printUser(user) {
//     console.log(user.name);
//     console.log(user.age);
// }

// function printUser({name , age}) {
//     console.log('age: ', age);
//     console.log('name: ', name);
// }


//object destructure ... 


// const user1={
//     name:'diwaker',
//     age:10
// }

// const user2 = {
//     name2:'dwivedi',
//     age2:100
// }

// const res = {...user1 , ...user2}
// console.log('res: ', res);

// const val = user1
// const val = {...user1} // copy of data object

// console.log('val: ', val); // copy of data object

// function pass by ref 

// const user1={ //level 3 
//     name:'diwaker',
//     age:10,
//     address:{
//         city:'dehradun',
//         pincode : {
//             val:248001
//         }
//     }
// }

// function show(obj){
//     const val = {...obj} // shallow copy
//     val.name = 'dwivedi'
// }

// function show(obj){
//     const val = {...obj} // shallow copy
//     // const val = structuredClone(obj) // deep copy
//     val.name = 'dwivedi'
//     val.address.city='delhi'
//     console.log('val: ', val);
// }

// show(user1)
// console.log('user1: ', user1);











// const result = {...user1 , ...user2} // spread operator
// console.log('result: ', result);

// const res = {...user1}
// console.log('res: ', res);

// //function pass by reference
// function change(obj){
//     let res = {...obj} // shallow copy

//     res.name = "dwivedi"
//     console.log('res: ', res);

// }

// const user1={
//     name:'diwaker',
//     age:10
// }
// // change(user1)
// // console.log('user1: ', user1);


// function change(obj){
//     let res = {...obj}
//     res.address.city ='Ballupur'
//     console.log('res: ', res);

// }

// const user1={
//     name:'diwaker',
//     age:10,
//     address:{ // deep copy concept
//         city:'dehradun'
//     }
// }
// change(user1)
// console.log('user1: ', user1);



// printUser(user)








//object spread operator

// let obj1 = {
//     firstname:"diwaker",
//     faculty:'web tech'

// }
// let obj2={
//     age:"10",
//     address:"ballupur"
// }

// let result = {...obj1 , ...obj2}
// console.log('result: ', result);


//pass by reference issue 

// function show (person){
//     const res = person;
//     res.firstname="rahul"
// }

//  show(person)
//  console.log('person: ', person);



//or you can do like this 
// function show (person){
//     const res = {...person}; // this concept is known as shallow copy
//     res.firstname="rahul"
//     console.log('res: ', res);
// }

//  show(person)
//  console.log('person: ', person); 




 //deep copy concept
//  const person = {
//     name: "Diwaker",
//     address: {
//         city: "Dehradun"
//     }
// };

// const copy = { ...person };

// copy.name = "Rahul";

// console.log(person.name); // Diwaker

// copy.address.city = "Delhi";

// console.log(person.address.city); // delhi


// const copy = structuredClone(person); // this method is used for deep copy

// copy.address.city = "Delhi";

// console.log(copy.address.city);   // Delhi
// console.log(person.address.city); // Dehradun



//hasOwnProperty

// console.log(person.hasOwnProperty("name"));


//homework
// Object.freeze(person )
// Object.seal(person)
