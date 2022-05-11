// function x(){
//   return this;
// }

// console.log(x()); // window object

var a = 1;

var nums = {
    a:2
}

function test(){
    return this.a;
}

console.log(test()); //1
console.log(test.call(nums)); //2
console.log(test.apply(nums)); //2


function tests(b,c){
    return this.a+b+c;
}
console.log(tests(20,10)); //31
console.log(tests.call(nums,20,30)); //52
console.log(tests.apply(nums,[20,30])); //52

//Check the Performance time
console.time("Time");
for(i=0; i<10; i++){
    console.log(i);
}
console.timeEnd("Time");


var startTime = performance.now();
for(i=0; i<10; i++){
    console.log(i);
}
var endTime = performance.now();

console.log(endTime-startTime);