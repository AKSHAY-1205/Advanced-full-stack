import Component2 from "./ContextComponents/Component2";
import React from "react";
export var ThemeProvider = React.createContext();

var ExamResults = () =>{
    return(
        <section style={{padding:5}}>
            <ThemeProvider.Provider value = {{gpa : "10.00", cgpa : "9.95"}}>
            <h1>This is an example of UseContext - Parent Component</h1>
            <h2>UseContext is used to avoid Memory Leakage by means of Props Drilling</h2>
            <Component2 />
            </ThemeProvider.Provider>
        </section>
    )
}
export default ExamResults;