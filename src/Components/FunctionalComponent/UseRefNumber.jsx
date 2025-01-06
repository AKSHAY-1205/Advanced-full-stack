import { useRef,useEffect,useState } from "react";

const UseRefNum = () =>{
    var [count,setCount] = useState(0);
    var prevCount = useRef();
    function increment() {
        setCount(count + 1);
      }
      function decrement(){
        setCount(count - 1);
      }
      function reset(){
        setCount(count = 0);
      }
    useEffect(()=>{
        prevCount.current = count;
    },[count])
    return(
        <div style={{padding:5}}>
            <h1>UseRefNumber Task</h1>
            <button type="button" onClick={(increment)}>Increment</button>
            <button type="button" onClick={(decrement)}>Decrement</button>
            <button type="button" onClick={(reset)}>Reset</button>
            <h3>The current render of Count is {count}</h3>
            <h3>The previous render of Count is {prevCount.current}</h3>
        </div>
    )
}

export default UseRefNum;