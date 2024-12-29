//arrow function
arrowFun =(studentsDept) => {
    //console.log(studentsDept);
}
arrowFun(['AIML',"CSE","IT"]);


arrowfunction = (dept) => {
    return dept[1];
}
//console.log(arrowfunction(['aiml,cse,it',"it","aiml"]));


//destructing a operator
var marks=[90,100,11]
var[m1,m2,m3] = marks
// console.log(m1)
// console.log(m2)
// console.log(m3)


//ternary operator
//a=10
//out = (a%2==0) ? "even": "odd";
// console.log(out)


//spread operator
studentsList = ["Tom","Cruise","Holland","Vijay","Surya"];
newStudents=["Kanishk","Deepak","Deva"]
combinedStudents = [...studentsList,...newStudents]
//console.log(combinedStudents)
newstud=["jai",...newStudents]
//console.log(newstud)


//rest operator


//scope
var pi=3.14
var a = 5;
console.log("out",pi);
console.log("out",a);
{
    
a = 50;
let b=10;
console.log("in",pi);
console.log("in",b);
}
console.log("out",a);

// hoisting
// console.log(a); //reference error
// const a = 10;
// console.log(a);


// console.log(a); //undefined
// var a = 10;
// console.log(a);


// console.log(a); //reference error
// let a = 10;
// console.log(a);
 

