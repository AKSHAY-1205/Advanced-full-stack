array = [10,101,10.1,"a","KEC",true];
console.log(array);


//1.for in loop
for (var a in array) {
    //console.log("Element present in the index",a,"is",array[a]);
}

//2.for of loop
for (var a of array) {
    console.log(a);
}

// foreach
// first parameter is element , next index
array=[10,20,30]
array.forEach((element,ind,i)=>{
console.log("element is",element,"and it's index is ",ind,i)
})


obj1={
    "firstname" : "ajay",
    "lastname" : "kumar"
}
// console.log(obj1);
// obj1.forEach((key,value)=>{
//     console.log(key,value);
// }
// )
for (const {key,value} of obj1) {
    console.log(key,value);
}
