function funName(){
    console.log("A");
}
res = funName()


//arrow function
arrowFun =(studentsDept) => {
    console.log(studentsDept);
}
arrowFun(['AIML',"CSE","IT"]);


arrowfunction = (dept) => {
    return dept[1];
}
console.log(arrowfunction(['aiml,cse,it',"it","aiml"]));