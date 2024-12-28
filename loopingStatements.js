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