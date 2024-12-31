import {useState} from "react";
const Gallery = () =>{
    var [counter, setCount] = useState(0);
    function Increment(){
        setCount(counter + 1)
    }
    function Decrement(){
        setCount(counter - 1)
    }
    var styling = {
        fontSize: "25px",
        color: "black",
        textAlign: "center",
    }
    return(
        <section>
            <h1>This is Gallery Page</h1>
            <h2 style={styling}>Learning State Concept</h2>
            <h3>The State of vairable counter is {counter}</h3>
            <button onClick={Increment}>Increment</button>
            <button onDoubleClick={Decrement}>Decrement</button>
            <button onClick={()=>setCount(0)}>Reset</button>
        </section>
       
    )
}
export default Gallery;