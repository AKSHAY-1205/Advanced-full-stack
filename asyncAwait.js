async function func1() {
    setTimeout(()=>{
        console.log("HEllo");
    },4000)
    console.log(await "Hello");
}
func2 = async () => {
    setTimeout(()=>{
       console.log("kec");
    },6000)
    console.log(await "kec");
}
func1()
func2()

// func1().then((a)=>{
//     console.log("A");
// })
// console.log()

// async function func1() {
//     console.log( "Hello");
// }
// func2 = async () => {
//     console.log( "hi");
// }
// func1()
// func2()
