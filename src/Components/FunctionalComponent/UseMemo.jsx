import { useState, useMemo } from "react"

var slowFunction = (number) =>{
    for (let i = 0;i < 1000000000;i++) {}
    return number * 2
}
var UseMemo = () =>{
    var [num, setNum] = useState(0);
    var [theme, setTheme] = useState(true);
    var darkLight = {
        backgroundColor: theme ? "black" : "white",
        color: theme ? "white" : "black",
    }
    var doublingANumber = useMemo(() =>{
        return slowFunction(num)
    },[num])
    return(
        <section style={{padding:5}}>
            <h1>This is UseMemo Example</h1>
            <input type="number" value={num} onChange={(e) => setNum(e.target.value)}/>
            <button onClick={()=>setTheme(theme = !theme)}>Toggle Theme</button>
            <div style={{padding:5}} />
            <div style={darkLight}>{doublingANumber}</div>
        </section>
    )
}
export default UseMemo;
