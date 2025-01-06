import { useRef, useState, useEffect } from "react";

var UseRef = () =>{
    var [text, setText] = useState("");
    var prevText = useRef("");

    useEffect(()=>{
        prevText.current = text;
    },[text])
    return(
        <section style={{padding:5}}>
            <h1>This is example of Use Ref</h1>
            <input type="text" placeholder="Text Here" value={text} onChange={(e) => setText(e.target.value)}/>
            <h2>The Current Render is {text}</h2>
            <h3>This is Previous Render {prevText.current}</h3>
        </section>
    )
}
export default UseRef;