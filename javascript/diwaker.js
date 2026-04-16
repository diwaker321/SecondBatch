console.log("externalJS");

// your javascipt code start from here
// content
// document.write(2+2)
// const  , let , var -> variable dec.
let name = document.getElementById("head");
let btn = document.getElementById("btn");
let resetbtn = document.getElementById("btn2");
console.log("name: ", name);

btn.addEventListener("click", () => {
  console.log("clicked");
  name.style.color = "red";
  name.innerText = "Diwaker";
  name.style.backgroundColor = "black";
});

resetbtn.addEventListener("click", () => {
  name.innerText = "Hello javascipt";
  name.style.color = "black";
});

let obj = {
    name:"diwaker",
    id:'007',
    innerobj:{
        name:"arjun",
        id:'008'
    }
}
console.log('obj: ', obj.innerobj.id);
// tdz
// variable and types of error 
// hoisting 
// blockscope and shadowing
// how code works 
// functions in js