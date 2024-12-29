//location finder
function locationFinder(){
    train =76
    return new Promise((resolve,reject) => {
        if(train == 7){
            resolve("Train has arrived")
        }
        else{
            reject("Train hasn't arrived")
        }
    })
}

locationFinder().then((resolvedMsg)=>{
    console.log(resolvedMsg);
}).catch((rejectedMsg)=>{
    console.log(rejectedMsg);
})


//console.log(locationFinder())