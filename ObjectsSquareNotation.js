// function sum (){

// }

// let User = {
//     name: "Sindhu",
//     age: 28,
//     "likes code": true,
// }

// //console.log(User["likes code"]);

// for(let prop in User){
//     //console.log(prop);
//     //console.log(User[prop]);
// }
// let arr = ["Apple", "Banana", "Orange"];
// for(let fruit of arr){
//     console.log(fruit);

// }


// sum();
//pass by value
function object (x){
   x = x*x;
   return x;
}
var y = 20;
var result = object(y);
console.log(y);
console.log(result);

object();


// pass by reference
function animal(d){
 d.size="medium";
}
let dog = {
    name: "hutch",
    color: "gray",
}
console.log(dog);
animal(dog);
console.log(dog);

//arry lenght

let arry = ["Apple", "Banana", "Water Melon"];
arry[3] = "Graphes";
//console.log(arry);
console.log(arry.length);

let fruit = [];
fruit[99] = "Orange";

console.log(fruit.length);