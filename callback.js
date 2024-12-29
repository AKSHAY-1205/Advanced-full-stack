
databaseSharing =() =>
{
    console.log("Data Stored Successfully");
}

function submitform(formMsg,dbs){
    setTimeout(()=>{
        dbs();
    console.log(formMsg);
    },1000)
    
}
submitform("Form submitted  successfully",databaseSharing);